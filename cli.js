#!/usr/bin/env node
'use strict';
const meow = require('meow');
const m = require('.');

const cli = meow([`
	Usage
	  $ swish-qr [options]

	Options
	  -a, --amount <amount>    The amount of money to send
	  -l, --lock <field>       Lock fields from user input
	  -m, --message <message>  The message to send
	  -n, --number <number>    The recipient

	Example
	  $ swish-qr --number 1230000000 --amount 150 --message "Thanks for the help" --lock amount --lock number
`], {
	alias: {
		a: 'amount',
		l: 'lock',
		m: 'message',
		n: 'number'
	},
	string: [
		'message',
		'number'
	]
});

m(cli.flags).then(res => console.log(res));
