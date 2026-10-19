import * as React from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const t = useT();
  const [email, setEmail] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    toast.success(t.home.newsletterSuccess);
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex w-full max-w-md gap-2", className)}>
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.home.newsletterPlaceholder}
        aria-label={t.home.newsletterPlaceholder}
        className="h-11 rounded-full bg-background"
      />
      <Button type="submit" className="h-11 rounded-full px-5">
        <Send className="size-4" />
        <span className="hidden sm:inline">{t.actions.subscribe}</span>
      </Button>
    </form>
  );
}
