var sysArray = ['ipaddress', 'sleep', 'respring', 'boxOne', 'boxTwo', 'boxThree', 'boxFour', 'boxFive', 'boxSix', 'boxSeven', 'boxEight', 'boxNine', 'boxTen', 'boxEleven', 'boxTwelve', 'boxThirteen', 'boxFourteen', 'boxFifteen', 'boxSixteen', 'boxSeventeen', 'boxEighteen', 'boxNineteen', 'boxTwenty', 'batteryperslashcharge', 'alarmstringsmall', 'alarmstring', 'alarmsday', 'alarmday', 'alarmhr', 'alarmmin' ,'name', 'firmware', 'battery', 'batterypercent', 'chargingtxt', 'chargingstate', 'onlycharging', 'unlock', 'signal', 'signalpercent', 'alarm24', 'alarm', 'alarmpm', 'wifi', 'wifipercent', 'notifymail', 'notifysms', 'notifyphone', 'notifywhats', 'notifytelegram', 'ramUsed', 'ramFree', 'ramAvailable', 'ramUsedMB', 'ramFreeMB', 'ramAvailableMB', 'notifyfbmessenger', 'notifydiscord', 'notifyviber', 'notifyinstagram', 'notifyfacebook', 'notifygmail', 'notifyoutlook', 'notifyairmail', 'notifyymail', 'notifysnapchat', 'notifyreddit', 'notifygoogleplus', 'notifylinkedin', 'notifyslack', 'notifytelegramx', 'notifyspark', 'flashlight', 'searchicon', 'searchtext' ],
    miscArray = ['textOne', 'textTwo', 'textThree', 'textFour', 'textFive', 'app1', 'app2', 'app3', 'app4', 'app5', 'app6', 'app7', 'app8', 'app9', 'app10', 'app11', 'app12', 'app13', 'app14', 'app15', 'app16', 'app17', 'app18', 'app19', 'app20', 'app21', 'app21', 'app22', 'app23', 'app24', 'app25', 'app26', 'app27', 'app28', 'app29'],
    signalArray = ["0%", "20%", "40%", "60%", "80%", "100%"];


//adjust square to battery percent
function setBattery(element, percent, fullWidth){
  fullWidth = fullWidth.replace('px', '');
  var calc = Math.round((percent / 100) * fullWidth);
  element.style.width = calc + "px";
}

var alarmInfo = {
    getsDay : function(){
        if(injectedSystem.alarmDay){
            return translate[options.languages].sday[injectedSystem.alarmDay];
        }else{
            return "";
        }
    },
    getwDay : function(){
        if(injectedSystem.alarmDay){
            return translate[options.languages].weekday[injectedSystem.alarmDay];
        }else{
            return "";
        }
    },
    getString: function(){
        if(injectedSystem.alarmString){
            var split = injectedSystem.alarmString.split(':'),
            hr = split[0],
            min = split[1].split(' ')[0],
            am = split[1].split(' ')[1];
            if(min < 10 && min != "00"){
                min = "0" + min;
            }
            return hr + ":" + min + " " + am;
        }else{
            return "";
        }
    },
    getTime: function(){
        if(injectedSystem.alarmTime){
            var split = injectedSystem.alarmTime.split(':'),
            hr = split[0];
            min = split[1];
            if(min < 10 && min != "00"){
                min = "0" + min;
            }
            return hr + ":" + min;
        }else{
            return "";
        }
    },
    getHour: function(){
        if(injectedSystem.alarmHour){
            return injectedSystem.alarmHour;
        }else{
            return "";
        }
    },
    getMinute: function(){
        if(injectedSystem.alarmMinute){
            return (injectedSystem.alarmMinute < 10 && injectedSystem.alarmMinute != "00") ? "0" + injectedSystem.alarmMinute : injectedSystem.alarmMinute;
        }else{
            return "";
        }
    }
},

systemdivs = function (manual) { //system
    'use strict';
    var i, div, value, prefix, suffix;
    for (i = 0; i < sysArray.length; i++) {
        div = checkDiv(sysArray[i]);
        if (div) {
            value;
            switch (div.id) {
            case 'ipaddress':
                value = (injectedSystem.ipaddress == "error") ? "No Wifi" : injectedSystem.ipaddress;
            break;
            case 'name':
                value = injectedSystem.deviceName;
                break;
            case 'firmware':
                value = injectedSystem.systemVersion;
                break;
            case 'battery':
                value = injectedSystem.battery;
                break;
            case 'batterypercent':
                value = injectedSystem.battery + "%";
                break;
            case 'batteryperslashcharge':
                value = injectedSystem.battery + "%" + " / " + injectedSystem.chargetext;
                break;
            case 'chargingtxt':
                value = injectedSystem.chargetext;
                break;
            case 'chargingstate':
                value = injectedSystem.chargetext;
                break;
            case 'onlycharging':
                value = "Charging";
                if(injectedSystem.chargetext === 'Charging'){
                    div.style.opacity = 1;
                }else{
                    div.style.opacity = 0;
                }
                break;
            case 'unlock':
                value = "Unlock";
                break;
            case 'sleep':
                value = "Sleep";
                break;
            case 'respring':
                value = "Respring";
                break;
            case 'flashlight':
                value = "Flashlight";
                break;
            case 'searchicon':
                value = 'z';
                break;
            case 'searchtext':
                value = 'Search';
                break;
            case 'signal':
                value = injectedSystem.signalBars;
                break;
            case 'signalpercent':
                value = signalArray[injectedSystem.signalBars];
                break;
            case 'alarmstring':
                value = alarmInfo.getsDay() + " " + alarmInfo.getString();
                break;
            case 'alarmstringsmall':
                value = alarmInfo.getsDay() + " " + alarmInfo.getTime();
                break;
            case 'alarm24':
                value = alarmInfo.getString();
                break;
            case 'alarm':
                value = alarmInfo.getTime();
                break;
            case 'alarmhr':
                value = alarmInfo.getHour();
                break;
            case 'alarmmin':
                value = alarmInfo.getMinute();
                break;
            case 'alarmday':
                value = alarmInfo.getwDay();
                break;
            case 'alarmsday':
                value = alarmInfo.getsDay();
                break;
            case 'wifi':
                value = percent[Number(injectedSystem.wifiBars)];
                break;
            case 'wifipercent':
                value = percent[Number(injectedSystem.wifiBars)] + "%";
                break;
            case 'notifymail':
                value = injectedSystem.mailBadge;
                break;
            case 'notifysms':
                value = injectedSystem.smsBadge;
                break;
            case 'notifyphone':
                value = injectedSystem.phoneBadge;
                break;
            case 'notifywhats':
                value = injectedSystem.whatsBadge || 0;
                break;
            case 'notifytelegram':
                value = injectedSystem.telegramBadge || 0;
                break;
            case 'notifyfbmessenger':
                value = injectedSystem.fbMessengerBadge || 0;
                break;
            case 'notifydiscord':
                value = injectedSystem.discord || 0;
                break;
            case 'notifyviber':
                value = injectedSystem.viber || 0;
                break;
            case 'notifyinstagram':
                value = injectedSystem.instagram || 0;
                break;
            case 'notifyfacebook':
                value = injectedSystem.facebook || 0;
                break;
            case 'notifygmail':
                value = injectedSystem.gmail || 0;
                break;
            case 'notifyoutlook':
                value = injectedSystem.outlook || 0;
                break;
            case 'notifyairmail':
                value = injectedSystem.airmail || 0;
                break;
            case 'notifyymail':
                value = injectedSystem.ymail || 0;
                break;
            case 'notifysnapchat':
                value = injectedSystem.snapchat || 0;
                break;
            case 'notifyreddit':
                value = injectedSystem.reddit || 0;
                break;
            case 'notifygoogleplus':
                value = injectedSystem.googleplus || 0;
                break;
            case 'notifylinkedin':
                value = injectedSystem.linkedin || 0;
                break;
            case 'notifyslack':
                value = injectedSystem.slack || 0;
                break;
            case 'notifytelegramx':
                value = injectedSystem.telegramXBadge || 0;
                break;
            case 'notifyspark':
                value = injectedSystem.spark || 0;
                break;
            case 'ramFree':
                value = injectedSystem.ramFree;
                break;
            case 'ramUsed':
                value = injectedSystem.ramUsed;
                break;
            case 'ramAvailable':
                value = injectedSystem.ramAvailable;
                break;
            case 'ramFreeMB':
                value = injectedSystem.ramFree + " mb";
                break;
            case 'ramUsedMB':
                value = injectedSystem.ramUsed + " mb";
                break;
            case 'ramAvailableMB':
                value = injectedSystem.ramAvailable + " mb";
                break;
            }
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

            if(String(value).indexOf(';') > -1 || String(prefix).indexOf(';') > -1 || String(suffix).indexOf(';') > -1){
                div.innerHTML = prefix + value + suffix;
            }else{
                div.innerText = prefix + value + suffix;
            }
            //div.innerText = prefix + value + suffix;

            //when box is set to battery 
            if (div.id.substring(0, 3) === 'box') {
                div.innerHTML = "";
                if(action.savedElements.placedElements[div.id]["is-battery"] === "true"){
                    setBattery(div, injectedSystem.battery, action.savedElements.placedElements[div.id]["width"]);
                }
            }

            
        }
    }
    if(!manual){
        setTimeout(function () {
            systemdivs();
        }, 2000);
    }
},
globalBattery = {
    percent: 'nil',
    charging: 'nil'
},
miscDivs = function () {
    'use strict';
    var i, div, value;
    for (i = 0; i < miscArray.length; i++) {
        div = checkDiv(miscArray[i]);
        if (div) {
            value;
            switch (div.id) {
            case 'textOne':
                value = "Text";
                break;
            case 'textTwo':
                value = "Text";
                break;
            case 'textThree':
                value = 'Text';
                break;
            case 'textFour':
                value = 'Text';
                break;
            case 'textFive':
                value = 'Text';
                break;
            case 'app1':
                value = 'Mail-com.apple.mobilemail';
                break;
            case 'app2':
                value = 'SMS-com.apple.MobileSMS';
                break;
            case 'app3':
                value = 'Phone-com.apple.mobilephone';
                break;
            case 'app4':
                value = 'Twitter-com.atebits.Tweetie2';
                break;
            case 'app5':
                value = 'Tweetbot3-com.tapbots.Tweetbot3';
                break;
            case 'app6':
                value = 'Telegram-ph.telegra.Telegraph';
                break;
            case 'app7':
                value = 'Instagram-com.burbn.instagram';
                break;
            case 'app8':
                value = 'Pandora-com.pandora';
                break;
            case 'app9':
                value = 'Spotify-com.spotify.client';
                break;
            case 'app10':
                value = 'Facebook-com.facebook.Facebook';
                break;
            case 'app11':
                value = 'Kik-com.kik.chat';
                break;
            case 'app12':
                value = 'YouTube-com.google.ios.youtube';
                break;
            case 'app13':
                value = 'WhatsApp-net.whatsapp.WhatsApp';
                break;
            case 'app14':
                value = 'Safari-com.apple.mobilesafari';
                break;
            case 'app15':
                value = 'Weather-com.apple.weather';
                break;
            case 'app16':
                value = 'Clock-com.apple.mobiletimer';
                break;
            case 'app17':
                value = 'Music-com.apple.Music';
                break;
            case 'app18':
                value = 'Camera-com.apple.camera';
                break;
            case 'app19':
                value = 'Reminders-com.apple.reminders';
                break;
            case 'app20':
                value = 'Notes-com.apple.mobilenotes';
                break;
            case 'app21':
                value = 'Maps-com.apple.Maps';
                break;
            case 'app22':
                value = 'Calendar-com.apple.mobilecal';
                break;
            case 'app23':
                value = 'Calculator-com.apple.calculator';
                break;
            case 'app24':
                value = 'Cydia-com.saurik.Cydia';
                break;
            case 'app25':
                value = 'YouTube-com.google.ios.youtube';
                break;
            case 'app26':
                value = 'Settings-com.apple.Preferences';
                break;
            case 'app27':
                value = 'AppStore-com.apple.AppStore';
                break;
            case 'app28':
                value = 'Health-com.apple.Health';
                break;
            case 'app29':
                value = 'TelegramHD-org.telegram.TelegramHD';
                break;
            }
            if (div.id.substring(0, 3) === 'app') {
                div.innerHTML = value.split('-')[0];
                div.setAttribute('data-target', value.split('-')[1]);
            } else if (div.innerHTML === '') {
                div.innerHTML = value;
            }
            
        }
    }
};
