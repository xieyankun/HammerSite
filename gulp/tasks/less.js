const gulp = require('gulp');
const less = require('gulp-less');
const debug = require('gulp-debug');
const path = require('../config');

gulp.task('less', () =>
  gulp.src(path.srcPath.less + '/**/*.less') // less源文件
    .pipe(debug({ title: '编译less:' }))
    .pipe(less()) // 执行编译
    .pipe(gulp.dest(path.distPath.css))); // 输出目录
