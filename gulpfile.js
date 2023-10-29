const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const sourcePath = 'src/scss/**/*.scss';
const destPath = 'src/css';

function compileSass() {
  return gulp
    .src(sourcePath)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(destPath));
}

function watch() {
  gulp.watch(sourcePath, compileSass);
}

exports.compileSass = compileSass;
exports.watch = watch;
exports.default = watch;