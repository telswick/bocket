var Backbone = require('backbone');

var BookmarkModel = require('../models/BookmarkModel.js');

var BookmarksCollection = Backbone.Collection.extend({
		url: '/api/bookmarks/',
		model: BookmarkModel
	});

module.exports = BookmarksCollection;