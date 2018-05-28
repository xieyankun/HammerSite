/*
*  @by kira
*  @2017-09-19
*  用于发布预览版本
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var debug = require('gulp-debug');
var path = require('../config');
var source = [
        path.srcPath.html + '/**/*', 
        '!' + path.srcPath.sass + '/**/*',
        '!' + path.srcPath.less + '/**/*'
    ]
gulp.task('preview', ['clean'], function(){          // 开始任务前会先执行[clean]任务
    return gulp.src(source)
        .pipe(debug({title: '编译预览:'}))
        .pipe(gulp.dest(path.distPath.html))         //  拷贝到指定目录
})
