define(['models/ReservationModel'], function( ReservationModel ) {

  var ReservationModel = Backbone.Collection.extend({
    model: ReservationModel,
    reservation_time: null,
    capacity: 50,
    getNumberPeople: function() {
      var n = 0;
      var models = this.models;
      for (var i = 0; i < models.length; i ++) {
        n = n +  parseInt(models[i].get('number'),10);
      }

      return n
    },
    getPercentComplete: function() {

      var p = Math.round((this.getNumberPeople()/this.capacity) *100);

      return p;

    }
  });

  return ReservationModel;
});
