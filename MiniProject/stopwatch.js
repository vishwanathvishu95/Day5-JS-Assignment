var T = (function () { 
    'use strict';

    var timeElapsed  = 0, 
        timeStarted = 0,
        splitCount = 0,
        update;

    return {
        timeStarted: timeStarted,
        timeElapsed: timeElapsed,
        splitCount: splitCount,
        update: update
    };
}());



function startTimer() {

	T.timeStarted = new Date().getTime() - T.timeElapsed; 

	update = setInterval(postTime, 10);

	document.getElementById("reset").disabled = false;	
	startButtons();
	
	return update;
}



function stopTimer(){
	
	clearInterval(update);

	stopButtons();
}


function split(){
	T.splitCount++;
	document.getElementById("splits").innerHTML += "</br>Split " + T.splitCount + ": " + render(T.timeElapsed);

}

function reset(){
	clearInterval(update);
	T.timeStarted = 0;
	T.timeElapsed = 0;
	T.splitCount = 0;
	document.getElementById("timer").innerHTML = "00:00:00";
	document.getElementById("reset").disabled = true;	

	stopButtons()

	document.getElementById("splits").innerHTML = "<br>Splits</br>"
}


function startButtons(){
	document.getElementById("start").disabled = true;
	document.getElementById("stop").disabled = false;
	document.getElementById("split").disabled = false;

}
function stopButtons(){
	document.getElementById("start").disabled = false;
	document.getElementById("stop").disabled = true;
	document.getElementById("split").disabled = true;

}
function render(){
	T.timeElapsed = new Date().getTime() - T.timeStarted;

	var toRender = T.timeElapsed;

    var mins = Math.floor(toRender/60000);
    toRender -= mins * 60000;
    var secs = Math.floor(toRender/1000);
    toRender -= secs * 1000;
    var cent = Math.round(toRender/10);

	return addLeadingZero(mins) + ":" + addLeadingZero(secs) + ":" + addLeadingZero(cent); 
}
function addLeadingZero (n) {
    if(n <= 9) {
    	return '0'+ n; 
    	} else {
        return '' + n; 
    }
} 
function postTime(time) {
	document.getElementById("timer").innerHTML = render(time);

}