import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { agent } from "@/lib/site";

/** Display face. The template runs it at Light (300) with -0.04em tracking. */
const display = Crimson_Pro({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

/** Satoshi isn't on Google Fonts. Self-hosted from Fontshare for the labels. */
const label = localFont({
  src: "./fonts/Satoshi-Medium.woff2",
  variable: "--font-label",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${agent.name}, RN | Independent Agent in Edinburg, Texas`,
    template: `%s | ${agent.name}`,
  },
  description:
    "Life insurance you don't have to die to use. I'm Marynett, a nurse and a " +
    "licensed Texas agent working McAllen, Edinburg, Mission and Pharr. " +
    "Give me fifteen minutes and you'll know where you stand.",
  openGraph: {
    title: `${agent.name}, RN | Independent Agent`,
    description:
      "A nurse and a licensed Texas agent since 2015, working the Rio Grande Valley.",
    type: "website",
    locale: "en_US",
  },
  /**
   * Stays out of search until FEG compliance approves the site in writing
   * (Agent Agreement 2(C)). Flip this at launch, not before.
   */
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${label.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
