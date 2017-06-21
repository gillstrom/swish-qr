#!/usr/bin/env node
'use strict';
const meow = require('meow');
const qrcodeTerminal = require('qrcode-terminal');
const termImg = require('term-img');
const m = require('.');

const cli = meow([`
	Usage
	  $ swish-qr [options]

	Options
	  -a, --amount <amount>    The amount of money to send
	  -i, --image              Show QR code in the terminal
	  -l, --lock <field>       Lock fields from user input
	  -m, --message <message>  The message to send
	  -n, --number <number>    The recipient

	Example
	  $ swish-qr --number 1230000000 --amount 150 --message "Thanks for the help" --lock amount --lock number
`], {
	alias: {
		a: 'amount',
		i: 'image',
		l: 'lock',
		m: 'message',
		n: 'number'
	},
	string: [
		'message',
		'number'
	]
});

m(cli.flags).then(res => {
	if (cli.flags.image) {
		const buf = res.replace('data:image/png;base64,', '');

		termImg(Buffer.from(buf, 'base64'), {
			fallback: () => {
				qrcodeTerminal.generate(m.generateString(cli.flags), {small: true});
			}
		});

		return;
	}

	console.log(res);
});
