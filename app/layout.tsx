import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "ClutchD — Deck",
  description:
    "Standalone ClutchD marketing deck. Separate repo from ClutchD-App; nothing is imported from the app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
