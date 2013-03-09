define([
  'text!templates/pending-reservation.html'
  ], function( pendingReservation ) {
  var RegistrationFormView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'render', 'removeThis');
      this.model.on('destroy', this.removeThis)
    },
    render: function() {
      var cid = this.model.cid;

      var t = _.template(pendingReservation, {model:this.model.toJSON(), cid: cid});
      this.$el.html(t);
      return this;
    },
    removeThis: function() {

      this.$el.remove();
    }

  });
  return RegistrationFormView;
});