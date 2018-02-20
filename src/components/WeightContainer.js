import React from 'react';

class WeightContainer extends React.Component{
	render(){
		return(
			<div className="weight-container">
				<div className="weight-box">
					<div className="weight-controls">
						<i onClick={(e)=>this.props.decWeight(e)} className="fa fa-minus controls"></i>
						<i onClick={(e)=>this.props.incWeight(e)} className="fa fa-plus controls"></i>
					</div>
					<input type="text" onChange={(e)=>this.props.handleChange(e)} className="weight" value={this.props.currentExercise.weight}/>
				</div>
				{this.props.currentExercise.bar && this.props.currentExercise.stack &&
					<div className="weight-stack">
						<img alt="Barbell" className="barbell-img" src={require('../barbell.png')}/>
						<div className="plate-container">
							<div className="plate">{(this.props.currentExercise.weight-45)/2}</div>
							<div className="plate">{(this.props.currentExercise.weight-45)/2}</div>
						</div>
					</div>
				}
				{!this.props.currentExercise.bar && this.props.currentExercise.stack &&
					<div className="weight-stack">
						<div className="plate-container">
							<div className="plate">{(this.props.currentExercise.weight)/2}</div>
							<div className="plate">{(this.props.currentExercise.weight)/2}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export default WeightContainer;
