import isPng from 'is-png';
import test from 'ava';
import m from '.';

const fixture = {
	amount: 100,
	lock: ['amount', 'number'],
	message: 'Lorem ipsum',
	number: '0701234567'
};

test('generate swish qr code', async t => {
	const base64 = await m(fixture);
	t.true(base64.startsWith('data:image/png;base64,iVBORw0KGgo'));
	t.true(isPng(Buffer.from(base64.replace('data:image/png;base64,', ''), 'base64')));
});

test('generate swish qr code - sync', t => {
	const base64 = m.sync(fixture);
	t.true(base64.startsWith('data:image/png;base64,iVBORw0KGgo'));
	t.true(isPng(Buffer.from(base64.replace('data:image/png;base64,', ''), 'base64')));
});
