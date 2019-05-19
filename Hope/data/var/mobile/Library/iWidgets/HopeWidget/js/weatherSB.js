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

var globalWeather,
    weatherdivs = function () { //weather
    var weatherArray = ['day1day', 'day1high', 'day1low', 'day1highno', 'day1lowno', 'day1icon', 'day1lohigh', 'day2day', 'day2high', 'day2low', 'day2highno', 'day2lowno', 'day2icon', 'day2lohigh', 'day3day', 'day3high', 'day3low', 'day3highno', 'day3lowno', 'day3icon', 'day3lohigh', 'day4day', 'day4high', 'day4low', 'day4highno', 'day4lowno', 'day4icon', 'day4lohigh', 'day5day', 'day5high', 'day5low', 'day5highno', 'day5lowno', 'day5icon', 'day5lohigh','lngwstring', 'lngwstring2', 'lngwstring3', 'lngwstring4', 'lngwstring5', 'temp', 'tempdeg', 'tempdegplus', 'high', 'highdeg', 'highdegplus', 'low', 'lowdeg', 'lowdegplus', 'highdashlow', 'highslashlow', 'highdashlowdeg', 'highslashlowdeg', 'city', 'condition', 'humidity', 'windchill', 'wind', 'winddirection', 'visibility', 'rain', 'dewpoint', 'feelslike', 'feelslikedeg', 'sunrise', 'sunset', 'update', 'icon', 'tempcon', 'tempcon1', 'tempcon2', 'windstr', 'contemp', 'contemp2'],
        tcf = (weather.celsius === 'C') ? 'c' : 'f',
        spd = (weather.celsius === 'C') ? 'kph' : 'mph',
        i,
        div,
        icon,
        value,
        prefix,
        suffix,
        degToCompass = function (num) {
            var val = Math.floor((num / 22.5) + 0.5),
                arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
            return arr[(val % 16)];
        },
        cvtS = function (time) {
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
        cvtTwentyFour = function (time){
            var strTime = String(time),
                secondPart = strTime.slice(-2),
                firstPart = strTime.replace(secondPart, "");
            return firstPart + ":" + secondPart;
        };
    for (i = 0; i < weatherArray.length; i++) {
        div = checkDiv(weatherArray[i]);
        if (div) {
            switch (div.id) {
            case 'lngwstring':
                value = "It's " + translate[options.languages].condition[weather.conditionCode].toLowerCase() + " outside and the temp is around " + weather.temperature + "&deg;.";
                break;
            case 'lngwstring2':
                value = "Currently it's " + weather.temperature + "&deg; outside.";
                break;
            case 'lngwstring3':
                value = "Currently it's " + translate[options.languages].condition[weather.conditionCode].toLowerCase() + ", the high today will reach " + weather.high + "&deg; </br> Right now it's " + weather.temperature + "&deg; and your battery is at " + injectedSystem.battery + "%.";
                break;
            case 'lngwstring4':
                value = "It could be " + translate[options.languages].condition[weather.conditionCode].toLowerCase() + " and " + weather.temperature + "&deg; but who really knows. </br> What I can tell you is your battery is " + injectedSystem.battery + "%:)";
                break;
            case 'lngwstring5':
                value = "The current temperature is " + weather.temperature + "&deg;, it's " + translate[options.languages].condition[weather.conditionCode].toLowerCase() + " with a wind speed of " + weather.windSpeed + spd +". </br> Your battery is at " + injectedSystem.battery + "% and is " + injectedSystem.chargetext.toLowerCase() + ".";
                break;
            case 'contemp':
                value = translate[options.languages].condition[weather.conditionCode] + " " + weather.temperature + "&deg;";
                break;
            case 'contemp2':
                value = translate[options.languages].condition[weather.conditionCode] + " " + weather.temperature + "&deg;" + tcf;
                break;
            case 'tempcon':
                value = weather.temperature + " " + translate[options.languages].condition[weather.conditionCode];
                break;
            case 'tempcon1':
                value = weather.temperature + "&deg;" + tcf + " " + translate[options.languages].condition[weather.conditionCode];
                break;
            case 'tempcon2':
                value = weather.temperature + "&deg; " + translate[options.languages].condition[weather.conditionCode];
                break;
            case 'windstr':
                value = weather.windSpeed + spd + " " + degToCompass(weather.windDirection);
                break;
            case 'temp':
                value = weather.temperature
                break;
            case 'tempdeg':
                value = weather.temperature + '&deg;';
                break;
            case 'tempdegplus':
                value = weather.temperature + '&deg;' + tcf;
                break;
            case 'high':
                value = weather.high;
                break;
            case 'highdeg':
                value = weather.high + '&deg;';
                break;
            case 'highdegplus':
                value = weather.high + '&deg;' + tcf;
                break;
            case 'low':
                value = weather.low;
                break;
            case 'lowdeg':
                value = weather.low + '&deg;';
                break;
            case 'lowdegplus':
                value = weather.low + '&deg;' + tcf;
                break;
            case 'highdashlow':
                value = weather.high + '-' + weather.low;
                break;
            case 'highslashlow':
                value = weather.high + '/' + weather.low;
                break;
            case 'highdashlowdeg':
                value = weather.high + '&deg;-' + weather.low + '&deg;';
                break;
            case 'highslashlowdeg':
                value = weather.high + '&deg;/' + weather.low + '&deg;';
                break;
            case 'city':
                value = weather.city;
                break;
            case 'condition':
                value = translate[options.languages].condition[weather.conditionCode];
                break;
            case 'humidity':
                value = weather.humidity;
                break;
            case 'windchill':
                value = weather.windChill + "&deg;";
                break;
            case 'wind':
                value = weather.windSpeed;
                break;
            case 'winddirection':
                value = degToCompass(weather.windDirection);
                break;
            case 'visibility':
                value = weather.visibility;
                break;
            case 'rain':
                value = weather.chanceofrain + "%";
                break;
            case 'dewpoint':
                value = weather.dewPoint + '&deg';
                break;
            case 'feelslike':
                value = weather.feelsLike;
                break;
            case 'feelslikedeg':
                value = weather.feelsLike + '&deg';
                break;
            case 'sunrise':
                value = (weather.celsius == 'C' ? cvtTwentyFour(weather.sunriseTime) : cvtS(weather.sunriseTime));
                break;
            case 'sunset':
                value = (weather.celsius == 'C' ? cvtTwentyFour(weather.sunsetTime) : cvtS(weather.sunsetTime));
                break;
            case 'update':
                value = weather.updateTimeString;
                break;
            case 'icon':
                icon = weather.conditionCode;
                value = icon;
                break;
            case 'day1lohigh':
                value = weather.dayForecasts[1].high + "&deg;/" + weather.dayForecasts[1].low + "&deg;";
                break;
            case 'day2lohigh':
                value = weather.dayForecasts[2].high + "&deg;/" + weather.dayForecasts[2].low + "&deg;";
                break;
            case 'day3lohigh':
                value = weather.dayForecasts[3].high + "&deg;/" + weather.dayForecasts[3].low + "&deg;";
                break;
            case 'day4lohigh':
                value = weather.dayForecasts[4].high + "&deg;/" + weather.dayForecasts[4].low + "&deg;";
                break;
            case 'day5lohigh':
                value = weather.dayForecasts[5].high + "&deg;/" + weather.dayForecasts[5].low + "&deg;";
                break;
            case 'day1icon':
                icon = weather.dayForecasts[1].icon;
                value = icon;
                break;
            case 'day2icon':
                icon = weather.dayForecasts[2].icon;
                value = icon;
                break;
            case 'day3icon':
                icon = weather.dayForecasts[3].icon;
                value = icon;
                break;
            case 'day4icon':
                icon = weather.dayForecasts[4].icon;
                value = icon;
                break;
            case 'day5icon':
                icon = weather.dayForecasts[5].icon;
                value = icon;
                break;
            case 'day1day':
                value = translate[options.languages].sday[weather.dayForecasts[1].dayOfWeek -1];
                break;
            case 'day2day':
                value = translate[options.languages].sday[weather.dayForecasts[2].dayOfWeek -1];
                break;
            case 'day3day':
                value = translate[options.languages].sday[weather.dayForecasts[3].dayOfWeek -1];
                break;
            case 'day4day':
                value = translate[options.languages].sday[weather.dayForecasts[4].dayOfWeek -1];
                break;
            case 'day5day':
                value = translate[options.languages].sday[weather.dayForecasts[5].dayOfWeek -1];
                break;
            case 'day1high':
                value = weather.dayForecasts[1].high + "&deg;";
                break;
            case 'day2high':
                value = weather.dayForecasts[2].high + "&deg;";
                break;
            case 'day3high':
                value = weather.dayForecasts[3].high + "&deg;";
                break;
            case 'day4high':
                value = weather.dayForecasts[4].high + "&deg;";
                break;
            case 'day5high':
                value = weather.dayForecasts[5].high + "&deg;";
                break;
            case 'day1highno':
                value = weather.dayForecasts[1].high;
                break;
            case 'day2highno':
                value = weather.dayForecasts[2].high;
                break;
            case 'day3highno':
                value = weather.dayForecasts[3].high;
                break;
            case 'day4highno':
                value = weather.dayForecasts[4].high;
                break;
            case 'day5highno':
                value = weather.dayForecasts[5].high;
                break;
            case 'day1low':
                value = weather.dayForecasts[1].low + "&deg;";
                break;
            case 'day2low':
                value = weather.dayForecasts[2].low + "&deg;";
                break;
            case 'day3low':
                value = weather.dayForecasts[3].low + "&deg;";
                break;
            case 'day4low':
                value = weather.dayForecasts[4].low + "&deg;";
                break;
            case 'day5low':
                value = weather.dayForecasts[5].low + "&deg;";
                break;
            case 'day1lowno':
                value = weather.dayForecasts[1].low;
                break;
            case 'day2lowno':
                value = weather.dayForecasts[2].low;
                break;
            case 'day3lowno':
                value = weather.dayForecasts[3].low;
                break;
            case 'day4lowno':
                value = weather.dayForecasts[4].low;
                break;
            case 'day5lowno':
                value = weather.dayForecasts[5].low;
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
                } else {
                    prefix = '';
                }
                if (div.getAttribute('data-suffix') !== null) {
                    suffix = div.getAttribute('data-suffix');
                } else {
                    suffix = '';
                }

                div.innerHTML = prefix + value + suffix;

            }
        }
    }
};

function weatherLoaded() {
    try {
        weatherdivs();
    } catch (err) {
        document.getElementById('help').innerHTML += err;
    }
    setTimeout(weatherLoaded, 5000);
}

setTimeout(weatherLoaded, 2000);