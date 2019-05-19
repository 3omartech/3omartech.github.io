/* cycript object is used by external widgets */
cycript.batteryPercent = function () {
    return injectedSystem.battery;
};
cycript.alarmText = function () {
    return injectedSystem.alarmString;
};
cycript.getCharging = function () {
    return injectedSystem.chargetext;
};
cycript.getisCharging = function () {
    return injectedSystem.chargetext;
};
cycript.getWeather = function () {
    return injectedWeather;
};
cycript.deviceName = function () {
    return injectedSystem.deviceName;
};
cycript.getWifi = function () {
    return percent[Number(injectedSystem.wifiBars)];
};
cycript.getSignal = function () {
    return injectedSystem.signalBars;
};
cycript.firmwareType = function () {
    return injectedSystem.systemVersion;
};

//app badges
cycript.phoneBadge = function () {
    return injectedSystem.phoneBadge;
}
cycript.mailBadge = function () {
    return injectedSystem.mailBadge;
}
cycript.smsBadge = function () {
    return injectedSystem.smsBadge;
}
cycript.whatsBadge = function () {
    return injectedSystem.whatsBadge || 0;
}
cycript.telegramBadge = function () {
    return injectedSystem.telegramBadge || 0;
}
cycript.telegramXBadge = function () {
    return injectedSystem.telegramXBadge || 0;
}
cycript.fbMessengerBadge = function () {
    return injectedSystem.fbMessengerBadge || 0;
}
cycript.discord = function () {
    return injectedSystem.discord || 0;
}
cycript.viber = function () {
    return injectedSystem.viber || 0;
}
cycript.instagram = function () {
    return injectedSystem.instagram || 0;
}
cycript.facebook = function () {
    return injectedSystem.facebook || 0;
}
cycript.gmail = function () {
    return injectedSystem.gmail || 0;
}
cycript.outlook = function () {
    return injectedSystem.outlook || 0;
}
cycript.airmail = function () {
    return injectedSystem.airmail || 0;
}
cycript.ymail = function () {
    return injectedSystem.ymail || 0;
}
cycript.snapchat = function () {
    return injectedSystem.snapchat || 0;
}
cycript.reddit = function () {
    return injectedSystem.reddit || 0;
}
cycript.googleplus = function () {
    return injectedSystem.googleplus || 0;
}
cycript.linkedin = function () {
    return injectedSystem.linkedin || 0;
}
cycript.slack = function () {
    return injectedSystem.slack || 0;
}
cycript.spark = function () {
    return injectedSystem.spark || 0;
}

//not used but there.
cycript.wifiName = function () {
    return injectedSystem.wifiName;
};
cycript.wifiRSSI = function () {
    return injectedSystem.wifiRSSI;
};
cycript.wifiBars = function () {
    return injectedSystem.wifiBars;
};
cycript.signalName = function () {
    return injectedSystem.signalName;
};
cycript.signalRSSI = function () {
    return injectedSystem.signalStrength;
};
cycript.signalBars = function () {
    return injectedSystem.signalBars;
};

function batteryPercent(){
    return injectedSystem.battery;
}

var percent = ['0', '40', '60', '100'];

/* Calling WebView */
function webviewUnlock() {
    //window.location = 'js-call:unlockPhone';
}
function webviewFlashlight() {
    //window.location = 'js-call:toggleFlashlight';
}
function webviewPlayMusic() {
    window.location = 'xeninfo:playpause';
}
function webviewNextMusic() {
    window.location = 'xeninfo:nexttrack';
}
function webviewPrevMusic() {
    window.location = 'xeninfo:prevtrack';
}
function webviewOpenApp(){
  window.location = 'xeninfo:openapp:' + appToOpen;
}
function openURL(url){ //called from widgets
  window.location = 'xeninfo:openurl:' + url;
}


//sizing
var iPad = false;
var iPhoneX = false;

if (window.innerWidth === 375) {
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.18, maximum-scale=1.18, user-scalable=0');
} else if (window.innerWidth === 414 || window.innerWidth === 425) { //upscale fix
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.3, maximum-scale=1.3, user-scalable=0');
} else if (window.innerWidth === 427) {
    iPad = true;
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.3, maximum-scale=1.3, user-scalable=0');
} else if (window.innerWidth === 768) {
    iPad = true;
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.8, maximum-scale=1.8 user-scalable=0');
}

if (window.innerHeight == 689) {
    document.getElementById('mainContainer').style.height = "689px";
    iPhoneX = true;
}

function doiPad(type) {
    if (type === 'land') {
        document.getElementById('body').style.marginLeft = '120px';
        document.getElementById('body').style.marginTop = '-70px';
    } else {
        document.getElementById('body').style.marginLeft = '55px';
        document.getElementById('body').style.marginTop = '0px';
    }
}

function doOnOrientationChange() {
    window.addEventListener('orientationchange', doOnOrientationChange);
    switch (window.orientation) {
    case -90:
    case 90:
        doiPad('land');
        break;
    default:
        doiPad('por');
        break;
    }
}

if (iPad) {
    doOnOrientationChange();
}

//set defaults for XenHTML to display.
options.twentyfour = false;
injectedSystem.signalBars = 3;
injectedSystem.wifiBars = 3;
injectedSystem.mailBadge = "NA";
injectedSystem.smsBadge = "NA";
injectedSystem.phoneBadge = "NA";
injectedSystem.whatsBadge = "NA";
injectedSystem.telegramBadge = "NA";
injectedSystem.fbMessengerBadge = "NA";
injectedSystem.discord = "NA";
injectedSystem.viber = "NA";
injectedSystem.instagram = "NA";
injectedSystem.facebook = "NA";
injectedSystem.gmail = "NA";
injectedSystem.outlook = "NA";
injectedSystem.airmail = "NA";
injectedSystem.ymail = "NA";
injectedSystem.snapchat = "NA";
injectedSystem.reddit = "NA";
injectedSystem.googleplus = "NA";
injectedSystem.linkedin = "NA";
injectedSystem.slack = "NA";
injectedSystem.telegramXBadge = "NA";
injectedSystem.spark = "NA";
injectedSystem.ramFree = 200;
injectedSystem.ramUsed = 200;
injectedSystem.ramAvailable = 300;
injectedSystem.battery = 90;
injectedSystem.chargetext = "Not Charging";
injectedSystem.deviceName = "iPhone";
injectedSystem.systemVersion = "11.1.2";
injectedSystem.alarmDay = 5;
injectedSystem.alarmString = "10:00 PM";
injectedSystem.alarmHour = "10";
injectedSystem.alarmMinute = "00";
injectedMusic.isPlaying = false;
injectedMusic.title = "No Title";
injectedMusic.artist = "No Artist";
injectedMusic.album = "No Album";

weather.conditionCode = 32;
weather.temperature = "75";
weather.high = "75";
weather.low = "75";
weather.city = "Test City";
weather.windSpeed = "2";
weather.windDirection = "300";
weather.humidity = "90";
weather.windChill = "20";
weather.visibility = "100";
weather.chanceofrain = "0";
weather.feelsLike = "20";
weather.celsius = "true";
weather.dewPoint = "20";
weather.sunriseTime = "1040";
weather.sunsetTime = "1140";
weather.updateTimeString = "10:40 Updated";
weather.dayForecasts = [
{
    low: "65",
    high:"89",
    dayNumber: "0",
    dayOfWeek: "1",
    icon: "32"
},
{
    low: "65",
    high:"89",
    dayNumber: "0",
    dayOfWeek: "2",
    icon: "32"
},
{
    low: "65",
    high:"89",
    dayNumber: "0",
    dayOfWeek: "3",
    icon: "32"
},
{
    low: "65",
    high:"89",
    dayNumber: "0",
    dayOfWeek: "4",
    icon: "32"
},
{
    low: "65",
    high:"89",
    dayNumber: "0",
    dayOfWeek: "5",
    icon: "32"
},
{
    low: "65",
    high:"89",
    dayNumber: "0",
    dayOfWeek: "6",
    icon: "32"
}
];



