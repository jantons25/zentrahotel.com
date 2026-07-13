// Logotipo oficial del hotel; conserva la tipografía original al ser imagen de marca.
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — ir al inicio`}
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/images/logo.png"
        alt={`Logotipo de ${siteConfig.name}`}
        width={640}
        height={276}
        priority={priority}
        className="h-12 w-auto md:h-14"
      />
    </Link>
  );
}
