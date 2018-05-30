// 编译sass
const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const path = require('../config');
const handleErrors = require('../util/handleErrors');

gulp.task('sass', () => gulp.src(path.srcPath.sass + '/**/*.scss')
  .pipe(debug({ title: '编译sass:' }))
  .pipe(sass())
  .on('error', handleErrors)
  .pipe(gulp.dest(path.srcPath.css)));
