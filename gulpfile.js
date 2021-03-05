const { src, dest, watch, parallel } = require('gulp'),
  scss = require('gulp-sass'),
  concat = require('gulp-concat'),
  browsersync = require('browser-sync').create(),
  uglify = require('gulp-uglify-es').default,
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  del = require('del'),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  htmlmin = require('gulp-htmlmin'),
  babel = require('gulp-babel'),
  webpackConfig = require('./webpack.config.js')

const dist = './dist'

function copyHtml() {
  return src('./src/_site/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(dist))
    .pipe(browsersync.stream())
}

function copyAssets() {
  return src('./src/assets/**/*.*').pipe(imagemin()).pipe(dest(dist + '/assets'))
}

function watching() {
  browsersync.init({
    server: './dist/',
    port: 4000,
    notify: true,
  })

  watch('./src/js/**/*').on('change', js)
  watch('./src/scss/**/*').on('change', styles)
  watch('./_site/**/*.html').on('change', copyHtml)
}

function cleanDist() {
  return del(dist)
}

function js() {
  return src('./src/js/main.js').pipe(webpackStream(webpackConfig), webpack).pipe(dest(dist)).pipe(browsersync.stream())
}

function styles() {
  return src('src/scss/style.scss')
    .pipe(scss({ outputStyle: 'compressed' }).on('error', scss.logError))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer())
    .pipe(dest(dist))
    .pipe(browsersync.stream())
}

exports.js = js
exports.watch = watching
exports.styles = styles
exports.copyAssets = copyAssets
exports.copyHtml = copyHtml
exports.cleanDist = cleanDist

exports.default = parallel(copyAssets, copyHtml, styles, js, watching)
