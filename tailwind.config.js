/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-light': '#EAE6D7',
        green: '#1C3F3A',
        dark: '#1E1E1E',
        'header-text': '#263238'
      },
      spacing: {
        headerBg: '43.313rem'
      }
    }
  },
  plugins: []
}
