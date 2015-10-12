process.title = 'gulp';

/**
 * Dependencies
 */
var path    = require('path')
,   del     = require('del')
,   gulp    = require('gulp')
,   acetate = require('acetate')
,   queue   = require('streamqueue')
,   sync    = require('browser-sync');

/**
 * Plugins/Setup
 */
var $ = {
  postcss:    require('gulp-postcss'),
  concat:     require('gulp-concat'),
  nodemon:    require('gulp-nodemon'),
  livereload: require('gulp-livereload')
};

/**
 * Tasks
 */
gulp.task('clean', function (done) {
  return del([
    'build/**/*'
  ], done);
});

gulp.task('build:pages', function () {
  return acetate({
    config: 'config/acetate.js'
  });
});

gulp.task('build:css', function () {
  return gulp.src('src/_css/app.css')
    .pipe($.postcss([
      require('postcss-font-magician')(),
      require('postcss-normalize'),
      require('postcss-import')({
        from: 'src/_css'
      }),
      require('postcss-mixins'),
      require('postcss-nested'),
      require('lost'),
      require('autoprefixer')({ browsers: ['last 1 version'] })
    ]))
    .pipe(gulp.dest('build/_css'));
});

gulp.task('build:js', function () {
  var app  = gulp.src('src/_js/app.js')

  return queue({ objectMode: true }, app)
    .pipe($.concat('app.js'))
    .pipe(gulp.dest('build/_js'));
});

gulp.task('build:img', function () {
  return gulp.src('src/assets/img/*')
    .pipe(gulp.dest('build/assets/img'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.html', ['build:pages']);
  gulp.watch('src/**/*.css', ['build:css']);
  gulp.watch('src/**/*.js', ['build:js']);
  gulp.watch('build/**/*').on('change', $.livereload.changed);
});

gulp.task('serve', function () {
  $.livereload.listen();
  return $.nodemon({
    script: 'app.js'
  });
});

gulp.task('dev', [
  'serve',
  'build:css',
  'build:js',
  'build:img',
  'build:pages',
  'watch'
]);

gulp.task('build', [
  'build:css',
  'build:js',
  'build:img',
  'build:pages',
]);
