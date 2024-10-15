const gulp = require('gulp');
const ftp = require('vinyl-ftp');

// Настройки FTP-сервера
const ftpConfig = {
  host: 'vh364.timeweb.ru',
  user: 'cx90562',
  password: '98Jk67dns9f',
  remotePath: '/zoonika/public_html/wp-content/themes/zoonika' // Укажите путь на FTP-сервере, куда вы хотите загружать файлы
};

// Создаем новый FTP-клиент
const conn = ftp.create({
  host: ftpConfig.host,
  user: ftpConfig.user,
  password: ftpConfig.password,
  parallel: 5
});

// Функция для загрузки файлов на FTP-сервер
function deploy() {
  return gulp.src('**/*') // Путь к вашим файлам, которые вы хотите загрузить
    .pipe(conn.newer(ftpConfig.remotePath)) // Загружаем только измененные файлы
    .pipe(conn.dest(ftpConfig.remotePath));
}

// Следим за изменениями в папке и вызываем функцию deploy при изменениях
function watch() {
  gulp.watch('**/*', deploy);
}

// Экспортируем задачу Gulp по умолчанию, которая будет следить за изменениями
exports.default = watch;