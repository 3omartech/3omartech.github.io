function mainUpdate(type) {
    if (type == "weather") {
        injectedWeather = weather;
        injectedWeather.precipitationForecast = weather.chanceofrain;

        //Fixes for LPP and XenInfo differences
        injectedWeather.name = weather.city;
        if(weather.celsius === 'C'){
            options.celsius = true;
        }else if(weather.celsius === 'F'){
            options.celsius = false;
        }
    } else if (type == "statusbar") {
        injectedSystem.signalBars = signalBars;
        injectedSystem.wifiBars = wifiBars;
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
        injectedSystem.ramFree = ramFree;
        injectedSystem.ramUsed = ramUsed;
        injectedSystem.ramAvailable = ramAvailable;
    } else if (type == "battery") {
        injectedSystem.battery = batteryPercent;
        injectedSystem.chargetext = (batteryCharging) ? "Charging" : "Not Charging";
    } else if (type == "system") {
        options.twentyfour = (twentyfourhour == "yes") ? true : false;
        injectedSystem.deviceName = deviceName;
        injectedSystem.systemVersion = systemVersion;
    } else if (type == "alarm") {
        injectedSystem.alarmDay = alarmDay;
        injectedSystem.alarmString = alarmString;
        injectedSystem.alarmHour = alarmHour;
        injectedSystem.alarmMinute = alarmMinute;
    } else if (type == "reminders") {

    } else if (type == "events") {

    } else if (type == "music") {
        injectedMusic.isPlaying = isplaying;
        injectedMusic.title = (title == "(null)") ? "" : title;
        injectedMusic.artist = (artist == "(null)") ? "" : artist;
        injectedMusic.album = (album == "(null)") ? "" : album;
        setTimeout(function() {
            updateMusicElements();
        }, 0);
    }
}