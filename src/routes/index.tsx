import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kathi y Seba · Luna de miel en México" },
      {
        name: "description",
        content:
          "Gracias por acompañarnos en nuestro matrimonio. Si desean hacernos un obsequio, pueden aportar a nuestra luna de miel en México.",
      },
      {
        property: "og:title",
        content: "Kathi y Seba · Luna de miel en México",
      },
      {
        property: "og:description",
        content:
          "Gracias por acompañarnos en nuestro matrimonio. Si desean hacernos un obsequio, pueden aportar a nuestra luna de miel en México.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const bankData = [
  { label: "Banco", value: "Mercado Pago" },
  { label: "Tipo de cuenta", value: "Cuenta Vista" },
  { label: "N° de cuenta", value: "1070497271" },
  { label: "RUT", value: "18.402.057-2" },
];

const allBankData = `Banco: Mercado Pago
Tipo de cuenta: Cuenta Vista
N° de cuenta: 1070497271
RUT: 18.402.057-2`;

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L13.8 9.2L21 12L13.8 14.8L12 22L10.2 14.8L3 12L10.2 9.2L12 2Z" />
    </svg>
  );
}

function Index() {
  const [copied, setCopied] = useState(false);

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(allBankData);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-cream">
      {/* Destellos decorativos */}
      <Sparkle className="pointer-events-none absolute top-16 left-8 h-8 w-8 text-[color:var(--sage)] opacity-60 select-none md:h-10 md:w-10" />
      <Sparkle className="pointer-events-none absolute top-24 right-12 h-6 w-6 text-[color:var(--sage)] opacity-50 select-none md:h-8 md:w-8" />
      <Sparkle className="pointer-events-none absolute bottom-48 left-16 h-5 w-5 text-[color:var(--sage)] opacity-40 select-none md:h-6 md:w-6" />
      <Sparkle className="pointer-events-none absolute bottom-32 right-8 h-7 w-7 text-[color:var(--sage)] opacity-50 select-none md:h-9 md:w-9" />
      <Sparkle className="pointer-events-none absolute top-1/3 right-1/4 h-4 w-4 text-[color:var(--sage)] opacity-30 select-none md:h-5 md:w-5" />

      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mt-6 flex items-center gap-4 text-[color:var(--sage)]">
          <span className="h-px w-16 bg-current opacity-40" />
          <span className="text-xs uppercase tracking-[0.4em]">
            Nuestro Matrimonio
          </span>
          <span className="h-px w-16 bg-current opacity-40" />
        </div>

        <h1 className="font-script mt-8 text-6xl leading-tight text-[color:var(--sage)] md:text-8xl">
          Kathi y Seba
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Gracias por acompañarnos en este día tan especial.
        </p>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Tu presencia es el mejor regalo que podríamos recibir. Sin embargo,
          si deseas hacernos un obsequio, queremos contarles que nuestro hogar
          ya está completo, por lo que hemos decidido destinar los regalos a
          nuestra luna de miel.
        </p>

        <article className="mt-14 w-full rounded-2xl border border-border bg-card/90 p-8 shadow-card backdrop-blur-sm md:p-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-[color:var(--sage)]">
              Datos para transferencia
            </span>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Luna de miel
            </h2>
            <div className="mt-2 h-px w-16 bg-[color:var(--blush)]" />
          </div>

          <dl className="mt-8 divide-y divide-border">
            {bankData.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 py-4 text-left sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="font-serif text-xl text-foreground md:text-2xl">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            onClick={copyAll}
            className="mt-6 w-full rounded-full border border-border bg-background/60 px-6 py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-[color:var(--sage)] hover:text-[color:var(--sage)]"
          >
            {copied ? "Copiado ✓" : "Copiar datos"}
          </button>

          <div className="mt-6 flex flex-col items-center gap-3 border-t border-border pt-6">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Regalo preferido
            </span>
            <a
              href="https://www.thermomix.cl/producto/thermomix-tm6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-border bg-background/60 px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-[color:var(--sage)] hover:text-[color:var(--sage)]"
            >
              Descúbrelo
            </a>
          </div>
        </article>

        <p className="font-script mt-10 text-3xl text-[color:var(--sage)]">
          Con gratitud
        </p>
      </section>
    </main>
  );
}
