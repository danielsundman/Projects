require.config({
	paths: {
		jquery: '../lib/jquery-1.8.2.min'
	}
});

require(['jquery'], function($) {
	$(function() {
		$('div').html('<h1>In main.js using jquery!</h1>');
	});
});
