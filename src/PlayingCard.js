import React from 'react';

export default class PlayingCard extends React.Component {
	render () {
		return (
			<div className="card hvr-grow-rotate">
				<img 
				src={`images/${this.props.rank}_of_${this.props.suit}.png`} 
				alt={`${this.props.rank} of ${this.props.suit}`}
				/>
				
			</div>
			);
	}

}