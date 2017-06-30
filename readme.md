# swish-qr [![Build Status](https://travis-ci.org/gillstrom/swish-qr.svg?branch=master)](https://travis-ci.org/gillstrom/swish-qr)

> Generate a [Swish](https://www.getswish.se/) QR code


## Install

```
$ npm install swish-qr
```


## Usage

```js
const swishQr = require('swish-qr');

swishQr({
	amount: 100,
	lock: ['amount', 'number'],
	message: 'Lorem ipsum',
	number: '0701234567'
}).then(result => {
	console.log(result);
	//=> 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL...'
});
```


## API

### swishQr(options)

Returns a `Promise` resolving in to a `base64` string.

### swishQr.sync(options)

Returns a `base64` string.

### swishQr.generateString(options)

Returns a formatted string that's used to create the QR code.

#### options

*Required*<br>
Type: `Object`

##### amount

Type: `float`<br>
Default: `0`

The amount of money to send.

##### lock

Type: `Array`<br>
Default: `[]`

Lock fields in the Swish application from user input.


##### message

Type: `string`<br>
Default: `''`

Define a message to send.

##### number

Type: `string`<br>
Default: `''`

The recipient.


## Related

* [swish-qr-cli](https://github.com/gillstrom/swish-qr-cli) - CLI for this module.


## License

MIT © [gillstrom](http://github.com/gillstrom)
