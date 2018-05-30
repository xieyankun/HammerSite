// 清理文件
// var gulp = require('gulp');
// var clean = require('gulp-clean');
// var debug = require('gulp-debug');
// var path = require('../config');

// gulp.task('clean', function() {
//     return gulp.src(path.distPath.html + '/*') // 清理文件
//         .pipe(debug({title: '清除:'}))
//         .pipe(clean());
// });

const gulp = require('gulp');
const clean = require('gulp-clean');
const debug = require('gulp-debug');
const path = require('../config');

gulp.task('clean', () => gulp.src(path.distPath.html + '/*') // 清理文件
  .pipe(debug({ title: '清除:' }))
  .pipe(clean()));
