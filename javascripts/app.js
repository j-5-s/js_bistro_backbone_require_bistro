define(['views/RegistrationFormView'], function(RegistrationFormView) {
  var AppRouter = Backbone.Router.extend({
    initialize: function() {
    },
    routes: {
      // Define some URL routes
      ""        : "defaultPage",
    },
    defaultPage: function() {
      var registrationForm = new RegistrationFormView();
      $('.form-wrapper').html(registrationForm.render().el);
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