/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#113048',
        'secondary' : '#092337',
        'third' : '#45444A',
        'fourth' : '#d9d9d9',
        'fifth' : "#C0C8CA",
        'sixth' : "#051521",
        'rough' : '#86A788',
        'text1' : '#96A9AD',
        'text2' : '#e1e1da'

      },
      spacing : {
        'e8' : '6rem'
      }
    },
  },
  plugins: [],
}

