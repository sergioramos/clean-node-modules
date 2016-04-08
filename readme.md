# clean-node-modules

[![](https://img.shields.io/npm/v/clean-node-modules.svg)](https://www.npmjs.com/package/clean-node-modules) [![](https://img.shields.io/david/ramitos/clean-node-modules.svg)](https://david-dm.org/ramitos/clean-node-modules) [![](https://img.shields.io/npm/l/clean-node-modules.svg)](https://www.npmjs.com/package/clean-node-modules)

If space is a constraint and you want to bundle node_modules, clean them first!

## install 

```bash
npm install [--save/--save-dev] clean-node-modules
```

## example

```bash
clean-node-modules:master* λ node index.js
  cleaning node_modules/balanced-match/package.json
  cleaning node_modules/brace-expansion/package.json
  cleaning node_modules/concat-map/package.json
  cleaning node_modules/core-util-is/package.json
  cleaning node_modules/from2/package.json
  cleaning node_modules/glob/package.json
  cleaning node_modules/inflight/package.json
  cleaning node_modules/inherits/package.json
  cleaning node_modules/into-stream/package.json
  cleaning node_modules/isarray/package.json
  cleaning node_modules/minimatch/package.json
  cleaning node_modules/once/package.json
  cleaning node_modules/path-is-absolute/package.json
  cleaning node_modules/process-nextick-args/package.json
  cleaning node_modules/readable-stream/package.json
  cleaning node_modules/rimraf/package.json
  cleaning node_modules/string_decoder/package.json
  cleaning node_modules/through2/package.json
  cleaning node_modules/util-deprecate/package.json
  cleaning node_modules/wrappy/package.json
  cleaning node_modules/xtend/package.json
  removing node_modules/isarray/component.json
  removing node_modules/balanced-match/README.md
  removing node_modules/brace-expansion/README.md
  removing node_modules/core-util-is/README.md
  removing node_modules/from2/README.md
  removing node_modules/glob/README.md
  removing node_modules/glob/changelog.md
  removing node_modules/inflight/README.md
  removing node_modules/inherits/README.md
  removing node_modules/into-stream/readme.md
  removing node_modules/isarray/README.md
  removing node_modules/minimatch/README.md
  removing node_modules/once/README.md
  removing node_modules/path-is-absolute/readme.md
  removing node_modules/process-nextick-args/readme.md
  removing node_modules/readable-stream/README.md
  removing node_modules/readable-stream/doc/wg-meetings/2015-01-30.md
  removing node_modules/rimraf/README.md
  removing node_modules/string_decoder/README.md
  removing node_modules/through2/README.md
  removing node_modules/util-deprecate/History.md
  removing node_modules/util-deprecate/README.md
  removing node_modules/wrappy/README.md
  removing node_modules/xtend/README.md
  removing node_modules/concat-map/README.markdown
  removing node_modules/readable-stream/doc/stream.markdown
  removing node_modules/xtend/.jshintrc
  removing node_modules/balanced-match/.travis.yml
  removing node_modules/concat-map/.travis.yml
  removing node_modules/from2/.travis.yml
  removing node_modules/isarray/.travis.yml
  removing node_modules/process-nextick-args/.travis.yml
  removing node_modules/readable-stream/.travis.yml
  removing node_modules/balanced-match/.npmignore
  removing node_modules/brace-expansion/.npmignore
  removing node_modules/isarray/.npmignore
  removing node_modules/readable-stream/.npmignore
  removing node_modules/string_decoder/.npmignore
  removing node_modules/through2/.npmignore
  removing node_modules/xtend/.npmignore
  removing node_modules/inflight/.eslintrc
  removing node_modules/core-util-is/test.js
  removing node_modules/from2/test.js
  removing node_modules/inflight/test.js
  removing node_modules/inherits/test.js
  removing node_modules/isarray/test.js
  removing node_modules/process-nextick-args/test.js
  removing node_modules/xtend/test.js
  removing node_modules/balanced-match/test
  removing node_modules/concat-map/test
  removing node_modules/wrappy/test
  removing node_modules/concat-map/example
  removing node_modules/balanced-match/example.js
  removing node_modules/brace-expansion/example.js
  removing node_modules/readable-stream/doc
```

## license

MIT