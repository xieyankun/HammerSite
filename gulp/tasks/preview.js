/*
*  @by kira
*  @2017-09-19
*  用于发布预览版本
*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const path = require('../config');

const source = [
  path.srcPath.html + '/**/*',
  '!' + path.srcPath.sass + '/**/*',
  '!' + path.srcPath.less + '/**/*',
];

gulp.task('preview', ['clean'], () => // 开始任务前会先执行[clean]任务
  gulp.src(source)
    .pipe(debug({ title: '编译预览:' }))
    .pipe(gulp.dest(path.distPath.html))); // 拷贝到指定目录

