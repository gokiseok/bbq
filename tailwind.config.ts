import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#0a0a0a",
        "bg-card": "#141414",
        "bg-section": "#0f0f0f",
        gold: "#c9a84c",
        "gold-light": "#e8c97a",
        "gold-dark": "#8a6f2e",
        "text-primary": "#f5f0e8",
        "text-muted": "#888070",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        brand: ["SolmoeKDG", "serif"],
      },
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [],
};
export default config;
