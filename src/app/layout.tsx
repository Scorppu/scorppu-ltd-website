import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: {
    default: `${portfolio.name} · ${portfolio.role}`,
    template: `%s · ${portfolio.name}`,
  },
  description: portfolio.about,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
