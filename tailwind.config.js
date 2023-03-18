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
        'header-text': '#263238',
        'book-image-bg': '#DFDFDF'
      },
      spacing: {
        headerBg: '43.313rem',
        'footer-h': '6.313rem',
        'page-px': '7.125rem',
        'book-w': '13.5rem',
        'book-h': '24.25rem',
        'book-image-h': '17.728rem',
        'search-h': '4.5rem',
        'btn-w': '12.5rem',
        'btn-h': '3.188rem',
        'header-bg-w': '44.813rem',
        'hot-reads-book-h': '22.125rem',
        'hot-reads-book-w': '15.164rem',
        'header-title-w': '55rem'
      },
      lineHeight: {
        12: '4.5rem'
      },
      screens: {
        lg: '1280px',
        lgxl: '1366px',
        lgxxl: '1920px'
      }
    }
  },
  plugins: []
}
