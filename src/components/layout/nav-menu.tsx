"use client";

// Menú único del sitio: un botón que despliega un panel flotante justo debajo de
// la barra de navegación (no ocupa la pantalla completa). Aparece y desaparece con
// una transición suave de opacidad + desplazamiento, sobre el navy de marca.
import * as React from "react";
import { Popover } from "@base-ui/react/popover";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/common/social-icons";
import { fontMenuDisplay } from "@/components/layout/menu-fonts";
import { siteConfig, visibleNavTree } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { bookingLinkProps } from "@/lib/booking";
import { cn } from "@/lib/utils";
import type { NavNode } from "@/types";

const socialLinks = [
  {
    platform: "Instagram",
    href: siteConfig.social.instagram,
    icon: InstagramIcon,
  },
  {
    platform: "Facebook",
    href: siteConfig.social.facebook,
    icon: FacebookIcon,
  },
  { platform: "TikTok", href: siteConfig.social.tiktok, icon: TikTokIcon },
];

export function NavMenu() {
  const t = useTranslations("nav");
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  // Cada entrada de primer nivel: enlace simple o grupo con submenús (p. ej. "Sedes").
  const renderNode = (node: NavNode, index: number) => {
    const order = (index + 1).toString().padStart(2, "0");

    if (node.children?.length) {
      return (
        <li key={node.key} className="border-b border-white/10 py-2.5">
          <p className="flex items-baseline gap-3">
            <span
              aria-hidden="true"
              className="font-mono text-[0.6rem] tracking-[0.24em] text-primary"
            >
              {order}
            </span>
            <span className="font-[family-name:var(--font-menu-display)] text-xl leading-none font-light text-white">
              {t(node.key)}
            </span>
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 pl-8">
            {node.children.map((child) => (
              <li key={child.key}>
                <Link
                  href={child.href ?? "/"}
                  onClick={close}
                  className="group inline-flex items-center gap-2 text-sm font-medium tracking-[0.04em] text-white/65 transition-colors duration-(--duration-fast) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-4 bg-white/25 transition-[width,background-color] duration-(--duration-normal) group-hover:w-6 group-hover:bg-primary motion-reduce:transition-none"
                  />
                  {t(child.key)}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    return (
      <li key={node.key} className="border-b border-white/10">
        <Link
          href={node.href ?? "/"}
          onClick={close}
          className="group flex items-baseline gap-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span
            aria-hidden="true"
            className="font-mono text-[0.6rem] tracking-[0.24em] text-primary"
          >
            {order}
          </span>
          <span className="font-[family-name:var(--font-menu-display)] text-xl leading-none font-light text-white transition-colors duration-(--duration-fast) group-hover:text-primary motion-reduce:transition-none">
            {t(node.key)}
          </span>
          <ArrowUpRight
            className="size-4 -translate-x-1 text-transparent transition-all duration-(--duration-normal) group-hover:translate-x-0 group-hover:text-primary motion-reduce:transition-none"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </Link>
      </li>
    );
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        aria-label={t("openMenu")}
        className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary data-popup-open:border-primary data-popup-open:bg-primary data-popup-open:text-primary-foreground motion-reduce:transition-none md:px-5 md:py-2.5 md:text-[0.72rem]"
      >
        {open ? (
          <X className="size-4" strokeWidth={2} aria-hidden="true" />
        ) : (
          <Menu className="size-4" strokeWidth={2} aria-hidden="true" />
        )}
        <span className="hidden sm:inline">{t("menu")}</span>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner
          side="bottom"
          align="end"
          sideOffset={14}
          collisionPadding={16}
          // El disparador vive en un header sticky: posicionamiento fijo para que
          // el panel lo siga sin saltos al hacer scroll.
          positionMethod="fixed"
          className="z-100"
        >
          <Popover.Popup
            className={cn(
              fontMenuDisplay.variable,
              "w-[min(24rem,calc(100vw-2rem))] origin-top overflow-hidden rounded-[1.5rem] border border-white/12 bg-secondary/95 text-white shadow-card-hover backdrop-blur-xl",
              // Aparición y desaparición suaves: opacidad + leve desplazamiento.
              "transition-[opacity,transform] duration-(--duration-normal) ease-out",
              "data-starting-style:-translate-y-2 data-starting-style:opacity-0 data-starting-style:scale-[0.98]",
              "data-ending-style:-translate-y-2 data-ending-style:opacity-0 data-ending-style:scale-[0.98]",
              "motion-reduce:transition-none",
            )}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-16 size-56 rounded-full bg-primary/25 blur-3xl"
            />

            <div className="relative px-6 pt-5 pb-6">
              <Popover.Title className="text-[0.6rem] font-semibold tracking-[0.28em] text-white/55 uppercase">
                {siteConfig.name}
              </Popover.Title>

              <nav aria-label={t("primary")} className="mt-4">
                <ul className="border-t border-white/10">
                  {visibleNavTree.map(renderNode)}
                </ul>

                <a
                  {...bookingLinkProps}
                  onClick={close}
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3 text-[0.7rem] font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  {t("reservarAhora")}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </nav>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[0.58rem] font-semibold tracking-[0.28em] text-white/45 uppercase">
                  {t("contactHeading")}
                </p>
                <ul className="mt-2.5 space-y-1.5 text-[0.82rem] text-white/75">
                  <li>
                    <a
                      href={`tel:${siteConfig.contact.phoneDisplay.replaceAll(" ", "")}`}
                      className="inline-flex items-center gap-2.5 transition-colors duration-(--duration-fast) hover:text-primary motion-reduce:transition-none"
                    >
                      <Phone
                        className="size-3.5 shrink-0 text-primary"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="inline-flex items-center gap-2.5 transition-colors duration-(--duration-fast) hover:text-primary motion-reduce:transition-none"
                    >
                      <Mail
                        className="size-3.5 shrink-0 text-primary"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      {siteConfig.contact.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-4 flex items-center gap-2.5">
                  {socialLinks.map(({ platform, href, icon: Icon }) => (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={platform}
                      className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground motion-reduce:transition-none"
                    >
                      <Icon className="size-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
