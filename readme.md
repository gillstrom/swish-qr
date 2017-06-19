# swish-qr

> Generate a [Swish](https://www.getswish.se/) QR code


## Install

```
$ npm install --save swish-qr
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

### swishQr(object)

Returns a promise resolving in to a `base64` string.

#### object

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


## CLI

```
$ npm install --global swish-qr
```

```
$ swish-qr --help

  Generate a Swish QR code

  Usage
    $ swish-qr [options]

  Options
    -a, --amount <amount>    The amount of money to send
    -l, --lock <field>       Lock fields from user input
    -m, --message <message>  The message to send
    -n, --number <number>    The recipient

  Example
    $ swish-qr --number 1230000000 --amount 150 --message "Lorem ipsum" --lock amount --lock number
```


## License

MIT © [gillstrom](http://github.com/gillstrom)
