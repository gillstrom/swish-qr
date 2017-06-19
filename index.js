'use strict';
const qr = require('qr-image');
const Datauri = require('datauri');

const datauri = new Datauri();

const mapLock = arr => {
	let ret = 7;

	if (!Array.isArray(arr) || arr.length === 0) {
		return ret;
	}

	if (arr.includes('amount')) {
		ret -= 2;
	}

	if (arr.includes('message')) {
		ret -= 4;
	}

	if (arr.includes('number')) {
		ret -= 1;
	}

	return ret;
};

module.exports = opts => new Promise(resolve => {
	opts = Object.assign({
		amount: 0,
		lock: [],
		message: '',
		number: ''
	}, opts);

	datauri.format('.png', qr.imageSync(`C${opts.number};${opts.amount};${opts.message};${mapLock(opts.lock)}`, {type: 'png'}));
	resolve(datauri.content);
});
