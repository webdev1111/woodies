var gulp = require('gulp');
var sass = require('gulp-sass');//конвертация scss в css
var haml = require('gulp-haml');//конвертация haml в html
var minify = require('gulp-minify');//минификация java script
var autoprefixer = require('gulp-autoprefixer');//автопрефиксер для css
var csso = require('gulp-csso');//минификация css
var htmlmin = require('gulp-htmlmin');//минификация html

//watch не следит за созданием файлов
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/js/**/*.js', gulp.series('compressjs'));
    gulp.watch('src/*.haml', gulp.series('haml'));
    gulp.watch('src/*.html', gulp.series('html'));
});

gulp.task('sass', function(){
    return gulp.src('src/scss/style.scss')
        .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions']
        }))
        .pipe(csso())
        .pipe(gulp.dest('build/css'))
});

gulp.task('haml', function(){
    return gulp.src('src/*.haml')
        .pipe(haml()) // Конвертируем haml в html с помощью gulp-haml
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/'))
});

gulp.task('html', function(){
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/'))
});

gulp.task('compressjs', function() {
    return gulp.src('src/js/main.js')
        .pipe(minify({
            noSource: true,
        }))
        .pipe(gulp.dest('build/js'))
});