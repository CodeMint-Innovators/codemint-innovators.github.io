/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1a232e",
          "200": "rgba(26, 35, 46, 0.5)",
          "300": "rgba(255, 255, 255, 0.75)",
          "400": "rgba(0, 26, 50, 0.05)",
          "500": "rgba(26, 35, 46, 0.75)",
          "600": "rgba(0, 0, 0, 0)",
        },
        white: "#fff",
        mediumslateblue: {
          "100": "#495bfb",
          "200": "rgba(73, 91, 251, 0.5)",
        },
        aquamarine: "#80ffdb",
        deepskyblue: "#4ea8de",
        gainsboro: {
          "100": "rgba(217, 217, 217, 0.5)",
          "200": "rgba(217, 217, 217, 0)",
          "300": "rgba(217, 217, 217, 0.05)",
        },
        cornflowerblue: "#5390d9",
        turquoise: "#72efdd",
        darkviolet: "#7400b8",
        midnightblue: {
          "100": "rgba(3, 4, 94, 0.5)",
          "200": "rgba(3, 4, 94, 0.2)",
        },
        mediumturquoise: "#64dfdf",
        slateblue: "#5e60ce",
        cadetblue: "#5ab5c3",
        darkorchid: "#6930c3",
        blueviolet: "#9747ff",
        black: "#000",
        darkgray: "#a4a4a4",
      },
      spacing: {},
      fontFamily: {
        questrial: "Questrial",
        lato: "Lato",
        "kaisei-decol": "'Kaisei Decol'",
      },
      borderRadius: {
        xl: "20px",
        "78xl-5": "97.5px",
        "34xl": "53px",
        "6xl": "25px",
        "31xl": "50px",
        "105xl": "124px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "41xl": "60px",
      "46xl": "65px",
      "11xl": "30px",
      "31xl": "50px",
      "56xl": "75px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
