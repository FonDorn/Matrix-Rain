var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  initApp: function() {
    AppDispatcher.handleAction({
      type: Constants.ActionTypes.INIT
    });
  },

  createDrops: function(size) {
    AppDispatcher.handleAction({
      type: Constants.ActionTypes.CREATE_DROPS,
      size: size
    });
  },

  addDrop: function() {
    AppDispatcher.handleAction({
      type: Constants.ActionTypes.ADD_DROP
    });
  }

};
