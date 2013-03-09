define([
  'text!templates/new-reservation.html'
  ], function( newReservationForm ) {
  var RegistrationFormView = Backbone.View.extend({
    initialize: function() {

    },
    render: function() {
      this.$el.html(newReservationForm);
      return this;
    }

  });
  return RegistrationFormView;
});