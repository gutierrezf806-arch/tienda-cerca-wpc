"use client";

const DEFAULT_MESSAGE = "Hola! Quiero más información sobre el panel de cerco WPC";

export default function WhatsAppButton({ message = DEFAULT_MESSAGE, className, children }) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  function handleClick() {
    if (!number) {
      alert(
        "Falta configurar el número de WhatsApp de la empresa (NEXT_PUBLIC_WHATSAPP_NUMBER)."
      );
      return;
    }

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
