var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './'
    });
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./*').on('change', browserSync.reload);
});

gulp.task('sass', () => {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);