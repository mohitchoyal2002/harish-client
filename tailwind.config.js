/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        xxs: '8px'
      },
      fontWeight:{
        extra_bold: 900
      },
      colors: {
        banner_yellow: '#e2b42d',
        text_yellow: '#EFE507',
        btn_red: '#d41816',
        pure_lime: '#adff4d',
        btn_blue: '#002950',
        text_dark_blue: '#1b2838'
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      backgroundColor: {
        smoke_bg: '#f6f6f6',
        dark_blue: '#1b1731'
      },
      backgroundImage: {
        dark_blue_image: 'linear-gradient(90deg,#1B1530 0%,#172B34 100%)'
      },
      background: {
        royal_back: 'linear-gradient(90deg,#1B1530 0%,#172B34 100%)'
      }
    },
  },
  plugins: [],
}

