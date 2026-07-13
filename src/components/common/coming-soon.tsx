// Página provisional para rutas en construcción, con retorno al inicio.
import Link from "next/link";

import { Container } from "@/components/common/container";

interface ComingSoonProps {
  title: string;
}

export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-secondary md:text-4xl">{title}</h1>
      <p className="text-muted-foreground">
        Estamos trabajando en esta sección. Muy pronto estará disponible.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-colors duration-(--duration-fast) hover:bg-primary/85"
      >
        Volver al inicio
      </Link>
    </Container>
  );
}
