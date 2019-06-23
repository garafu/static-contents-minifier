var config = require("../config.js");
var { src, dest, series, parallel } = require("gulp");
var uglify = require("gulp-uglify");
var minify;

minify = function () {
  return src("./**/*.js", { cwd: config.path.input })
    .pipe(uglify(config.uglify))
    .pipe(dest("./", { cwd: config.path.output }));
};
minify.displayName = "minify javascripts";

module.exports = series(minify);