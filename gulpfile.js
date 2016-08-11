'use strict';

var gulp = require('gulp');

var appDev = 'dev/';
var appProd = 'public/';
var vendor = 'public/vendor';

/* JS & TS */
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var Builder = require('systemjs-builder');

var tslint = require('gulp-tslint');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('lint', () => {
    return gulp.src(appDev + '**/*.ts')
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

gulp.task('build-ts', ['lint'], () => {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-copy', ['build-ts'], () => {

    return gulp.src([appDev + '*.*', appDev + '**/*.html', appDev + '**/*.htm', appDev + '**/*.css'])
        .pipe(gulp.dest(appProd));
});

gulp.task('vendor', () => {

    // Angular 2 Framework
    gulp.src('node_modules/@angular/**')
        .pipe(gulp.dest(vendor + '/@angular'));

    //ES6 Shim
    gulp.src('node_modules/es6-shim/**')
        .pipe(gulp.dest(vendor + '/es6-shim/'));

    //reflect metadata
    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(vendor + '/reflect-metadata/'));

    //rxjs
    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(vendor + '/rxjs/'));

    //systemjs
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(vendor + '/systemjs/'));

    //zonejs
    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(vendor + '/zone.js/'));
});

gulp.task('watch', () => {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(appDev + '**/*.{html,htm,css}', ['build-copy']);
});

/** then bundle */
gulp.task('bundle', ['build-ts', 'build-copy', 'vendor'], () => {
    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new Builder('public', 'public/systemjs.config.js');

    /*
       the parameters of the below buildStatic() method are:
           - your transcompiled application boot file (the one wich would contain the bootstrap(MyApp, [PROVIDERS]) function - in my case 'dist/app/boot.js'
           - the output (file into which it would output the bundled code)
           - options {}
    */
    return builder
        .buildStatic('app/main.js', appProd + 'app/bundle.js', { minify: false, sourceMaps: true})
        .then((result) => {
            let count = 1;
            console.info('Building bundle complete!');
            console.info(`Evaluating result using obj structure: ${Object.keys(result)} ==>`);
            console.info(`Generated bundle src: ${result.source ? true : false}`);
            console.info(`Generated bundle source map: ${result.sourceMap ? true : false}`);
            console.info(`Assets included in bundle: ${result.assetList ? result.assetList.length : "none"}`);
            for (let asset of result.assetList) {
                console.log(`${count++}.\t${asset}`);
            }

            count = 1;
            console.info(`Modules included in bundle: ${result.modules ? result.modules.length : "none"}`);
            for (let module of result.modules) {
                console.log(`${count++}.\t${module}`);
            }
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});

gulp.task('default', ['watch', 'build-ts', 'build-copy', 'bundle']);