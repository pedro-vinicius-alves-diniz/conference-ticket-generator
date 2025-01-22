/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'n-0': 'hsl(0, 0%, 100%)',
        'n-300': 'hsl(252, 6%, 83%)',
        'n-500': 'hsl(245, 15%, 58%)',
        'n-700': 'hsl(245, 19%, 35%)',
        'n-900': 'hsl(248, 70%, 10%)',
        'orange-5': 'hsl(7, 88%, 67%)',
        'orange-7': 'hsl(7, 71%, 60%)',
        'gradient-from': 'hsl(7, 86%, 67%)',
        'gradiente-to': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'incosolata': ['Inconsolata', 'sans-serif'],
      },

      backgroundImage: {
        'mobile': 'url(./src/assets/images/background-mobile.png)',
        'tablet': 'url(./src/assets/images/background-tablet.png)',
        'desktop': 'url(./src/assets/images/background-desktop.png)',
        'ticket': 'url(./src/assets/images/pattern-ticket.svg)'
      },
      aspectRatio: {
        'ticket': '15 / 7'
      }
    },
  },
  plugins: [],
}

