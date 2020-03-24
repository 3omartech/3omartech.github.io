<!-------------------------------------------------- 3omartech ------------------------------------------------>

function init ( )
{
  timeDisplay = document.createTextNode ( "" );
document.getElementById("clock").appendChild ( timeDisplay );
}
function updateClock1 ( )
{
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

if (Clock == "24h") {
  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
} 
if (Clock == "12h") {
  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  document.getElementById("ampm").innerHTML = " " + timeOfDay;
}

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes;

  // Update the time display
document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}