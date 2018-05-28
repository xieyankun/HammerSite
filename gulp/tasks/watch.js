// 监听需要执行的文件
var gulp = require('gulp');
var watch = require('gulp-watch');
var path = require('../config');

gulp.task('watch', function(){
    // 处理 html
    gulp.watch( path.srcPath.html + '/**/*.html', ['html'] )
    // 处理 scss
    gulp.watch( path.srcPath.sass + '/**/*.scss', ['sass'] )
    // 监听 images
    gulp.watch( path.srcPath.image + '/**/*' , ['image'] )
    // 处理 script
    gulp.watch( path.srcPath.script + '/**/*.js', ['script'] )
})
