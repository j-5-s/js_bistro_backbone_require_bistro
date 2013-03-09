define([
  'views/RegistrationFormView',
  'views/PendingReservationsView',
  'models/ReservationModel',
  'collections/ReservationCollection',

  ], function(RegistrationFormView, PendingReservationsView, ReservationModel, ReservationCollection) {
  var AppRouter = Backbone.Router.extend({
    initialize: function() {
    },
    routes: {
      // Define some URL routes
      ""        : "defaultPage",
    },
    defaultPage: function() {




      var c = new ReservationCollection();
      var registrationForm = new RegistrationFormView({collection:c});
      $('.form-wrapper').html(registrationForm.render().el);
      var pendingReservationsView = new PendingReservationsView({ collection: c });

    $('#pending-reservations').html(pendingReservationsView.render().el);


      var pendingReservationModel = new ReservationModel({
        name: 'Joe',
        phone: '404-555-1212',
        number: 3
      });

       c.add(pendingReservationModel);



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