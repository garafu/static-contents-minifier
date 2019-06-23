var config = require("../config.js");
var { src, dest, series, parallel } = require("gulp");
var sass = require("gulp-sass");
var minify;

minify = function () {
  return src("./**/*.{scss,css}", { cwd: config.path.input })
    .pipe(sass(config.sass))
    .pipe(dest("./", { cwd: config.path.output }));
};
minify.displayName = "minify stylesheets";

module.exports = series(minify);