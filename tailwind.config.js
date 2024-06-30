const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#406EC8",
        200: "#3561B8",
        300: "#2F56A2",
        400: "#294A8D",
        500: "#233F78",
        600: "#1D3564",
        700: "#1B305C",
        800: "#192D55",
        900: "#17294E",
      },
      red: colors.red,
      secondary: "#1D6363",
      purple: "#341D63",
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
