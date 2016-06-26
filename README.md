# react-logger [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

## Install

```
npm install react-logger --save
```
## Usage

This module exposes `console.log` `console.error` and `console.dir` on the component. Everything is what you would normally expect, but log messages are prefixed with the displayName of the component so you know where things are coming from. This also works cross-browser, so on browsers without the console object it won't blow up.

```js
var React = require('react');
var LoggerMixin = require('react-logger');

React.createClass({
  displayName: 'TestComponent',
  // Add mixin
  mixins: [LoggerMixin],
  componentDidMount: function() {
    // Log: [TestComponent] something insightful
    this.log('something insightful');
  },
  render: function() {
    // do stuff here
  }
});
```

## LICENSE

(MIT License)

Copyright (c) 2016 Contra <yo@contra.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[gittip-url]: https://www.gittip.com/contra/
[gittip-image]: http://img.shields.io/gittip/contra.svg

[downloads-image]: http://img.shields.io/npm/dm/react-logger.svg
[npm-url]: https://npmjs.org/package/react-logger
[npm-image]: http://img.shields.io/npm/v/react-logger.svg

[travis-url]: https://travis-ci.org/contra/react-logger
[travis-image]: https://travis-ci.org/contra/react-logger.png?branch=master

[coveralls-url]: https://coveralls.io/r/contra/react-logger
[coveralls-image]: https://coveralls.io/repos/contra/react-logger/badge.png

[depstat-url]: https://david-dm.org/contra/react-logger
[depstat-image]: https://david-dm.org/contra/react-logger.png

[david-url]: https://david-dm.org/contra/react-logger
[david-image]: https://david-dm.org/contra/react-logger.png?theme=shields.io
