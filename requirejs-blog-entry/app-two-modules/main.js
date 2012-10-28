require.config({
	paths: {
		jquery: '../lib/jquery-1.8.2.min'
	}
});

require(['Crisper', 'renderer'], function(Crisper, renderer) {
	console.log('instantiating the CEO and rendering him');
	var ceo = new Crisper('Mats Henricson', 'http://www.crisp.se/konsulter/mats-henricson');
	renderer.render(ceo);
});
