"use client";

// Menú único del sitio: un solo botón desplegable que, al abrirse, ocupa toda la
// pantalla (patrón editorial tipo Aranwa). Reemplaza a la navegación repartida en
// el header y al panel lateral móvil: el mismo menú en todos los tamaños.
import * as React from "react";
import { Dialog } from "@base-ui/react/dialog";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/common/social-icons";
import { LocaleSwitch } from "@/components/layout/locale-switch";
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

const addresses = [
  siteConfig.contact.addressBalta,
  siteConfig.contact.addressPlaza,
  siteConfig.contact.addressSanJose,
];

export function FullscreenMenu() {
  const t = useTranslations("nav");
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  // Cada entrada de primer nivel: enlace simple o grupo con submenús (p. ej. "Sedes").
  const renderNode = (node: NavNode, index: number) => {
    const order = (index + 1).toString().padStart(2, "0");

    if (node.children?.length) {
      return (
        <li key={node.key} className="border-b border-white/10">
          <div className="flex flex-col gap-1 py-2.5 md:py-3.5">
            <p className="flex items-baseline gap-4">
              <span
                aria-hidden="true"
                className="font-mono text-[0.62rem] tracking-[0.24em] text-primary"
              >
                {order}
              </span>
              <span className="font-[family-name:var(--font-menu-display)] text-[clamp(1.6rem,4.2vh,3rem)] leading-none font-light text-white">
                {t(node.key)}
              </span>
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1.5 pl-10 md:gap-x-10">
              {node.children.map((child) => (
                <li key={child.key}>
                  <Link
                    href={child.href ?? "/"}
                    onClick={close}
                    className="group inline-flex items-center gap-2 text-sm font-medium tracking-[0.06em] text-white/65 transition-colors duration-(--duration-fast) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-5 bg-white/25 transition-[width,background-color] duration-(--duration-normal) group-hover:w-8 group-hover:bg-primary motion-reduce:transition-none"
                    />
                    {t(child.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      );
    }

    return (
      <li key={node.key} className="border-b border-white/10">
        <Link
          href={node.href ?? "/"}
          onClick={close}
          className="group flex items-baseline gap-4 py-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:py-3.5"
        >
          <span
            aria-hidden="true"
            className="font-mono text-[0.62rem] tracking-[0.24em] text-primary"
          >
            {order}
          </span>
          <span className="font-[family-name:var(--font-menu-display)] text-[clamp(1.6rem,4.2vh,3rem)] leading-none font-light text-white transition-colors duration-(--duration-fast) group-hover:text-primary motion-reduce:transition-none">
            {t(node.key)}
          </span>
          <ArrowUpRight
            className="size-4 -translate-x-1 text-transparent transition-all duration-(--duration-normal) group-hover:translate-x-0 group-hover:text-primary motion-reduce:transition-none md:size-5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </Link>
      </li>
    );
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        aria-label={t("openMenu")}
        className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:px-5 md:py-2.5 md:text-[0.72rem]"
      >
        <Menu className="size-4" strokeWidth={2} aria-hidden="true" />
        <span className="hidden sm:inline">{t("menu")}</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-100 bg-black/60 transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup
          className={cn(
            fontMenuDisplay.variable,
            "fixed inset-0 z-100 flex flex-col overflow-hidden overscroll-contain bg-secondary text-white",
            "transition-opacity duration-300 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0",
          )}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-primary/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 -left-32 size-[30rem] rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative mx-auto flex h-full w-full max-w-7xl min-h-0 flex-col px-4 sm:px-6 lg:px-8">
            <div className="flex h-[var(--h-navbar)] shrink-0 items-center justify-between gap-4">
              <Dialog.Title className="text-[0.68rem] font-semibold tracking-[0.28em] text-white/70 uppercase">
                {siteConfig.name}
              </Dialog.Title>
              <div className="flex items-center gap-4 md:gap-6">
                <LocaleSwitch className="text-white" />
                <Dialog.Close
                  aria-label={t("closeMenu")}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:size-11"
                >
                  <X className="size-5" strokeWidth={2} aria-hidden="true" />
                </Dialog.Close>
              </div>
            </div>

            <div className="grid min-h-0 flex-1 content-center gap-6 py-4 lg:grid-cols-12 lg:gap-12 lg:py-6">
              <nav aria-label={t("primary")} className="min-h-0 lg:col-span-8">
                <ul className="border-t border-white/10">
                  {visibleNavTree.map(renderNode)}
                </ul>

                <a
                  {...bookingLinkProps}
                  onClick={close}
                  className="group mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:text-sm"
                >
                  {t("reservarAhora")}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </nav>

              <aside className="hidden min-h-0 flex-col gap-6 lg:flex lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-10">
                <div>
                  <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-white/50 uppercase">
                    {t("contactHeading")}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>
                      <a
                        href={`tel:${siteConfig.contact.phoneDisplay.replaceAll(" ", "")}`}
                        className="inline-flex items-center gap-2.5 transition-colors duration-(--duration-fast) hover:text-primary motion-reduce:transition-none"
                      >
                        <Phone
                          className="size-4 shrink-0 text-primary"
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
                          className="size-4 shrink-0 text-primary"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        {siteConfig.contact.email}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-white/50 uppercase">
                    {t("sedes")}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-white/75">
                    {addresses.map((address) => (
                      <li
                        key={address}
                        className="inline-flex items-start gap-2.5"
                      >
                        <MapPin
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        {address}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex items-center gap-3">
                  {socialLinks.map(({ platform, href, icon: Icon }) => (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={platform}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground motion-reduce:transition-none"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
