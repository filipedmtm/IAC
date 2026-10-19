import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Declaração de Acessibilidade — IAC" },
      { name: "description", content: "Compromisso do Instituto Amor e Carinho com a acessibilidade (WCAG)." },
      { property: "og:url", content: "/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: Accessibility,
});

function Accessibility() {
  const t = useT();
  return (
    <>
      <PageHero eyebrow="Legal" title={t.legal.accessibilityTitle} />
      <Section>
        <Reveal className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
          <p>{t.legal.accessibilityText}</p>
        </Reveal>
      </Section>
    </>
  );
}
