const { src, dest, parallel, series, watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean')
const fileinclude = require("gulp-file-include")
const concatCss = require('gulp-concat-css');

const paths = {
    html: {
        src: "./src/index.html",
        dest: "./app/"
    },
    styles: {
        main: "./src/styles/main.scss",
        fonts: "./src/styles/fonts.scss",
        normalize: "./src/styles/normalize.scss",
        variables: "./src/styles/variables.scss",
        components: "./src/Components/**/*.scss",
        summaryMain: "./src/styles/**/*.scss",
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
    htmlInclude: {
        src: "./src/Components/**",
        dest: "./app/"
    },
    clean: {
        src: "./app/"
    }
}

function html() {
    return src(paths.html.src)
        .pipe(dest(paths.html.dest))
}

function styles() {
    return src([paths.styles.normalize, paths.styles.fonts, paths.styles.variables, paths.styles.main, paths.styles.components])
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss("bundle.css"))
        .pipe(dest(paths.styles.dest))
}

function scripts() {
    return src(paths.scripts.src)
        .pipe(dest([paths.scripts.dest]))
}

function images() {
    return src(paths.images.src)
        .pipe(dest(paths.images.dest))
}

function fonts() {
    return src(paths.fonts.src)
        .pipe(dest(paths.fonts.dest))
}

function appClean() {
    return src(paths.clean.src, { allowEmpty: true })
        .pipe(clean())
}

function include() {
    return src(paths.html.src)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(paths.html.dest));
}

function gulpWatch() {
    watch(paths.html.src, include);
    watch(paths.htmlInclude.src, include)
    watch(paths.styles.summaryMain, styles);
    watch(paths.styles.components, styles);
    watch(paths.scripts.src, scripts)
    watch(paths.fonts.src, fonts);
    watch(paths.images.src, images)
}


exports.default = series(appClean, parallel(include, styles, scripts, fonts, images), gulpWatch);