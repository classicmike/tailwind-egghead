const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const uncss = require('gulp-uncss');

const PATHS = {
    css: './src/styles.css',
    config: './tailwind.js',
    dist: './'
};

gulp.task('css', () => {
    return gulp.src(PATHS.css)
        .pipe(postcss([
            tailwindcss(PATHS.config),
            require('autoprefixer')
        ]))
        .pipe(uncss({
            html: [PATHS.dist + "*.html"]
        }))
        .pipe(gulp.dest(PATHS.dist));
});