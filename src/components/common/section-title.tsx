// Título de sección con jerarquía visual de la marca (navy, peso fuerte) y alineación configurable.
import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.ComponentProps<"h2"> {
  align?: "left" | "center";
  eyebrow?: string;
}

export function SectionTitle({
  className,
  align = "center",
  eyebrow,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn("mb-10 md:mb-14", align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold tracking-wide text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold text-secondary text-balance md:text-4xl",
          className,
        )}
        {...props}
      >
        {children}
      </h2>
    </div>
  );
}
