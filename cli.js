#!/usr/bin/env node
'use strict';
const meow = require('meow');
const termImg = require('term-img');
const m = require('.');

const cli = meow([`
	Usage
	  $ swish-qr [options]

	Options
	  -a, --amount <amount>    The amount of money to send
	  -i, --img                Show QR code in the terminal
	  -l, --lock <field>       Lock fields from user input
	  -m, --message <message>  The message to send
	  -n, --number <number>    The recipient

	Example
	  $ swish-qr --number 1230000000 --amount 150 --message "Thanks for the help" --lock amount --lock number
`], {
	alias: {
		a: 'amount',
		i: 'img',
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
	if (cli.flags.img) {
		const buf = res.replace('data:image/png;base64,', '');

		termImg(Buffer.from(buf, 'base64'), {
			fallback: () => {
				console.error('iTerm >=2.9 required to show QR code');
			}
		});

		return;
	}

	console.log(res);
});
