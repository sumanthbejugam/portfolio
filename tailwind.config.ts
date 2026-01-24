import type { Config } from "tailwindcss";

export default {
  content: ["./client/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        primary: "#ffffff",
        secondary: "rgba(255, 255, 255, 0.6)",
        accent: "#3b82f6", // Subtle blue accent for tech feel
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "glass-bg": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
