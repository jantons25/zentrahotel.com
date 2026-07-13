// Separador ondulado SVG característico de la marca, colocable arriba o abajo de una sección.
import { cn } from "@/lib/utils";

interface WaveDividerProps {
  position?: "top" | "bottom";
  className?: string;
}

export function WaveDivider({ position = "bottom", className }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 z-10 overflow-hidden leading-none",
        position === "bottom" ? "bottom-0" : "top-0 rotate-180",
        className,
      )}
    >
      <svg
        className="block h-12 w-full text-primary md:h-20"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0 64c120-32 240-48 360-40s240 40 360 48 240-8 360-24 240-24 360-16v64H0Z"
        />
      </svg>
    </div>
  );
}
