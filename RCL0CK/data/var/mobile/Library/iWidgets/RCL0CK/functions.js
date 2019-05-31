



/*3omartech*/







var d = new Date();

var hours = d.getHours();

var minutes = d.getMinutes();

var seconds = d.getSeconds();

var ms =d.getMilliseconds()

var acc_x, acc_y;

var deg = 0;

var deg_new = 0;

var deg_set = 0;

var deg_time = 0;

var state = 'default';





function initiate() {

	

	if (hours > 12) hours360 = hours - 12;

	else hours360 = hours; 

	

	minutesDeg = 6 * minutes;

	hoursDeg   = 30 * (hours360)+(minutes/2);

	secondsDeg = 6 * (seconds + 2) + .6 * (ms/100);   

	

	if (hours < 10) hours = '0' + hours;

	if (minutes < 10) minutes = '0' + minutes;

	

	

	//circles

	document.getElementById("minutes-c").childNodes[1].style.webkitTransform = 'rotate(' + minutesDeg + 'deg)';

	document.getElementById("hours-c").childNodes[1].style.webkitTransform = 'rotate(' + hoursDeg + 'deg)';

	document.getElementById("seconds-c").childNodes[1].style.webkitTransform = 'rotate(' + secondsDeg + 'deg)';	

	



	//center

	document.getElementById("am_pm").innerHTML = hours + ' : ' + minutes ;

	document.getElementById("day").innerHTML = Day();

		



	date = d.getDate();

	month = d.getMonth() + 1;

	year = new String(d.getFullYear());

	

	if (date < 10) date = '0' + date; 

	if (month < 10) month = '0' + month; 

	year = year.substr(2, 2);

	

	document.getElementById("date").innerHTML = date + '.' + month + '.' + year;	

	

	setTimeout(no_animation_delay, 1); // removes animation delay and lowers current clock animations from 2 seconds to 1

}



function no_animation_delay() {

	document.getElementById("main-wrapper").style.webkitTransitionDelay = '0s';

	document.getElementById("main-wrapper").style.webkitTransition = 'all 1s ease-in-out';

	

	//console.log(document.getElementById("circles").getElementsByTagName("img").style);

	

	var circles = document.getElementById("circles").getElementsByTagName('img');

	for (var i = 0; i < circles.length; i++) {

		circles[i].style.webkitTransitionDelay = '0s';

		circles[i].style.webkitTransition = 'all 1s ease-in-out';

	}

	

	document.getElementById("seconds-c").childNodes[1].style.webkitTransition = 'all .3s linear';

	

	setTimeout(update, 300); // starts normal clock updating process

}



function update() {	

	d = new Date();

	hours = d.getHours();

	minutes = d.getMinutes();

	seconds = d.getSeconds();
	
	ms=d.getMilliseconds()	



	if (hours > 12) hours360 = hours - 12;

	else hours360 = hours;	

	

	minutesDeg = 6 * minutes;

	hoursDeg   = 30 * hours360+(minutes/2);

	secondsDeg = 6 * (seconds) + .6 * (ms/100);	



	if (hours < 10) hours = '0' + hours;

	if (minutes < 10) minutes = '0' + minutes;

	

	//circles

	document.getElementById("minutes-c").childNodes[1].style.webkitTransform = 'rotate(' + minutesDeg + 'deg)';

	document.getElementById("hours-c").childNodes[1].style.webkitTransform = 'rotate(' + hoursDeg + 'deg)';

	
if (seconds == 0) {
	
		document.getElementById("seconds-c").childNodes[1].style.webkitTransform = 'rotate(' + secondsDeg + '360)';	


		document.getElementById("seconds-c").childNodes[1].style.webkitTransition = 'all .1s ease-in-out';

	} 
	 
else

	 if (seconds == 1) {

		document.getElementById("seconds-c").childNodes[1].style.webkitTransition = 'all .3s linear';

	}

	

	document.getElementById("seconds-c").childNodes[1].style.webkitTransform = 'rotate(' + secondsDeg + 'deg)';	

	

	//center

	

	document.getElementById("am_pm").innerHTML = hours + ':' + minutes;

	document.getElementById("day").innerHTML = Day();

	

	date = d.getDate();

	month = d.getMonth() + 1;

	year = new String(d.getFullYear());

	

	if (date < 10) date = '0' + date; 

	if (month < 10) month = '0' + month; 

	year = year.substr(2, 2);

	

	document.getElementById("date").innerHTML = date + '.' + month + '.' + year;	



	//tilt

	document.getElementById("main-wrapper").style.webkitTransform = 'rotate(' + rotate() + 'deg)';	

	//tilt

	

	

	setTimeout(update, 300);

}	






function calculateTimeBetween(){



    var today = new Date();



	var d1 = new Date(today.getFullYear(), today.getMonth(), today.getDate(), (today.getMonth()==10 ?(today.getHours()) : (today.getHours()+0)), today.getMinutes(), today.getSeconds());



	var d2 = new Date(today.getFullYear(), 10, 5, 8, 0, 0);



    if (today.getTime() < d2.getTime()){



	var diff = new Number(Math.abs(d2.getTime()-d1.getTime()));



	var timeBetween = new Object();







timeBetween.days = Math.floor(diff/1000/60/60/24);



	diff -= timeBetween.days*86400000;



	timeBetween.hours = Math.floor(diff/1000/60/60);



	diff -= timeBetween.hours*3600000;



	timeBetween.minutes = Math.floor(diff/1000/60);



	diff -= timeBetween.minutes*60000;



	timeBetween.seconds = Math.floor(diff/1000);



	



	



	document.getElementById("time").innerHTML = timeBetween.days + " DAY" + s(timeBetween.days)+ ", " + 



(timeBetween.hours) + " HOUR" + s(timeBetween.hours)+ ", " + timeBetween.minutes + " MIN" + s(timeBetween.minutes)+ " and " + timeBetween.seconds + " SECOND" + s(timeBetween.seconds);



    }else{



	document.getElementById("time").innerHTML = "IS HERE!!!";



	document.getElementById("time").style.marginTop = -315;



	window.clearInterval(int);



    }



}



function s(n){



    if (n == 1){



	return "";



    }else{



	return "S";



    }



}



var int = window.setInterval("calculateTimeBetween()", 1000);







function Day () {



    day = new Array("SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY");



    return day[d.getDay()];



}











function rotate (accelerationx, accelerationy) {



	deg_time++;



	// all the numbers down below represent the sensitivity used for rotation triggers



	if (acc_y < 3 && acc_x > -7 && acc_x < 7) {



		//normal



		deg_new = 0;



		state = 'normal';



	} else if (acc_x < -6) {



		//left



		deg_new = 90;



		state = 'left';



	} else if (acc_x > 6) {



		//right



		deg_new = -90;



		state = 'right';



	} else if (acc_y > 4) {



		//upside



		deg_new = -180;



		state = 'upside';



	}



	



	if (deg != deg_new) {



		difference = deg_time - deg_set;



		



		if (difference >= 2 || deg_set == 0) {



			deg_set = deg_time;



			deg = deg_new;



		} else {



			//animation postponed



		}



	}



	



	//if decision wasnt made, default or previous deg value will be returned



	//console.log(acc_y + ' ' + acc_x + ' ' + state); // used for debugging 



	return deg;



}











