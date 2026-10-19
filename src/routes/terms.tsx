import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — IAC" },
      { name: "description", content: "Termos de uso do site do Instituto Amor e Carinho." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  const t = useT();
  return (
    <>
      <PageHero eyebrow="Legal" title={t.legal.termsTitle} />
      <Section>
        <Reveal className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
          <p>{t.legal.termsText}</p>
        </Reveal>
      </Section>
    </>
  );
}
