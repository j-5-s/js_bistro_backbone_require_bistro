define(['models/DefaultModel'], function( DefaultModel ) {

  var DefaultCollection = Backbone.Collection.extend({
    model: DefaultModel
    }
  });

  return DefaultCollection;
});
