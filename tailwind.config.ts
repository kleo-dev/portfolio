import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: '#f5304c',
        'red-400': '#fa5770',
        'red-600': '#eb2642',
        'transparent-ish': '#0000006F'
      },
    },
  },
  plugins: [],
} satisfies Config;
