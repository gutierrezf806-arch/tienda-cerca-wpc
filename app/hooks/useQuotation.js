"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "tienda-cotizacion";
const QUOTATION_UPDATED_EVENT = "quotation-updated";

function readQuotation() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeQuotation(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — ignore
  }
  window.dispatchEvent(new Event(QUOTATION_UPDATED_EVENT));
}

export function useQuotation() {
  const [quotationItems, setQuotationItems] = useState([]);

  useEffect(() => {
    setQuotationItems(readQuotation());

    const handleQuotationUpdated = () => setQuotationItems(readQuotation());
    window.addEventListener(QUOTATION_UPDATED_EVENT, handleQuotationUpdated);
    return () =>
      window.removeEventListener(QUOTATION_UPDATED_EVENT, handleQuotationUpdated);
  }, []);

  const persist = useCallback((items) => {
    writeQuotation(items);
    setQuotationItems(items);
  }, []);

  const addItem = useCallback((product) => {
    const { id, name, price, size, color, quantity = 1 } = product;

    const current = readQuotation();
    const existingIndex = current.findIndex(
      (item) => item.id === id && item.size === size && item.color === color
    );

    const next =
      existingIndex !== -1
        ? current.map((item, index) =>
            index === existingIndex
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...current, { id, name, price, quantity, size, color }];

    writeQuotation(next);
    setQuotationItems(next);
  }, []);

  const removeItem = useCallback((productId, size, color) => {
    const next = readQuotation().filter(
      (item) => !(item.id === productId && item.size === size && item.color === color)
    );
    writeQuotation(next);
    setQuotationItems(next);
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    const next = readQuotation().map((item) =>
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    writeQuotation(next);
    setQuotationItems(next);
  }, []);

  const clearQuotation = useCallback(() => {
    persist([]);
  }, [persist]);

  const getQuotationCount = useCallback(
    () => quotationItems.reduce((count, item) => count + item.quantity, 0),
    [quotationItems]
  );

  return {
    quotationItems,
    addItem,
    removeItem,
    updateQuantity,
    getQuotationCount,
    clearQuotation,
  };
}
