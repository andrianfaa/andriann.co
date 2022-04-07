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
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
        },
        'custom-text': {
          DEFAULT: '#9ca3af',
          light: '#f3f4f6',
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
