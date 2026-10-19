import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";


export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Notícias — Instituto Amor e Carinho (IAC)" },
      {
        name: "description",
        content: "Artigos, eventos, atualizações científicas e novidades institucionais do IAC.",
      },
      { property: "og:title", content: "Notícias — IAC" },
      { property: "og:description", content: "Acompanhe as novidades do IAC." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

type CategoryKey = "all" | "article" | "event" | "science" | "institutional";

function News() {
  const t = useT();
  const [filter, setFilter] = React.useState<CategoryKey>("all");

  const categoryKeys: CategoryKey[] = ["all", "article", "event", "science", "institutional"];
  const items =
    filter === "all" ? t.news.items : t.news.items.filter((i) => i.category === filter);

  return (
    <>
      <PageHero eyebrow={t.brand.short} title={t.news.title} subtitle={t.news.subtitle} />

      <Section>
        <Reveal className="flex flex-wrap gap-2">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-secondary-foreground",
              )}
            >
              {t.news.categories[key]}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 70}>
              <Card className="h-full overflow-hidden rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="h-2 bg-gradient-hero" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 font-semibold text-secondary-foreground">
                      {t.news.categories[item.category as CategoryKey]}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <CalendarDays className="size-3.5" /> {item.date}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
                  {"link" in item && item.link ? (
                    <a
                      href={item.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      {t.actions.learnMore}
                      <ExternalLink className="size-3.5" />
                    </a>
                  ) : null}

                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
