// Negocia el locale por request y aplica prefijos según la config de routing.
import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match everything except Next internals, API routes, static assets, and files with extensions.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
