'use strict'

const path = require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('css:critical', _ => {
  const critical = path.resolve(__dirname, 'css/critical.scss')
  const destination = path.resolve(__dirname, 'build/css')

  return gulp.src(critical)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest(destination))
})

gulp.task('default', ['css:critical'])
