import * as React from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/LanguageProvider";

const STORAGE_KEY = "iac-cookie-consent";

export function CookieConsent() {
  const t = useT();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function decide(value: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 animate-fade-up">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-4 rounded-2xl border bg-card p-5 shadow-card sm:flex-row sm:items-center">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <Cookie className="size-5" />
        </span>
        <p className="flex-1 text-sm text-muted-foreground">{t.cookie.text}</p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" className="rounded-full" onClick={() => decide("declined")}>
            {t.cookie.decline}
          </Button>
          <Button size="sm" className="rounded-full" onClick={() => decide("accepted")}>
            {t.cookie.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
