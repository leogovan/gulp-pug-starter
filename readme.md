## Intro:
This is my gulp starter pack for new projects. It's a starting point for getting up and running quickly with some automated workflow tools for using PUG and SASS (HTML and CSS preprocessors, respectively). Both [PUG](https://pugjs.org/api/getting-started.html) and [SASS](http://sass-lang.com/) will need to be installed prior to using this starter pack, along with [node.js](https://nodejs.org/en/) and its package manager [npm](https://www.npmjs.com/).

The starter pack consists of:

* [Gulp](https://gulpjs.com/)
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) - a plugin to automate processing .pug files to .html files
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) - a plugin to automate processing .scss files to .css files
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - a plugin to automate minifying .css files
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - a plugin to automate minifying .js files
* [browser-sync](https://browsersync.io/) - a node module that can run a local server and refresh automatically as you make file changes

## Instructions:
* Copy the directory "gulp-pug-starter" and all of its contents
* Rename the directory to whatever makes sense for you
* Open your command line tool and `cd` to your new project directory
* Type `npm install` (you may have to `sudo` this or similar). This will read the package.json file and look at the devDependencies listed and load in these plugins to the node modules folder it will create
* Once this is done, type `gulp` on the command line and hit return to run. This will:
	* Process the index.pug file in /src and create an index.html file in /dist
	* Process the style.scss file in /src/scss and create a style.css file in /src/css
	* Process the app.js file in /src/js and create a minified app.js file in /dist/js
	* Start a local server, open a browser and run dist/index.html on localhost:3000 (you'll know that things are working because an alert box will appear)
	* While the server is running, a gulp task will 'watch' for changes on save to index.pug, style.scss and app.js in the src directory. When a change is made, the browser will update automaticaly with the changes!
	* In addition, make a small change to style.scss in the /src/scss directory and save it (like change the border to 10px). This will update the browser with the style.css file in /dist/css
	* To kill the server, type `Ctrl+C` in the command line window if using a mac or the Windows equivalent
* If using something like Sublime Text or Atom as your text editor, download a package so that it makes your Pug files look nice and pretty with colours :)