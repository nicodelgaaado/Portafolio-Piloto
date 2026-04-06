"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

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
    wait_transition?: boolean;
    cache?: boolean;
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
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(ORIGINAL_LANGUAGE);
  const [isReady, setIsReady] = useState(false);
  const desiredLanguageRef = useRef<SupportedLanguage>(ORIGINAL_LANGUAGE);
  const syncRouteRef = useRef<((targetLanguage?: SupportedLanguage) => void) | null>(null);
  const syncFrameRef = useRef<number | null>(null);
  const syncTimeoutRef = useRef<number | null>(null);

  const clearPendingRouteSync = () => {
    if (syncFrameRef.current !== null) {
      window.cancelAnimationFrame(syncFrameRef.current);
      syncFrameRef.current = null;
    }

    if (syncTimeoutRef.current !== null) {
      window.clearTimeout(syncTimeoutRef.current);
      syncTimeoutRef.current = null;
    }
  };

  const commitCurrentLanguage = (language: SupportedLanguage) => {
    desiredLanguageRef.current = language;
    setCurrentLanguage(language);
  };

  useEffect(() => {
    if (!weglotApiKey) {
      return;
    }

    let isActive = true;

    const readCurrentLanguage = () => {
      if (!window.Weglot) {
        return ORIGINAL_LANGUAGE;
      }

      const nextLanguage = window.Weglot.getCurrentLang();
      return isSupportedLanguage(nextLanguage) ? nextLanguage : ORIGINAL_LANGUAGE;
    };

    const syncLanguage = (targetLanguage?: SupportedLanguage) => {
      if (!isActive || !window.Weglot) {
        return;
      }

      const resolvedLanguage = targetLanguage ?? desiredLanguageRef.current;

      if (resolvedLanguage === TRANSLATED_LANGUAGE) {
        window.Weglot.switchTo(TRANSLATED_LANGUAGE);
        return;
      }

      if (window.Weglot.getCurrentLang() !== ORIGINAL_LANGUAGE) {
        window.Weglot.switchTo(ORIGINAL_LANGUAGE);
      }
    };

    const handleLanguageChanged = (newLanguage?: string) => {
      if (!isActive) {
        return;
      }

      commitCurrentLanguage(isSupportedLanguage(newLanguage) ? newLanguage : readCurrentLanguage());
    };

    const syncRouteLanguage = (targetLanguage?: SupportedLanguage) => {
      if (!isActive) {
        return;
      }

      const desiredLanguage = targetLanguage ?? desiredLanguageRef.current;

      clearPendingRouteSync();
      syncFrameRef.current = window.requestAnimationFrame(() => {
        syncLanguage(desiredLanguage);
        syncTimeoutRef.current = window.setTimeout(() => syncLanguage(desiredLanguage), 180);
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
          wait_transition: true,
          cache: true,
        });
        window.__portfolioWeglotInitialized = true;
      }

      window.Weglot.on("languageChanged", handleLanguageChanged);
      syncRouteRef.current = syncRouteLanguage;
      commitCurrentLanguage(readCurrentLanguage());
      setIsReady(true);
      syncRouteLanguage(readCurrentLanguage());
    };

    initializeWeglot().catch(() => {
      if (isActive) {
        setIsReady(false);
      }
    });

    return () => {
      isActive = false;
      clearPendingRouteSync();
      syncRouteRef.current = null;
      window.Weglot?.off?.("languageChanged", handleLanguageChanged);
    };
  }, []);

  useEffect(() => {
    if (!weglotApiKey || !isReady) {
      return;
    }

    syncRouteRef.current?.(desiredLanguageRef.current);
  }, [isReady, pathname]);

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
          desiredLanguageRef.current === ORIGINAL_LANGUAGE
            ? TRANSLATED_LANGUAGE
            : ORIGINAL_LANGUAGE;

        desiredLanguageRef.current = nextLanguage;
        window.Weglot.switchTo(nextLanguage);
      },
    }),
    [currentLanguage, isReady]
  );

  return <WeglotContext.Provider value={value}>{children}</WeglotContext.Provider>;
}

export const useWeglot = () => useContext(WeglotContext);
