#!/usr/bin/env node

var glob = require('glob');
var intoStream = require('into-stream');
var through = require('through2');
var path = require('path');
var rimraf = require('rimraf');
var fs = require('fs');

var onIgnored = function(file) {
  var filename = path.join(process.cwd(), file);

  if ((/license/i).test(path.basename(filename))) {
    return;
  }

  console.log('  removing %s', filename.replace(process.cwd() + '/', ''));
  rimraf.sync(filename);
};

var onIgnore = function(ignore) {
  if (!ignore) {
    return;
  }

  glob.sync(ignore).forEach(onIgnored);
};

var cleanIgnores = function() {
  var filename = path.join(__dirname, '.gitignore');
  var ignores = fs.readFileSync(filename, 'utf-8').split(/\n/);
  ignores.forEach(onIgnore);
}

var onPkg = function(filename) {
  if (!fs.existsSync(filename)) {
    return;
  }

  var pkg = require(filename);
  Object.keys(pkg).forEach(function(key) {
    var regex = (/^\_|^readme|^readmeFilename/);
    pkg[key] = !regex.test(key) ? pkg[key] : undefined;
  })

  console.log('  cleaning %s', filename.replace(process.cwd() + '/', ''));
  fs.writeFileSync(filename, JSON.stringify(pkg, null, 2), 'utf-8');
}

var cleanReadmes = function() {
  glob.sync(path.join(process.cwd(), '**/*/package.json')).forEach(onPkg);
}

cleanReadmes();
cleanIgnores();