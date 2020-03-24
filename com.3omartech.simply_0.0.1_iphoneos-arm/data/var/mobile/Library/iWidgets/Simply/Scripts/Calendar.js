<!-------------------------------------------------- 3omartech ------------------------------------------------>

function calendarDate ( )
{
       var this_date_name_array = new Array("0","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelvth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth","twentieth","twenty-first","twenty-second","twenty-third","Twenty-Fourth","twenty-fifth","twenty-sixth","twenty-seventh","twenty-eighth","twenty-ninth","thirtieth","thirty-first")
	var this_weekday_name_array=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var this_month_name_array=["January","February","March","April","May","June","July","August","September","October","November","December"];

	if (Lang == "fr"){
       var this_date_name_array = new Array("0","un","deux","trois","quatre","cinq","sei","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf","vingt","vingt-et-un","vingt-deux","vingt-trois","vingt-quatre","vingt-cinq","vingt-six","vingt-sept","vingt-huit","vingt-neuf","trenta","trente-et-un")
	var this_weekday_name_array=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
       var this_month_name_array=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
	}
	if (Lang == "de"){
       var this_date_name_array = new Array("0","zuerst","zweitens","Drittel","viert","fünft","sechst","siebent","acht","neunt","zehnt","elft","twelvth","dreizehnt","vierzehnt","fünfzehnt","sechzehnt","siebzehnt","achtzehnt","neunzehnt","zwanzigst","einundzwanzigst","zweiundzwanzigst","dreiundzwanzigst","vierundzwanzigst","fünfundzwanzigst","sechsundzwanzigst","siebenundzwanzigst","achtundzwanzigst","neunundzwanzigst","dreißigst","einunddreißigst")
	var this_weekday_name_array = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
       var this_month_name_array=["Januar","Februar","Marz","April","Mai","Juni","Juli","August","September ","Oktober","November","Dezember"];
	}
	if (Lang == "ca"){
       var this_date_name_array = new Array("0","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho","diecinueve","veinte","veintiuno","veintidos","veintitres","veinticuatro","veinticinco","veintiseis","veintisiete","veintiocho","veintinueve","treinta","treinta y uno")
	var this_weekday_name_array = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var this_month_name_array=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Deciembre'];
	}
	if (Lang == "it"){
       var this_date_name_array = new Array("0","uno","due","tre","quattro","cinque","sei","sete","otto","nove","dieci","undici","dodici","tredici","quattordici","quincidi","sedici","diciassette","diciotto","diciannove","venti","ventuno","ventidue","ventitre","ventiquattro","venticinque","ventisei","ventisete","veintiotto","veintinove","trenta","trentuno")
	var this_weekday_name_array = ["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"];
	var this_month_name_array=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
	}

  var this_date_timestamp = new Date()	  
  var this_weekday = this_date_timestamp.getDay()    
  var this_date = this_date_timestamp.getDate()    
  var this_month = this_date_timestamp.getMonth()  
  var this_year = this_date_timestamp.getYear()  

if (this_year < 1000)
    this_year+= 1900;
if (this_year==101)
    this_year=2001;	   

document.getElementById("month").firstChild.nodeValue = this_month_name_array[this_month] + "." //concat long date string
document.getElementById("date").firstChild.nodeValue = this_date_name_array[this_date] //concat long date string
}