// Declaración de los web components del Booking Engine de Cloudbeds
// (Immersive Experience 2.0) para que TypeScript los acepte en JSX.
// Los atributos son los documentados para <cb-multi-property-date-picker>.
import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "cb-multi-property-date-picker": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        /** Subdominio de la Organización de Cloudbeds. Obligatorio. */
        "sub-domain": string;
        /** Texto del botón de búsqueda. Por defecto "Search". */
        "button-label"?: string;
        /** "horizontal" (por defecto) o "vertical". */
        layout?: "horizontal" | "vertical";
        /** "true" | "false" como cadena. */
        "open-in-new-tab"?: string;
        lang?: string;
        currency?: string;
        "class-name"?: string;
        /** Orden de las propiedades, separadas por punto y coma. */
        "property-order"?: string;
      };
      "cb-property-date-picker": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "property-code": string;
        "button-label"?: string;
        layout?: "horizontal" | "vertical";
        "open-in-new-tab"?: string;
        lang?: string;
        currency?: string;
        "class-name"?: string;
        "custom-url"?: string;
      };
    }
  }
}
