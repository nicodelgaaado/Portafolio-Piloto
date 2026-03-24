"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
];

const socialItems = [
  {
    label: "Mail",
    href: "mailto:nicolasfedericodelgado@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/nicodelgaaado",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicodelgaaado",
    icon: Linkedin,
  },
];
const mobileMenuTransitionMs = 180;

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pendingNavigationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (pendingNavigationRef.current) {
        clearTimeout(pendingNavigationRef.current);
      }
    };
  }, []);

  const handleMobileMenuToggle = () => {
    if (pendingNavigationRef.current) {
      clearTimeout(pendingNavigationRef.current);
      pendingNavigationRef.current = null;
    }

    setIsMobileMenuOpen((current) => !current);
  };

  const handleMobileNavigation = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();

    if (pendingNavigationRef.current) {
      clearTimeout(pendingNavigationRef.current);
    }

    setIsMobileMenuOpen(false);

    if (pathname === path) {
      pendingNavigationRef.current = null;
      return;
    }

    pendingNavigationRef.current = setTimeout(() => {
      router.push(path);
      pendingNavigationRef.current = null;
    }, mobileMenuTransitionMs);
  };

  return (
    <div className="min-h-screen bg-transparent text-black">
      <header className="relative z-50 border-b border-black/12 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <span className="font-mono uppercase tracking-wider">Portfolio</span>
            </div>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="sm:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={2.25} /> : <Menu size={20} strokeWidth={2.25} />}
            </Button>

            <nav className="hidden sm:block">
              <ul className="flex flex-wrap gap-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`font-mono text-xs uppercase tracking-wide sm:text-sm ${
                        pathname === item.path
                          ? "font-bold"
                          : "opacity-80 transition-opacity hover:opacity-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div
          id="mobile-navigation"
          aria-hidden={!isMobileMenuOpen}
          className={`absolute inset-x-4 top-[calc(100%+0.75rem)] z-40 transition-all duration-200 ease-out sm:hidden ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <Card className="min-h-[19rem] border-black/15 bg-white/96 p-5 shadow-[0_18px_45px_rgba(3,2,19,0.12)]">
            <nav>
              <ul className="flex w-full flex-col gap-5 pt-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Button
                      asChild
                      variant={pathname === item.path ? "default" : "ghost"}
                      className="flex h-auto w-full items-center justify-center rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-[0.14em]"
                    >
                      <Link href={item.path} onClick={(event) => handleMobileNavigation(event, item.path)}>
                        {item.label}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </Card>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-black/12">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-mono text-sm">© 2026 Nicolas Delgado</p>
            <div className="flex items-center gap-2">
              <Separator orientation="vertical" className="hidden h-6 sm:block" />
              {socialItems.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-black/80 hover:text-black"
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={social.label}
                  >
                    <social.icon size={19} strokeWidth={2} />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
