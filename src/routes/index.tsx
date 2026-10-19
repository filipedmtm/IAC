import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  HeartHandshake,
  Microscope,
  Megaphone,
  GraduationCap,
  Users,
  Stethoscope,
  Globe2,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { useT } from "@/i18n/LanguageProvider";
import heroImg from "@/assets/hero.jpg";
import communityImg from "@/assets/community.jpg";
import { HeroBackground } from "@/components/site/HeroBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Amor e Carinho (IAC) — Doenças Raras" },
      {
        name: "description",
        content:
          "Transformando vidas por meio do cuidado, do conhecimento, da defesa de direitos e da esperança. Apoio a pessoas com doenças raras e condições congênitas.",
      },
      { property: "og:title", content: "Instituto Amor e Carinho (IAC)" },
      {
        property: "og:description",
        content: "Cuidado, ciência e esperança para pessoas com doenças raras.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PROGRAM_ICONS = [
  HeartHandshake,
  Users,
  GraduationCap,
  Stethoscope,
  Microscope,
  Megaphone,
  Globe2,
];

function Home() {
  const t = useT();




  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <HeroBackground />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
              <Heart className="size-3.5" fill="currentColor" /> {t.home.heroEyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-justify hyphens-auto">{t.home.heroIntro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/about">
                  {t.actions.learnMore} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/support">{t.actions.supportMission}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/contact">{t.actions.contactUs}</Link>
              </Button>
            </div>
          </Reveal>
        </div>

      </section>

      {/* Who we are */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 space-y-5 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={heroImg}
                alt="Criança sorrindo com as mãos cobertas de tinta colorida durante uma atividade"
                width={1600}
                height={1104}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={communityImg}
                alt="Público reunido durante um evento do instituto"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading align="left" eyebrow={t.brand.short} title={t.home.whoTitle} subtitle={t.home.whoText} />
            <ul className="mt-6 space-y-3">
              {t.home.whoPoints.map((point) => (
                <Reveal as="li" key={point} className="flex items-start gap-3">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Heart className="size-3.5" fill="currentColor" />
                  </span>
                  <span className="text-foreground">{point}</span>
                </Reveal>
              ))}
            </ul>
            <Button asChild variant="link" className="mt-4 px-0">
              <Link to="/about">
                {t.actions.learnMore} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section muted>
        <SectionHeading eyebrow={t.home.impactTitle} title={t.home.impactTitle} subtitle={t.home.impactSubtitle} />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.home.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <Card className="h-full rounded-2xl border-0 bg-card text-center shadow-soft">
                <CardContent className="p-6">
                  <p className="bg-gradient-hero bg-clip-text text-4xl font-semibold text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Programs */}
      <Section>
        <SectionHeading eyebrow={t.nav.programs} title={t.home.programsTitle} subtitle={t.home.programsSubtitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.programs.items.map((program, i) => {
            const Icon = PROGRAM_ICONS[i % PROGRAM_ICONS.length];
            return (
              <Reveal key={program.title} delay={(i % 3) * 80}>
                <Card className="group h-full rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <CardContent className="p-6">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{program.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{program.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/programs">
              {t.actions.viewAll} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Latest news */}
      <Section muted>
        <SectionHeading eyebrow={t.nav.news} title={t.home.newsTitle} subtitle={t.home.newsSubtitle} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.news.items.slice(0, 3).map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <Card className="h-full overflow-hidden rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="h-2 bg-gradient-hero" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 font-semibold text-secondary-foreground">
                      {t.news.categories[item.category as keyof typeof t.news.categories]}
                    </span>
                    <span className="text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/news">
              {t.actions.viewAll} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Partners */}
      <Section>
        <SectionHeading eyebrow={t.nav.partners} title={t.home.partnersTitle} subtitle={t.home.partnersSubtitle} />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {t.partners.categories.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="flex h-24 items-center justify-center rounded-2xl border bg-card p-4 text-center text-sm font-medium text-muted-foreground shadow-soft">
                {p.title}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section muted>
        <SectionHeading eyebrow={t.home.testimonialsTitle} title={t.home.testimonialsTitle} subtitle={t.home.testimonialsSubtitle} />

        <Reveal className="mt-12">
          <Card className="overflow-hidden rounded-[2rem] shadow-card">
            <div className="h-2 bg-gradient-hero" />
            <CardContent className="p-7 sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
                <Heart className="size-3.5" fill="currentColor" /> {t.home.featuredStory.eyebrow}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {t.home.featuredStory.title}
              </h3>
              <div className="mt-5 space-y-4">
                {t.home.featuredStory.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-justify hyphens-auto leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-6 border-t pt-5">
                <p className="text-sm font-semibold text-foreground">{t.home.featuredStory.signature}</p>
                <p className="text-xs text-muted-foreground">{t.home.featuredStory.signatureTagline}</p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

      </Section>

      {/* Partners CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero px-6 py-14 text-center shadow-card sm:px-12">
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-60 rounded-full bg-accent/30 blur-3xl" />
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-primary-foreground sm:text-4xl">
              {t.partners.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">{t.partners.ctaText}</p>
            <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full">
              <Link to="/partners">
                {t.nav.partners} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>


      {/* Newsletter */}
      <Section muted>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.home.newsletterTitle}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.home.newsletterText}</p>
          <NewsletterForm className="mx-auto mt-6" />
        </Reveal>
      </Section>
    </>
  );
}
