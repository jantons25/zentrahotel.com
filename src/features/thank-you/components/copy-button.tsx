"use client";

// Copia un número de cuenta al portapapeles y confirma la acción durante unos segundos.
import * as React from "react";
import { useTranslations } from "next-intl";
import { Check, Copy } from "lucide-react";

const COPIED_FEEDBACK_MS = 2000;

// Los navegadores internos de redes sociales (de donde llegan muchos anuncios) suelen
// bloquear `navigator.clipboard`: ahí se recurre a copiar desde un campo temporal.
async function writeToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    return copied;
  }
}

export function CopyButton({ value, label }: { value: string; label: string }) {
  const t = useTranslations("thankYou.payment");
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  React.useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    // Si tampoco se puede, el número sigue visible y seleccionable.
    if (!(await writeToClipboard(value))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), COPIED_FEEDBACK_MS);
  };

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={t("copyAria", { label })}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-secondary/20 px-3.5 py-2 text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase transition-colors duration-(--duration-normal) hover:border-secondary hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transition-none"
    >
      <Icon className="size-3.5" strokeWidth={2} aria-hidden="true" />
      <span aria-live="polite">{copied ? t("copied") : t("copy")}</span>
    </button>
  );
}
