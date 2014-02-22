var unidecode = require('unidecode');

module.exports = slugify;

function slugify(str) {
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
