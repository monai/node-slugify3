var unidecode = require('unidecode');

module.exports = slugify;

function slugify(str, sep) {
    var out, re, i, l, stri;
    
    sep = (typeof sep !== 'undefined') ? sep : '-';
    re = RegExp('[\x00-\x2f\x3a-\x60\x7b-\x7f]|'+ sep);
    str = unidecode(str);
    str = str.toLowerCase()
    str = str.split(re);
    
    out = [];
    for (i = 0, l = str.length; i < l; i++) {
        stri = str[i];
        if (stri) {
            out.push(stri);
        }
    }
    
    return out.join(sep);
}
