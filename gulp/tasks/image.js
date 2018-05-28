// 处理图片
var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var debug = require('gulp-debug');
var path = require('../config');

gulp.task('image', function(){
    return gulp.src( path.srcPath.image + '/**/*' ) // 指明源文件路径，如需匹配指定格式的文件，可以写成 .{png,jpg,gif,svg}
        // .pipe(changed( path.distPath.image ))
        .pipe(debug({title: '编译image:'}))
        .pipe(imagemin({
            progressive: true,                      // 无损压缩JPG图片
            svgoPlugins: [{removeViewBox: false}],  // 不要移除svg的viewbox属性
            use: [pngquant()]                       // 深度压缩PNG
        }))
        .pipe(gulp.dest( path.distPath.image ));    // 输出路径
});
