import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contato — Instituto Amor e Carinho (IAC)" },
      {
        name: "description",
        content: "Fale com o Instituto Amor e Carinho: formulário de contato, e-mail, telefone e endereço.",
      },
      { property: "og:title", content: "Contato — IAC" },
      { property: "og:description", content: "Estamos aqui para ouvir e apoiar você." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const t = useT();

  const schema = z.object({
    name: z.string().min(2, { message: "—" }),
    email: z.string().email({ message: "—" }),
    subject: z.string().min(2, { message: "—" }),
    message: z.string().min(10, { message: "—" }),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit() {
    toast.success(t.contact.success);
    form.reset();
  }

  const info = [
    { Icon: Mail, label: t.contact.emailLabel, value: t.contact.emailValue },
    { Icon: Phone, label: t.contact.phoneLabel, value: t.contact.phoneValue },
    { Icon: MapPin, label: t.contact.addressLabel, value: t.contact.addressValue },
  ];

  return (
    <>
      <PageHero eyebrow={t.brand.short} title={t.contact.title} subtitle={t.contact.subtitle} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <Reveal>
            <Card className="rounded-2xl shadow-soft">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-foreground">{t.contact.formTitle}</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.contact.name}</FormLabel>
                            <FormControl>
                              <Input placeholder={t.contact.namePlaceholder} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.contact.email}</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder={t.contact.emailPlaceholder} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.subject}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.contact.subjectPlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.message}</FormLabel>
                          <FormControl>
                            <Textarea rows={5} placeholder={t.contact.messagePlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="rounded-full">
                      {t.actions.send} <Send className="size-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </Reveal>

          {/* Info */}
          <Reveal delay={120} className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">{t.contact.infoTitle}</h2>
            {info.map(({ Icon, label, value }) => (
              <Card key={label} className="rounded-2xl shadow-soft">
                <CardContent className="flex items-start gap-4 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">{t.contact.mapTitle}</h2>
          <div className="overflow-hidden rounded-2xl border shadow-soft">
            <iframe
              title={t.contact.mapTitle}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-47.0700%2C-22.8850%2C-47.0450%2C-22.8670&layer=mapnik&marker=-22.8760%2C-47.0575"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
