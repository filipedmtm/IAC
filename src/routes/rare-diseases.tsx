import { createFileRoute } from "@tanstack/react-router";
import { Search, Stethoscope, Pill, Scale, BookOpen, Footprints, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import researchImg from "@/assets/research.jpg";
import familyGuide from "@/assets/guides/guia-familias.pdf.asset.json";
import { familyGuideContent } from "@/data/familyGuideContent";


export const Route = createFileRoute("/rare-diseases")({
  head: () => ({
    meta: [
      { title: "Doenças Raras — Instituto Amor e Carinho (IAC)" },
      {
        name: "description",
        content:
          "O que são doenças raras, a jornada do paciente, diagnóstico precoce, acesso a tratamento, direitos do paciente, recursos educativos e perguntas frequentes.",
      },
      { property: "og:title", content: "Doenças Raras — IAC" },
      { property: "og:description", content: "Informação confiável sobre doenças raras." },
      { property: "og:url", content: "/rare-diseases" },
      { property: "og:image", content: researchImg },
    ],
    links: [{ rel: "canonical", href: "/rare-diseases" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [],
        }),
      },
    ],
  }),
  component: RareDiseases,
});

const JOURNEY_ICONS = [Footprints, Search, Pill, BookOpen];

function RareDiseases() {
  const { t, locale } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t.brand.short} title={t.rareDiseases.title} subtitle={t.rareDiseases.subtitle} />

      {/* What are rare diseases */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" title={t.rareDiseases.whatTitle} subtitle={t.rareDiseases.whatText} />
          </div>
          <Reveal delay={100} className="overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={researchImg}
              alt="Pesquisadora observando amostras em um microscópio em laboratório"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* Patient journey */}
      <Section muted>
        <SectionHeading eyebrow={t.rareDiseases.journeyTitle} title={t.rareDiseases.journeyTitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.rareDiseases.journeySteps.map((step, i) => {
            const Icon = JOURNEY_ICONS[i % JOURNEY_ICONS.length];
            return (
              <Reveal key={step.title} delay={i * 80}>
                <Card className="h-full rounded-2xl shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-3xl font-semibold text-secondary-foreground/30">{i + 1}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Diagnosis + Access */}
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { Icon: Lightbulb, title: t.rareDiseases.diagnosisTitle, text: t.rareDiseases.diagnosisText },
            { Icon: Stethoscope, title: t.rareDiseases.accessTitle, text: t.rareDiseases.accessText },
          ].map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <Card className="h-full rounded-2xl shadow-soft">
                <CardContent className="p-8">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold text-foreground">{title}</h2>
                  <p className="mt-3 text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Rights */}
      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading align="left" eyebrow={t.rareDiseases.rightsTitle} title={t.rareDiseases.rightsTitle} />
          <div className="grid gap-4 sm:grid-cols-2">
            {t.rareDiseases.rights.map((right, i) => (
              <Reveal key={right} delay={i * 70} className="flex items-start gap-3 rounded-2xl border bg-card p-5 shadow-soft">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Scale className="size-4" />
                </span>
                <span className="text-sm text-foreground">{right}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Resources */}
      <Section>
        <SectionHeading eyebrow={t.rareDiseases.resourcesTitle} title={t.rareDiseases.resourcesTitle} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.rareDiseases.resources.map((res, i) => {
            const card = (
              <Card className="group h-full rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <CardContent className="p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <BookOpen className="size-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{res.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{res.text}</p>
                  {i === 0 && (
                    <span className="mt-4 inline-block text-sm font-semibold text-primary">
                      {t.actions.readMore} →
                    </span>
                  )}
                </CardContent>
              </Card>
            );

            if (i === 0) {
              return (
                <Reveal key={res.title} delay={i * 80}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" className="w-full text-left">
                        {card}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{t.rareDiseases.guideTitle}</DialogTitle>
                        <DialogDescription>{t.rareDiseases.guideSubtitle}</DialogDescription>
                      </DialogHeader>

                      <div className="mt-2 space-y-4 text-sm leading-relaxed text-muted-foreground">
                        {t.rareDiseases.guideIntro.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      <h4 className="mt-8 text-lg font-semibold text-foreground">
                        {t.rareDiseases.guideListTitle}
                      </h4>
                      <ol className="mt-4 space-y-3">
                        {t.rareDiseases.guide.map((disease, idx) => (
                          <li key={disease.name} className="flex gap-3 rounded-xl border bg-card p-4 shadow-soft">
                            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                              {idx + 1}
                            </span>
                            <span className="text-sm">
                              <span className="font-semibold text-foreground">{disease.name}: </span>
                              <span className="text-muted-foreground">{disease.text}</span>
                            </span>
                          </li>
                        ))}
                      </ol>

                      <div className="mt-8 space-y-6">
                        {t.rareDiseases.guideSections.map((sec) => (
                          <div key={sec.title}>
                            <h4 className="text-lg font-semibold text-foreground">{sec.title}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sec.text}</p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </Reveal>
              );
            }

            if (i === 1) {
              const fg = familyGuideContent[locale];
              return (
                <Reveal key={res.title} delay={i * 80}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" className="w-full text-left">
                        <Card className="group h-full rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                          <CardContent className="p-6">
                            <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                              <BookOpen className="size-6" />
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-foreground">{res.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{res.text}</p>
                            <span className="mt-4 inline-block text-sm font-semibold text-primary">
                              {t.actions.readMore} →
                            </span>
                          </CardContent>
                        </Card>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{fg.title}</DialogTitle>
                        <DialogDescription>{fg.subtitle}</DialogDescription>
                      </DialogHeader>

                      <div className="mt-2 space-y-4 text-sm leading-relaxed text-muted-foreground">
                        {fg.intro.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      <div className="mt-6 rounded-2xl border bg-secondary/30 p-5">
                        <p className="text-sm text-muted-foreground">{fg.note}</p>
                      </div>

                      <div className="mt-8 space-y-8">
                        {fg.sections.map((sec) => (
                          <div key={sec.title}>
                            <h4 className="text-lg font-semibold text-foreground">{sec.title}</h4>
                            {sec.text && (
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sec.text}</p>
                            )}
                            {sec.items && (
                              <ul className="mt-3 space-y-2">
                                {sec.items.map((item) => (
                                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>

                      <a
                        href={familyGuide.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-block text-sm font-semibold text-primary hover:underline"
                      >
                        {fg.download} ↗
                      </a>
                    </DialogContent>
                  </Dialog>
                </Reveal>
              );
            }


            if (i === 2) {
              return (
                <Reveal key={res.title} delay={i * 80}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" className="w-full text-left">
                        <Card className="group h-full rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                          <CardContent className="p-6">
                            <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                              <BookOpen className="size-6" />
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-foreground">{res.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{res.text}</p>
                            <span className="mt-4 inline-block text-sm font-semibold text-primary">
                              {t.actions.readMore} →
                            </span>
                          </CardContent>
                        </Card>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{t.rareDiseases.professionalsTitle}</DialogTitle>
                        <DialogDescription>{t.rareDiseases.professionalsSubtitle}</DialogDescription>
                      </DialogHeader>

                      <div className="mt-2 space-y-4 text-sm leading-relaxed text-muted-foreground">
                        {t.rareDiseases.professionalsIntro.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      <div className="mt-6 space-y-8">
                        {t.rareDiseases.professionalsSections.map((sec) => (
                          <div key={sec.title}>
                            <h4 className="text-lg font-semibold text-foreground">{sec.title}</h4>
                            <ul className="mt-3 space-y-3">
                              {sec.links.map((link) => (
                                <li key={link.url} className="rounded-xl border bg-card p-4 shadow-soft">
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-primary hover:underline"
                                  >
                                    {link.label} ↗
                                  </a>
                                  <p className="mt-1 text-sm text-muted-foreground">{link.text}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 rounded-2xl border bg-secondary/30 p-5">
                        <h4 className="text-base font-semibold text-foreground">
                          {t.rareDiseases.professionalsHighlightTitle}
                        </h4>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {t.rareDiseases.professionalsHighlightText}
                        </p>
                      </div>

                      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                        {t.rareDiseases.professionalsDisclaimer}
                      </p>
                    </DialogContent>
                  </Dialog>
                </Reveal>
              );
            }

            return (
              <Reveal key={res.title} delay={i * 80}>
                {card}
              </Reveal>
            );
          })}
        </div>
      </Section>


      {/* FAQ */}

      <Section muted>
        <SectionHeading eyebrow="FAQ" title={t.rareDiseases.faqTitle} />
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {t.rareDiseases.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border bg-card mb-3 px-5 shadow-soft">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>
    </>
  );
}
