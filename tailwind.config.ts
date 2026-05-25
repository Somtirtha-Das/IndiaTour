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
        yv: {
          black: "#0a0a0f",
          darker: "#050508",
          gold: "#d4af37",
          "gold-light": "#f0d78c",
          saffron: "#ff9933",
          navy: "#0f1729",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-premium":
          "linear-gradient(135deg, #0a0a0f 0%, #0f1729 50%, #1a0f05 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #d4af37 0%, #ff9933 50%, #f0d78c 100%)",
        "glass":
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212, 175, 55, 0.25)",
        "glow-lg": "0 0 60px rgba(212, 175, 55, 0.35)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
