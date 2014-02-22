#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var yargs = require('yargs');
var async = require('async');
var slugify = require('./index');

var argv = yargs
.usage('Usage: $0 [OPTIONS] FILE')
.describe('e', 'lowercase file extension')
.demand(1)
.argv;

var dirname, extname, basename, join;
var dir, ext, base, toFile, lowerExt;

dirname = path.dirname;
extname = path.extname;
basename = path.basename;
join = path.join;
lowerExt = !! argv.e;

async.eachSeries(argv._, _slugify, function (error) {
    if (error) throw error;
});

function _slugify(file, callback) {
    dir = dirname(file);
    ext = extname(file);
    base = basename(file, ext);
    base = slugify(base);
    
    if (lowerExt) {
        ext = ext.toLowerCase();
    }
    
    toFile = path.join(dir, base + ext);
    
    fs.rename(file, toFile, callback);
}
