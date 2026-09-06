/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111111',
        'warm-white': '#F7F7F5',
        electric: '#4B58FF',
        'warm-grey': '#E8E8E3',
        'electric-dark': '#3A47E0',
        'electric-light': '#6B76FF',
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 7vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'section': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'sub': ['clamp(1.125rem, 1.8vw, 1.375rem)', { lineHeight: '1.5' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
