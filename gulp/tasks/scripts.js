const gulp = require('gulp');
const config = require('../config');
const ts = require('gulp-typescript');
const mergeStream = require('merge-stream');
const babel = require('gulp-babel');

function build() {
  const tsProject = ts.createProject('tsconfig.json');
  const tsResult = gulp
    .src(config.scripts, { cwd: config.src })
    .pipe(tsProject());

  return mergeStream(
    tsResult.js.pipe(
      babel({
        presets: [
          [
            'env',
            {
              targets: {
                browsers: ['last 2 versions', 'safari >= 7'],
                node: '8.0.0',
              },
            },
          ],
        ],
      }),
    ),
    tsResult.dts,
  ).pipe(gulp.dest(config.dest));
}

gulp.task('build', build);

module.exports = build;
