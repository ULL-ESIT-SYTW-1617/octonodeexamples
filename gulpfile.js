var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("crypt", shell.task([
  "zip --encrypt pass.zip .password .ghtoken",
  "rm -f .password* .ghtoken*"
]));

gulp.task("uncrypt", shell.task(["unzip pass.zip"]));


