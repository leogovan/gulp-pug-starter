'use strict';

// ------ GET DEPENDENCIES ------- //
var gulp = require('gulp'),
	pug = require('gulp-pug'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css');

// ------ HTML PRE-PROCESSOR: 'PUG' ------- //
gulp.task('pug', function(){
	return gulp.src('src/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('dist'));
});

// ------ CSS PRE-PROCESSOR: 'SASS' ------- //
gulp.task('sass', function(){
  	return gulp.src('src/scss/*.scss')
    	.pipe(sass())
    	.pipe(gulp.dest('src/css'))
    	.pipe(browserSync.reload({ // do I need to run this again here?
      		stream: true
    	}))
});

// ------ CSS CLEAN UP AND COMPRESS ------- //
gulp.task('minify-css', function(){
	return gulp.src('src/css/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css'));
});

 
gulp.task('pug-rebuild', ['pug'], function(){ // do I need to pass something else here to get reload?
	browserSync.reload();
});


// ------ BROWSER SYNC... runs a local server ------- //
gulp.task('browser-sync', ['pug'], function () { // does 'sass' belong here in the array?
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false
	});
});

// ------ GULP WATCH FOR FILE CHANGES ------- //
gulp.task('watch', function () {
	// watching for changes in these locations... if yes gulp will run these tasks
	gulp.watch(['src/*.pug'], ['pug-rebuild']);
	gulp.watch(['src/scss/*.scss'], ['sass']); // new
	gulp.watch(['src/css/*.css'], ['minify-css']);
});

// ------ TASKS TO RUN WHEN USING THE COMMAND 'gulp' IN THE TERMINAL/COMMAND LINE ------- //
gulp.task('default', ['browser-sync', 'watch']);