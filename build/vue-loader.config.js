module.exports = {
  extractCSS: process.env.NODE_ENV === 'produciton',
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}