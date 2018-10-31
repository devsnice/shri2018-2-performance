const gulp = require('gulp');
const terser = require('gulp-terser');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');


gulp.task('compress-js', function (cb) {
  return gulp.src('./scripts.js')
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest("./"));
});

gulp.task('compress-css', function (cb) {
  return gulp.src('./styles.css')
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest("./"));
});


gulp.task("default", ["compress-js", "compress-css"], () => {
  console.log("Compressed");
});