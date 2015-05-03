const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

function createDrops(element, interval){
	// setInterval(function(){
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
		createDrops(this.props.element, this.props.interval);
		
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