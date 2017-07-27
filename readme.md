## Intended Audience:
This is intended for not-quite-beginners (since it focuses on getting an HTML preprocessor up and running I would assume at least some time spent on HTML/CSS) to early-stage intermediates.

Some small familiarity with the command line is recommended, but if you're looking at this on Github, chances are this isn't an issue.

## Intro:
This is a starter gulp/pug pack for new projects. It kicks off the Gulp task-runner and the Pug (formerly 'Jade') HTML preprocessor (nicer, easier to read html files essentially). A useful Pug video guide can be found [here on Youtube](https://www.youtube.com/watch?v=l5AXcXAP4r8) while the official site is [here](https://pugjs.org/api/getting-started.html).

## Instructions:
* Copy the directory "gulp-pug-starter" and all of its contents
* Rename the directory to whatever makes sense for you (hang on to a copy of "gulp-pug-starter" so its always there if you like for future projects)
* Open up your preferred command line tool (mine being the mac terminal) and cd to your new project directory
* Type `npm install` (you may have to `sudo` this or similar). This will read the package.json file and look at the devDependencies listed (in this case: "browser-sync", "gulp" and "gulp-pug") and load in these plugins. To see what these plugins do, go to [gulp.js](https://gulpjs.com/plugins/) and have a look. Note that in package.json the plugin properties have "latest" as their versions
* Once this is done, type `gulp` on the command line and hit return to run. This will:
** Create a /dist folder
** Process the index.pug file in /src and create an index.html file in /dist
** Start a local server, open a browser and run dist/index.html on localhost:3000 (you should see a little "Hello World!" appear)
** While the server is running, a gulp task will 'watch' for changes on save to index.pug. When the file is saved, the browser will update with the changes! (Note, the code looks good based on this [inspiration](https://github.com/azemoh/gulp-jade-sass-starter/blob/master/gulpfile.js) but for some reason I can't get it to auto-refresh the browser on this last bit as expected... manual refresh does the job but would be nice if I could get it to work)
** To kill the server (and hence the 'watch'), type `Ctrl+C` if using a mac (don't know the windows equivalent for ending a process, sorry)
* If using something like Sublime Text or Atom as your text editor, download a package so that it makes your Pug files look nice and pretty with colours :)