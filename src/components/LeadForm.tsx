"use client";

import { useState, type FormEvent } from "react";
import { track } from "@/lib/track";

type Status = "idle" | "done";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    track("ia_lead_submit", {
      name_length: name.length,
      has_email: email.includes("@"),
    });
    setStatus("done");
    form.reset();
  }

  switch (status) {
    case "done":
      return (
        <p
          role="status"
          className="mt-8 border-t border-blue/15 pt-6 leading-relaxed"
        >
          Registro local de demonstração. Nada foi enviado à Unisinos nem a
          nenhum servidor.
        </p>
      );
    case "idle":
      return (
        <form
          onSubmit={onSubmit}
          data-track="ia_lead_form"
          className="mt-8 border-t border-blue/15 pt-6"
        >
          <h3 className="font-serif text-2xl">Demonstração de interesse</h3>
          <p className="mt-3 leading-relaxed">
            Este formulário só serve de exemplo de conversão. Não envia dados à
            Unisinos.
          </p>
          <div className="mt-4 flex max-w-md flex-col gap-4">
            <label className="flex flex-col gap-1 text-sm">
              Nome
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className="border border-blue/30 bg-paper px-3 py-2 text-base text-ink"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              E-mail
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="border border-blue/30 bg-paper px-3 py-2 text-base text-ink"
              />
            </label>
            <button
              type="submit"
              data-track="ia_lead_submit"
              className="cta-secondary self-start"
            >
              Registrar interesse
            </button>
          </div>
        </form>
      );
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}