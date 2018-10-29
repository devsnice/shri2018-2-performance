const gulp = require('gulp');
const terser = require('gulp-terser');
const cssnano = require('gulp-cssnano');

const publicDistFolder = "dist";

gulp.task('compress-js', function (cb) {
  return gulp.src('./scripts.js')
    .pipe(terser())
    .pipe(gulp.dest(publicDistFolder));
});

gulp.task('compress-css', function (cb) {
  return gulp.src('./styles.css')
    .pipe(cssnano())
    .pipe(gulp.dest(publicDistFolder));
});


gulp.task("default", ["compress-js", "compress-css"], () => {
  console.log("Compressed");
});