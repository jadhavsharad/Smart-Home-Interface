const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      fontFamily:{
        'Inter': ['Inter'],
        'InterTight': ['Inter Tight'],
        'Poppins': ['Poppins'],
        'Syne': ['Syne'],
        'Syncopate': ['Syncopate'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

