define([
  'text!templates/reservations-collections.html'
  ], function( reservationCollection ) {
  var RegistrationFormView = Backbone.View.extend({
    initialize: function() {
      //_.bindAll(this, 'render', 'addReservation');


    },
    events : {

    },
    render: function() {

      var t = _.template(reservationCollection,{c:this.collection})
      this.$el.html(t);
      return this;
    }
  });
  return RegistrationFormView;
});