import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useT } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-mark.png.asset.json";

type NavLink = { to: string; label: string; hash?: string };

export function Header() {
  const t = useT();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: NavLink[] = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/about", hash: "mission", label: t.nav.mission },
    { to: "/rare-diseases", label: t.nav.rareDiseases },
    { to: "/programs", label: t.nav.programs },
    { to: "/news", label: t.nav.news },
    { to: "/partners", label: t.nav.partners },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background/60 backdrop-blur",
      )}
    >
      <div className="mx-auto flex h-28 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="flex items-center leading-none"
          aria-label={t.brand.name}
        >
          <img
            src={logoMark.url}
            alt={t.brand.name}
            className="size-24 shrink-0 object-contain"
          />
        </Link>


        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive =
              !link.hash && (link.to === "/" ? pathname === "/" : pathname.startsWith(link.to));
            return (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground",
                  isActive && "text-primary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full lg:hidden" aria-label={t.actions.menu}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetTitle className="sr-only">{t.actions.menu}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    hash={link.hash}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
              
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
