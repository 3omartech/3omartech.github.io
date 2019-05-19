
function updateClock ( )

{

  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );

  var currentMinutes = currentTime.getMinutes ( );

  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required

  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;



if (ampm == false) {
  
timeOfDay = "";
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );

  var currentMinutes = currentTime.getMinutes ( );

  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required

  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	} else {

  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );

  var currentMinutes = currentTime.getMinutes ( );

  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required

  currentHours = ( currentHours < 10 ? "" : "" ) + currentHours;

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  var timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  currentHours = ( currentHours ==0  ) ? 12 : currentHours;

}



  // Compose the string for display

var currentTimeString = currentHours + ":" + currentMinutes;



  // Update the time display

document.getElementById("clock").firstChild.nodeValue = currentTimeString;

document.getElementById("ampm").firstChild.nodeValue = timeOfDay;

}



function calendarDate ( )

{

       var this_date_name_array = new Array("00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31")

	var this_weekday_name_array=["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];

	var this_month_name_array=["January","February","March","April","May","June","July","August","September","October","November","December"];



	if (French == true){

	var this_weekday_name_array=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

       var this_month_name_array=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];

	}

	if (German == true){

	var this_weekday_name_array = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];

       var this_month_name_array=["Januar","Februar","Marz","April","Mai","Juni","Juli","August","September ","Oktober","November","Dezember"];

	}

	if (Spanish == true){

	var this_weekday_name_array = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

	var this_month_name_array=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Deciembre'];

	}

	if (Dutch == true){

	var this_weekday_name_array = ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"];

	var this_month_name_array=['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','November','December'];

	}

	if (Italian == true){

	var this_weekday_name_array = ["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"];

	var this_month_name_array=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

	}



  var this_date_timestamp = new Date()	  


  var this_weekday = 
this_date_timestamp.getDay()	


  var this_date = this_date_timestamp.getDate()    


  var this_month = this_date_timestamp.getMonth()    


  var this_year = this_date_timestamp.getYear()  



if (this_year < 1000)

    this_year+= 1900;

if (this_year==101)

    this_year=2001;	  



document.getElementById("weekday").firstChild.nodeValue = this_weekday_name_array[this_weekday] + " " //concat long date string

document.getElementById("date").firstChild.nodeValue = "" + this_date_name_array[this_date] //concat long date string

document.getElementById("month").firstChild.nodeValue = this_month_name_array[this_month] + " " //concat long date string

document.getElementById("year").firstChild.nodeValue = [this_year]//concat long date string

}

