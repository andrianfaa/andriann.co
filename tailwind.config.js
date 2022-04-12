/* eslint-disable global-require */

module.exports = {
  content: [
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: ({ colors }) => ({
        ...colors,
        primary: {
          DEFAULT: '#e4ff14',
          dark: '#C8E012',
        },
        'custom-text': {
          DEFAULT: '#cacccf',
          light: '#fafcff',
        },
        'custom-black': {
          DEFAULT: '#0a0c0f',
          800: '#1a1c1f',
          700: '#2a2c2f',
          600: '#3a3c3f',
          500: '#4a4c4f',
          400: '#5a5c5f',
          300: '#6a6c6f',
          200: '#7a7c7f',
          100: '#8a8c8f',
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
