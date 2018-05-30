// JS文件压缩&重命名
const gulp = require('gulp');
const changed = require('gulp-changed');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const path = require('../config');

const srcPath = path.srcPath.script;
const distPath = path.srcPath.script;

gulp.task('script', () =>
  gulp.src([srcPath + '/*.js', '!' + srcPath + '/*.min.js']) // 指明源文件路径、并进行文件匹配，排除 .min.js 后缀的文件
    .pipe(debug({ title: '编译script:' }))
    .pipe(changed(distPath)) // 对应匹配的文件
    .pipe(sourcemaps.init()) // 执行sourcemaps
    .pipe(rename({ suffix: '.min' })) // 重命名
    .pipe(uglify()) // 使用uglify进行压缩，并保留部分注释
    .pipe(sourcemaps.write('maps')) // 地图输出路径（存放位置）
    .pipe(gulp.dest(distPath)), // 输出路径
);
