#!/usr/bin/env node

var shpFairy = require('..');
var filepath = process.argv[2];

function fail(err) {
  console.log('Usage: shapefile-fairy <path to zipped shapefile>');
  console.error(err);
  process.exit(1);
}

shpFairy(filepath, function(err, dir) {
  if (err) return fail(err);
  console.log(dir);
});
