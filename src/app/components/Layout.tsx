"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b-2 border-black">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <span className="font-mono uppercase tracking-wider">Portfolio</span>
            </div>

            <nav className="w-full sm:w-auto">
              <ul className="flex flex-wrap gap-3 sm:gap-6">
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
