const { src, dest, parallel, series, watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean')

const paths = {
    html: {
        src: "./src/**/*.html",
        dest: "./app/"
    },
    styles: {
        src: "./src/styles/**/*.scss",
        dest: "./app/styles/"
    },
    scripts: {
        src: "./src/scripts/**/*.js",
        dest: "./app/scripts"
    },
    fonts: {
        src: "./src/fonts/**",
        dest: "./app/fonts/"
    },
    images: {
        src: "./src/images/**",
        dest: "./app/images/"
    },
    clean: {
        src: "./app/"
    }
}

function html () {
    return src(paths.html.src)
    .pipe(dest(paths.html.dest))
}

function styles () {
    return src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(paths.styles.dest))
}

function scripts () {
    return src(paths.scripts.src)
    .pipe(dest([paths.scripts.dest]))
}

function images () {
    return src(paths.images.src)
    .pipe(dest(paths.images.dest))
}

function fonts () {
    return src(paths.fonts.src)
    .pipe(dest(paths.fonts.dest))
}

function appClean () {
    return src(paths.clean.src)
    .pipe(clean())
}

function gulpWatch () {
    watch(paths.html.src, html);
    watch(paths.styles.src, styles);
    watch(paths.scripts.src, scripts)
    watch(paths.fonts.src, fonts);
    watch(paths.images.src, images)
}

exports.default = series( appClean, parallel(html, styles, scripts, fonts, images), gulpWatch );