/*jslint plusplus: true */

/*global
  injectedWeather,
  injectedSystem,
  options,
  translate,
  checkDiv,
  weather,
  action
*/

"use strict";
var weatherArray = ['day1day', 'day1high', 'day1low', 'day1highno', 'day1lowno', 'day1icon', 'day1lohigh', 'day2day', 'day2high', 'day2low', 'day2highno', 'day2lowno', 'day2icon', 'day2lohigh', 'day3day', 'day3high', 'day3low', 'day3highno', 'day3lowno', 'day3icon', 'day3lohigh', 'day4day', 'day4high', 'day4low', 'day4highno', 'day4lowno', 'day4icon', 'day4lohigh', 'day5day', 'day5high', 'day5low', 'day5highno', 'day5lowno', 'day5icon', 'day5lohigh', 'lngwstring', 'lngwstring2', 'lngwstring3', 'lngwstring4', 'lngwstring5', 'temp', 'tempdeg', 'tempdegplus', 'high', 'highdeg', 'highdegplus', 'low', 'lowdeg', 'lowdegplus', 'highdashlow', 'highslashlow', 'highdashlowdeg', 'highslashlowdeg', 'city', 'condition', 'humidity', 'windchill', 'wind', 'winddirection', 'visibility', 'rain', 'dewpoint', 'feelslike', 'feelslikedeg', 'sunrise', 'sunset', 'update', 'icon', 'tempcon', 'tempcon1', 'tempcon2', 'windstr', 'contemp', 'contemp2'],
    globalWeather;

function wlib() {
    var w = injectedWeather,
        weather = {
            cvtF: function (temp) {
                //letting iOS handle this
                //return (temp == "--") ? this.temp() : Math.round(temp * 1.8 + 32);
                return temp;
            },
            cvtK: function (wind) {
                return Math.round(((wind * 1.609344) * 100) / 100);
            },
            cvtM: function (distance) {
                return Math.round(distance * 1.60934);
            },
            cvtS: function (time) {
                var timecut, timeE, cvtt;
                if (String(time).length > 3) {
                    timecut = String(time).slice(0, 2);
                    timeE = String(time).slice(2, 4);
                } else {
                    timeE = String(time).slice(1, 3);
                    timecut = String(time).slice(0, 1);
                }
                if (timecut === "00") {
                    return 12;
                }
                cvtt = (timecut > 12) ? timecut - 12 : timecut;
                return cvtt + ":" + timeE;
            },
            cvtTwentyFour: function (time){
                var strTime = String(time),
                    secondPart = strTime.slice(-2),
                    firstPart = strTime.replace(secondPart, "");
                return firstPart + ":" + secondPart;
            },
            degToCompass: function (num) {
                var val = Math.floor((num / 22.5) + 0.5),
                    arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
                return arr[(val % 16)];
            },
            temp: function () {
                return (options.celsius ? Math.round(w.temperature) : this.cvtF(w.temperature));
            },
            high: function (deg) {
                return (options.celsius ? Math.round(w.dayForecasts[0].high) + deg : this.cvtF(w.dayForecasts[0].high) + deg);
            },
            low: function (deg) {
                return (options.celsius ? Math.round(w.dayForecasts[0].low) + deg : this.cvtF(w.dayForecasts[0].low) + deg);
            },
            condition: function () {
                return translate[options.languages].condition[w.conditionCode];
            },
            icon: function () {
                return w.conditionCode;
            },
            iconday1: function(){
                if(w.dayForecasts[1].icon){
                    return w.dayForecasts[1].icon;
                }else{
                    return 20;
                }
            },
            iconday2: function(){
                if(w.dayForecasts[2].icon){
                    return w.dayForecasts[2].icon;
                }else{
                    return 20;
                }
            },
            iconday3: function(){
                if(w.dayForecasts[3].icon){
                    return w.dayForecasts[3].icon;
                }else{
                    return 20;
                }
            },
            iconday4: function(){
                if(w.dayForecasts[4].icon){
                    return w.dayForecasts[4].icon;
                }else{
                    return 20;
                }
            },
            iconday5: function(){
                if(w.dayForecasts[5].icon){
                    return w.dayForecasts[5].icon;
                }else{
                    return 20;
                }
            },
            //dayNumber
            //dayOfWeek
            day1lohigh: function(){
                if(w.dayForecasts[1].low){
                    return w.dayForecasts[1].high + "&deg;/" + w.dayForecasts[1].low + "&deg;";
                }else{
                    return "0&deg;/0&deg;";
                }
            },
            day2lohigh: function(){
                if(w.dayForecasts[2].low){
                    return w.dayForecasts[2].high + "&deg;/" + w.dayForecasts[2].low + "&deg;";
                }else{
                    return "0&deg;/0&deg;";
                }
            },
            day3lohigh: function(){
                if(w.dayForecasts[3].low){
                    return w.dayForecasts[3].high + "&deg;/" + w.dayForecasts[3].low + "&deg;";
                }else{
                    return "0&deg;/0&deg;";
                }
            },
            day4lohigh: function(){
                if(w.dayForecasts[4].low){
                    return w.dayForecasts[4].high + "&deg;/" + w.dayForecasts[4].low + "&deg;";
                }else{
                    return "0&deg;/0&deg;";
                }
            },
            day5lohigh: function(){
                if(w.dayForecasts[5].low){
                    return w.dayForecasts[5].high + "&deg;/" + w.dayForecasts[5].low + "&deg;";
                }else{
                    return "0&deg;/0&deg;";
                }
            },
            day1day: function (){
                if(w.dayForecasts[1].dayOfWeek){
                    return translate[options.languages].sday[w.dayForecasts[1].dayOfWeek -1];
                }else{
                    return 'Nil';
                }
            },
            day2day: function (){
                if(w.dayForecasts[2].dayOfWeek){
                    return translate[options.languages].sday[w.dayForecasts[2].dayOfWeek-1];
                }else{
                    return 'Nil';
                }
            },
            day3day: function (){
                if(w.dayForecasts[3].dayOfWeek){
                    return translate[options.languages].sday[w.dayForecasts[3].dayOfWeek-1];
                }else{
                    return 'Nil';
                }
            },
            day4day: function (){
                if(w.dayForecasts[4].dayOfWeek){
                    return translate[options.languages].sday[w.dayForecasts[4].dayOfWeek-1];
                }else{
                    return 'Nil';
                }
            },
            day5day: function (){
                if(w.dayForecasts[5].dayOfWeek){
                    return translate[options.languages].sday[w.dayForecasts[5].dayOfWeek-1];
                }else{
                    return 'Nil';
                }
            },
            dayhigh: function(count, deg){
                var d = "";
                if(deg){
                    d = "&deg;";
                }
                return w.dayForecasts[count].high + d;
            },
            daylow: function(count, deg){
                var d = "";
                if(deg){
                    d = "&deg;";
                }
                return w.dayForecasts[count].low + d;
            },
            city: function () {
                return w.name;
            },
            humidity: function () {
                return Math.round(w.humidity);
            },
            windchill: function (deg) {
                return Math.round(w.windChill) + deg;
            },
            wind: function (spd) {
                return (options.celsius ? this.cvtK(Math.round(w.windSpeed)) + spd : Math.round(w.windSpeed) + spd);
            },
            direction: function () {
                return this.degToCompass(w.windDirection);
            },
            visible: function (dis) {
                return (options.celsius ? this.cvtM(Math.round(w.visibility)) + dis : Math.round(w.visibility) + dis);
            },
            rain: function (perc) {
                var percent = (w.precipitationForecast === 2) ? 0 : w.precipitationForecast;
                return percent + perc;
            },
            dewpoint: function (deg) {
                return Math.round(w.dewPoint) + deg;
            },
            feelslike: function (deg) {
                return (options.celsius ? Math.round(w.feelsLike) + deg : this.cvtF(w.feelsLike) + deg);
            },
            sunset: function () {
                return (options.celsius ? this.cvtTwentyFour(w.sunsetTime) : this.cvtS(w.sunsetTime));
            },
            sunrise: function () {
                return (options.celsius ? this.cvtTwentyFour(w.sunriseTime) : this.cvtS(w.sunriseTime));
            },
            updated: function () {
                return w.updateTimeString;
            },
            aniWeather: function () {
                /*if (options.aniWeather) {
                    var head = document.getElementsByTagName('head')[0],
                        script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = 'animation/animation.js';
                    head.appendChild(script);
                }*/
            },
            start: function (weatherInterval) {
                var currentTime = new Date().getTime();
                if (currentTime > Number(localStorage.getItem('lastUpdate'))) {
                    //loadWeatherCy(); dont need it
                    // this.aniWeather();
                } else {
                    weatherdivs();
                    //this.aniWeather();
                }
                setTimeout(function () {
                    weather.start(weatherInterval);
                }, weatherInterval);
            }
        };
    window.weather = weather;
    globalWeather = weather;
}

var weatherdivs = function () { //weather
    var tcf = (options.celsius === true) ? 'c' : 'f',
        spd = (options.celsius === true) ? 'kph' : 'mph',
        i,
        div,
        icon,
        value,
        prefix,
        suffix;
    for (i = 0; i < weatherArray.length; i++) {
        div = checkDiv(weatherArray[i]);
        if (div) {
            switch (div.id) {
            case 'lngwstring':
                value = "It's " + weather.condition().toLowerCase() + " outside and the temp is around " + weather.temp() + "&deg;.";
                break;
            case 'lngwstring2':
                value = "Currently it's " + weather.temp() + "&deg; outside.";
                break;
            case 'lngwstring3':
                var cond = weather.condition().toLowerCase();
                if(weather.condition().toLowerCase() === 'fog'){
                    cond = 'foggy';
                }
                value = "Currently it's " + cond + ", the high today will reach " + weather.high('') + "&deg; </br> Right now it's " + weather.temp() + "&deg; and your battery is at " + injectedSystem.battery +"%.";
                break;
            case 'lngwstring4':
                var cond = weather.condition().toLowerCase();
                if(weather.condition().toLowerCase() === 'fog'){
                    cond = 'foggy';
                }
                value = "It could be " + cond + " and " + weather.temp() + "&deg; but who really knows. </br> What I can tell you is your battery is " + injectedSystem.battery +"%:)";
                break;
            case 'lngwstring5':
                value = "The current temperature is " + weather.temp() + "&deg;, it's " + weather.condition().toLowerCase() + " with a wind speed of " + weather.wind(spd) + ". </br> Your battery is at " + injectedSystem.battery +"% and is " + injectedSystem.chargetext.toLowerCase() + ".";
                break;
            case 'contemp':
                value = weather.condition() + " " + weather.temp() + "&deg;";
                break;
            case 'contemp2':
                value = weather.condition() + " " + weather.temp() + "&deg;" + tcf;
                break;
            case 'tempcon':
                value = weather.temp() + " " + weather.condition();
                break;
            case 'tempcon1':
                value = weather.temp() + "&deg;" + tcf + " " + weather.condition();
                break;
            case 'tempcon2':
                value = weather.temp() + "&deg; " + weather.condition();
                break;
            case 'windstr':
                value = weather.wind(spd) + " " + weather.direction();
                break;
            case 'temp':
                value = weather.temp();
                break;
            case 'tempdeg':
                value = weather.temp() + '&deg;';
                break;
            case 'tempdegplus':
                value = weather.temp() + '&deg;' + tcf;
                break;
            case 'high':
                value = weather.high('');
                break;
            case 'highdeg':
                value = weather.high('') + '&deg;';
                break;
            case 'highdegplus':
                value = weather.high('') + '&deg;' + tcf;
                break;
            case 'low':
                value = weather.low('');
                break;
            case 'lowdeg':
                value = weather.low('') + '&deg;';
                break;
            case 'lowdegplus':
                value = weather.low('') + '&deg;' + tcf;
                break;
            case 'highdashlow':
                value = weather.high('') + '-' + weather.low('');
                break;
            case 'highslashlow':
                value = weather.high('') + '/' + weather.low('');
                break;
            case 'highdashlowdeg':
                value = weather.high('') + '&deg;-' + weather.low('') + '&deg;';
                break;
            case 'highslashlowdeg':
                value = weather.high('') + '&deg;/' + weather.low('') + '&deg;';
                break;
            case 'city':
                value = weather.city();
                break;
            case 'condition':
                value = weather.condition();
                break;
            case 'humidity':
                value = weather.humidity();
                break;
            case 'windchill':
                value = weather.windchill('&deg;');
                break;
            case 'wind':
                value = weather.wind(spd);
                break;
            case 'winddirection':
                value = weather.direction();
                break;
            case 'visibility':
                value = weather.visible(spd);
                break;
            case 'rain':
                value = weather.rain('%');
                break;
            case 'dewpoint':
                value = weather.dewpoint('&deg;');
                break;
            case 'feelslike':
                value = weather.feelslike('');
                break;
            case 'feelslikedeg':
                value = weather.feelslike('&deg;');
                break;
            case 'sunrise':
                value = weather.sunrise();
                break;
            case 'sunset':
                value = weather.sunset();
                break;
            case 'update':
                value = weather.updated();
                break;
            case 'icon':
                icon = weather.icon();
                value = icon;
                break;
            case 'day1lohigh':
                value = weather.day1lohigh();
                break;
            case 'day2lohigh':
                value = weather.day2lohigh();
                break;
            case 'day3lohigh':
                value = weather.day3lohigh();
                break;
            case 'day4lohigh':
                value = weather.day4lohigh();
                break;
            case 'day5lohigh':
                value = weather.day5lohigh();
                break;
            case 'day1icon':
                icon = weather.iconday1();
                value = icon;
                break;
            case 'day2icon':
                icon = weather.iconday2();
                value = icon;
                break;
            case 'day3icon':
                icon = weather.iconday3();
                value = icon;
                break;
            case 'day4icon':
                icon = weather.iconday4();
                value = icon;
                break;
            case 'day5icon':
                icon = weather.iconday5();
                value = icon;
                break;
            case 'day1day':
                value = weather.day1day();
                break;
            case 'day2day':
                value = weather.day2day();
                break;
            case 'day3day':
                value = weather.day3day();
                break;
            case 'day4day':
                value = weather.day4day();
                break;
            case 'day5day':
                value = weather.day5day();
                break;
            case 'day1high':
                value = weather.dayhigh(1, true);
                break;
            case 'day2high':
                value = weather.dayhigh(2, true);
                break;
            case 'day3high':
                value = weather.dayhigh(3, true);
                break;
            case 'day4high':
                value = weather.dayhigh(4, true);
                break;
            case 'day5high':
                value = weather.dayhigh(5, true);
                break;
            case 'day1highno':
                value = weather.dayhigh(1, false);
                break;
            case 'day2highno':
                value = weather.dayhigh(2, false);
                break;
            case 'day3highno':
                value = weather.dayhigh(3, false);
                break;
            case 'day4highno':
                value = weather.dayhigh(4, false);
                break;
            case 'day5highno':
                value = weather.dayhigh(5, false);
                break;
            case 'day1low':
                value = weather.daylow(1, true);
                break;
            case 'day2low':
                value = weather.daylow(2, true);
                break;
            case 'day3low':
                value = weather.daylow(3, true);
                break;
            case 'day4low':
                value = weather.daylow(4, true);
                break;
            case 'day5low':
                value = weather.daylow(5, true);
                break;
            case 'day1lowno':
                value = weather.daylow(1, false);
                break;
            case 'day2lowno':
                value = weather.daylow(2, false);
                break;
            case 'day3lowno':
                value = weather.daylow(3, false);
                break;
            case 'day4lowno':
                value = weather.daylow(4, false);
                break;
            case 'day5lowno':
                value = weather.daylow(5, false);
                break;
            }
            if (div.id === 'icon' || div.id === 'day1icon' || div.id === 'day2icon' || div.id === 'day3icon' || div.id === 'day4icon' || div.id === 'day5icon') {
                if(icon === undefined){
                    icon = 28;
                }
                if(action.savedElements.iconName == undefined){
                    action.savedElements.iconName = "simply";
                }
                if (document.getElementById('iconDiv' + div.id).src != 'http://junesiphone.com/weather/IconSets/' + action.savedElements.iconName + '/' + icon + '.png') {
                    document.getElementById('iconDiv' + div.id).src = 'http://junesiphone.com/weather/IconSets/' + action.savedElements.iconName + '/' + icon + '.png';
                }
            } else {
                if (div.getAttribute('data-prefix') !== null) {
                    prefix = div.getAttribute('data-prefix');
                    //alert(prefix);
                } else {
                    prefix = '';
                }
                if (div.getAttribute('data-suffix') !== null) {
                    suffix = div.getAttribute('data-suffix');
                } else {
                    suffix = '';
                }
                if(String(value).indexOf(';') > -1 || String(prefix).indexOf(';') > -1 || String(suffix).indexOf(';') > -1){
                    div.innerHTML = prefix + value + suffix;
                }else{
                    div.innerText = prefix + value + suffix;
                }
            }
        }
    }
};


function weatherLoaded() {
    var currentTime = new Date().getTime();
    wlib();
    weatherdivs();
    localStorage.setItem('lastUpdate', currentTime + options.weatherrefresh);
}
weatherLoaded();

