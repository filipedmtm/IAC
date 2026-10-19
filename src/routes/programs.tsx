import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartHandshake,
  Users,
  GraduationCap,
  Stethoscope,
  Microscope,
  Megaphone,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";
import { FileText } from "lucide-react";
import rareBarometerPt from "@/assets/docs/rare-barometer-saude-mental-pt.pdf.asset.json";

const COOP_DOCS = [
  {
    label: "Rare Barometer — Saúde mental de pessoas com doenças raras (PT)",
    url: rareBarometerPt.url,
    filename: rareBarometerPt.original_filename,
  },
];


export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programas — Instituto Amor e Carinho (IAC)" },
      {
        name: "description",
        content:
          "Apoio ao paciente e à família, educação, capacitação profissional, pesquisa, advocacy e cooperação internacional.",
      },
      { property: "og:title", content: "Programas — IAC" },
      { property: "og:description", content: "Conheça os programas do IAC." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

const ICONS = [HeartHandshake, Users, GraduationCap, Stethoscope, Microscope, Megaphone, Globe2];

function Programs() {
  const t = useT();

  return (
    <>
      <PageHero eyebrow={t.brand.short} title={t.programs.title} subtitle={t.programs.subtitle} />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.programs.items.map((program, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={program.title} delay={(i % 3) * 80}>
                <Card className="group h-full rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <CardContent className="p-7">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="mt-4 text-xl font-semibold text-foreground">{program.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{program.text}</p>
                    {i === t.programs.items.length - 1 && (
                      <ul className="mt-4 space-y-2">
                        {COOP_DOCS.map((doc) => (
                          <li key={doc.url} className="space-y-1">
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-start gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                            >
                              <FileText className="mt-0.5 size-4 shrink-0" />
                              <span>{doc.label}</span>
                            </a>
                            <a
                              href={doc.url}
                              download={doc.filename}
                              className="block pl-6 text-xs text-muted-foreground underline-offset-4 hover:underline"
                            >
                              Baixar PDF
                            </a>
                          </li>

                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section muted>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero px-6 py-14 text-center shadow-card sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-primary-foreground sm:text-4xl">
              {t.partners.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">{t.partners.ctaText}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/support">
                  {t.nav.support} <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
