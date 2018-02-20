import React from 'react';

class PreviousWeight extends React.Component{
	render(){
		return(
			<div className="prev-weight-container">
				<div className="prev-weight">PREVIOUS WEIGHT: <span>
				{/* check current exercise for lookback flag
				if current exercise lookback = 3 get result from workout log 2 else get result from workoutlog 5 */}
				{
					this.props.lookback < 4 ? this.props.workout2.weight + ' lbs' : this.props.workout5.weight + ' lbs'
				}
				</span>
				</div>

				<div>
				{
					this.props.lookback < 4 ? this.props.workout2.failCount : this.props.workout5.failCount
				} failures at the current weight
				</div>
			</div>
		)
	}
}

export default PreviousWeight;
