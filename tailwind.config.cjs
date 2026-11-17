/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope Variable"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        ink: "#14161A",
        muted: "#5B6068",
        paper: "#FAFAF7",
        line: "#E8E6DF",
        brand: {
          DEFAULT: "#FFC400",
          dark: "#E6AE00",
          soft: "#FFF4CC",
        },
        wa: "#1FAF55",
        tg: "#229ED9",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,22,26,.04), 0 8px 24px -8px rgba(20,22,26,.10)",
        lift: "0 2px 4px rgba(20,22,26,.05), 0 18px 40px -12px rgba(20,22,26,.18)",
        cta: "0 8px 20px -6px rgba(255,196,0,.55)",
      },
      screens: {
        xs: "450px",
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};
