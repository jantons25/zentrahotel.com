// Página "Galería" (contenido provisional; se desarrollará en una etapa posterior).
import type { Metadata } from "next";

import { ComingSoon } from "@/components/common/coming-soon";

export const metadata: Metadata = { title: "Galería" };

export default function Page() {
  return <ComingSoon title="Galería" />;
}
