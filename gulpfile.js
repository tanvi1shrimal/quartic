var gulp = require('gulp'), // well, duh
	jade = require('gulp-jade'), // jade -> html
	pug = require('gulp-pug'),
	sass = require('gulp-sass'), // sass -> css
	autoprefixer = require('gulp-autoprefixer'), // add vendor prefixes
	uncss = require('gulp-uncss'), // remove unused css classes
	stripDebug = require('gulp-strip-debug'), // remove all debugging statements
	sourcemaps = require('gulp-sourcemaps'), // add sourcemaps
	//imagemin = require('gulp-imagemin'), // compress images lossless
	browserSync = require('browser-sync'), // fire up a local server
//	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	cleanCSS = require('gulp-clean-css'),
	htmlmin = require('gulp-htmlmin');
//	pump = require('pump');
// spin up a browsersync server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './dist/'
    },
    injectChanges: true
  })
});

//Convert .jade to .html file
gulp.task('jade', function(){
	gulp.src('src/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('dist/'));
});
// pug to html compilation============================================
gulp.task('views', function buildHTML() {
  return gulp.src('src/**/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('dist/'))
});

gulp.task("copy_all", function(){
	gulp.src('src/*').pipe(gulp.dest('dist/'));
});

//Convert .scss file to .css + autoprefix
gulp.task('sass', function(){
	return gulp.src('src/css/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 5 versions'],
	}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist/css/'));
});
gulp.task('uncss', function () {
    return gulp.src('dist/css/**/*.css')
        .pipe(uncss({
        	ignore: [
        			// add classes to ignore using regular expressions
        			],
            html: ['dist/**/*.html', 'dist/**/*.js'],

        }))
        .pipe(gulp.dest('dist/css'));
});
// Concatenates js files ========================================================
gulp.task('scripts', function() {
  return gulp.src(['src/js/loader.js', 'src/js/particles.min.js', 'src/js/banner1-animation.js', 'src/js/banner-1-triangles-anim.js', 'src/js/vivus.min.js', 'src/js/banner-2-svg-animation.js', 'src/js/banner-slider.js', 'src/js/nav-menu.js','src/js/services-slider.js', 'src/js/about-slider.js', 'src/js/arrow-scroll.js', 'src/js/parallax.min.js' , 'src/js/parallax-custom.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js/'));
});
// Minify CSS file ===============================================================
gulp.task('minify-css', function() {
  return gulp.src('dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
});

// Minify HTML files ==============================================================
gulp.task('minify-html', function() {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy_js', function(){
	gulp.src('src/js/*.js').pipe(gulp.dest('dist/js/'))
});

gulp.task('copy_img', function(){
	gulp.src('src/img/**/*').pipe(gulp.dest('dist/img/'))
});

gulp.task('copy_fonts', function(){
	gulp.src('src/fonts/*').pipe(gulp.dest('dist/fonts/'))
});

//Sass watcher
//gulp.task('watch',['browserSync', 'strip', 'copy_fonts', 'copy_img', 'copy_js', 'sass', 'jade'], function(){
gulp.task('watch',['browserSync', 'copy_fonts', 'copy_img', 'copy_js', 'sass', 'views'], function(){
	gulp.watch('src/css/**/*.scss', ['sass']);
	// gulp.watch('src/css/**/*.scss', ['uncss']);
	gulp.watch('src/**/*.pug', ['views']);
	gulp.watch('src/js/*.js', ['copy_js']);
	//gulp.watch('src/js/*.js', ['strip']);
	gulp.watch('src/img/', ['copy_img']);
	//gulp.watch('src/js/**/*.js', ['compress']);
	gulp.watch('src/fonts/', ['copy_fonts']);
	gulp.watch('src/js/*.js', ['copy_img']);
	gulp.watch('dist/*.html', browserSync.reload);
    gulp.watch('dist/**/*.css', browserSync.reload);
    gulp.watch('dist/**/*.js', browserSync.reload);
});