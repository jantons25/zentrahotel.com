"use client";

// Compartir artículo: WhatsApp, Facebook, X y copiar enlace (con confirmación inline).
import { useState } from "react";
import { Check, Link2, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface ArticleShareProps {
  url: string;
  title: string;
  labels: {
    share: string;
    whatsapp: string;
    facebook: string;
    x: string;
    copy: string;
    copied: string;
  };
  variant?: "row" | "column";
  className?: string;
}

// Iconos de marca (Facebook y X) como SVG inline: lucide ya no incluye logos.
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13V9.9H7.5V13h2.77v8h3.23Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.53 3h3.02l-6.6 7.55L21.75 21h-6.05l-4.74-6.2L5.5 21H2.47l7.05-8.06L2.25 3h6.2l4.28 5.66L17.53 3Zm-1.06 16.2h1.67L7.6 4.72H5.8l10.67 14.48Z" />
    </svg>
  );
}

export function ArticleShare({
  url,
  title,
  labels,
  variant = "row",
  className,
}: ArticleShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      key: "whatsapp",
      label: labels.whatsapp,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: MessageCircle,
    },
    {
      key: "facebook",
      label: labels.facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FacebookIcon,
    },
    {
      key: "x",
      label: labels.x,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: XIcon,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const itemClass =
    "inline-flex size-9 items-center justify-center rounded-full border border-secondary/15 bg-card text-secondary transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:transition-none";

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        variant === "column" && "flex-col items-start",
        className,
      )}
    >
      <span className="text-[0.62rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
        {labels.share}
      </span>
      <div className="flex items-center gap-2">
        {links.map(({ key, label, href, icon: Icon }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={itemClass}
          >
            <Icon className="size-4" aria-hidden="true" />
          </a>
        ))}
        <button
          type="button"
          onClick={copyLink}
          aria-label={copied ? labels.copied : labels.copy}
          title={copied ? labels.copied : labels.copy}
          className={cn(itemClass, copied && "border-primary text-primary")}
        >
          {copied ? (
            <Check className="size-4" aria-hidden="true" />
          ) : (
            <Link2 className="size-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
