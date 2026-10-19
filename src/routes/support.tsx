import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Handshake,
  Building2,
  CalendarHeart,
  Target,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Parcerias que transformam — Instituto Amor e Carinho (IAC)" },
      {
        name: "description",
        content:
          "Parcerias estratégicas com parceiros corporativos e instituições para apoiar projetos que transformam a jornada de pessoas com doenças raras, agudas e crônicas.",
      },
      { property: "og:title", content: "Parcerias que transformam — IAC" },
      {
        property: "og:description",
        content: "Juntos, podemos ampliar o impacto.",
      },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Support,
});

const WAY_ICONS = [Handshake, Building2, CalendarHeart, Target];

function Support() {
  const t = useT();

  return (
    <>
      <PageHero eyebrow={t.brand.short} title={t.support.title} subtitle={t.support.subtitle} />

      {/* Intro */}
      <Section>
        <Reveal className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-lg text-muted-foreground">{t.support.intro}</p>
          <p className="text-lg text-muted-foreground">{t.support.intro2}</p>
        </Reveal>
      </Section>

      {/* Why partner */}
      <Section muted>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={t.brand.short}
              title={t.support.whyTitle}
              subtitle={t.support.whyText}
            />
            <ul className="mt-6 space-y-3">
              {t.support.whyPoints.map((point) => (
                <Reveal as="li" key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-foreground">{point}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-gradient-hero p-8 text-center shadow-card">
              <Sparkles className="mx-auto size-12 text-primary-foreground" />
              <h3 className="mt-4 text-2xl font-semibold text-primary-foreground">
                {t.support.projectsTitle}
              </h3>
              <p className="mt-3 text-primary-foreground/90">{t.support.projectsText}</p>
              <p className="mt-3 text-primary-foreground/90">{t.support.projectsText2}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Ways to support */}
      <Section>
        <SectionHeading
          eyebrow={t.brand.short}
          title={t.support.waysTitle}
          subtitle={t.support.waysIntro}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.support.ways.map((way, i) => {
            const Icon = WAY_ICONS[i % WAY_ICONS.length];
            return (
              <Reveal key={way.title} delay={(i % 2) * 80}>
                <Card className="h-full rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <CardContent className="p-7">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{way.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{way.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Build together CTA */}
      <Section muted>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero px-6 py-14 text-center shadow-card sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-primary-foreground sm:text-4xl">
              {t.support.buildTitle}
            </h2>
            <div className="mx-auto mt-5 max-w-2xl space-y-4 text-primary-foreground/90">
              <p>{t.support.buildText}</p>
              <p>{t.support.buildText2}</p>
              <p>{t.support.buildText3}</p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/programs">
                  {t.support.ctaProjects} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/contact">
                  {t.support.ctaContact} <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
