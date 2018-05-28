// 清理文件
var gulp = require('gulp');
var clean = require('gulp-clean');
var debug = require('gulp-debug');
var path = require('../config');

gulp.task('clean', function() {
    return gulp.src(path.distPath.html + '/*') // 清理文件
        .pipe(debug({title: '清除:'}))
        .pipe(clean());
});
