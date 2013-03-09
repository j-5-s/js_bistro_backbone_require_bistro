define([
  'text!templates/reservations-collections.html'
  ], function( reservationCollection ) {
  var RegistrationFormView = Backbone.View.extend({
    initialize: function(options) {
      _.bindAll(this, 'render', 'addFromPending');
      this.pending_collection = options.pending_collection;

    },
    events : {
      'click' : 'addFromPending'
    },
    render: function() {

      var t = _.template(reservationCollection,{c:this.collection})
      this.$el.html(t);
      return this;
    },
    addFromPending: function(e) {
      e.preventDefault();
      var cid = $('#pending-reservations .selected').parent().attr('id').split('-')[2];
      var m = this.pending_collection.get(cid);
      this.pending_collection.remove(m);
      this.collection.add(m);
      console.log(this.collection,'collection')
      this.render();

    }
  });
  return RegistrationFormView;
});