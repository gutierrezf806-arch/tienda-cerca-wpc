import fs from "fs";
import path from "path";
import { google } from "googleapis";

const SPREADSHEET_ID =
  process.env.GOOGLE_SHEET_ID || "14oUqI1o_FJPennbj4wf5RuBaaEQBkUCNUhe2ixfpyXc";
const RANGE = "Hoja 1!A1:M";
const CREDENTIALS_PATH = path.join(
  process.cwd(),
  "config",
  "tienda-streetwear-abb357bf7896.json"
);

export async function GET(request) {
  try {
    const credentialsEnv = process.env.GOOGLE_CREDENTIALS_JSON?.trim();
    const credentials = credentialsEnv
      ? JSON.parse(credentialsEnv)
      : JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values || [];

    if (rows.length < 1) {
      return Response.json({ success: true, products: [] });
    }

    const [headers, ...dataRows] = rows;

    const products = dataRows.map((row) => {
      const raw = {};
      headers.forEach((header, index) => {
        raw[header] = row[index] ?? "";
      });

      return {
        id: raw.id,
        slug: raw.id,
        name: raw.nombre,
        description: raw.description,
        price: raw.precio,
        category: raw["categoría"],
        material: raw.material,
        image: raw.imagen,
        stock: raw.stock,
        rating: raw.rating,
        destacado: raw.destacado,
      };
    });

    return Response.json({ success: true, products });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
