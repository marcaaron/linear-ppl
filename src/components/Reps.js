import React from 'react';

class Reps extends React.Component{
	render(){
		return(
			<div className="reps">
				{this.props.repList.map((rep, i)=>{
					return <div onClick={(e)=>this.props.logReps(e, i)} key={i} className={i+1<=this.props.reps || this.props.set===this.props.setLength ? 'rep success':'rep'}>{rep}</div>
				})}
			</div>
		)
	}
}

export default Reps;
