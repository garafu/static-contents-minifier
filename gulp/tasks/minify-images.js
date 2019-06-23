var config = require("../config.js");
var { src, dest, series, parallel } = require("gulp");
var imagemin = require("gulp-imagemin");
var minify;

minify = function () {
  return src("./**/*.{jpg,jpeg,png,gif,svg}", { cwd: config.path.input })
    .pipe(imagemin(
      imagemin.gifsicle(config.imagemin.gif),
      imagemin.jpegtran(config.imagemin.jpeg),
      imagemin.optipng(config.imagemin.png),
      imagemin.svgo(config.imagemin.svg)
    ))
    .pipe(dest("./", { cwd: config.path.output }));
};
minify.displayName = "minify images";

module.exports = series(minify);