const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const _ = require('underscore');

function createDrops(height, dropBox, drops) {

	// Set Interval
	let min = 50;
  	let max = 500;
  	let interval = Math.floor(Math.random() * (max - min)) + min;
  	
  	// Set Drops Size
  	min = 5;
  	max = Math.floor(height/dropBox)
  	let dropSize = Math.floor(Math.random() * (max - min)) + min;

  	// Create Drops
  	AppActions.createDrops(dropSize);

  	// Add drop to Drops while last element === ' ' 
	let intervalId = setInterval(function(){

		AppActions.addDrop();

		if(drops[max-1] === ' ')
			clearInterval(intervalId);

	}, interval);

}

function getState() {
	return {
		drops: AppStore.getDrops(),
		height: AppStore.getHeight(),
		dropBox: AppStore.getDropBoxSize()
	};
}

let Drop = React.createClass({

	getInitialState() {

		let state = getState();

		// Create Drops
		createDrops(state.height, state.dropBox, state.drops);
		
		return state;
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