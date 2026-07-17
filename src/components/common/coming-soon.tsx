// Página provisional para rutas en construcción, con retorno al inicio.
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/common/container";
import { Link } from "@/i18n/navigation";

interface ComingSoonProps {
  title: string;
}

export async function ComingSoon({ title }: ComingSoonProps) {
  const t = await getTranslations("common.comingSoon");
  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-secondary md:text-4xl">{title}</h1>
      <p className="text-muted-foreground">{t("body")}</p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-colors duration-(--duration-fast) hover:bg-primary/85"
      >
        {t("backHome")}
      </Link>
    </Container>
  );
}
