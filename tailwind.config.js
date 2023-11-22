const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1D3564",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-figtree)"],
        heading: ["var(--font-urbanist)"],
      },

      backgroundImage: (theme) => ({
        hero: "url('/img/hero-bg.jpeg')",
      }),
    },
  },
  plugins: [],
};
