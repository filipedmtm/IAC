import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Microscope,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  Handshake,
  Target,
  Eye,
  FileText,
  Download,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage, type Locale } from "@/i18n/LanguageProvider";
import report2024 from "@/assets/reports/report-2024.pdf.asset.json";
import report2025 from "@/assets/reports/report-2025.pdf.asset.json";
import report2024Pt from "@/assets/reports/report-2024-pt.pdf.asset.json";
import report2025Pt from "@/assets/reports/report-2025-pt.pdf.asset.json";
import report2024Es from "@/assets/reports/report-2024-es.pdf.asset.json";
import report2025Es from "@/assets/reports/report-2025-es.pdf.asset.json";
import mariaFernandaPhoto from "@/assets/team/maria-fernanda.jpg.asset.json";
import biancaPhoto from "@/assets/team/bianca.jpg.asset.json";
import marianePhoto from "@/assets/team/mariane.jpg.asset.json";
import gabrielaSacomoriPhoto from "@/assets/team/gabriela-sacomori.jpg.asset.json";
import marcosBonatoPhoto from "@/assets/team/marcos-bonato.jpg.asset.json";
import priscilaMoraesPhoto from "@/assets/team/priscila-moraes.jpg.asset.json";
import gabrielaBritoPhoto from "@/assets/team/gabriela-brito.jpg.asset.json";
import wesleyPachecoPhoto from "@/assets/team/wesley-pacheco.jpg.asset.json";

const TEAM_PHOTOS: Record<string, string> = {
  "Wesley Carlos Pacheco": wesleyPachecoPhoto.url,
  "Maria Fernanda Martins Nascimento": mariaFernandaPhoto.url,
  "Bianca Olivares Pradal": biancaPhoto.url,
  "Mariane Manfredini Goes": marianePhoto.url,
  "Gabriela Sacomori": gabrielaSacomoriPhoto.url,
  "Gabriela Brito": gabrielaBritoPhoto.url,
  "Marcos Bonato": marcosBonatoPhoto.url,
  "Priscila Moraes": priscilaMoraesPhoto.url,
};

const REPORTS: { year: string; urls: Record<Locale, string> }[] = [
  { year: "2025", urls: { pt: report2025Pt.url, en: report2025.url, es: report2025Es.url } },
  { year: "2024", urls: { pt: report2024Pt.url, en: report2024.url, es: report2024Es.url } },
];


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Instituto Amor e Carinho (IAC)" },
      {
        name: "description",
        content:
          "Conheça a história, missão, visão, valores, equipe, governança e transparência do Instituto Amor e Carinho.",
      },
      { property: "og:title", content: "Quem Somos — IAC" },
      { property: "og:description", content: "História, missão, visão e valores do IAC." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUE_ICONS = [Heart, Microscope, Lightbulb, Sparkles, ShieldCheck, Handshake];

function About() {
  const { t, locale } = useLanguage();


  return (
    <>
      <PageHero eyebrow={t.brand.short} title={t.about.title} subtitle={t.about.subtitle} />

      {/* History */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading align="left" title={t.about.historyTitle} />
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground text-justify hyphens-auto whitespace-pre-line">{t.about.historyText}</p>
          </Reveal>
        </div>
      </Section>

      {/* Mission / Vision */}
      <Section muted id="mission">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { Icon: Target, title: t.about.missionTitle, text: t.about.missionText },
            { Icon: Eye, title: t.about.visionTitle, text: t.about.visionText },
          ].map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <Card className="h-full rounded-2xl shadow-soft">
                <CardContent className="p-8">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
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

      {/* Values */}
      <Section>
        <SectionHeading eyebrow={t.about.valuesTitle} title={t.about.valuesTitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.values.map((value, i) => {
            const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
            return (
              <Reveal key={value.title} delay={(i % 3) * 80}>
                <Card className="h-full rounded-2xl shadow-soft">
                  <CardContent className="p-6">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Team */}
      <Section muted>
        <SectionHeading eyebrow={t.about.teamTitle} title={t.about.teamTitle} subtitle={t.about.teamSubtitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.team.map((member, i) => (
            <Reveal key={member.name} delay={i * 70}>
              <Card className="h-full rounded-2xl text-center shadow-soft">
                <CardContent className="p-6">
                  <Avatar className="mx-auto size-20">
                    {TEAM_PHOTOS[member.name] ? (
                      <AvatarImage src={TEAM_PHOTOS[member.name]} alt={member.name} className="object-cover" />
                    ) : null}
                    <AvatarFallback className="bg-gradient-hero text-lg font-semibold text-primary-foreground">
                      {member.name
                        .replace(/^(Dra?\.)\s*/, "")
                        .split(" ")
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Governance & Transparency */}
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <Card className="h-full rounded-2xl shadow-soft">
              <CardContent className="p-8">
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <ShieldCheck className="size-6" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-foreground">{t.about.governanceTitle}</h2>
                <p className="mt-3 text-muted-foreground">{t.about.governanceText}</p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full rounded-2xl shadow-soft">
              <CardContent className="p-8">
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <FileText className="size-6" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-foreground">{t.about.transparencyTitle}</h2>
                <p className="mt-3 text-muted-foreground">{t.about.transparencyText}</p>
                <ul className="mt-4 space-y-2">
                  {t.about.transparencyItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Annual Reports */}
      <Section muted>
        <SectionHeading
          eyebrow={t.about.transparencyTitle}
          title={t.about.reportsTitle}
          subtitle={t.about.reportsSubtitle}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REPORTS.map((report, i) => (
            <Reveal key={report.year} delay={i * 90}>
              <Card className="h-full rounded-2xl shadow-soft">
                <CardContent className="flex h-full flex-col p-8">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
                    <FileText className="size-6" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-foreground">{report.year}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.about.reportsTitle}</p>
                  <Button asChild variant="outline" className="mt-6 w-full">
                    <a href={report.urls[locale]} download target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 size-4" />
                      {t.about.reportsDownload}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
