(function() {

var countNumberOfAttributes = function(obj) {
	var prop, attrs = obj ? obj.toJSON() : null, result = 0;
	if (attrs) {
		for (prop in attrs) {
			if (attrs.hasOwnProperty(prop)) {
				result += 1;
			}
		}
	}
	return result;
},
hasAttribute = function(obj, attr) {
	return Boolean(obj && attr && obj.getAttrs() && obj.getAttrs().hasOwnProperty(attr));
};

TestCase("ItemTest", {

	"test creating instance of Item should create valid instance with properties specified in constructor": function() {
		YUI({bootstrap:false}).use('item', function(Y) {
			var milk = new Y.Item({name:'milk'});
			assertEquals('name should be milk', 'milk', milk.get('name'));
		});
	},

	"test creating instance of Item should create instance with undefined id (apparently?)": function() {
		YUI({bootstrap:false}).use('item', 'json-stringify', function(Y) {
			var milk = new Y.Item({name:'milk'});
			assertUndefined('id should be null: ' + Y.JSON.stringify(milk.getAttrs()), milk.get('id'));
		});
	},

	"test creating instance should have properties specified by setter": function() {
		YUI({bootstrap:false}).use('item', function(Y) {
			var item = new Y.Item();
			item.set('name', 'OJ');
			assertEquals('name should be OJ', 'OJ', item.get('name'));
		});
	},

	"test creating instance should have properties specified by default value": function() {
		YUI({bootstrap:false}).use('item', function(Y) {
			var item = new Y.Item();
			assertEquals('kind should be dairy', 'dairy', item.get('kind'));
		});
	},

	"test item instances should have exactly three attributes (name, kind and id)": function() {
		YUI({bootstrap:false}).use('item', function(Y) {
			var item = new Y.Item();
			assertEquals('there should be three attributes', 3, countNumberOfAttributes(item));
			assertTrue(hasAttribute(item, 'name'));
			assertTrue(hasAttribute(item, 'kind'));
			assertTrue(hasAttribute(item, 'id'));
		});
	},

	"test it should no be possible to set either of the properties name and kind to null": function() {
		YUI({bootstrap:false}).use('item', function(Y) {
			var item = new Y.Item();
			item.set('name', null);
			assertEquals('', item.get('name'));
		});
	}


})
})();
