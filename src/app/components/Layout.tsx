"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
];

const socialItems = ["Mail", "Github", "LinkedIn"];

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="relative z-50 border-b-2 border-black bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <span className="font-mono uppercase tracking-wider">Portfolio</span>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-black transition-colors hover:bg-black/5 focus-visible:outline-none sm:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={2.25} /> : <Menu size={20} strokeWidth={2.25} />}
            </button>

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

        {isMobileMenuOpen ? (
          <div
            id="mobile-navigation"
            className="absolute inset-x-4 top-[calc(100%+0.75rem)] z-40 min-h-[19rem] rounded-[0.9rem] border border-black/35 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.14)] sm:hidden"
          >
            <nav className="p-5">
              <ul className="flex w-full flex-col gap-5 pt-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`inline-flex min-w-[8rem] items-center rounded-md px-4 py-3 font-mono text-sm uppercase tracking-[0.14em] transition-colors ${
                        pathname === item.path
                          ? "bg-black text-white"
                          : "text-black/80 hover:bg-black hover:text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t-2 border-black">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-mono text-sm">(C) 2026 Nicolas Delgado</p>
            <div className="flex gap-4">
              {socialItems.map((social) => (
                <div
                  key={social}
                  className="flex h-8 w-8 items-center justify-center border-2 border-black"
                >
                  <span className="font-mono text-xs">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
