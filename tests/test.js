const Sizes = require('../index.js');
import test from 'ava';

test('Sizes is an object', t => {
	t.true(Sizes !== null && typeof Sizes === 'object');
});
