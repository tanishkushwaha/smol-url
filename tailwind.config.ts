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
        primary: "#ebebeb",
        secondary: "#0d2028",
        accent: "#e0cf87",
        accentDark: "#ada268",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};
export default config;
