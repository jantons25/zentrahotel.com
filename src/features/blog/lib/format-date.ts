// Formato editorial estilo revista: "15 · JUL — 2026". Espera "YYYY-MM-DD".
const monthAbbr = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];

export function formatEditorialDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return `${day.toString().padStart(2, "0")} · ${monthAbbr[month - 1]} — ${year}`;
}

// Fecha ISO para <time dateTime>.
export function toIsoDate(isoDate: string): string {
  return isoDate;
}
