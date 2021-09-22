import test from 'ava';
import { hostname } from 'os';

test('foo', t => {
	console.log(hostname());
	t.pass();
	t.snapshot({
		a: 1,
		b: 2,
		c: 'Test'
	});
});

test('bar', async t => {
	const bar = Promise.resolve('bar');  
	t.is(await bar, 'bar');	
}); 
