const keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    INIT: null,
    CREATE_DROPS: null,
    ADD_DROP: null
  }),

  ActionSources: keyMirror({
    VIEW_ACTION: null
  })

};
