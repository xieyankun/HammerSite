// HTML处理
var gulp = require('gulp');
var changed = require('gulp-changed');
var debug = require('gulp-debug');
var path = require('../config');
var srcPath = path.srcPath.html;
var distPath = path.distPath.html;

gulp.task('html', function() {
    return gulp.src(srcPath + '/**/*.html')
        .pipe(debug({title: '编译html:'}))
        .pipe(changed(distPath, {extension:'.html'}))
        .pipe(gulp.dest(distPath));
});
