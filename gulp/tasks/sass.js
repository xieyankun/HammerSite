// 编译sass
var gulp = require('gulp');
var sass = require('gulp-sass');
var debug = require('gulp-debug');
var path = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function(){
	return gulp.src(path.srcPath.sass + '/**/*.scss')
        .pipe(debug({title: '编译sass:'}))
		.pipe(sass())
        .on('error', handleErrors)
        .pipe(gulp.dest(path.srcPath.css))
});
