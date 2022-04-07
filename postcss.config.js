module.exports = {
  plugins: {
    'postcss-nested': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': false,
      },
    },
  },
};
