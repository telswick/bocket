var Backbone = require('backbone');
var _ = require('underscore');

var TagsListView = Backbone.View.extend({
		el: '<ul></ul>',

		template: _.template('\
			<% tags.each(function(tag) { %>\
				<li><a href="#"><%= tag.get("name") %></a></li>\
			<% }) %>\
		'),

		initialize: function() {
			this.listenTo(this.collection, 'update', this.render);
		},

		render: function() {
			this.$el.html(this.template({ tags: this.collection }));
			return this;
		}
	});

module.exports = TagsListView;