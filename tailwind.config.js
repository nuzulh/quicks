import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{ts,tsx}"],
  theme: {
    colors: {
      // Primary colors
      blue: "#2F80ED",
      dark: "#4F4F4F",
      gray: "#828282",
      light: "#E0E0E0",
      // Indicator colors
      warning: "#F8B76B",
      success: "#8785FF",
      error: "#EB5757",
      info: "#F2C94C",
      // Chat colors
      chat1: "#E5A443",
      chat1Light: "#FCEED3",
      chat2: "#9B51E0",
      chat2Light: "#EEDCFF",
      chat3: "#43B78D",
      chat3Light: "#D2F2EA",
      // Sticker colors
      sticker1: "#E9F3FF",
      sticker2: "#FDCFA4",
      sticker3: "#F9E9C3",
      sticker4: "#AFEBDB",
      sticker5: "#CBF1C2",
      sticker6: "#CFCEF9",
      sticker7: "#F9E0FD",
      // Additionals
      background: "#333333",
      semiwhite: "#F2F2F2",
      white: "#FFFFFF",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    scrollbar({ nocompatible: true }),
  ],
}

