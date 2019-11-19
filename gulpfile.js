const gulp = require("gulp");
const sass = require("gulp-sass");
const gulpStylelint = require("gulp-stylelint");
const iconfont = require("gulp-iconfont");
const iconfontCss = require("gulp-iconfont-css");
//const browserSync = require('browser-sync');
var fontName = "icons";

function style() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css/blocks/"));
}

function lintCss() {
  return gulp.src("./scss/**/*.scss").pipe(
    gulpStylelint({
      reporters: [
        {
          formatter: "string",
          console: true
        }
      ]
    })
  );
}

// add svg icons to the folder "icons" and use 'iconfont' task for generating icon font
function iconFont() {
  return gulp
    .src("img/icons/*.svg")
    .pipe(
      iconfontCss({
        // где будет наш scss файл
        targetPath: "../css/icon-style.css",
        // пути подлючения шрифтов в _icons.scss
        fontPath: "../fonts/",
        fontName: fontName
      })
    )
    .pipe(
      iconfont({
        fontName: fontName,
        formats: ["svg", "ttf", "eot", "woff", "woff2"],
        normalize: true,
        fontHeight: 1001
      })
    )
    .pipe(gulp.dest("fonts/"));
}

function watch() {
  gulp.watch("./scss/**/*.scss", style);
}

exports.style = style;
exports.watch = watch;
exports.lintCss = lintCss;
exports.iconFont = iconFont;
