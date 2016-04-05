var Backbone = require('backbone');

var TagModel = require('../models/TagModel.js');

var TagsCollection = Backbone.Collection.extend({
		url: '/api/tags/',
		model: TagModel
	});

module.exports = TagsCollection;