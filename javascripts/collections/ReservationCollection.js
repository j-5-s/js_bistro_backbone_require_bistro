define(['models/ReservationModel'], function( ReservationModel ) {

  var ReservationModel = Backbone.Collection.extend({
    model: ReservationModel,
    reservation_time: null,
    capacity: 50,
    getNumberPeople: function() {
      return this.reduce(function(memo, model){return memo + model.get('number'); }, 0);
    },
    getPercentComplete: function() {
      return Math.round(this.capacity/this.getNumberPeople());
    }
  });

  return ReservationModel;
});
