module.exports = {
  transformers: {
    postcss: {
      plugins: [
        require('autoprefixer')({ browsers: 'last 2 versions' })
      ]
    },
  },
};
