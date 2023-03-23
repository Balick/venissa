module.exports = {
  content: [
    './index.html', './pages/**/*.html'
  ],
  theme: {
    extend: {
      FontFamily : {
        'anto' : ['Anto, Fantasy']
      },
      screens : {
        'mobile1' : '400px',
        'tablet' : '640px',
        'laptop' : '1024px',
        'desktop' : '1280px'
      },
      colors: {
        'redpink': '#f03b65',
        'redtransparent': '#f03b6599',
        'skytransparent': '#87ceeb75',
        'lightcyan': '#f8f7ff',
        'lightred': '#FFF1F4',
        'babypowder': '#FAFFFD',
      }
    },
  },
  plugins: [],
}
