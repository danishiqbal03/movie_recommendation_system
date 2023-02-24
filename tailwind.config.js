/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-button': '#fb923c',
      },
      
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn': {
          background: '#f857a6',
          padding: '12px 15px',
          textAlign: 'center',
          display:'block',
          color: 'white',
          borderRadius: '8px',
        },
        '.btn-search': {
          background: '#f857a6',
          padding: '12px 15px',
          textAlign: 'center',
          display:'block',
          color: 'white',
          borderTopRightRadius:'8px',
          borderBottomRightRadius:'8px',
        },

        '.logo-underline':{
            textDecorationLine: 'underline',
            textDecorationStyle: "solid",
            textDecorationColor: '#f857a6',
            textDecorationThickness: '5px',
        }
      });
    }
  ],
}