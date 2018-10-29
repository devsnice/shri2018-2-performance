const gulp = require('gulp');
const terser = require('gulp-terser');
const pump = require('pump');

const publicDistFolder = "dist";

gulp.task('compress', function (cb) {
  pump([
    gulp.src('./scripts.js'),
    terser(),
    gulp.dest(publicDistFolder)
  ],
    cb
  );
});


gulp.task("default", ["compress"], () => {
  console.log("Compressed");
});