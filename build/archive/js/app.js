console.log('path is working');

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		const workouts = (JSON.parse(xhttp.response)).workouts;
		console.log(workouts);

		const squat = workouts.map((day)=>{
			if(day.prevWorkout===0||day.prevWorkout===3){
				return [day.workout[0].name, day.workout[0].weight];
			}
		}).filter((day)=>typeof day !== 'undefined');
		console.log('squat',squat);

		const rDeadlift = workouts.map((day)=>{
			if(day.prevWorkout===0||day.prevWorkout===3){
				return [day.workout[1].name, day.workout[1].weight];
			}
		}).filter((day)=>typeof day !== 'undefined');
		console.log('rDeadlift',rDeadlift);

		const legPress = workouts.map((day)=>{
			if(day.prevWorkout===0||day.prevWorkout===3){
				return [day.date, day.workout[2].name, day.workout[2].weight];
			}
		}).filter((day)=>typeof day !== 'undefined');
		console.log('legPress',legPress);

		const legCurl = workouts.map((day)=>{
			if(day.prevWorkout===0||day.prevWorkout===3){
				return [day.workout[3].name, day.workout[3].weight];
			}
		}).filter((day)=>typeof day !== 'undefined');
		console.log('legCurl',legCurl);

		const calfRaise = workouts.map((day)=>{
			if(day.prevWorkout===0||day.prevWorkout===3){
				return [day.workout[4].name, day.workout[4].weight];
			}
		}).filter((day)=>typeof day !== 'undefined');
		console.log('calfRaise',calfRaise);

	}else{
		console.log('this is not working');
	};
};
xhttp.open("GET","https://warm-gorge-45848.herokuapp.com/workouts");
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhttp.send();
