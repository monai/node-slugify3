var assert = require('assert');
var unicode = require('unicode-6.3.0');
var slugify = require('../index.js');
require('string.fromcodepoint');

describe('slugify', function () {
    describe('separator', function () {
        it('should use passed separator', function () {
            var str = 'aaa~bbb-ccc';
            var slug = slugify(str, '~');
            
            assert.strictEqual(slug, 'aaa~bbb~ccc');
        });
    });
    
    describe('scripts', function () {
        function isSlug(str) {
            return (/^(?:[0-9a-z]|-)*$/).test(str);
        }
    
        function test(cp, comment) {
            it(comment, function () {
                var str;
                str = String.fromCodePoint.apply(null, cp);
                str = slugify(str);
                assert(isSlug(str));
            });
        }
    
        unicode.scripts.forEach(function (script) {
            var cp = require('unicode-6.3.0/scripts/'+ script +'/code-points');
            test(cp, script);
        });
    });
});
