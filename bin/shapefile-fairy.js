#!/usr/bin/env node

var shpFairy = require('..');
var args = require('minimist')(process.argv.slice(2));
var filepath = args._[0];

function fail(err) {
  if (!args.quiet) console.log('Usage: shapefile-fairy <path to zipped shapefile>');
  console.error(err.message);
  process.exit(err.code === 'EINVALID' ? 3 : 1);
}

shpFairy(filepath, function(err, dir) {
  if (err) return fail(err);
  console.log(dir);
});
