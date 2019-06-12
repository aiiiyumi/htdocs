// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
// 画像の圧縮

const autoprefixer = require('gulp-autoprefixer');

const imagemin = require('gulp-imagemin');
// pngの減色
const pngquant = require('imagemin-pngquant');

const changed = require("gulp-changed");
// 差分があるときのみ実行
const mozjpeg = require("imagemin-mozjpeg");




// style.scssをタスクを作成する
gulp.task('default', function () {
  // style.scssファイルを取得
  return gulp.src('assets/sass/main.scss')
    // Sassのコンパイルを実行
    .pipe(sass({
      outputStyle: 'expanded' //compressed
    }))
    .pipe( autoprefixer( {
            browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
            cascade: false
        } ) )
    // cssフォルダー以下に保存
    .pipe(gulp.dest('dist/css/'));
});



gulp.task("imagemin", function() {
  return gulp
  .src("./assets/img/*.{png,jpg}") // srcImgフォルダ以下のpng,jpg画像を取得する
  .pipe(changed("distImg")) // srcImg と distImg を比較して異なるものだけ圧縮する
  .pipe(
    imagemin([
      pngquant({
        quality: [.7, .85], // 画質
        speed: 1 // スピード
      }),
      mozjpeg({
        quality: 70, // 画質
        progressive: true
      })
    ])
  )
  .pipe(gulp.dest("./dist/images/")); // 保存
});


gulp.watch('assets/sass/main.scss', gulp.task('default'));
gulp.watch("./assets/img/*.{png,jpg}", gulp.task('imagemin'));


gulp.task('gulpt', gulp.series('default', 'imagemin'));
