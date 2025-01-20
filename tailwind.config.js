/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
  prefix: "tw-",
  theme: {
    extend: {
      spacing: {
        1.25: "0.313rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.25: "1.563rem",
        7.5: "1.875rem",
        9.5: "2.375rem",
        10.75: "2.688rem",
        12.5: "3.125rem",
        14.5: "3.625rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      colors: {
        white: "#fff",
        blue: "#3568F9",
        "blue-hover": "#2D59D4",
        "blue-active": "#2850B7",
        "gray-input": "#D9D9D9",
        "gray-second": "#F0F1F2",
        gray: "#AFAFAF",
        "gray-border": "#DCDFE3",
        negative: "#DE4444",
        "negative-hover": "#CC2323",
        "negative-active": "#B21010",
        success: "#14A473",
        dark: "#172A3F",
        line: "#707070",
        "input-gray": "#F1F1F1",
        "input-hover": "#C2C8CE",

        active: "#2850B7",
      },
      fontSize: {
        xss: ["0.5rem", "0.688rem"], // 8 11
        "xss-2": ["0.625rem", "0.875rem"], // 10 14
        sm: ["0.875rem", "1.188rem"], // 14 19
        sm2: ["1rem", "1.5rem"], // 16 24
        lg: ["1.125rem", "1.563rem"], //18 25
        xl: ["1.25rem", "1.688rem"], // 20 27
        "1xl": ["1.375rem", "1.875rem"], // 22 30
        "2xl": ["1.5rem", "2.063rem"], //24 33
      },
      borderRadius: {
        base: "0.313rem",
      },
      dropShadow: {
        base: "0px 8px 24px rgba(0, 0, 0, 0.25)",
        md: "0px 2px 3px #3568F9",
      },
      boxShadow: {
        base: "0px 8px 24px rgba(0, 0, 0, 0.25)",
        promo: "0px 1px 8px rgba(208, 216, 241, 0.48)",
        card: "0px 1px 8px rgba(228, 228, 228, 0.66)",
        item: "0px 1px 8px #98AEF6",
      },
    },
    fontFamily: {
      roboto: "Roboto",
    },

    screens: {
      l: "1200px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
