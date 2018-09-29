var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', () => {
    browserSync.init({
        server: './'
    });
    gulp.watch('./*').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);