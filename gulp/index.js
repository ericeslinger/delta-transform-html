'use strict';
const gulp = require('gulp');
require('./tasks');

gulp.task('default', ['clean', 'build']);
