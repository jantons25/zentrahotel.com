// Layout raíz: tipografía global, metadata SEO y estructura común (header, footer, flotantes).
import type { Metadata } from "next";

import { BookingFloatingButton } from "@/components/common/booking-floating-button";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${fontSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BookingFloatingButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
