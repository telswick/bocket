var Backbone = require('backbone');
var _ = require('underscore');

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

module.exports = HomeView;