const gulp = require('gulp');
const config = require('../config');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

function build() {
  return gulp.src(config.scripts, {cwd: config.src})
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['babel-preset-es2015'],
    plugins: ['transform-es2015-modules-commonjs'],
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.dest));
}

module.exports = build;

gulp.task('build', build);
