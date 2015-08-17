////////////////////////////////////////////////////////////////////////////////
/**
 * @name Gulp taskrunner
 * @desc Gulp taskrunner for starter SASS-SMACSS project
 * @desc This should be moved to the root folder
 */

var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    gulpif        = require('gulp-if'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    sass          = require('gulp-ruby-sass'),
    streamqueue   = require('streamqueue'),
    sourcemaps    = require('gulp-sourcemaps'),
    runSequence   = require('run-sequence'),
    del           = require('del'),
    es            = require('event-stream');

// Log Errors
////////////////////////////////////////////////////////////////////////////////

function errorlog(err){
    console.log(err.message);
    this.emit('end');
}

/** Main Gulp Tasks */
/** ------------------------------------------------------------------------- */
////////////////////////////////////////////////////////////////////////////////

/** Main Styles */
/** ------------------------------------------------------------------------- */
gulp.task('css', function() {
    return sass('sass/main_web.scss', {
        // noCache: true,
        style: 'compressed' 
    })
    .pipe(sourcemaps.init())
    .on('error', errorlog)
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('css/'))
});

/** Development watch */
/** ------------------------------------------------------------------------- */
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['css']).on('change', function(file) {
        gutil.log(gutil.colors.cyan.bold('CSS updated' + ' (' + file.path + ')'));
    });
});