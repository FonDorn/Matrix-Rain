const React = require('react');
const Drop =require('./Drop.jsx');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const _ = require('underscore');

// Init App
AppActions.initApp();

function getState() {
	return {
		width: AppStore.getWidth(),
		height: AppStore.getHeight()
	};
}


let App = React.createClass({

	getInitialState() {
		
		return getState();
	},

	render() {

		let _widthBox = _.range(Math.floor(this.state.width/20));

		return (
		  <div>
		  		
				<Drop />
		  </div>
		);
	}

});

module.exports = App;
