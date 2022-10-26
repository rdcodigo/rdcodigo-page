/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      xl: ['100px', '200px'],
      md: ['80px', '150px'],
      m: ['30px', '50px'],
      sm: ['20px', '25px'],
      xs: ['15px', '20px'],
    },
    colors: {
      color1: '#D9D9D9',
      color2: '#000000',
      color3: '#131416',
      color4: '#E09F3E',
    },
    fontFamily: {
      'inter': ['Inter', 'system-ui'],
      'buda': ['Buda', 'Georgia'],
      'amita': ['Amita', 'Georgia'],
    },
    backgroundImage: {
      'img-header': "url('./public/images/bg-header.jpg')",
      'img-card': "url('./public/images/bg-card.jpg')"
    }
  },
  plugins: [],
}