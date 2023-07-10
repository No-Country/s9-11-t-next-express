/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'custom-height': '722px',
        'custom-height-mobile': '1500px',
        
      },
      margin:{
        'custom-margin': '4px 0 10px'
      },
      colors: {
        'text-grey': 'rgb(75,75,75)',
        'text-grey2': 'rgb(115,115,115)',
        'text-grey3': 'rgb(53,53,53)',
        'text-grey4': 'rgb(153,153,153)',
        'amarillo-meli':'rgb(255,241,89)',
      },
      maxWidth: {
        'container': '1200px'
      }

    },
  },
  plugins: [],
}
