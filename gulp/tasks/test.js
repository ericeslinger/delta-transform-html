const gulp = require('gulp');
const mocha = require('gulp-mocha');
const config = require('../config');

gulp.task('test', ['build'], () => {
  return gulp.src(`${config.tests}/**/*.js`, {cwd: config.dest, read: false})
  .pipe(mocha());
});
