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

const ftp = require('vinyl-ftp');

const ftpConfig = {
  host: 'vh364.timeweb.ru',
  user: 'cx90562',
  password: '98Jk67dns9f',
  remotePath: '/zoonika/public_html/wp-content/themes/zoonika' // Укажите путь на FTP-сервере, куда вы хотите загружать файлы
};

const conn = ftp.create({
  host: ftpConfig.host,
  user: ftpConfig.user,
  password: ftpConfig.password,
  parallel: 5
});


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

// Функция для загрузки файлов на FTP-сервер
function deploy() {
  return gulp.src('**/*') // Путь к вашим файлам, которые вы хотите загрузить
    .pipe(conn.newer(ftpConfig.remotePath)) // Загружаем только измененные файлы
    .pipe(conn.dest(ftpConfig.remotePath));
}

function handleError(err) {
  console.error(err);
}

// Следим за изменениями в SCSS и JS файлами и автоматически компилируем их
function watchFiles() {
  // Наблюдаем за изменениями в SCSS файлы и при изменении компилируем их
  gulp.watch('scss/**/*.sass', compileSass).on('error', handleError);

  // Наблюдаем за изменениями в JS файлы и при изменении компилируем их
  gulp.watch('js-sourse/**/*.js', compileJS).on('error', handleError);

  // Наблюдаем за изменениями в любых файлах и при изменении вызываем функцию deploy
  gulp.watch('**/*', deploy).on('error', handleError);
}




// Экспортируем задачи Gulp
exports.default = gulp.series(
  gulp.parallel(watchFiles)
);