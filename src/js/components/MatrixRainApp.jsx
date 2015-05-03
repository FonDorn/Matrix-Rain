const React = require('react');
const Column =require('./Column.jsx');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

// Init App
AppActions.initApp();

function getState() {
	return {
		width: AppStore.getWidth()
	};
}


let App = React.createClass({

  render() {

  	let element = 'a';
  	let interval = 500;
    
    return (
      <div>
          <Column element={element} interval={interval} />
      </div>
    );
  }

});

module.exports = App;
