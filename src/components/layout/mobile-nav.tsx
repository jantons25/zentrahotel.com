"use client";

// Menú de navegación móvil desplegable en panel lateral (Sheet) con estilo editorial oscuro.
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, siteConfig } from "@/config/site";
import { bookingLinkProps } from "@/lib/booking";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            className="text-white hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Abrir menú de navegación"
          />
        }
      >
        <Menu className="size-6" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-80 border-l border-white/10 bg-secondary text-white"
      >
        <SheetHeader>
          <SheetTitle className="text-left text-white/80 text-[0.68rem] font-semibold tracking-[0.28em] uppercase">
            {siteConfig.name}
          </SheetTitle>
        </SheetHeader>
        <nav
          aria-label="Navegación móvil"
          className="mt-4 flex flex-col gap-1 px-4"
        >
          {mainNav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              <span>{item.label}</span>
              <span
                className="text-[0.62rem] font-mono tracking-[0.2em] text-white/40"
                aria-hidden="true"
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </Link>
          ))}
          <a
            {...bookingLinkProps}
            className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Reservar ahora
            <ArrowUpRight
              className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
          <p className="mt-6 border-t border-white/10 pt-4 text-[0.68rem] leading-relaxed text-white/55">
            {siteConfig.contact.address} · {siteConfig.contact.phoneDisplay}
          </p>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
