// Layout raíz por locale: tipografía global, metadata SEO y estructura común (header, footer, flotantes).
import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { BookingFloatingButton } from "@/components/common/booking-floating-button";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FlashOffersBanner } from "@/features/flash-offers/components/flash-offers-banner";
import { WelcomePromo } from "@/features/promo-modal/components/welcome-promo";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";

import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/images/hero-collage.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${fontSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* Web components del Booking Engine de Cloudbeds (Immersive Experience 2.0).
            Debe cargarse antes de que el navegador analice las etiquetas <cb-*>. */}
        <Script
          src={siteConfig.cloudbeds.scriptUrl}
          strategy="beforeInteractive"
        />
        <NextIntlClientProvider>
          <Header banner={<FlashOffersBanner />} />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <BookingFloatingButton />
          <WelcomePromo />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
