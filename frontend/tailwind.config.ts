import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Zain", "sans-serif"],
        zain: ["Zain", "sans-serif"],
        goth: ["UnifrakturCook", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        barrio: ["Barrio", "sans-serif"],      
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
