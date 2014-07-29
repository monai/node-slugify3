# slugify

Unidecode based slugify implementation and CLI tool for file renaming.

This slugify implementation is unique in the way that uses [unidecode](https://www.npmjs.org/package/unidecode) transliteration table. It tries to transliterate non-ascii symbols first before omitting them.

## Installation

npm install slugify

## API

**slugify(string, separator)**

- `string` String - aa unicode string to slugify
- `separator` String, - optional, default "-", a replacement character for non-ascii symbols and spaces

## CLI

```
Usage: slugify [OPTIONS] FILE

Options:
  -e  lowercase file extension
```

## License

MIT
