import React from 'react';

class ExerciseName extends React.Component{
	constructor(props){
		super(props);
		this.openEx = this.openEx.bind(this);
	}

	openEx(e){
		e.preventDefault();
		this.props.hClick(this.props.name);
	}

	render(){
		return(
			<div style={!this.props.exIsOpen ? {height:'60px'}:null} onClick={(e)=>this.openEx(e)} className="exercise">
				<i className={this.props.log[this.props.index]&& this.props.log[this.props.index].sets.length===this.props.exList[this.props.index].sets.length ? 'fa fa-star star gold' : 'fa fa-star-o star' }></i>
				{this.props.name}
				{this.props.exIsOpen ? <i className="fa fa-angle-double-left back"></i> : null}
			</div>
		)
	}
}

export default ExerciseName;
