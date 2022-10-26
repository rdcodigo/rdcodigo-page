/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      xxl: ['80px', '155px'],
      xs: ['20px', '25px']
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
      'img-header': "url('./public/images/bg-header.jpg')"
    }
  },
  plugins: [],
}