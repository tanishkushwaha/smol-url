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
        primary: "#390099",
        secondary: "#ffbd00",
        accent: "#ff5400",
        accentDark: "#9e0059",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};
export default config;
