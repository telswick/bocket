var Backbone = require('backbone');

var BookmarkModel = Backbone.Model.extend({
		urlRoot: '/api/bookmarks/',
		idAttribute: 'id',
	});

module.exports = BookmarkModel;