const gulp = require('gulp');
require('./tasks');

gulp.task('default', gulp.series('clean', 'build'));
