const exList = [
	{
		name:'SQUAT',
		sets: [1,2,3],
		reps: [[1,2,3,4,5],[1,2,3,4,5],['AMRAP'], ['Complete!']],
		weight:115,
		bar: true,
		done:false
	},
	{
		name:'R. DEADLIFT',
		sets: [1,2,3],
		reps: [
			[1,2,3,4,5,6,7,8,9,10,11,12],
			[1,2,3,4,5,6,7,8,9,10,11,12],
			[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
		],
		weight: 80,
		bar: true,
		done: false,
	},
	{
		name:'LEG PRESS',
		sets: [1,2,3],
		reps:[
			[1,2,3,4,5,6,7,8,9,10,11,12],
			[1,2,3,4,5,6,7,8,9,10,11,12],
			[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
		],
		weight:180,
		bar: false,
		done: false,
	},
	{
		name:'LEG CURL',
		sets: [1,2,3],
		reps:[
			[1,2,3,4,5,6,7,8,9,10,11,12],
			[1,2,3,4,5,6,7,8,9,10,11,12],
			[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
		],
		weight:75,
		bar: false,
		done:false,
	},
	{
		name:'CALF RAISE',
		sets:[1,2,3,4,5],
		reps:[
			[1,2,3,4,5,6,7,8,9,10,11,12],
			[1,2,3,4,5,6,7,8,9,10,11,12],
			[1,2,3,4,5,6,7,8,9,10,11,12],
			[1,2,3,4,5,6,7,8,9,10,11,12],
			[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
		],
		weight:70,
		bar: false,
		done:false,
	}
];

export default exList;
