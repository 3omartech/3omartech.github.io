/* 
    cycript object is used by external widgets 
    and some overlays svgs
*/
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




