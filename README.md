# slugify3

[![Build Status](http://img.shields.io/travis/monai/node-slugify3/develop.svg)](https://travis-ci.org/monai/node-slugify3)
[![NPM Version](http://img.shields.io/npm/v/slugify3.svg)](https://www.npmjs.org/package/slugify3)

Unidecode based slugify implementation and CLI tool for file renaming.

This slugify implementation is unique in the way that uses [unidecode](https://www.npmjs.org/package/unidecode) transliteration table. It tries to transliterate non-ascii symbols first before omitting them.

## Installation

Install as dependency:

`npm install slugify3`

Install as CLI tool:

`npm install -g slugify3`

## How to use

``` js
var slugify = require('slugify3');
slugify('Language Learning and Teaching');
slugify('Изучение и обучение иностранных языков', '+');
slugify('語文教學・语文教学');
```

## API

**slugify(string, separator)**

- `string` String - an unicode string to slugify
- `separator` String, - optional, default "-", a replacement character for non-ascii symbols and spaces

## CLI

```
Usage: slugify [OPTIONS] FILE

Options:
  -e  lowercase file extension
```

## License

MIT
