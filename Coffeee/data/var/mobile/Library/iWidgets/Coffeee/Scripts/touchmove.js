var forecastdisplay = true;

if (ChangeClick == false) { var touchmode = "touchend"; } else { var touchmode = "click"; }

function StartTouch() {
document.getElementById("TouchLayer").addEventListener(touchmode, touchEnd, false); 
document.getElementById("TouchLayer2").addEventListener(touchmode, touchRefresh, false);
}

function touchEnd() {
	if (forecastdisplay == false) {
		document.getElementById('voletleft').className = "voletleftMoveUp";
		document.getElementById('voletright').className = "voletrightMoveUp";
		document.getElementById("TouchLayer2").style.zIndex= "800";
		forecastdisplay = true;
	} else {
		document.getElementById('voletleft').className = "voletleftMoveDown";
		document.getElementById('voletright').className = "voletrightMoveDown";
		document.getElementById("TouchLayer2").style.zIndex= "1000";
		forecastdisplay = false;
	}
}

function touchRefresh() {
	event.preventDefault();
	window.location.reload();
}


