import type { Metadata } from "next";
import { Inter, Noto_Sans_Tamil, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

// P2 i18n (docs/TAMIL-PLAN.md §5): Inter/PJS have no Tamil glyphs. Noto Sans
// Tamil is appended to every CSS font chain so Tamil text falls back to it
// per-glyph while Latin text stays on Inter/PJS.
const tamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ClutchD — Connected Automotive Care",
  description:
    "On-demand verified mechanics, roadside help, parts marketplace, real-time tracking and digital service history: one connected automotive ecosystem, live in Coimbatore.",
};

// P0 i18n scaffold (docs/TAMIL-PLAN.md): this IS the root layout — Next only
// passes [locale] params to layouts at or below the [locale] segment, so the
// html/body must live here (a root app/layout.tsx never sees `locale` and its
// notFound() guard 404'd every prerendered page). setRequestLocale keeps all
// renders static; unknown locales 404.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number]))
    notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${tamil.variable} antialiased bg-white text-slate-900 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
