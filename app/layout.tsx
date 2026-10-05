import type { Metadata } from "next";
import { Instrument_Sans, Lora } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Marynett Bolivar, RN | Independent Agent in Edinburg, Texas",
    template: "%s | Marynett Bolivar, RN",
  },
  description:
    "A registered nurse and licensed Texas insurance agent who helps families understand their protection before they need it.",
  // Keep search engines out until the site is ready to launch.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
