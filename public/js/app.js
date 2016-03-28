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

// Add Views for Home, Bookmarks, Tags	

var HomeView = Backbone.View.extend({
		el:'\
			<div class="container">\
				<div class="row">\
					<div class="three columns"></div>\
					<div class="six columns">\
						<div class="row">\
							<div class="twelve columns"></div>\
						</div>\
						<div class="row">\
							<div class="twelve columns"></div>\
						</div>\
					</div>\
					<div class="three columns" id="all-bookmarks"></div>\
				</div>\
			</div>\
		',

		render: function() {
			var bookmarks = new BookmarksCollection();
			bookmarks.fetch();
			var bookmarksListView = new BookmarksListView({ 
				collection: bookmarks
			});
			this.$el.find('#all-bookmarks').html(bookmarksListView.render().el);

			return this;
		}
	});

	var BookmarksListView = Backbone.View.extend({
		el: '<ul></ul>',

		template: _.template('\
			<% bookmarks.each(function(bookmark) { %>\
				<li><a href="#"><%= bookmark.get("url") %></a></li>\
			<% }) %>\
		'),

		initialize: function() {
			this.listenTo(this.collection, 'update', this.render);
		},

		render: function() {
			this.$el.html(this.template({ bookmarks: this.collection }));
			return this;
		}
	})


	var homeView = new HomeView();
	$('#content').html(homeView.render().el);

// })

	