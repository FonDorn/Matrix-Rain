const Dispatcher = require('flux').Dispatcher;
const Constants = require('../constants/AppConstants');
const assign = require('object-assign');

let AppDispatcher = assign(new Dispatcher(), {

  handleAction(action) {
    
    let payload = {
      source: Constants.ActionSources.VIEW_ACTION,
      action: action
    };

    this.dispatch(payload);
  }

});

module.exports = AppDispatcher;
