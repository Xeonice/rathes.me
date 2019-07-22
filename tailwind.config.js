const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      black: "#111",
      silver: {
        default: "#CFD3DC",
        darker: "#CCC",
        darkest: "#AAA",
      },
      white: "#FFF",
    },
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "570px": "570px",
      },
      screens: {
        xs: "375px",
      },
      inset: {
        4: "12px",
        "1/2": "50%",
      },
    },
  },
  variants: {},
  plugins: [],
}
