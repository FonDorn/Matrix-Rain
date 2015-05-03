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

  	let min = 100;
  	let max = 1500;

  	let interval = Math.floor(Math.random() * (max - min)) + min;
    
    return (
      <div>
          <Column interval={interval} />
      </div>
    );
  }

});

module.exports = App;
