/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        sidebarleft: "#2c2537",
        main: "#221a2d",
        sidebarright: "#120822",
        player: "#130c1c",
      },
      colors: {
        "link-text-hover": " #c273ed",
        "hover-circle": "hsla(0,0%,100%,.1)",
        "color-detail-playlist":"hsla(0,0%,100%,0.5)"
      },
     
    },
  },
  plugins: [],
};
