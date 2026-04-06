"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

import { WeglotProvider } from "@/components/weglot-provider";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <WeglotProvider>{children}</WeglotProvider>
    </ThemeProvider>
  );
}
