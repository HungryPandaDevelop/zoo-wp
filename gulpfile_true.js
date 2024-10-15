const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

const sync = require("browser-sync").create();
// Функция для компиляции SCSS в CSS
function compileSass() {
  return gulp.src('scss/**/*.sass') // Здесь мы используем ** чтобы следить за всеми .sass файлами внутри всех подпапок в папке scss
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(rename('theme-style.css'))
    .pipe(sourcemap.write('.')) // Записываем карты исходных кодов
    .pipe(gulp.dest('front/'))
    .pipe(sync.stream());;
}
// Функция для объединения и минификации JavaScript
function compileJS() {
  return gulp.src([
    'js-sourse/start.js',
    'js-sourse/initialization.js',
    'js-sourse/phone-mask.js',
    'js-sourse/check-form.js',
    'js-sourse/edit-wp7.js',
    'js-sourse/img-cover.js',
    'js-sourse/style-file.js',
    'js-sourse/style-select.js',
    'js-sourse/search-ajax.js',
    'js-sourse/btn-show-hide.js',
    'js-sourse/password-edit.js',
    'js-sourse/simple.js',
    'js-sourse/tabs.js',
    'js-sourse/rating-comments.js',
    'js-sourse/animals.js',
    'js-sourse/end.js'
  ])
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(concat('common-dist.js'))
    // .pipe(uglify())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('front/'));
}
// Следим за изменениями в SCSS файлов и автоматически компилируем их при изменении
function watchFiles() {
  gulp.watch('scss/**/*.sass', compileSass); // Наблюдаем за изменениями в SCSS файлы и при изменении компилируем их
  gulp.watch('js-sourse/*.js', compileJS);
}

// Экспортируем задачи Gulp
exports.default = gulp.series(
  gulp.parallel(compileSass, compileJS), // Запускаем компиляцию SCSS и JavaScript параллельно
  watchFiles
);