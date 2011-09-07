YUI.add('item', function(Y) {
	'use strict';
	Y.Item = Y.Base.create('Item', Y.Model, [], {}, {
		ATTRS: {
			name: {
				value: '',
				setter:function(val) {
					return Y.Lang.isNull(val) ? '' : val;
				}
			},
			kind: {
				value: 'dairy', // default value
				setter:function(val) {
					return Y.Lang.isNull(val) ? '' : val;
				}
			}
		}
	});
}, '0.0.1', {requires:['model']});
