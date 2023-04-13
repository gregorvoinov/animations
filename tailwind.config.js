/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      anton: "Anton",
      lato: "Lato",
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        'navi-blue': '#050F26',
        coral: '#ED8880',
        'steel-gray': '#676C73'
      },
      aspectRatio: {
        '5/4': '5 / 4',
        '16/10': '16 / 10',
        '4/3': '4 / 3',
      }
    },
  },
  plugins: [],
}

