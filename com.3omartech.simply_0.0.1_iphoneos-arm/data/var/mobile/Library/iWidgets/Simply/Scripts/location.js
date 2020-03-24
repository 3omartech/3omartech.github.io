var prevlatitude = "";
var prevlongitude = "";
var textLat;
var textLong;
var refreshWeatherTimer;
var refrechLocationTimer;
var get_location = false;
var tempUnit = "f";

function trimString (text) {
return text.replace(/^\s+/g,'').replace(/\s+$/g,'');
} 

function UpdateLocation() {
refrechLocationTimer = setTimeout("UpdateLocation();", 1000*20); // Refresh location every 20 secondes
var txt_request = new XMLHttpRequest();
txt_request.overrideMimeType("text/xml");
var LocationTimer = setTimeout(function() {
txt_request.abort();
dealWithWeather({error:true});
}, 10000);
txt_request.onload = function(e) {
clearTimeout(LocationTimer);
getCoordinates(txt_request.responseText);
}
txt_request.open("GET", "file:///private/var/mobile/Documents/myLocation.txt", false);
txt_request.setRequestHeader("Cache-Control", "no-cache");
txt_request.send(null);
}

function getCoordinates(request) {
if (request == "") {
clearTimeout(refrechLocationTimer);
validateWeatherLocation(escape(locale).replace(/^%u/g, "%"), setPostal);
}
else
{
var substr = request.split('\n');
var templatitude=(substr[0]).split('=');
var templongitude=(substr[1]).split('=');
latitude = trimString(templatitude[1]);
longitude = trimString(templongitude[1]);

if (prevlatitude != latitude || prevlongitude != longitude) {
prevlatitude = latitude;
prevlongitude = longitude;	
getWoeid ();
}
}
}

function getWoeid() {
var url = "http://where.yahooapis.com/geocode?location=" + latitude + "+" + longitude + "&gflags=R";
var xml_request = new XMLHttpRequest();
var WoeidTimer = setTimeout(function() {
xml_request.abort();
if (get_location == false) { dealWithWeather({error:true, errorString:null}); }
}, 10000);
xml_request.onload = function(e) {
clearTimeout(WoeidTimer);
woeid_loaded(xml_request);
}
xml_request.overrideMimeType("text/xml");
xml_request.open("GET", url+"&antiCache="+Math.floor(Math.random()*1001), false);
xml_request.setRequestHeader("Cache-Control", "no-cache");
xml_request.send(null);
}

function woeid_loaded(request) {
if (get_location == true) { clearTimeout(refreshWeatherTimer); }
var effectiveRoot = findChild(request.responseXML, "ResultSet");
postal = parseInt(findChild(effectiveRoot, "Result").getElementsByTagName("woeid")[0].childNodes[0].nodeValue);

if (latitude < 0) { textLat = Math.round(latitude*100)/100 + "\u00B0" + "S"; }
else if (latitude > 0){ textLat = Math.round(latitude*100)/100 + "\u00B0" + "N"; }
else { textLat = Math.round(latitude*100)/100 + "\u00B0"; }

if (longitude < 0) { textLong = Math.round(longitude*100)/100 + "\u00B0" + "W"; }
else if (longitude > 0) { textLong = Math.round(longitude*100)/100 + "\u00B0" + "E"; }
else { textLong = Math.round(longitude*100)/100 + "\u00B0"; }

get_location = true;
fetchWeatherDataGPS(postal);
}

function refreshWeather() {
fetchWeatherData(dealWithWeather, localeForecast);
var refreshWeatherTimer = setTimeout("refreshWeather()", updateInterval*60*1000); // Refresh weather as specified in clock.html
}

function fetchWeatherDataGPS (zip) {
var url="http://weather.yahooapis.com/forecastrss?w="+zip+"&u="+tempUnit;
var xml_request = new XMLHttpRequest();
var requestTimer = setTimeout(function() {
xml_request.abort();
if (xmldata == false) { dealWithWeather ({error:true}); }
}, 10000);
xml_request.onload = function(e) {
clearTimeout(requestTimer);
xml_GPS_loaded(xml_request);
}
xml_request.overrideMimeType("text/xml");
xml_request.open("GET", url+"&antiCache="+Math.floor(Math.random()*1001));
xml_request.setRequestHeader("Cache-Control", "no-cache");
xml_request.send(null);
return xml_request;
}

function xml_GPS_loaded (request) {
if (request.responseXML)
{
var obj = {error:false, errorString:null};
xmldata = true;
var guidTag = findChild(findChild(findChild(request.responseXML, "rss"), "channel"), "item");
localeForecast = guidTag.getElementsByTagName("guid")[0].childNodes[0].nodeValue.split('_')[0];
refreshWeather();
}
else
{
dealWithWeather ({error:true, errorString:"XML request failed. no responseXML"});
}
}