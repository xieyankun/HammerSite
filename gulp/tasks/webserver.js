const gulp = require('gulp');
const livereload = require('gulp-livereload');// 网页自动刷新（服务器控制客户端同步刷新）
const webserver = require('gulp-webserver'); // 本地服务器
const path = require('../config');

// 本地服务器
gulp.task('webserver', () => {
  gulp.src(path.srcPath.html) // 服务器目录（.代表根目录）
    .pipe(webserver({ // 运行gulp-webserver
      livereload: true, // 启用LiveReload
      open: true, // 服务器启动时自动打开网页
    }));
});
