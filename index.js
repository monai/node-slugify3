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
    
    re = /[§\-=±!@#\$%\^&\*\(\)_\+`~\[\]{};'\\:\"\|,\./<>\?\s\u2010-\u28ff]/;
    str = str.toLowerCase()
    str = str.split(re);
    
    out = [];
    for (i = 0, l = str.length; i < l; i++) {
        stri = str[i];
        if (stri) {
            out.push(stri);
        }
    }
    
    return unidecode(out.join('-'));
}
