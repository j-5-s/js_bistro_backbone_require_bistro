define([
  'views/RegistrationFormView',
  'views/PendingReservationsView',
  'views/ReservationCollectionView',
  'models/ReservationModel',
  'collections/ReservationCollection',

  ], function(RegistrationFormView, PendingReservationsView, ReservationCollectionView, ReservationModel, ReservationCollection) {
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

       // setTimeout(function(){
       //  c.remove(pendingReservationModel);
       // },3000)

      var times = ['12:00'];
      for (var n = 1 ; n < 12; n++) {
        times.push(n + ':00pm');
      }
      //reservations
      for (var i = 0; i < 12; i ++) {
        var confirmedReservationCollection = new ReservationCollection();
        confirmedReservationCollection.reservation_time = times[i];
        console.log(confirmedReservationCollection)

        var reservationCollectionView = new ReservationCollectionView({collection:confirmedReservationCollection});

        $('#confirmed-reservations').append(reservationCollectionView.render().el)
      }

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