const exList =

{
	'LEGS (1)': [
		{
			name:'SQUAT',
			sets: [1,2,3],
			reps: [[1,2,3,4,5],[1,2,3,4,5],['AMRAP'], ['Complete!']],
			weight:115,
			bar: true,
			stack: true,
			done:false,
			lookback: 3,
			inc:5,
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
			stack: true,
			done: false,
			lookback:3,
			inc:5,
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
			stack: true,
			done: false,
			lookback:3,
			inc:5,
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
			stack: false,
			done:false,
			lookback:3,
			inc:5,
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
			stack:false,
			done:false,
			lookback:3,
			inc:5,
		}
	],
	'PUSH (1)': [
		{
			name:'BENCH PRESS',
			sets: [1,2,3,4,5],
			reps: [
				[1,2,3,4,5],
				[1,2,3,4,5],
				[1,2,3,4,5],
				[1,2,3,4,5],
				['AMRAP'],
				['Complete!']],
			weight:95,
			bar: true,
			stack: true,
			done:false,
			lookback:6,
			inc:2.5,
		},
		{
			name:'OVERHEAD PRESS',
			sets: [1,2,3],
			reps: [
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight: 25,
			bar: true,
			stack: true,
			done: false,
			lookback:6,
			inc:2.5,
		},
		{
			name:'INCLINE PRESS',
			sets: [1,2,3],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight:45,
			bar: true,
			stack: true,
			done: false,
			lookback:3,
			inc:2.5,
		},
		{
			name:'TRI PD/LAT RAISE',
			sets: [1,2,3,4,5,6],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], ['Complete!']
			],
			weight:22,
			bar: false,
			stack: false,
			done:false,
			lookback:3,
			inc:5,
		},
		{
			name:'OH TRI/LAT RAISE',
			sets:[1,2,3,4,5,6],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], ['Complete!']
			],
			weight:11,
			bar: false,
			stack: false,
			done:false,
			lookback:3,
			inc:5,
		}
	],

	'PULL (1)': [
		{
			name:'DEADLIFT',
			sets: [1],
			reps: [[1,2,3,4,5], ['Complete!']],
			weight:185,
			bar: true,
			stack: true,
			done:false,
			lookback:6,
			inc:10,
		},
		{
			name:'PULLDOWN',
			sets: [1,2,3],
			reps: [
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight: 65,
			bar: false,
			stack: false,
			done: false,
			lookback:6,
			inc:5,
		},
		{
			name:'CABLE ROW',
			sets: [1,2,3],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight:88,
			bar: false,
			stack: false,
			done: false,
			lookback:3,
			inc:5,
		},
		{
			name:'FACE PULL',
			sets: [1,2,3,4,5],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], ['Complete!']
			],
			weight:22,
			bar: false,
			stack: false,
			done:false,
			lookback:3,
			inc:5,
		},
		{
			name:'HAMMER CURL',
			sets:[1,2,3,4],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight:12.5,
			bar: false,
			stack: false,
			done:false,
			lookback:3,
			inc:5,
		},
		{
			name:'BARBELL CURL',
			sets:[1,2,3,4],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight:12.5,
			bar: true,
			stack: true,
			done:false,
			lookback:3,
			inc:5,
		}
	],
	'LEGS (2)': [
		{
			name:'SQUAT',
			sets: [1,2,3],
			reps: [[1,2,3,4,5],[1,2,3,4,5],['AMRAP'], ['Complete!']],
			weight:115,
			bar: true,
			stack: true,
			done:false,
			lookback:3,
			inc:5,
		},
		{
			name:'R. DEADLIFT',
			sets: [1,2,3],
			reps: [
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight: 85,
			bar: true,
			stack: true,
			done: false,
			lookback:3,
			inc:5,
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
			stack: true,
			done: false,
			lookback:3,
			inc:5,
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
			stack:false,
			done:false,
			lookback:3,
			inc:5,
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
			stack:false,
			done:false,
			lookback:3,
			inc:5,
		}
	],
	'PUSH (2)': [
		{
			name:'OVERHEAD PRESS',
			sets: [1,2,3,4,5],
			reps: [
				[1,2,3,4,5],
				[1,2,3,4,5],
				[1,2,3,4,5],
				[1,2,3,4,5],
				['AMRAP'],
				['Complete!']],
			weight:45,
			bar: true,
			stack:true,
			done:false,
			lookback:6,
			inc:2.5,
		},
		{
			name:'BENCH PRESS',
			sets: [1,2,3],
			reps: [
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight: 80,
			bar: true,
			stack:true,
			done: false,
			lookback:6,
			inc:2.5,
		},
		{
			name:'INCLINE PRESS',
			sets: [1,2,3],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight:45,
			bar: true,
			stack:true,
			done: false,
			lookback:3,
			inc:2.5,
		},
		{
			name:'TRI PD/LAT RAISE',
			sets: [1,2,3,4,5,6],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], ['Complete!']
			],
			weight:22,
			bar: false,
			stack:false,
			done:false,
			lookback:3,
			inc:5,
		},
		{
			name:'OH TRI/LAT RAISE',
			sets:[1,2,3,4,5,6],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], ['Complete!']
			],
			weight:11,
			bar: false,
			stack:false,
			done:false,
			lookback:3,
			inc:5,
		}
	],
	'PULL (2)': [
		{
			name:'BARBELL ROW',
			sets: [1,2,3,4,5],
			reps: [
				[1,2,3,4,5],
				[1,2,3,4,5],
				[1,2,3,4,5],
				[1,2,3,4,5],
				['AMRAP'],
				['Complete!']],
			weight:95,
			bar: true,
			stack:true,
			done:false,
			lookback:6,
			inc:5,
		},
		{
			name:'PULLUP',
			sets: [1,2,3],
			reps: [
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight: 125,
			bar: false,
			stack:false,
			done: false,
			lookback:6,
			inc:5,
		},
		{
			name:'CABLE ROW',
			sets: [1,2,3],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight:88,
			bar: false,
			stack:false,
			done: false,
			lookback:3,
			inc:5,
		},
		{
			name:'FACE PULL',
			sets: [1,2,3,4,5],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], ['Complete!']
			],
			weight:22,
			bar: false,
			stack:false,
			done:false,
			lookback:3,
			inc:5,
		},
		{
			name:'HAMMER CURL',
			sets:[1,2,3,4],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight:12.5,
			bar: false,
			stack:false,
			done:false,
			lookback:3,
			inc:5,
		},
		{
			name:'BARBELL CURL',
			sets:[1,2,3,4],
			reps:[
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[1,2,3,4,5,6,7,8,9,10,11,12], ['Complete!']
			],
			weight:12.5,
			bar: true,
			stack:true,
			done:false,
			lookback:3,
			inc:5,
		}
	]
};

export default exList;
