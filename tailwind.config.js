/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#F3F6F1",
          100: "#E3EBDF",
          200: "#C7D6BE",
          300: "#A9C19C",
          400: "#8FAE7F",
          500: "#6F9459",
          DEFAULT: "#9DB88C",
        },
        forest: {
          50: "#E9F0E5",
          100: "#C9DABF",
          400: "#2F4A33",
          500: "#213A26",
          600: "#182C1C",
          700: "#101F14",
          DEFAULT: "#213A26",
        },
        lime: {
          DEFAULT: "#C9E35A",
          400: "#D7EA7F",
          500: "#C9E35A",
          600: "#AFC746",
        },
        paper: "#FBFAF7",
        ink: "#15190F",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(21, 25, 15, 0.04), 0 8px 24px rgba(21, 25, 15, 0.05)",
      },
    },
  },
  plugins: [],
};
