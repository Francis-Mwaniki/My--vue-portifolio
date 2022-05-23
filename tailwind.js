module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  container: {
    center: true,
    padding: '1rem',
    screen: {
      lg: '1024px',
      xl: '1024px',
      '2xl': '1024px'
    },
  },
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },

    },

  },
  plugins: [],
}
