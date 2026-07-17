// Formato editorial de vigencia: "hasta 31 · AGO". Espera "YYYY-MM-DD".
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

export function formatValidUntil(isoDate: string): string {
  const [, month, day] = isoDate.split("-").map(Number);
  return `hasta ${day.toString().padStart(2, "0")} · ${monthAbbr[month - 1]}`;
}
