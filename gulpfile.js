/*
* MrRayures - www.mr-rayures.com
* We <3 Gulp ;)
*/

// Required
const { src, dest, series, parallel, watch, lastRun } = require('gulp');

// MISC
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const del = require('del');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

//CSS
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');

//HTML
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');

//JS
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

//IMG
const imagemin = require('gulp-imagemin');
const responsive = require('gulp-responsive');

//ICONS FONTS
//const iconfont = require('gulp-iconfont');
//const iconfontCss = require('gulp-iconfont-css');

//SVG
const svgSprite = require('gulp-svg-sprite');
const sassInlineSvg = require('gulp-sass-inline-svg');
const svgmin = require('gulp-svgmin');


// Path variable
var source = 'src'; //Working folder
var prod = 'dist'; //Final folder



/*
* CSS task
* SASS + autoprefixer + CSSlint + sourcemaps
*/
function css() {
  return src([source + '/assets/scss/**/*.scss'], {sourcemaps: true})
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: [
        "> 0.3%",
        "last 7 versions",
        "Android >= 4", 
        "Firefox >= 20", 
        "iOS >= 8"
      ],
     flexbox: true,
    }))
    .pipe(dest([prod + '/assets/css/'], {sourcemaps: '.'}));
};


/*
* CSS-MINIFY
* Minify CSS for PROD
*/
function css_minify() {
  return src([prod + '/assets/css/*.css', '!'+ prod + '/assets/css/*min.css'], {sourcemaps: true})
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(prod + '/assets/css/', {sourcemaps: '.'}));
};


/*
* HTML task
* Gulp nunjucks : JS templating engine
* Doc : https://mozilla.github.io/nunjucks/
*/
function html() {
  return src([source + '/*.html'])
    .pipe(data(function() {
      return require('./src/data/data.json')
    }))
    .pipe(nunjucksRender({
        path: [source + '/templates']
      }))
    .pipe(dest(prod))
};


/*
* JS task
* Concat + babel
*/
function js() {
  return src([source + '/assets/js/*.js'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['env'] }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(dest(prod + '/assets/js/'))
};


/*
* JS-MINIFY
* Minify JS for PROD
*/
function js_minify() {
  return src([prod + '/assets/js/app.js'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(minify({
      ext:{
        min:'.min.js'
      }
    }))
    .pipe(dest(prod + '/assets/js/'))
};


/*
* IMG task
* minify images
* responsive IMG
*/
function img() {
  return src([source + '/assets/images/**/*.{png,jpg,jpeg,gif,svg}'], {since: lastRun(img)})
    .pipe(imagemin())
    .pipe(dest([prod + '/assets/images/']));
};

/*
* Generate responsive IMG
* Edit size and add as much as you want
*/
function img_responsive() {
  return src([source + '/assets/images/responsive/*.{png,jpg,jpeg}'], {since: lastRun(img_responsive)})
    .pipe(responsive({
      '*': [
        {width: 800, height: 800, rename: { suffix: '-800', extname: '.jpg'}},
        {width: 1600, height: 1600, rename: { suffix: '-1600', extname: '.jpg'}},
        {width: 800, height: 800, rename: { suffix: '-800', extname: '.webp'}},
        {width: 1600, height: 1600, rename: { suffix: '-1600', extname: '.webp'}}
      ]
    }))
    .pipe(dest([prod + '/assets/images/responsive/']));
};

function img_placeholder() {
  return src([source + '/assets/images/default/*.{png,jpg,jpeg}'], {since: lastRun(img_placeholder)})
    .pipe(responsive({
      '*': [
        {width: 800, height: 800, rename: { suffix: '-800', format: '.jpg'}},
        {width: 1600, height: 1600, rename: { suffix: '-1600', format: '.jpg'}}
      ]
    }))
    .pipe(dest([prod + '/assets/images/default/']));
};

/*
* ICONS task
* SVG sprite creation
* Drop svg icon in /assets/icons/
*/
const config = {
  mode: {
    symbol: {
      dest: 'sprite',
      example: true,
      sprite: 'icons.svg'
    }
  }
};
function icons() {
  return src(source +'/assets/icons/*')
    .pipe(svgSprite(config))
    .pipe(dest(prod + '/assets/icons'));
};


/*
* ICONS-CSS task
* Use svg in CSS with color option
* Drop svg icon in /assets/icons/
* Doc : https://www.npmjs.com/package/gulp-sass-inline-svg
*/
function icons_css(){
  return src(source +'/assets/icons/*') 
    .pipe(svgmin()) // Recommend using svg min to optimize svg files first
    .pipe(sassInlineSvg({
      destDir: source + '/assets/scss/helpers'
    }))
    .pipe(src(source + '/assets/scss/helpers/_sass-inline-svg.scss'))
    .pipe(replace('call($functionname', 'call(get-function($functionname)'))
    .pipe(dest(source + '/assets/scss/helpers'));
};


/*
* ICONS FONT task in case of sprite don't fit the project
* Drop svg icon in /assets/glyphicons/
* SVG Format : 512x512px
*/
/*function icons_font() {
  src([source + '/assets/icons/*'], {base: 'src'})
    .pipe(dest(prod));

  return src(source +'/assets/icons/*')
    .pipe(iconfontCss({
      fontName: 'icons', // nom de la fonte, doit être identique au nom du plugin iconfont
      targetPath: '../scss/components/_icons.scss', // emplacement de la css finale
      fontPath: '../fonts/', // emplacement des fontes finales
      cssClass: 'icon'
    }))
    .pipe(iconfont({
      fontName: 'icons' // identique au nom de iconfontCss
    }))
    .pipe( dest([source + '/assets/fonts', prod + '/assets/fonts']));
};*/


/*
* Clean task
*/
function clean() {
  return del([prod+'/**/*']);
};


/*
* WATCH task
* CSS > compile and minify
* JS > compile & minify
* IMG > minify, responsive
* ICONS > SVG sprite & SVG css
* HTML > compile
*/
function watch_files() {
  watch([source + '/assets/scss/*.scss', source + '/assets/scss/**/*'], series(css, css_minify))
  watch([source + '/assets/js/*.js'], series(js, js_minify))
  watch([source + '/assets/images/*.{png,jpg,jpeg,gif,svg}', source + '/assets/images/**/*.{png,jpg,jpeg,gif,svg}'], series(img, img_responsive))
  watch([source + '/assets/icons/*.svg', source + '/assets/icons/**/*.svg'], series(icons, icons_css))
  watch([source + '/*.html', source + '/templates/**/*.html'], series(html))
}


/*
* Define complex tasks
* !This part is still in WIP
*/
const build = series(clean, css, css_minify, img, html, js, js_minify);

/*
* Public function
*/
exports.img = series(img);
exports.css = series(css, css_minify);
exports.js = series(js, js_minify);
exports.html = html;
exports.icons = icons;
exports.icons_css = icons_css;
exports.clean = clean;
exports.build = build;
exports.watch = watch_files;
exports.default = build;

/*module.exports = {
  default: series(css, js, html, watch),
  watch: series(clean, watcher),
  clean: clean,
  css: series(css, css_minify),
  js: series(js, js_minify),
  img: series(img, img_responsive)
}*/






