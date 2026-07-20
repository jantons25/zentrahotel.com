"use client";

// Encabezado sticky: transparente sobre el Hero, cambia a navy con blur al hacer scroll.
import * as React from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

import { BrandLogo } from "@/components/common/brand-logo";
import { LanguageSelector } from "@/components/layout/language-selector";
import { MobileNav } from "@/components/layout/mobile-nav";
import { mainNavLeft, mainNavRight } from "@/config/site";
import { Link, usePathname } from "@/i18n/navigation";
import { bookingLinkProps } from "@/lib/booking";
import type { NavItem } from "@/types";

function NavLinks({ items }: { items: NavItem[] }) {
  const t = useTranslations("nav");
  return (
    <>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative text-[0.72rem] font-semibold tracking-[0.2em] text-white/80 uppercase transition-colors duration-(--duration-fast) hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
        >
          {t(item.key)}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-2 left-0 h-px w-full origin-right scale-x-0 bg-primary transition-transform duration-(--duration-normal) group-hover:origin-left group-hover:scale-x-100 motion-reduce:transition-none"
          />
        </Link>
      ))}
    </>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  // En la landing corporativa el CTA "Reservar" cede su lugar al asesor B2B.
  const isCorporate = pathname === "/empresa";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className={`sticky top-0 z-(--z-header) transition-[background-color,backdrop-filter,box-shadow] duration-(--duration-normal) motion-reduce:transition-none ${
        scrolled
          ? "bg-primary/85 shadow-header backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-20 lg:px-8">
        <nav
          aria-label={t("primary")}
          className="hidden flex-1 items-center gap-8 lg:flex"
        >
          <NavLinks items={mainNavLeft} />
        </nav>

        <BrandLogo
          priority
          className="[&_img]:brightness-0 [&_img]:invert lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        />

        <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
          <nav aria-label={t("secondary")} className="flex items-center gap-8">
            <NavLinks items={mainNavRight} />
          </nav>
          <div className="[&_button]:text-white/80 [&_button]:hover:text-white [&_svg]:text-white/70">
            <LanguageSelector />
          </div>
          {!isCorporate && (
            <a
              {...bookingLinkProps}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {t("reservar")}
              <ArrowUpRight
                className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          )}
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
