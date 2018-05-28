/*
*  @by kira
*  @2017-09-19
*  脚本压缩&重命名
*/
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var debug = require('gulp-debug');
var path = require('../config');

// copy 引入外部的 js 文件
gulp.task('cpJs', function() {
    return gulp.src( [path.srcPath.script+'/**/*', '!' + path.srcPath.script + '/*.js'] ) 
        .pipe(gulp.dest( path.distPath.script ));   // 输出路径
});

gulp.task('scriptRelease', ['cpJs'], function() {
    return gulp.src( [path.srcPath.script+'/*.js', '!' + path.srcPath.script + '/*.min.js'] ) // 指明源文件路径、并进行文件匹配，排除 .min.js 后缀的文件
        .pipe(debug({title: '编译发布:'}))
        .pipe(concat('main.js'))                    // 合并成main.js
        // .pipe(rename({ suffix: '.min' }))           // 重命名
        .pipe(uglify())                             // 使用uglify进行压缩，并保留部分注释
        .pipe(gulp.dest( path.distPath.script ));   // 输出路径
});