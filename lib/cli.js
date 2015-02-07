var fs = require('fs');
var path = require('path');
var yargs = require('yargs');
var async = require('async');
var slugify = require('./slugify');

module.exports = cli;

function cli(argv) {
    argv = yargs(argv)
    .usage('Usage: $0 [OPTIONS] FILE')
    .describe('e', 'lowercase file extension')
    .demand(1)
    .argv;

    async.eachSeries(argv._, _slugify, function (error) {
        if (error) throw error;
    });

    function _slugify(file, callback) {
        var dir, ext, base, toFile, lowerExt;

        dir = path.dirname(file);
        ext = path.extname(file);
        base = path.basename(file, ext);
        base = slugify(base);
        lowerExt = !! argv.e;

        if (lowerExt) ext = ext.toLowerCase();
        toFile = path.join(dir, base + ext);

        fs.rename(file, toFile, callback);
    }
}
