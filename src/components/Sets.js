import React from 'react';

class Sets extends React.Component{
	render(){
		return(
			<div className="sets">
				{this.props.sets.map((set, index)=>{
					return <div key={set} className={set > this.props.set ? 'set':'set success'}>{set}</div>
				})}
			</div>
		)
	}
}

export default Sets;
