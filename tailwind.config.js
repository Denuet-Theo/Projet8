/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#59d199",
        
"secondary": "#2bbc43",
        
"accent": "#e04ed1",
        
"neutral": "#3A2640",
        
"base-100": "#323843",
        
"info": "#2A6ED5",
        
"success": "#4FD886",
        
"warning": "#F2CF6E",
        
"error": "#F35653",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}

