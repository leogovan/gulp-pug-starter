'use strict';

// get dependenceis
var gulp = require('gulp'),
	pug = require('gulp-pug'),
	browserSync = require('browser-sync');

// define task for pug
gulp.task('pug', function(){
	// get files from src
	return gulp.src('src/*.pug')
	// run pug on files, output to dist
		.pipe(pug())
		.pipe(gulp.dest('dist'));
});

 
gulp.task('pug-rebuild', ['pug'], function(){
	browserSync.reload();
});


gulp.task('browser-sync', ['pug'], function () {
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false
	});
});

gulp.task('watch', function () {
	// watching for changes in src, if yes will run pug-rebuild
	gulp.watch(['src/*.pug'], ['pug-rebuild']);
});

// default command to run tasks
gulp.task('default', ['browser-sync', 'watch']);