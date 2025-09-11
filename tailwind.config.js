/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bronze: {
          DEFAULT: '#CD7F32',
          50: '#F5E6D3',
          100: '#EDD7C3',
          200: '#DEBD9E',
          300: '#CFA379',
          400: '#C19254',
          500: '#CD7F32',
          600: '#B8722C',
          700: '#A36626',
          800: '#8E5A20',
          900: '#7A4D1B',
          dark: '#B8860B',
        },
        gold: {
          DEFAULT: '#DAA520',
          50: '#F7F1D9',
          100: '#F3EACA',
          200: '#EBDCAC',
          300: '#E3CE8E',
          400: '#DCC070',
          500: '#DAA520',
          600: '#C4951D',
          700: '#AE851A',
          800: '#987517',
          900: '#826514',
        },
        primary: {
          DEFAULT: '#ff007f',
          light: '#ff328c',
          dark: '#db2777',
          darker: '#f472b6',
        },
        'primary-dark': '#B8860B',
        secondary: '#DAA520',
        accent: '#F4A460',
        background: '#FFFFFF',
        foreground: '#1A1A1A',
        dark: {
          DEFAULT: '#3c3c3c',
        },
        footer: {
          DEFAULT: '#ea3a84',
        },
        success: {
          DEFAULT: '#28a745',
        },
        freeShipping: {
          bg: '#e3f9e5',
          text: '#2e7d32',
        },
        discount: {
          DEFAULT: '#e60023',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
