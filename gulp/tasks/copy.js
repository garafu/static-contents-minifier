var config = require("../config.js");
var { src, dest, series, parallel } = require("gulp");
var copy;

copy = function () {
  return src("./**/*", { cwd: config.path.input })
    .pipe(dest("./", { cwd: config.path.output }));
};
copy.displayName = "copy source files to distribution";

module.exports = series(copy);
