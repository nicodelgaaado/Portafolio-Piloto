import type { Metadata } from "next";
import type { ReactNode } from "react";
import Layout from "@/app/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description: "Portfolio website rebuilt with Next.js App Router and Tailwind CSS.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
