var gulp = require('gulp');
var fs = require('fs');

var mustache = require("gulp-mustache");
var rename = require("gulp-rename");

gulp.task('mustache', function() {

  var langs = fs.readdirSync('lang');
  console.log(langs);


  langs.forEach(function(l){
    var prefix = l.split('.')[0]; // en, pl
    gulp.src("./templates/index.mustache")
        .pipe(mustache(require('./lang/'+l)))
        .pipe(rename("index.html"))
        .pipe(gulp.dest("./dist/"+prefix));
  });


});

gulp.task('watch', function() {
	gulp.watch('templates/*', ['mustache']);
});

gulp.task('default', ['mustache', 'watch']);
