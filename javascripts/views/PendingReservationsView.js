define([
  'views/PendingReservationView',
  'models/ReservationModel'
  ], function( PendingReservationView, ReservationModel ) {
  var RegistrationFormView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'render', 'addOne');
      this.collection.on('add', this.addOne);
      this.collection.on('remove', this.removeOne);
    },
    render: function() {



     // this.addOne(pendingReservationModel);

      this.$el.html('<h2>Pending Reservations</h2>');
      return this;
    },
    addOne: function(m) {

      var pendingReservation = new PendingReservationView({model:m});

      this.$el.append(pendingReservation.render().el);
    },
    removeOne: function(m) {
      m.trigger('removePending');
    }





  });
  return RegistrationFormView;
});