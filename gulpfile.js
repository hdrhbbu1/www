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
gulp.task('clean', () => {
  return del(['build/**/*']);
});

gulp.task('build:pages', (done) => {
  acetate({
    config: 'config/acetate.js'
  }).on('build', (attrs) => {
    done();
  });
});

gulp.task('build:css', () => {
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

gulp.task('build:js', () => {
  var app  = gulp.src('src/_js/app.js')

  return queue({ objectMode: true }, app)
    .pipe($.concat('app.js'))
    .pipe(gulp.dest('build/_js'));
});

gulp.task('build:img', () => {
  return gulp.src('src/assets/img/*')
    .pipe(gulp.dest('build/assets/img'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.html', gulp.task('build:pages'));
  gulp.watch('src/**/*.css', gulp.task('build:css'));
  gulp.watch('src/**/*.js', gulp.task('build:js'));
  gulp.watch('build/**/*').on('change', $.livereload.changed);
});

gulp.task('serve', () => {
  $.livereload.listen();

  return $.nodemon({
    script: 'app.js',
    env: {
      NODE_PATH: '.',
      NODE_ENV: 'development'
    }
  });
});

gulp.task('default', gulp.series([
  'clean',
  'build:css',
  'build:js',
  'build:img',
  'build:pages',
  'serve',
  'watch'
]));

gulp.task('build', gulp.series([
  'clean',
  'build:css',
  'build:js',
  'build:img',
  'build:pages',
]));
