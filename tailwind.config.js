module.exports = {
  mode: "jit",
  purge: ["./partials/**/*.hbs", "./pages/**/*.hbs", "./templates/**/*.hbs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      1: "1px",
    },
    extend: {
      colors: {
        primary: "#002159",
        primaryLight: "#2261ae",
        primaryDark: "#001c4c",
        white: "#fffef4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
