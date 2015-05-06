const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const Characters = require('../stores/Characters');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const jquery = require('jquery');
const _ = require('underscore');

const CHANGE_EVENT = 'change';

// Local var
let _width = 0;
let _height = 0;
let _dropBoxSize = 20;
let _drops = [];
let _dropsLength = 1;

// Init
function init() {
  _width = jquery(window).width();
  _height = jquery(window).height();

}

function initDropLenght() {
  let min = 5;
  let max = Math.floor(_height/_dropBoxSize);
  _dropsLength =  Math.floor(Math.random() * (max - min)) + min;
}

// Push drop
function addDrop() {

    // Select random element
    let charIndex = Math.floor(Math.random()*26);     // Range 0-25
    let charElement = Math.floor(Math.random()*2)+1;  // Range 1-2
    let element = Characters[charIndex][charElement];

    // Set max length
    let maxLength = Math.floor(_height/_dropBoxSize);

    if(_drops.length < _dropsLength){
          _drops.unshift(element);
          // _.shuffle(_drops);
      }
    else if(_.last(_drops) === ' ') {
          _drops = [];
          initDropLenght();
      }
    else {
        
        _drops.unshift(' ');

        if(_drops[maxLength])
          _drops.pop();

      }
}

let AppStore = assign({}, EventEmitter.prototype, {

  getWidth() {
    return _width;
  },

  getHeight() {
    return _height;
  },

  getDrops() {
    return _drops;
  },

  getDropBoxSize() {
    return _dropBoxSize;
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

      case Constants.ActionTypes.CREATE_DROPS:
        initDropLenght();
        break;

      case Constants.ActionTypes.ADD_DROP:
        addDrop();
        break;

      case Constants.ActionTypes.REMOVE_DROP:
        removeDrop();
        break;

        default:
          return true;
    }

    AppStore.emitChange();

    return true;

});

module.exports = AppStore;
