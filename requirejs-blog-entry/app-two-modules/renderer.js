define(['jquery'], function($) {
	return {
		render: function(crisper) {
			console.log('rendering ' + crisper);
			$('div').html(crisper.toString());
		}
	};
});