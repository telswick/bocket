var Backbone = require('backbone');
var _ = require('underscore');

var HomeView = Backbone.View.extend({
		el:'\
			<div class="container">\
				<div class="row">\
					<div class="three columns" id="all-bookmarks"></div>\
					<div class="six columns">\
						<div class="row">\
							<div class="twelve columns" id="all-tags"></div>\
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
			var BookmarksCollection = require('../collections/BookmarksCollection.js');
			var bookmarks = new BookmarksCollection();
			bookmarks.fetch();
			var BookmarksListView = require('./BookmarksListView.js');
			var bookmarksListView = new BookmarksListView({ 
				collection: bookmarks
			});
			this.$el.find('#all-bookmarks').html(bookmarksListView.render().el);

			var TagsCollection = require('../collections/TagsCollection.js');
			var tags = new TagsCollection();
			tags.fetch();
			var TagsListView = require('./TagsListView.js');
			var tagsListView = new TagsListView({ 
				collection: tags
			});
			this.$el.find('#all-tags').html(tagsListView.render().el);





			return this;
		}
	});

module.exports = HomeView;