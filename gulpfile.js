var gulp = require('gulp');

var appDev = 'dev/';
var appProd = 'public/';
var vendor = 'public/vendor';

/* JS & TS */
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tslint = require('gulp-tslint');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('lint', () => {
    return gulp.src(appDev + '**/*.ts')
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

gulp.task('build-ts', () => {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-copy', () => {

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

gulp.task('default', ['watch', 'build-ts', 'build-copy']);