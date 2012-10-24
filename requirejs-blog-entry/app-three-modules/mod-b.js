define(['mod-c'], function(c) {
	console.log('in mod-b.js, from mod-c: ' + c);
	return 'from mod-b';
});