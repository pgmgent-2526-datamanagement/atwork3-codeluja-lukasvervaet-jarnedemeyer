import { readSheet } from "@/lib/googleSheets";

export async function GET() {
  const data = await readSheet("Gent_KPI", "A1:Z500");

  return Response.json({ rows: data });
}
