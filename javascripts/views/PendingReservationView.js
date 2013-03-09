define([
  'text!templates/pending-reservation.html'
  ], function( pendingReservation ) {
  var RegistrationFormView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'render', 'removeThis', 'toggleActive');
      this.model.on('removePending', this.removeThis);

    },
    events: {
      'click .pending-reservation': 'toggleActive'
    },
    render: function() {
      var cid = this.model.cid;

      var t = _.template(pendingReservation, {model:this.model.toJSON(), cid: cid});
      this.$el.html(t);
      return this;
    },
    removeThis: function() {

      this.$el.remove();
    },
    toggleActive: function() {

      $('.pending-slot').removeClass('selected');
      this.$el.find('.pending-slot').addClass('selected');
    }


  });
  return RegistrationFormView;
});