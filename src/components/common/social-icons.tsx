// Iconos SVG de redes sociales (Lucide ya no incluye iconos de marcas).
import { cn } from "@/lib/utils";

type IconProps = React.SVGProps<SVGSVGElement>;

// Propiedades comunes para mantener el estilo visual de los iconos Lucide.
function baseProps(className?: string): IconProps {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
    className: cn("size-4", className),
  };
}

export function FacebookIcon({ className, ...props }: IconProps) {
  return (
    <svg {...baseProps(className)} {...props}>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6h1.3V4.8c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5Z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg {...baseProps(className)} {...props}>
      <path d="M12 4.3c2.5 0 2.8 0 3.8.1.9 0 1.4.2 1.8.3.4.2.7.4 1 .7.3.3.5.6.7 1 .1.4.3.9.3 1.8.1 1 .1 1.3.1 3.8s0 2.8-.1 3.8c0 .9-.2 1.4-.3 1.8-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.4.1-.9.3-1.8.3-1 .1-1.3.1-3.8.1s-2.8 0-3.8-.1c-.9 0-1.4-.2-1.8-.3-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.1-.4-.3-.9-.3-1.8-.1-1-.1-1.3-.1-3.8s0-2.8.1-3.8c0-.9.2-1.4.3-1.8.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.4-.1.9-.3 1.8-.3 1-.1 1.3-.1 3.8-.1M12 2.6c-2.6 0-2.9 0-3.9.1-1 0-1.7.2-2.3.4-.6.3-1.2.6-1.7 1.1-.5.5-.9 1.1-1.1 1.7-.2.6-.4 1.3-.4 2.3-.1 1-.1 1.3-.1 3.9s0 2.9.1 3.9c0 1 .2 1.7.4 2.3.3.6.6 1.2 1.1 1.7.5.5 1.1.9 1.7 1.1.6.2 1.3.4 2.3.4 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c1 0 1.7-.2 2.3-.4.6-.3 1.2-.6 1.7-1.1.5-.5.9-1.1 1.1-1.7.2-.6.4-1.3.4-2.3.1-1 .1-1.3.1-3.9s0-2.9-.1-3.9c0-1-.2-1.7-.4-2.3-.3-.6-.6-1.2-1.1-1.7-.5-.5-1.1-.9-1.7-1.1-.6-.2-1.3-.4-2.3-.4-1-.1-1.3-.1-3.9-.1Zm0 4.6a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 8a3.1 3.1 0 1 1 0-6.3 3.1 3.1 0 0 1 0 6.3Zm6.2-8.2a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0Z" />
    </svg>
  );
}

export function TikTokIcon({ className, ...props }: IconProps) {
  return (
    <svg {...baseProps(className)} {...props}>
      <path d="M16.6 3c.4 2 1.6 3.3 3.9 3.5v2.6c-1.3.1-2.5-.3-3.8-1.1v5.3c0 6.7-7.3 8.8-10.3 4-1.9-3.1-.7-8.5 5.4-8.7v2.8c-.5.1-1 .2-1.4.4-1.4.5-2.2 1.4-2 3 .5 3.1 6.1 4 5.6-2V3h2.6Z" />
    </svg>
  );
}
