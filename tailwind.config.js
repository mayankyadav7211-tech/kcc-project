/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#788ca0',
          500: '#5c6f82',
          600: '#475468',
          700: '#334155',
          800: '#1e293b',
          900: '#0f1e33',
          950: '#081426',
        },
        teal: {
          50: '#effcf9',
          100: '#cbf8ef',
          200: '#97f0e0',
          300: '#5ee3cd',
          400: '#2ccbb4',
          500: '#14b099',
          600: '#0a8e7e',
          700: '#0a7166',
          800: '#095a52',
          900: '#084b44',
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 30, 51, 0.06), 0 8px 24px rgba(15, 30, 51, 0.06)',
        cardHover: '0 4px 12px rgba(15, 30, 51, 0.08), 0 16px 40px rgba(15, 30, 51, 0.12)',
        glow: '0 0 0 4px rgba(20, 176, 153, 0.15)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.4s ease both',
        'scale-in': 'scale-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-down': 'slide-down 0.2s ease both',
      },
    },
  },
  plugins: [],
};
