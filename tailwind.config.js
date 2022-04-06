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
        mono: ['JetBrains Mono', 'Fira Code', 'Fira Mono', 'Menlo', 'Consolas', 'DejaVu Sans Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
