var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  initApp: function() {
    AppDispatcher.handleAction({
      type: Constants.ActionTypes.INIT
    });
  },

  createDrop: function(element) {
    AppDispatcher.handleAction({
      type: Constants.ActionTypes.ADD_DROP,
      element: element
    });
  }

};
