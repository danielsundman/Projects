define(['mod-b'], function(b) {
	console.log('in mod-a.js, from mod-b: ' + b);
	return 'from mod-a.js';
});