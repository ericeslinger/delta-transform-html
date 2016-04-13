const config = require('../config');
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', (cb) => {
  del([config.dest]).then(() => cb());
});
