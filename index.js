'use strict';
const qr = require('qr-image');
const Datauri = require('datauri');
const getStream = require('get-stream');

const datauri = new Datauri();

const mapLock = arr => {
	let ret = 7;

	if (!Array.isArray(arr) || arr.length === 0) {
		return ret;
	}

	if (arr.indexOf('amount') !== -1) {
		ret -= 2;
	}

	if (arr.indexOf('message') !== -1) {
		ret -= 4;
	}

	if (arr.indexOf('number') !== -1) {
		ret -= 1;
	}

	return ret;
};

const generateString = opts => {
	opts = Object.assign({
		amount: 0,
		lock: [],
		message: '',
		number: ''
	}, opts);

	return `C${opts.number};${opts.amount};${opts.message};${mapLock(opts.lock)}`;
};

module.exports = opts => {
	const str = generateString(opts);
	const stream = qr.image(str, {type: 'png'});

	return getStream.buffer(stream).then(data => datauri.format('.png', data).content);
};

module.exports.sync = opts => {
	return datauri.format('.png', qr.imageSync(generateString(opts), {type: 'png'})).content;
};

module.exports.generateString = generateString;
