/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["@./index.html","./src/**/*.{vue,js,jsx,tsx}"],
  theme: {
    extend:{
      colors: {
        "primario":"#006684",
        "secundario":"#004E71",
      },
    },
    fontFamily: {
      Raleway:['Raleway, sans-serif']
    },
    container:{
      padding:"2rem",
      center:true
    },
    screens:{
      sm:"640px",
      md:"768px",
    }
  },
  
  plugins: [],
}
