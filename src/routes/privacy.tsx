import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — IAC" },
      { name: "description", content: "Política de privacidade e proteção de dados (LGPD/GDPR) do Instituto Amor e Carinho." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  const t = useT();
  return (
    <>
      <PageHero eyebrow="Legal" title={t.legal.privacyTitle} />
      <Section>
        <Reveal className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
          <p>{t.legal.privacyText}</p>
        </Reveal>
      </Section>
    </>
  );
}
