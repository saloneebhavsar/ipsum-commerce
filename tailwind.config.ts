import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "32px",
          lg: "40px",
          xl: "40px",
          "2xl": "40px",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#1A1919",
          light: "#3E4545",
          lighter: "#EBEBEB",
        },
        secondary: "#FFBA00",
        black: "#222222",
        green: "#13997C",
        white: "#FFFFFF",
        gray: "#98A2B3"
      },
    },
  },
  plugins: [],
} satisfies Config;
