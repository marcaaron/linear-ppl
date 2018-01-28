console.log('path is working');

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		console.log(JSON.parse(xhttp.response));
	}else{
		console.log('this is not working');
	};
};

xhttp.open("GET","https://warm-gorge-45848.herokuapp.com/workouts");
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhttp.send();
