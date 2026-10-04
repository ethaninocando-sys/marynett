import type { Metadata } from "next";
import { Source_Serif_4, Figtree } from "next/font/google";
import "./globals.css";
import { agent } from "@/lib/site";

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${agent.name} — Life Insurance & Living Benefits | Rio Grande Valley`,
    template: `%s | ${agent.name}`,
  },
  description:
    "Life insurance you don't have to die to use. Marynett Bolivar is a nurse " +
    "and a licensed Texas agent serving McAllen, Edinburg, Mission and Pharr. " +
    "Fifteen minutes and you'll know where you stand.",
  openGraph: {
    title: `${agent.name} — Life Insurance & Living Benefits`,
    description:
      "A nurse and licensed Texas agent since 2015, serving the Rio Grande Valley.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
