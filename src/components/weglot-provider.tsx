"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const ORIGINAL_LANGUAGE = "en";
const TRANSLATED_LANGUAGE = "es";
const WEGLOT_SCRIPT_ID = "weglot-script";
const weglotApiKey = process.env.NEXT_PUBLIC_WEGLOT_API_KEY;

type SupportedLanguage = typeof ORIGINAL_LANGUAGE | typeof TRANSLATED_LANGUAGE;

type WeglotApi = {
  initialized?: boolean;
  initialize: (options: {
    api_key: string;
    hide_switcher?: boolean;
  }) => void;
  getCurrentLang: () => string;
  switchTo: (code: SupportedLanguage) => void;
  on: (eventName: "languageChanged", callback: (newLanguage?: string) => void) => void;
  off?: (eventName: "languageChanged", callback: (newLanguage?: string) => void) => boolean;
};

type WeglotContextValue = {
  currentLanguage: SupportedLanguage;
  isAvailable: boolean;
  isReady: boolean;
  toggleLanguage: () => void;
};

declare global {
  interface Window {
    Weglot?: WeglotApi;
    __portfolioWeglotInitialized?: boolean;
  }
}

const defaultContextValue: WeglotContextValue = {
  currentLanguage: ORIGINAL_LANGUAGE,
  isAvailable: Boolean(weglotApiKey),
  isReady: false,
  toggleLanguage: () => undefined,
};

const WeglotContext = createContext<WeglotContextValue>(defaultContextValue);

const isSupportedLanguage = (value: string | undefined): value is SupportedLanguage =>
  value === ORIGINAL_LANGUAGE || value === TRANSLATED_LANGUAGE;

const loadWeglotScript = () =>
  new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Weglot can only load in the browser."));
      return;
    }

    if (window.Weglot) {
      resolve();
      return;
    }

    const existingScript = document.getElementById(WEGLOT_SCRIPT_ID) as HTMLScriptElement | null;

    const handleLoad = () => resolve();
    const handleError = () => reject(new Error("Failed to load Weglot."));

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = WEGLOT_SCRIPT_ID;
    script.src = "https://cdn.weglot.com/weglot.min.js";
    script.async = true;
    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });
    document.head.appendChild(script);
  });

type WeglotProviderProps = {
  children: ReactNode;
};

export function WeglotProvider({ children }: WeglotProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(ORIGINAL_LANGUAGE);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!weglotApiKey) {
      return;
    }

    let isActive = true;

    const syncLanguage = () => {
      if (!isActive || !window.Weglot) {
        return;
      }

      const nextLanguage = window.Weglot.getCurrentLang();

      startTransition(() => {
        setCurrentLanguage(isSupportedLanguage(nextLanguage) ? nextLanguage : ORIGINAL_LANGUAGE);
      });
      setIsReady(true);
    };

    const handleLanguageChanged = (newLanguage?: string) => {
      if (!isActive) {
        return;
      }

      startTransition(() => {
        setCurrentLanguage(isSupportedLanguage(newLanguage) ? newLanguage : ORIGINAL_LANGUAGE);
      });
    };

    const initializeWeglot = async () => {
      await loadWeglotScript();

      if (!isActive || !window.Weglot) {
        return;
      }

      if (!window.Weglot.initialized && !window.__portfolioWeglotInitialized) {
        window.Weglot.initialize({
          api_key: weglotApiKey,
          hide_switcher: true,
        });
        window.__portfolioWeglotInitialized = true;
      }

      window.Weglot.on("languageChanged", handleLanguageChanged);
      window.requestAnimationFrame(syncLanguage);
    };

    initializeWeglot().catch(() => {
      if (isActive) {
        setIsReady(false);
      }
    });

    return () => {
      isActive = false;
      window.Weglot?.off?.("languageChanged", handleLanguageChanged);
    };
  }, []);

  const value = useMemo<WeglotContextValue>(
    () => ({
      currentLanguage,
      isAvailable: Boolean(weglotApiKey),
      isReady,
      toggleLanguage: () => {
        if (!isReady || !window.Weglot) {
          return;
        }

        const nextLanguage =
          currentLanguage === ORIGINAL_LANGUAGE ? TRANSLATED_LANGUAGE : ORIGINAL_LANGUAGE;

        startTransition(() => {
          setCurrentLanguage(nextLanguage);
        });
        window.Weglot.switchTo(nextLanguage);
      },
    }),
    [currentLanguage, isReady]
  );

  return <WeglotContext.Provider value={value}>{children}</WeglotContext.Provider>;
}

export const useWeglot = () => useContext(WeglotContext);
