import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";
import { useT } from "@/i18n/LanguageProvider";
import logoMark from "@/assets/logo-mark.png.asset.json";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: "/about", label: t.nav.about },
    { to: "/rare-diseases", label: t.nav.rareDiseases },
    { to: "/programs", label: t.nav.programs },
    { to: "/news", label: t.nav.news },
    { to: "/partners", label: t.nav.partners },
    { to: "/support", label: t.nav.support },
  ] as const;




  const socials = [
    { Icon: Facebook, label: "Facebook" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center leading-none">
            <img
              src={logoMark.url}
              alt={t.brand.name}
              className="size-28 shrink-0 object-contain"
            />
          </Link>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.footer.about}</p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">{t.footer.quickLinks}</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">{t.footer.contact}</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-primary" /> {t.contact.addressValue}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" /> {t.contact.emailValue}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" /> {t.contact.phoneValue}
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-sm font-semibold text-foreground">{t.footer.newsletter}</h3>
          <p className="mt-4 text-sm text-muted-foreground">{t.footer.newsletterText}</p>
          <NewsletterForm className="mt-4 max-w-full" />
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto w-full max-w-6xl px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
          © {year} Instituto Amor e Carinho (IAC). {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
