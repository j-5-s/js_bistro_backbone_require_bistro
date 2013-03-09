define(['models/ReservationModel'], function( ReservationModel ) {

  var ReservationModel = Backbone.Collection.extend({
    model: ReservationModel,
    reservation_time: null
  });

  return ReservationModel;
});
