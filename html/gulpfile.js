// Подключаем модули галп
const gulp = require("gulp"); // подключили галп
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var aos = require("aos");
const terser = require('gulp-terser');

// Порядок подключения CSS файлов
// const cssFiles 	= [
// 	'./src/styles/bootstrap.css',
// 	'./src/styles/container.css',
// 	'./src/styles/input.css',
// 	'./src/styles/tasks.css',
// 	'./src/styles/buttons.css',
// 	'./src/styles/media.css'
// ]

// './src/scripts/bootstrap.js.map'

// Порядок подключения JS файлов
// const jsFiles 	= [
// './src/scripts/jquery.js',
// './src/scripts/bootstrap.js',
// 	'./src/scripts/Class.js',
// 	'./src/scripts/AllClick.js',
// 	'./src/scripts/ActiveClick.js',
// 	'./src/scripts/CompletedClick.js',
// 	'./src/scripts/DeleteTasks.js',
// 	'./src/scripts/AddTasks.js',
// 	'./src/scripts/DeleteTaskClick.js',
// 	'./src/scripts/LocalStorage.js',
// ]

const jsFiles = [
    './src/libraries/*.js',
    './src/js/**/*.js',
]

// Таск на стили CSS
function styles() {
    // Шаблон для поиска файлов CSS
    // Все файлы по шаблону './src/css/**/*.css'
    return gulp.src(['./src/libraries/*.css', './src/scss/**/*.scss', './src/media/*.scss'])
        // Объединение файлов в один
        .pipe(sass())
        .pipe(concat('styles.css'))
        // Добавление префиксов CSS
        .pipe(autoprefixer())
        // Минификация CSS
        .pipe(cleanCSS({
        	level: 2
        }))
        // Выходная папка для стилей
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

// Таск на скрипты JS
function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('script.js'))
        .pipe(terser())
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function filesMove(done) {
    gulp.src(['src/img/*.*', 'src/video/*.*'])
        .pipe(gulp.dest('build/img'))
    done()
}

function clean() {
    return del('build/*')
}

function watch() {
    browserSync.init({
            server: {
                baseDir: "./"
            }
        })
        // Следить за CSS файлами
    gulp.watch(['./src/scss/**/*.scss', './src/media/*.scss'], styles)
    gulp.watch('./src/img/**/*.*')
        // Следить за JS файлами
    gulp.watch('./src/js/**/*.js', scripts)
        // При изменении HTML запустить синхронизацию
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('filesMove', filesMove);
// Таск вызывающий функцию styles
gulp.task('styles', styles);
// Таск вызывающий функцию scripts
gulp.task('scripts', scripts);
// Таск для очистки папки build
gulp.task('del', clean);
// Таск для отслеживания изменений
gulp.task('watch', watch);
// Таск для удаления файлов в папке build и запуск styles и scripts
gulp.task('build', gulp.series(clean, styles, scripts, filesMove));
// Таск запускает таск build и watch поледовательно
gulp.task('do', gulp.series('build', 'watch'));