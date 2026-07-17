// Wrappers de navegación conscientes del locale — usar SIEMPRE en lugar de next/link y next/navigation.
import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
