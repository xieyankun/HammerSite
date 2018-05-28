/*
*  @by kira
*  @2017-09-19
*  样式处理
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var debug = require('gulp-debug');
var path = require('../config');

// 拷贝外部的css样式
gulp.task('cpCss', function () {
    return gulp.src([path.srcPath.css + '/**/*', '!' + path.srcPath.css + '/*.css'])
        .pipe(gulp.dest(path.distPath.css))
});

gulp.task('sassRelease', ['cpCss'], function () {
    return gulp.src(path.srcPath.sass + '/**/*.scss')
        .pipe(debug({title: '编译:'}))
        .pipe(sass({ outputStyle: 'compressed' })   // 压缩
            .on('error', function (err) {
            console.error('Error!', err.message); // 显示错误信息
        }))                 // 指明源文件路径、并进行文件匹配（编译风格：压缩）
        .pipe(gulp.dest( path.distPath.css )); // 输出路径
});