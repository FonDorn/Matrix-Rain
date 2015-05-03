const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const jquery = require('jquery');
const _ = require('underscore');

const CHANGE_EVENT = 'change';

// Local var
let _width = 0;
let _height = 0;
let _drops = [];

// Init
function init() {
  _width = jquery(window).width();
  _height = jquery(window).height();

}

// Push column
function AddDrop(element) {
    _drops.push(element);
}

let AppStore = assign({}, EventEmitter.prototype, {

  getWidth() {
    return _width;
  },

  getDrops() {
    return _drops;
  },

  // Allow Controller-View to register itself with store
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  // triggers change listener above, firing controller-view callback
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

});

AppDispatcher.register(function(payload) {
    let action = payload.action;
    
    switch(action.type) {

      case Constants.ActionTypes.INIT:
        init();
        break;

      case Constants.ActionTypes.ADD_DROP:
        AddDrop(action.element);
        break;

        default:
          return true;
    }

    AppStore.emitChange();

    return true;

});

module.exports = AppStore;
