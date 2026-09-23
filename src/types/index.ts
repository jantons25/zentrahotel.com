// Tipos globales compartidos entre features y componentes de layout.

// Elemento de navegación con clave de traducción (namespace "nav") y ruta destino.
export interface NavItem {
  key: string;
  href: string;
}

// Nodo del árbol de navegación del menú desplegable a pantalla completa.
// - `children`: convierte el nodo en un grupo con submenús (p. ej. "Sedes").
// - `hidden`: lo retira del menú sin borrarlo del código ni del sitemap.
// - `newTab`: abre el destino en una pestaña nueva (p. ej. las páginas de sede).
// - `highlight`: pinta la etiqueta en verde de marca dentro del menú (p. ej. "Ruta del papa").
export interface NavNode {
  key: string;
  href?: string;
  hidden?: boolean;
  newTab?: boolean;
  highlight?: boolean;
  children?: NavNode[];
}
