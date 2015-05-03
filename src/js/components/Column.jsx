const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const Characters = require('../stores/Characters');

function createDrops(interval){

	// setInterval(function(){

		let charIndex = Math.floor(Math.random()*26);		// Range 0-25
	  	let charElement = Math.floor(Math.random()*2)+1;	// Range 1-2

	  	let element = Characters[charIndex][charElement];

		AppActions.createDrop(element);

	// }, interval);

}

function getState() {
	return {
		drops: AppStore.getDrops()
	};
}

let Column = React.createClass({

	getInitialState() {

		// Create Drops
		createDrops(this.props.interval);
		
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
			<div>
				{drops.map((drop, index) =>
					<p key={index}>{drop}</p>
				)}
			</div>
		);
	}

});

module.exports = Column;