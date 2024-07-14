/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        bananaleaf_bg:'url("src/assets/banana_leaf2.jpeg")',
      },
      colors:{
        nav_primary: "#DAB053", //mustard yellow
        nav_footer: "#304922", //pine green
        primary: "#F6EFDD", //warm beige
        secondary: "#ED6160", //rhubarb red
        hover_text: "#8EB44F", // pear green

        mustard_yellow: "#DAB053",
        pine_green: "#304922",
        warm_beige: "#F6EFDD",
        rhubarb_red: "#ED6160",
        pear_green: "#8EB44F",
      }
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
      }

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

