"use client";

// Formulario de suscripción por correo validado con Zod y React Hook Form.
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Ingresa tu correo electrónico")
    .email("Ingresa un correo electrónico válido"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  // Punto de integración futuro con la API de marketing; por ahora confirma localmente.
  const onSubmit = async () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p role="status" className="text-sm text-primary-foreground/90">
        ¡Gracias por suscribirte! Pronto recibirás tu código exclusivo.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2">
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Correo electrónico
        </label>
        <Input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Tu correo electrónico"
          aria-invalid={Boolean(errors.email)}
          className="h-11 flex-1 rounded-full border-white/30 bg-white/10 px-4 text-white placeholder:text-white/60"
          {...register("email")}
        />
        <Button
          type="submit"
          size="icon-lg"
          disabled={isSubmitting}
          aria-label="Suscribirme al boletín"
          className="size-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/85"
        >
          <Send className="size-4" aria-hidden="true" />
        </Button>
      </div>
      {errors.email ? (
        <p role="alert" className="text-xs text-red-200">
          {errors.email.message}
        </p>
      ) : null}
    </form>
  );
}
