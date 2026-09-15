// Registro al programa de beneficios de Zentra desde el modal promocional flotante.
// Valida los datos, envía el correo de bienvenida y responde al formulario.
//
// El envío usa la API REST de Resend (sin dependencias nuevas). Configura en `.env`:
//   RESEND_API_KEY=re_xxx
//   WELCOME_EMAIL_FROM="Zentra Hotel <hola@zentrahotel.com>"   (dominio verificado)
//   WELCOME_EMAIL_BCC=marketing@zentrahotel.com                (opcional, copia interna)
// Sin RESEND_API_KEY el registro se acepta igual y solo se deja traza en el log,
// para no bloquear el formulario en desarrollo.
import { NextResponse } from "next/server";
import { z } from "zod";

import { siteConfig } from "@/config/site";

export const runtime = "nodejs";

const welcomeSchema = z.object({
  firstName: z.string().trim().min(2).max(80),
  lastName: z.string().trim().min(2).max(80),
  documentType: z.enum(["DNI", "CE", "PAS"]),
  documentNumber: z.string().trim().min(6).max(20),
  email: z.string().trim().email().max(160),
  acceptsTerms: z.literal(true),
  acceptsMarketing: z.boolean().default(false),
  locale: z.enum(["es", "en"]).default("es"),
});

// Código de bienvenida que se entrega en el correo.
const WELCOME_CODE = "ZENTRAWEB";

function buildEmail(locale: "es" | "en", firstName: string) {
  const isEn = locale === "en";

  const subject = isEn
    ? `Welcome to ${siteConfig.name} — your 10% code inside`
    : `Bienvenido a ${siteConfig.name} — tu 10% de descuento`;

  const html = `<!doctype html>
<html lang="${locale}">
  <body style="margin:0;background:#f7f7f7;font-family:Helvetica,Arial,sans-serif;color:#1a1a1a">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden">
            <tr>
              <td style="background:#004c72;padding:28px 32px;color:#ffffff">
                <p style="margin:0;font-size:11px;letter-spacing:.28em;text-transform:uppercase;opacity:.75">${siteConfig.name}</p>
                <h1 style="margin:12px 0 0;font-size:26px;font-weight:300;line-height:1.2">
                  ${isEn ? "Welcome, " : "Bienvenido, "}${firstName}.
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px">
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6">
                  ${
                    isEn
                      ? "Thanks for joining. Here is your code for an extra 10% off when you book direct with us."
                      : "Gracias por registrarte. Este es tu código para un 10% de descuento adicional reservando directo con nosotros."
                  }
                </p>
                <div style="margin:24px 0;padding:18px;border:2px dashed #b9bc31;border-radius:12px;text-align:center">
                  <p style="margin:0;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#6f6f6f">
                    ${isEn ? "Your code" : "Tu código"}
                  </p>
                  <p style="margin:8px 0 0;font-size:24px;letter-spacing:.16em;font-weight:700;color:#004c72">${WELCOME_CODE}</p>
                </div>
                <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#6f6f6f">
                  ${
                    isEn
                      ? "Valid at Zentra Balta, Zentra Plaza and Zentra San José. Apply it at checkout on our booking engine."
                      : "Válido en Zentra Balta, Zentra Plaza y Zentra San José. Aplícalo al reservar en nuestro motor de reservas."
                  }
                </p>
                <a href="${siteConfig.bookingUrl}" style="display:inline-block;background:#b9bc31;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:999px;font-size:13px;letter-spacing:.16em;text-transform:uppercase;font-weight:700">
                  ${isEn ? "Book now" : "Reservar ahora"}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:#f7f7f7;font-size:12px;line-height:1.6;color:#6f6f6f">
                ${siteConfig.contact.addressBalta} · ${siteConfig.contact.phoneDisplay}<br />
                <a href="${siteConfig.url}" style="color:#004c72">${siteConfig.url}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html };
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = welcomeSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_payload", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Sin proveedor configurado el registro no se pierde: queda en el log del servidor.
    console.info("[welcome] registro sin proveedor de correo:", {
      email: data.email,
      documentNumber: data.documentNumber,
      acceptsMarketing: data.acceptsMarketing,
    });
    return NextResponse.json({ ok: true, emailed: false, code: WELCOME_CODE });
  }

  const { subject, html } = buildEmail(data.locale, data.firstName);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.WELCOME_EMAIL_FROM ??
        `${siteConfig.name} <onboarding@resend.dev>`,
      to: [data.email],
      ...(process.env.WELCOME_EMAIL_BCC
        ? { bcc: [process.env.WELCOME_EMAIL_BCC] }
        : {}),
      subject,
      html,
    }),
  });

  if (!response.ok) {
    console.error(
      "[welcome] fallo al enviar el correo:",
      await response.text(),
    );
    return NextResponse.json({ error: "email_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, emailed: true, code: WELCOME_CODE });
}
