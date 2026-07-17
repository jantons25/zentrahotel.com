// Página "Galería" (contenido provisional; se desarrollará en una etapa posterior).
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ComingSoon } from "@/components/common/coming-soon";

export const metadata: Metadata = { title: "Galería" };

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ComingSoon title="Galería" />;
}
