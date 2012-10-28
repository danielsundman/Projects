define(function() {
	var Crisper = function(name, url) {
		console.log('Crisper ' + name + ' constructed');
		this.name = name;
		this.url = url;
	};
	Crisper.prototype.toString = function() {
		return 'Crisper(' + this.name + ', ' + this.url + ')';
	};
	return Crisper;
});