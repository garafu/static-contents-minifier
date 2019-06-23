var { src, dest, series, parallel } = require("gulp");
var load = require("require-dir");
var tasks, job;

tasks = load("./gulp/tasks", { recurse: true });

job = series(
  tasks["clear"],
  tasks["copy"],
  parallel(
    tasks["minify-javascripts"],
    tasks["minify-stylesheets"],
    tasks["minify-images"]
  )
);

module.exports.default = job;