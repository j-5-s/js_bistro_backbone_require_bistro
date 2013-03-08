define(['views/DefaultView'], function(DefaultView) {
  var AppRouter = Backbone.Router.extend({
    initialize: function() {
    },
    routes: {
      // Define some URL routes
      ""        : "defaultPage",
    },
    defaultPage: function() {
      var v = new DefaultView();
      $('#default-view-wrapper').html(v.render().el);
    },
  });

  return {

    initialize: function(options) {
      var appRouter = new AppRouter(options);
      Backbone.history.start();

      return appRouter;
    }
  };

});