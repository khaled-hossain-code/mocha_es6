'use strict';

const gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  babel = require('gulp-babel');

gulp.task('compile-tests', () => {
  return gulp
    .src(['src/**/*.js'])
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('tmp/src'));
});

// gulp.task('test', ['compile-tests'], () => {
//   return gulp.src(['.tmp/test/**/*.spec.js']).pipe(mocha());
// });

