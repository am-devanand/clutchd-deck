import type { Config } from "tailwindcss";

// Stitch-2 precision deck palette + type slots (see app/globals.css).
// Token names are stable: ink, paper, beacon, amber, steel, glow.
// Primary BASE is blue-600 #2563EB (hover blue-700 #1D4ED8).
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        beacon: "var(--beacon)",
        amber: "var(--amber)",
        steel: "var(--steel)",
        glow: "var(--glow)",
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
        data: ["var(--font-data)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
