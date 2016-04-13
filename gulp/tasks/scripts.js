'use strict';
const gulp = require('gulp');
const config = require('../config');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

function build() {
  return gulp.src(config.scripts, {cwd: config.src})
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.dest));
}

module.exports = build;

gulp.task('build', build);
