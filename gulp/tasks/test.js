const gulp = require('gulp');
gulp.task('test', ['build'], () => {
  const transform = require('../../dist/transform');
  transform.testDeltas();
});
