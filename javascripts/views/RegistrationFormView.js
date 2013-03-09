define([
  'models/ReservationModel',
  'text!templates/new-reservation.html'
  ], function( ReservationModel, newReservationForm ) {
  var RegistrationFormView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'render', 'addReservation');
      console.log('c',this.collection);
    },
    events : {
      'submit #add-reservation': 'addReservation'
    },
    render: function() {
      this.$el.html(newReservationForm);
      return this;
    },
    addReservation: function(e){
      e.preventDefault();
      console.log($(e.currentTarget).find('input[name="name"]').val())

      this.collection.add({
        name: $(e.currentTarget).find('input[name="name"]').val(),
        phone: $(e.currentTarget).find('input[name="phone"]').val() ,
        number: $(e.currentTarget).find('input[name="number"]').val()
      });
    }

  });
  return RegistrationFormView;
});