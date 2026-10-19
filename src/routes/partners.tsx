import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Globe2,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";
import { partnerLogos } from "@/data/partnerLogos";
import algsa from "@/assets/partners/alagille-syndrome-alliance.png.asset.json";
import alber from "@/assets/partners/alianza-iberoamericana-alber.png.asset.json";
import febraras from "@/assets/partners/febraras.png.asset.json";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Parceiros — Instituto Amor e Carinho (IAC)" },
      {
        name: "description",
        content:
          "Instituições de saúde, universidades, parceiros corporativos, ONGs, organizações internacionais e colaborações governamentais.",
      },
      { property: "og:title", content: "Parceiros — IAC" },
      { property: "og:description", content: "Nossa rede de parceiros estratégicos." },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: Partners,
});

const ICONS = [Building2, GraduationCap, Briefcase, HeartHandshake, Globe2, Landmark];

function Partners() {
  const t = useT();

  return (
    <>
      <PageHero eyebrow={t.brand.short} title={t.partners.title} subtitle={t.partners.subtitle} />

      <Section>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground">{t.partners.intro}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.partners.categories.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={cat.title} delay={(i % 3) * 80}>
                <Card className="group h-full rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <CardContent className="p-7">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="mt-4 text-xl font-semibold text-foreground">{cat.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{cat.text}</p>
                    {i === 3 && (
                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        <img
                          src={febraras.url}
                          alt="FEBRARARAS — Federação Brasileira das Associações de Doenças Raras"
                          loading="lazy"
                          className="h-12 w-auto max-w-full object-contain"
                        />
                      </div>
                    )}
                    {i === 4 && (
                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        {[
                          { src: algsa.url, name: "Alagille Syndrome Alliance" },
                          { src: alber.url, name: "Alianza Iberoamericana de Enfermedades Raras" },
                        ].map((l) => (
                          <img
                            key={l.name}
                            src={l.src}
                            alt={l.name}
                            loading="lazy"
                            className="h-12 w-auto max-w-[45%] object-contain"
                          />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Official supporters / logos */}
      <Section muted>
        <SectionHeading
          eyebrow={t.brand.short}
          title={t.partners.logosTitle}
          subtitle={t.partners.logosSubtitle}
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partnerLogos.map((logo, i) => (
            <Reveal key={logo.name} delay={(i % 4) * 60}>
              <div className="flex h-28 items-center justify-center rounded-2xl border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className="max-h-14 w-auto max-w-full object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>



      <Section muted>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero px-6 py-14 text-center shadow-card sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-primary-foreground sm:text-4xl">
              {t.partners.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">{t.partners.ctaText}</p>
            <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full">
              <Link to="/contact">
                {t.actions.contactUs} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
