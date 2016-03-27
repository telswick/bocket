'use strict';

// $(document).on('ready', function() {

	$.ajaxSetup({
	    headers: {
	        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	    }
	});

	var BookmarkModel = Backbone.Model.extend({
		urlRoot: '/api/bookmarks/',
		idAttribute: 'id',
	});

	var TagModel = Backbone.Model.extend({
		urlRoot: '/api/tags/',
		idAttribute: 'id'
	});

	

	var BookmarksCollection = Backbone.Collection.extend({
		url: '/api/bookmarks/',
		model: PostModel
	});

	var TagsCollection = Backbone.Collection.extend({
		url: '/api/tagss/',
		model: SubbredditModel
	});

	