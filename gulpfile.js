const gulp = require('gulp');
const gap = require('gulp-append-prepend');

gulp.task('licenses', async function () {
  gulp
    .src('build/static/js/*chunk.js', { base: './' })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Product Page: https://www.github.com/rodrigo-id-pa/desafio-winter-job
========================================================

*/`),
    )
    .pipe(gulp.dest('./', { overwrite: true }));

  return;
});
