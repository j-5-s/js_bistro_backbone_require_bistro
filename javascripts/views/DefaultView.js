define([], function() {
  var DefaultView = Backbone.View.extend({
    tagName: 'p',
    initialize: function() {

    },
    render: function() {
      console.log('hello world!')
      this.$el.html('Default View');
      return this;
    }

  });
  return DefaultView;
});