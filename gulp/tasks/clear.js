var config = require("../config.js");
var { src, dest, series, parallel } = require("gulp");
var del = require("del");
var clean;

clean = async function () {
  await del("./**/*", { cwd: config.path.output });
};
clean.displayName = "clear distination folder";

module.exports = series(clean);
