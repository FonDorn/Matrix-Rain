const React = require('react');
const Drop =require('./Drop.jsx');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

// Init App
AppActions.initApp();

function getState() {
	return {
		width: AppStore.getWidth(),
		height: AppStore.getHeight()
	};
}


let App = React.createClass({

  render() {
    
    return (
      <div>
          <Drop />
      </div>
    );
  }

});

module.exports = App;
