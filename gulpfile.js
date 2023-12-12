const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const obfuscate = require("gulp-obfuscate");

// Função para comprimir Imagens
function comprimirImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"))
}

// Função para comprimir código JavaScript
function comprimirJavaScript() {
    return gulp.src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts"))
}

// Função para compilar SASS
function compilarSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(gulp.dest('./build/styles'));
}

// Parelelo para ganho de performance
exports.default = gulp.parallel(compilarSass, comprimirImagens, comprimirJavaScript);

// gulp-watch para captar alterações feitas no projeto em tempo real