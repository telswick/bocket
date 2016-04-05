var Backbone = require('backbone');

var TagModel = Backbone.Model.extend({
		urlRoot: '/api/tags/',
		idAttribute: 'id'
	});

module.exports = TagModel;