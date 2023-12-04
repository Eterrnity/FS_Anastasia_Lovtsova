var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('concat-task', () => {
    return gulp.src(['./0 script/script.js', './1 script/script.js', './2 script/script.js',
        './3 script/script.js', './4 script/script.js', './5 script/script.js', './6 script/script.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js/'));
});