const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const _ = require('underscore');


function createDrops() {	

	// Set Interval
	let min = 50;
  	let max = 150;
  	let interval = Math.floor(Math.random() * (max - min)) + min;

  	// Create Drops
  	AppActions.createDrops();

  	// Add drop to Drops
	setInterval(function(){

		AppActions.addDrop(); 

	}, interval);

}

function getState() {
	return {
		drops: AppStore.getDrops()
	};
}

let Drop = React.createClass({

	getInitialState() {

		// Create Drops
		createDrops();
		
		return getState();
	},

	componentDidMount() {		
		AppStore.addChangeListener(this._onChange);

	},

	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange);
	},

	_onChange() {
    	this.setState(getState());
  	},

	render() {

		let {drops} = this.state;

		return (
			<div className = "app-drops">
				{drops.map((drop, index) =>
					<p key={index}>{drop}</p>
				)}
			</div>
		);
	}

});

module.exports = Drop;