import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        melody: {
          base: "var(--melody-base)",
          surface: "var(--melody-surface)",
          "surface-low": "var(--melody-surface-low)",
          "surface-high": "var(--melody-surface-high)",
          accent: "var(--melody-accent)",
          "accent-hover": "var(--melody-accent-hover)",
        },
        text: {
          primary: "var(--melody-text-primary)",
          secondary: "var(--melody-text-secondary)",
          subdued: "var(--melody-text-subdued)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
