var gulp = require('gulp');

var mustache = require("gulp-mustache");
var rename = require("gulp-rename");

gulp.task('mustache', function() {

return gulp.src("./templates/index.mustache")
    .pipe(mustache())
    .pipe(rename("index.html"))
    .pipe(gulp.dest("./dist"));

});

gulp.task('watch', function() {
	gulp.watch('templates/*', ['mustache']);
});

gulp.task('default', ['mustache', 'watch']);