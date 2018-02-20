import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import exList from './exList';
import ExerciseName from './components/ExerciseName';
import Sets from './components/Sets';
import Reps from './components/Reps';
import PreviousWeight from './components/PreviousWeight';
import WeightContainer from './components/WeightContainer';

class App extends React.Component{
	constructor(){
		super();
		this.state={
			workoutComplete:false,
			// toggleOnce literally ONLY exists to prevent an infinite loop between openExercise() and the point where I called setState on the log to get the log reps to initialize at '5'
			toggleOnce:false,
			exIsOpen: false,
			currentEx: null,
			reps: null,
			set: 0,
			log:[],
			exList: [],
			currentWorkout: 0,
			prevWorkout: null,
			workoutLogs:[],
			weightCalcToggle:false,
			toggleFS:false
		}
	}

	sendJSON = () =>{
		this.setState({exIsOpen:false, currentEx:null, reps:null, set:0, workoutComplete:false});
		const instance = this;
		const log = {};
		const date = new Date();
		log.date = date.toLocaleDateString();
		log.prevWorkout = this.state.currentWorkout;
		log.workout = this.state.log;

		const xhttp = new XMLHttpRequest();   // new HttpRequest instance
		xhttp.onreadystatechange = function() {
	    	if (this.readyState === 4 && this.status === 200) {
	       		console.log('sending JSON');
				instance.getJSON();
				instance.setState({log:[]});
	    	}
 		};
		xhttp.open("POST", "https://warm-gorge-45848.herokuapp.com");
		xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhttp.send(JSON.stringify(log));
	}

	getJSON = () =>{
		const instance = this;
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState === 4 && xhttp.status === 200) {
				if(JSON.parse(xhttp.response).workouts.length !== 0){
		       		const prevWorkout = JSON.parse(xhttp.response).workouts[0].prevWorkout;
					let workoutLogs = JSON.parse(xhttp.response).workouts;
					let currentWorkout;
					if(prevWorkout<5){
						currentWorkout = prevWorkout+1;
					} else{
						currentWorkout = 0;
					}
					instance.setState({prevWorkout, currentWorkout, workoutLogs});

					const workout = Object.keys(exList).filter((name, index)=>{
						return index === instance.state.currentWorkout ? name : null;
					}).toString();
					instance.setState({exList:exList[`${workout}`]});
				}else{
					const prevWorkout = -1;
					const currentWorkout = 0;
					instance.setState({prevWorkout, currentWorkout});

					const workout = Object.keys(exList).filter((name, index)=>{
						return index === instance.state.currentWorkout ? name : null;
					}).toString();
					instance.setState({exList:exList[`${workout}`]});
				}

	    	}
		};
		xhttp.open("GET","https://warm-gorge-45848.herokuapp.com/json");
		xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhttp.send();
	}

	componentWillMount(){
		if(
			localStorage.getItem('workoutLogs') &&
			localStorage.getItem('prevWorkout') &&
			localStorage.getItem('currentWorkout') &&
			localStorage.getItem('log') &&
			localStorage.getItem('reps') &&
			localStorage.getItem('exList') &&
			localStorage.getItem('set')){
			const prevWorkout = JSON.parse(localStorage.getItem('prevWorkout'));
			const currentWorkout = JSON.parse(localStorage.getItem('currentWorkout'));
			const exList = JSON.parse(localStorage.getItem('exList'));
			const log = JSON.parse(localStorage.getItem('log'));
			const reps = JSON.parse(localStorage.getItem('reps'));
			const set = JSON.parse(localStorage.getItem('set'));
			const workoutLogs = JSON.parse(localStorage.getItem('workoutLogs'));
			this.setState({log, reps, set, exList, workoutLogs, prevWorkout, currentWorkout});
		}else{
			this.getJSON();
		}
	}

	componentDidUpdate(){
		//while workout is ongoing save log state in localStorage
		//once it is submitted we will destroy the local state and start over
		localStorage.setItem('workoutLogs', JSON.stringify(this.state.workoutLogs));
		localStorage.setItem('exList', JSON.stringify(this.state.exList));
		localStorage.setItem('log', JSON.stringify(this.state.log));
		localStorage.setItem('reps', JSON.stringify(this.state.reps));
		localStorage.setItem('set', JSON.stringify(this.state.set));
		localStorage.setItem('prevWorkout', JSON.stringify(this.state.prevWorkout));
		localStorage.setItem('currentWorkout', JSON.stringify(this.state.currentWorkout));
	}

	incAmrap = (e) => {
		e.preventDefault();
		const index = this.state.exList.findIndex(function(ex){
			return ex.name === this.state.currentEx;
		}, this);
		let log = [...this.state.log];
		let reps = this.state.log[index].reps[this.state.set];
		reps++;
		log[index].reps[this.state.set] = reps;
		this.setState({log});
	}

	decAmrap = (e) => {
		e.preventDefault();
		const index = this.state.exList.findIndex(function(ex){
			return ex.name === this.state.currentEx;
		}, this);
		let log = [...this.state.log];
		let reps = this.state.log[index].reps[this.state.set];
		reps--;
		log[index].reps[this.state.set] = reps;
		this.setState({log});
	}

	hClick = (exName) => {
		const index = this.state.exList.findIndex(function(ex){
			return ex.name === exName;
		}, this);

		if(this.state.exList[index].done){
			alert('You have already completed this exercise');
			this.setState({exIsOpen:false, currentEx:null});
		}else{
			if(!this.state.exIsOpen){
				this.setState({exIsOpen:true, currentEx:exName});
			}else{
				this.setState({exIsOpen:false, currentEx:null, weightCalcToggle:false});
			}
		}
	}

	logReps = (e, index) => {
		e.preventDefault();
		const reps = index+1;
		this.setState({reps});
	}

	submitReps = (e) => {
		e.preventDefault();
		//Returns index based on currentEx state

		const index = this.state.exList.findIndex(function(ex){
			return ex.name === this.state.currentEx;
		}, this);

		//If the current set is equal to the length of the current exercise total required sets then flag exercise as "done" and reset the current 'set' number
		if(this.state.set === this.state.exList[index].sets.length){

			// this is good but we also need to create a way to check for success/failure
			// map over the reps for current exercise and test the log values against to determine whether to increment the failCounter. this will evaluate to true if there is no failure and false if reps were missed

			const failCount = this.state.exList[index].reps.map((item,i)=>{
				if(item.length===this.state.log[index].reps[i]){
					return true;
				}else if(item[0]==='AMRAP' && this.state.log[index].reps[i]>4){
					return true;
				}else if(item[0]==='Complete!'){
					return true;
				}else{
					return false;
				}
			}).every((val)=>val);

			// if there was a failure then add a failCount of 1 to the exercise log
			let log = [...this.state.log];

			if(!failCount){
				if(this.state.exList[index].lookback<4){
					if(this.state.workoutLogs[2].workout[index].failCount===undefined){
						log[index].failCount = 1;
					}else{
						log[index].failCount = this.state.workoutLogs[2].workout[index].failCount+1;
					}
				}else{
					if(this.state.workoutLogs[5].workout[index].failCount===undefined){
						log[index].failCount = 1;
					}else{
						log[index].failCount = this.state.workoutLogs[5].workout[index].failCount+1;
					}
				}
			}else{
				log[index].failCount = 0;
			}

			if(log[index].failCount>3){
				log[index].failCount = 0;
			}

			const exList = [...this.state.exList];
			exList[index].done = true;
			this.setState({currentEx:null, set:0, exIsOpen:false, exList, log, toggleOnce:false, weightCalcToggle:false});
			// calls function to test whether the workout is complete
			this.workoutDone();
		// Increment the current set position and push rep data to log reset reps
		} else {
			let set = this.state.set;
			set++;
			let log = [...this.state.log];
			log[index].name = this.state.currentEx;
			log[index].weight =  this.state.exList[index].weight;

			//This ugly bit of code exists because the we will end up with an extra blank array entry every time there's an AMRAP set since it needed to be initialized with '5' in order to update rep state with number picker. Rather than set the state.reps to '5' I chose to set the rep state of the log directly... It probably would have been way smarter to use the temporary 'rep' state and update that and push it along with the rest but this made more sense to me for some reason... if it's not an AMRAP it will push the 'reps' normally but not really happy with this workaround

			if(this.state.exList[index].reps[this.state.set][0]!=='AMRAP'){
				log[index].reps.push(this.state.reps);
			}
			log[index].sets.push(this.state.set+1);
			this.setState({log});
			this.setState({set});
			this.setState({reps:0});
		}
	}

	workoutDone = () => {
		let workoutComplete = false;
		for(let i=0; i<this.state.exList.length;i++){
			workoutComplete = this.state.exList[i].done;
		}
		if(workoutComplete){
			this.setState({workoutComplete});
			localStorage.clear();
		}
	}

	incWeight = (e) => {
		e.preventDefault();
		const index = this.state.exList.findIndex(function(ex){
					return ex.name === this.state.currentEx;
				}, this);
		let exList = [...this.state.exList];
		let weight = this.state.exList[index].weight;
		exList[index].weight = weight + 0.25;
		this.setState({exList});
	}

	decWeight = (e) => {
		e.preventDefault();
		const index = this.state.exList.findIndex(function(ex){
					return ex.name === this.state.currentEx;
				}, this);
		let exList = [...this.state.exList];
		let weight = this.state.exList[index].weight;
		exList[index].weight = weight - 0.25;
		this.setState({exList});
	}

	calcWeight = () => {
		if(!this.state.weightCalcToggle){
			const index = this.state.exList.findIndex(function(ex){
				return ex.name === this.state.currentEx;
			}, this);
			let weight;

			if(this.state.exList[index].lookback < 4){
				if(this.state.workoutLogs[2].workout[index].failCount===0){
					weight = parseFloat(this.state.workoutLogs[2].workout[index].weight +
					this.state.exList[index].inc);
				}else if(this.state.workoutLogs[2].workout[index].failCount<3){
					weight = this.state.workoutLogs[2].workout[index].weight;
				}else{
					weight = parseFloat((Math.round((this.state.workoutLogs[2].workout[index].weight * 0.9)*4)/4).toFixed(2));
				}
			}else{
				if(this.state.workoutLogs[5].workout[index].failCount===0){
					weight = parseFloat(this.state.workoutLogs[5].workout[index].weight +
					this.state.exList[index].inc);
				}else if(this.state.workoutLogs[5].workout[index].failCount<3){
					weight = this.state.workoutLogs[5].workout[index].weight;
				}else{
					weight = parseFloat((Math.round((this.state.workoutLogs[5].workout[index].weight * 0.9)*4)/4).toFixed(2));
				}
			}
			const exList = [...this.state.exList]
			exList[index].weight = weight;
			this.setState({exList, weightCalcToggle:true});
		}
	}

	handleChange = (e) => {
		e.preventDefault();
		const index = this.state.exList.findIndex(function(ex){
					return ex.name === this.state.currentEx;
				}, this);
		let exList = [...this.state.exList];
		exList[index].weight = parseFloat(e.target.value);
		this.setState({exList});
	}

	render(){
		if(!this.state.exIsOpen){
			return(
				<div className="app-container">
					<h1>{Object.keys(exList).map((name, index)=>{
						return index === this.state.currentWorkout ? name : null
					})}
					</h1>
					{this.state.exList.map((ex, index)=>{
						return <ExerciseName
							exIsOpen={this.state.exIsOpen}
							hClick={this.hClick}
							index={index}
							log={this.state.log}
							exList={this.state.exList}
							key={index}
							name={ex.name}
						/>
					})}
					{this.state.workoutComplete &&
						<div onClick={this.sendJSON} className="submit">LOG WORKOUT</div>
					}
				</div>
			);
		}else{
			this.calcWeight();

			// sets up a reference to index based on currentEx(ercise) name state
			const index = this.state.exList.findIndex(function(ex){
				return ex.name === this.state.currentEx;
			}, this);

			// if there is no log item in the state.log array for this index then create a blank one
			if(!this.state.log[index]){
				let log = [...this.state.log];
				log.push(
					{
						name:"",
						weight:"",
						sets:[],
						reps:[],
						failCount:"",
					}
				);
				this.setState({log});
			}

			if(!this.state.toggleOnce && this.state.exList[index].reps[this.state.set][0]==='AMRAP'){
				let log = [...this.state.log];
				log[index].reps[this.state.set] = 5;
				this.setState({log, toggleOnce:true});
			}

			return(
				<div className="app-container">
					<div className="ex-container">
						<ExerciseName
							exIsOpen={this.state.exIsOpen}
							hClick={this.hClick}
							key={index}
							name={this.state.currentEx}
							index={index}
							log={this.state.log}
							exList={this.state.exList}
						/>

						<div className="label">SETS</div>
						<Sets
							sets={this.state.exList[index].sets}
							set={this.state.set}
						/>

						<div className="label">REPS</div>
						<Reps
							repList={this.state.exList[index].reps[this.state.set]}
							logReps={this.logReps}
							set={this.state.set}
							setLength={this.state.exList[index].sets.length}
							reps={this.state.reps}
						/>


						{/* MAIN LOGIC FOR INCREMENTING AND DISPLAYING WEIGHT */}


						<PreviousWeight
							lookback={this.state.exList[index].lookback}
							workout2={this.state.workoutLogs[2].workout[index]}
							workout5={this.state.workoutLogs[5].workout[index]}
						/>

						{this.state.exList[index].reps[this.state.set][0]==='AMRAP'?
							<div className="rep-wheel">
								<i onClick={(e)=>this.decAmrap(e)} className="fa fa-minus amrap-minus"></i>
								<span className="rep-counter">{this.state.toggleOnce && this.state.log[index].reps[this.state.set]}</span>
								<i onClick={(e)=>this.incAmrap(e)} className="fa fa-plus amrap-plus"></i>
							</div>
							: null}

						<WeightContainer
							handleChange={this.handleChange}
							currentExercise={this.state.exList[index]}
							decWeight={this.decWeight}
							incWeight={this.incWeight}
						/>

						<div className="spacer"></div>
						<div onClick={(e)=>this.submitReps(e)} className="submit">NEXT</div>
					</div>
				</div>
			);
		}
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
