"use client";

import { Languages } from "lucide-react";

import { useWeglot } from "@/components/weglot-provider";
import { Button } from "@/components/ui/button";

export function HeaderLanguageToggle() {
  const { currentLanguage, isAvailable, isReady, toggleLanguage } = useWeglot();

  if (!isAvailable) {
    return null;
  }

  const nextLanguageLabel = currentLanguage === "en" ? "Spanish" : "English";

  return (
    <Button
      type="button"
      variant="ghost"
      className="h-9 min-w-[3.75rem] rounded-full border border-border/80 bg-background/70 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/80 shadow-[0_10px_24px_rgba(3,2,19,0.08)] backdrop-blur-sm hover:bg-accent hover:text-foreground sm:text-[11px]"
      aria-label={`Switch site language to ${nextLanguageLabel}`}
      title={`Switch site language to ${nextLanguageLabel}`}
      onClick={toggleLanguage}
      disabled={!isReady}
    >
      <Languages size={16} strokeWidth={2} />
      <span>{currentLanguage.toUpperCase()}</span>
    </Button>
  );
}
