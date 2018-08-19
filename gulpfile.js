const gulp = require('gulp');
const sass = require('gulp-sass');

// Compile Sass and inject into browser
gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'public/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("public/stylesheets"));
});

// Move JS files to public/js
gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
  .pipe(gulp.dest("public/js"));
});

gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('public/fonts'));
});


gulp.task('fa', function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('default', ['sass', 'js', 'fa', 'fonts'], function() {
  gulp.watch('public/main.scss', function() {
    gulp.run('sass');
  });
});
