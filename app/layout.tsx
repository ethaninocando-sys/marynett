import type { Metadata } from "next";
import { Crimson_Pro, Inter, Lora, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { agent } from "@/lib/site";
import { DirectionSwitch } from "@/components/layout/direction-switch";

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

/** Direction B (Sevora): Lora display over Instrument Sans. Both on Google Fonts. */
const loraDisplay = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
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
    "In fifteen minutes you'll know what your policy pays and what it doesn't.",
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
      className={`${display.variable} ${body.variable} ${label.variable} ${loraDisplay.variable} ${instrument.variable} h-full antialiased`}
    >
      {/* pb leaves room for the review-only direction switch at the bottom. */}
      <body className="flex min-h-full flex-col pb-20">
        {children}
        {/* Review-only A/B switch. Remove before launch. */}
        <DirectionSwitch />
      </body>
    </html>
  );
}
