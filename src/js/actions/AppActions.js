var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  initApp: function() {
    AppDispatcher.handleAction({
      type: Constants.ActionTypes.INIT
    });
  },

  createDrops: function() {
    AppDispatcher.handleAction({
      type: Constants.ActionTypes.CREATE_DROPS
    });
  },

  addDrop: function() {
    AppDispatcher.handleAction({
      type: Constants.ActionTypes.ADD_DROP
    });
  },

  removeDrop: function() {
    AppDispatcher.handleAction({
      type: Constants.ActionTypes.REMOVE_DROP
    });
  }

};
