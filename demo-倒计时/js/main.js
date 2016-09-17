window.onload = function(){

	var div = document.getElementById("timerBar");
	addTimerBar(div);
	
};

function addTimerBar(nodeDiv){

	var date = new Date();

	setInterval(function(){

		date.setSeconds(date.getSeconds()-1);

		nodeDiv.innerHTML = date;

	},1000);
	
}