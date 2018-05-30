/*
*  @by kira
*  用于发布线上使用，压缩、合并、打包
*/
const gulp = require('gulp');
// 开始任务前会先执行[clean]任务
// 等[clean]任务执行完毕后再执行其他任务
gulp.task('build', ['clean'], () =>
  gulp.start('sassRelease', 'scriptRelease', 'image', 'html'));
