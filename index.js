var fs = require('fs');
var path = require('path');
var unidecode = require('unidecode');

module.exports = slugify;

var dirname, extname, basename, join;
var dir, ext, base, toFile;

dirname = path.dirname;
extname = path.extname;
basename = path.basename;
join = path.join;

function slugify(file, normalizeExt, callback) {
    dir = dirname(file);
    ext = extname(file);
    base = basename(file, ext);
    base = _slugify(base);
    
    if (normalizeExt) {
        ext = ext.toLowerCase();
    }
    
    toFile = path.join(dir, base + ext);
    
    fs.rename(file, toFile, callback);
}

function _slugify(str) {
    var out, re, i, l, stri;
    
    re = /[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]/
    str = str.toLowerCase()
    str = unidecode(str);
    str = str.split(re);
    
    out = [];
    for (i = 0, l = str.length; i < l; i++) {
        stri = str[i];
        if (stri) {
            out.push(stri);
        }
    }
    
    return out.join('-');
}
