// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inknut: ["var(--font-inknut-antiqua)", "serif"],
        sans: ["var(--font-inter)", "sans"],
      },
    },
  },
  plugins: [],
};

export default config;
