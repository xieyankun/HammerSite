// HTML处理
const gulp = require('gulp');
const changed = require('gulp-changed');
const debug = require('gulp-debug');
const path = require('../config');

const srcPath = path.srcPath.html;
const distPath = path.distPath.html;

gulp.task('html', () => gulp.src(srcPath + '/**/*.html')
  .pipe(debug({ title: '编译html:' }))
  .pipe(changed(distPath, { extension: '.html' }))
  .pipe(gulp.dest(distPath)));
