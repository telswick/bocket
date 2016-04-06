var Backbone = require('backbone');
var _ = require('underscore');

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
	});

module.exports = BookmarksListView;