/////////////////////////////////
//Require Modeles
//////////////////////////////////

var gulp = require('gulp');
// var	uglify = require('gulp-uglify');
// var	rename = require('gulp-rename');
var sass = require('gulp-sass');


//////////////////////////////////
//Scripts Task
//////////////////////////////////
// gulp.task('scripts',function(){
// 	gulp.src(['app/js/**/*.js','!app/js/**/min.js'])
// 	.pipe(rename({suffix:'.min'}))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('app/js'));
// });

//////////////////////////////////
//Compass /Sass Tasks
//////////////////////////////////
// gulp.task('compass',function(){
// 	gulp.src('app./scss/style.scss')
// 		.pipe({
// 			config_file:'./config.rb',
// 			css:'app/css',
// 			sass:'app.scss',
// 			require:['susy']
// 		})
// 		.pipe(gulp.dest('app/css/'));
// });

gulp.task('sass',function(){
	 gulp.src('app/scss/style.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('app/css'));
});

//////////////////////////////////
//Watch Task
//////////////////////////////////

// gulp.task('watch',function(){
// 	gulp.watch('app/scss/**/*.scss',['compass']);
// });

gulp.task('sass:watch',function(){
	gulp.watch('app/scss/**/*.scss',['sass'])
});

//////////////////////////////////
//Default Task
//////////////////////////////////
gulp.task('default',['sass','sass:watch']);