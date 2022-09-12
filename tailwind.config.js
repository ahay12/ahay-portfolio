module.exports = {
  content: ["./blog/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        body: "#17171F",
        "selected-text": "#A3A3FF",
        theme: "#3F3FFF",
        primary: "#4f46e5",
        nav: "#404053",
        secondary: "#9191A4",
        badge: "#3F3F51",
        "input-border": "#565666",
        input: "#2A2A35",
      },
      screens: {
        "2xl": "1280px",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
