#!/usr/bin/env node

var optimist = require('optimist');
var async = require('async');
var slugify = require('./index');

var argv = optimist
.usage('Usage: $0 [OPTIONS] FILE')
.describe('e', 'normalize file extension')
.demand(1)
.argv;

async.eachSeries(argv._, _slugify, function (error) {
    if (error) throw error;
});

function _slugify(filename, callback) {
    slugify(filename, !! argv.e, callback);
}
