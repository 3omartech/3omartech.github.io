var clockElements, clockMethods, weatherElements, weatherMethods, systemElements, systemMethods;
clockElements = {
    'daysleft': ['daysLeft'],
    'fullclock': ['zhour', ':', 'minute', ':', 'second'],
    'datedotsmonth': ['date', '.', 'sdaytext'],
    'datedotsmonthpad': ['paddeddate', '.', 'sdaytext'],
    'smonthdotdate': ['sdaytext', '.', 'date'],
    'smonthdotdatepad': ['sdaytext', '.', 'paddeddate'],
    'monthnumslashdatepad': ['monthdate', '/', 'paddeddate'],
    'monthnumslashdate': ['monthdate', '/', 'date'],
    'dateslashmonthpad': ['paddeddate', '/', 'monthdate'],
    'dateslashmonth': ['date', '/', 'monthdate'],
    'dstring': ['sdaytext', ', ', 'smonthtext', ' ', 'date'],
    'dstringpad': ['sdaytext', ', ', 'smonthtext', ' ', 'paddeddate'],
    'daycut': ['daytextcut'],
    'smonthsplit': ['monthtextcut'],
    'datepad': ['paddeddate'],
    'datepadfirst': ['paddeddatecut0'],
    'datepadsecond': ['paddeddatecut1'],
    'timer': ['getTimer'],
    'mday': ['mdaytext'],
    'amalways': ['amalways'],
    'sday1': ['sdaytextslice01'],
    'sday2': ['sdaytextslice12'],
    'sday3': ['sdaytextslice23'],
    'smonth1': ['smonthtextslice01'],
    'smonth2': ['smonthtextslice12'],
    'smonth3': ['smonthtextslice23'],
    'yearnum': ['yearslice24'],
    'lngclstring': ["It's ", "hour", ":", "minute", " on ", "daytext", " the ", "dateplus"],
    'prevdaystrings': ['yesterdaydaytext', ' ', 'monthtext', ' ', 'prevdate'],
    'todaystrings': ['daytext', ' ', 'monthtext', ' ', 'date'],
    'nextdaystrings': ['nextdaytext', ' ', 'monthtext', ' ', 'nextdate'],
    'datemonthrev': ['monthtext', ' ', 'date'],
    'monthlinespace': ['monthtext', ' | ', 'date', ' | ', 'year'],
    'daydate': ['daytext', ' ', 'date'],
    'datespace': ['daytext', ' ', 'monthtext', ' ', 'date'],
    'daydotdate': ['daytext', '.', 'date'],
    'datestringrev': ['monthtext', ' ', 'date', ', ', 'daytext'],
    'hrmintx': ['hrmintx'],
    'hrmin': ['hourtext', '.', 'minute'],
    'daydatemonth': ['daytext', ' | ', 'date', 'monthtext'],
    'daydatemonth2': ['date', 'monthtext', ' | ', 'daytext'],
    'monthdateyear': ['monthtext', ' ', 'date', ', ', 'year'],
    'clock': ['hour', ':', 'minute'],
    'clockdot': ['hour', '.', 'minute'],
    'zclockdot': ['zhour', '.', 'minute'],
    'sclock': ['hour', ':', 'minute', 'ampmstrict'],
    'sclockpadded': ['zhour', ':', 'minute', 'ampmstrict'],
    'zclock': ['zhour', ':', 'minute'],
    'clockline': ['hour', '|', 'minute'],
    'clockpm': ['hour', ':', 'minute', 'am'],
    'zhour': ['zhour'],
    'hour': ['hour'],
    'minute': ['minute'],
    'second': ['second'],
    'pm': ['am'],
    'tod': ['tod'],
    'ttext': ['hourtext', ' ', 'minuteonetext', ' ', 'minutetwotext'],
    'ttextstr': ['hourtext', '', 'minuteonetext', '', 'minutetwotext' + '<span style="text-transform:uppercase">', 'daytext', '</span><span style="text-transform:lowercase">the', 'dateplus', '</span>'],
    'htext': ['hourtext'],
    'mtext': ['minuteonetext', ' ', 'minutetwotext'],
    'mtext2': ['minuteonetext2', ' ', 'minutetwotext'],
    'mtext3': ['minuteonetext3'],
    'date': ['date'],
    'prevdate': ['prevdate'],
    'nextdate': ['nextdate'],
    'dateplus': ['dateplus'],
    'dateplusof': ['dateplus', ' of ', 'monthtext'],
    'dateplusplusof': ['daytext', ', ', 'dateplus', ' of ', 'monthtext'],
    'datetext': ['datetext'],
    'day': ['daytext'],
    'nextday': ['nextdaytext'],
    'yestday': ['yesterdaydaytext'],
    'sday': ['sdaytext'],
    'snextday': ['snextday'],
    'sprevday': ['sprevday'],
    'month': ['monthtext'],
    'nextmonth': ['nextmonthtext'],
    'prevmonth': ['prevmonthtext'],
    'monthstring': ['monthtext', ' the ', 'dateplus'],
    'datedotmonth': ['date', '.', 'monthtext'],
    'dateslashmonth': ['date', '/', 'monthtext'],
    'datemonth': ['date', ' ', 'monthtext'],
    'smonth': ['smonthtext'],
    'snextmonth': ['snextmonth'],
    'sprevmonth': ['sprevmonth'],
    'monthdot': ['monthtext', '.', 'date'],
    'monthline': ['monthtext', '|', 'date', '|', 'year'],
    'mdy': ['monthdate', '/', 'date', '/', 'year'],
    'mdy2': ['date', '/', 'monthdate', '/', 'year'],
    'monthD': ['monthdate'],
    'datestring': ['daytext', ', ', 'monthtext', ' ', 'date'],
    'datedash': ['daytext', '-', 'monthtext', '-', 'date'],
    'year': ['year'],
    'daydatesmonth': ['daytext', ' ', 'date', ' ', 'smonthtext'],
    'daydatescommamonth': ['daytext', ', ', 'date', ' ', 'smonthtext'],
    'yeartext': ['yeartext'],
    'datebar': ['monthdate', '|', 'date', '|', 'smyear'],
    'datebar2': ['date', '|', 'monthdate', '|', 'smyear'],
    'datesnslash': ['monthdate', '/', 'date', '/', 'smyear'],
    'datesnslash2': ['date', '/', 'monthdate', '/', 'smyear'],
    'datesingled': ['monthdate', '-', 'date', '-', 'smyear'],
    'datesingled2': ['date', '-', 'monthdate', '-', 'smyear'],
    'hrsmush': ['hourtext', '', 'minute'],
    'dayabdatemonth': ['sdaytext', ' ', 'date', ' ', 'smonthtext'],
    'daycommadatemonth': ['sdaytext', ', ', 'date', ' ', 'smonthtext'],
    'hrnsmin': ['hourtext', ' ', 'minute'],
    'clocksmush': ['hour', '', 'minute'],
    'datemonthfirst': ['date', ' ', 'monthtext'],
    'nsmd': ['smonthtext', ' ', 'date'],
    'ndsm': ['date', ' ', 'smonthtext'],
    'ndsm2': ['paddeddate', ' ', 'smonthtext'],
    'ndsm3': ['smonthtext', ' ', 'paddeddate'],
    'ndsm4': ['sdaytext', ' ', 'paddeddate'],
    'ndsmd': ['date', ' ', 'sdaytext'],
    'nsmdd': ['sdaytext', ' ', 'date'],
    'ndatedash': ['daytext', ' - ', 'monthtext', ' - ', 'date'],
    'nsmmyear': ['smonthtext', ' ', 'year'],
    'nmdplusyear': ['monthtext', ' ', 'dateplus', ' ', 'year'],
    'nhrtmin': ['hourtext', ':', 'minute'],
    'nhrtarrowmin': ['hourtext', '>>', 'minute'],
    'nttext': ['[', 'hourtext', ']', 'minuteonetext', 'minutetwotext'],
    'smdotdate': ['smonthtext', '.', 'date'],
    'datesmdot': ['date', '.', 'smonthtext'],
    'monthdayyear': ['monthtext', ' ', 'date', ' ', 'year'],
    'monthslashdate': ['monthtext', '/', 'date'],
    'fullmonthdotdate': ['monthtext', '.', 'date'],
    'datedotmonthfull': ['date', '.', 'monthtext'],
    'datemonthyear': ['date', ' ', 'monthtext', ', ', 'year'],
    'monthDPadded':['monthdatepadded']
};
weatherElements = {
    'lngwstring': ["It's ", "conditionlowercase", " outside and the temp is around ", 'temp', '&deg;.'],
    'lngwstring2': ["Currently it's ", 'temp', '&deg; outside.'],
    'lngwstring3': ["Currently it's ", "conditionlowercase", ", the high today will reach ", "high", "&deg; </br> Right now it's ", "temp", "&deg; and your battery is at ", "battery", "%."],
    'lngwstring4': ["It could be ", "conditionlowercase", " and ", "temp", "&deg; but who really knows. </br> What I can tell you is your battery is ", "battery", '%:)'],
    'lngwstring5': ["The curent temperature is ", "temp", "&deg;, it's ", "conditionlowercase", " with a wind speed of ", "wind", ". </br> Your battery is at ", 'battery', '% and is ', 'charginglowercase', '.'],
    'contemp': ['condition', ' ', 'temp', '&deg;'],
    'contemp2': ['condition', ' ', 'temp', '&deg;', 'celsiusorfareinheight'],
    'tempcon': ['temp', ' ', 'condition'],
    'tempcon1': ['temp', '&deg;', 'celsiusorfareinheight', ' ', 'condition'],
    'tempcon2': ['temp', '&deg; ', 'condition'],
    'tempcon2': ['temp', '&deg; ', 'condition'],
    'windstr': ['wind', ' ', 'direction'],
    'temp': ['temp'],
    'tempdeg': ['temp', '&deg;'],
    'tempdegplus': ['temp', '&deg;', 'celsiusorfareinheight'],
    'high': ['high'],
    'highdeg': ['high', '&deg;'],
    'highdegplus': ['high', '&deg;', 'celsiusorfareinheight'],
    'low': ['low'],
    'lowdeg': ['low', '&deg;'],
    'lowdegplus': ['low', '&deg;', 'celsiusorfareinheight'],
    'highdashlow': ['high', '-', 'low'],
    'highslashlow': ['high', '/', 'low'],
    'highdashlowdeg': ['high', '&deg;-', 'low', '&deg;'],
    'highslashlowdeg': ['high', '&deg;/', 'low', '&deg;'],
    'city': ['city'],
    'condition': ['condition'],
    'humidity': ['humidity'],
    'windchill': ['windchill', '&deg;'],
    'wind': ['wind'],
    'windDirection': ['direction'],
    'visibility': ['visible'],
    'rain': ['rain', '%'],
    'dewpoint': ['dewpoint', '&deg;'],
    'feelslike': ['feelslike'],
    'feelslikedeg': ['feelslike', '&deg;'],
    'sunrise': ['sunrise'],
    'sunset': ['sunset'],
    'update': ['updated'],
    'icon': ['icon'],
    'coloricon': ['coloricon'],
    'day1lohigh': ['day1lohigh'],
    'day2lohigh': ['day2lohigh'],
    'day3lohigh': ['day3lohigh'],
    'day4lohigh': ['day4lohigh'],
    'day5lohigh': ['day5lohigh'],
    'day1icon': ['iconday1'],
    'day2icon': ['iconday2'],
    'day3icon': ['iconday3'],
    'day4icon': ['iconday4'],
    'day5icon': ['iconday5'],
    'day1day': ['day1day'],
    'day2day': ['day2day'],
    'day3day': ['day3day'],
    'day4day': ['day4day'],
    'day5day': ['day5day'],
    'day1high': ['day1high', '&deg;'],
    'day2high': ['day2high', '&deg;'],
    'day3high': ['day3high', '&deg;'],
    'day4high': ['day4high', '&deg;'],
    'day5high': ['day5high', '&deg;'],
    'day1highno': ['day1high'],
    'day2highno': ['day2high'],
    'day3highno': ['day3high'],
    'day4highno': ['day4high'],
    'day5highno': ['day5high'],
    'day1low': ['day1low', '&deg;'],
    'day2low': ['day2low', '&deg;'],
    'day3low': ['day3low', '&deg;'],
    'day4low': ['day4low', '&deg;'],
    'day5low': ['day5low', '&deg;'],
    'day1lowno': ['day1low'],
    'day2lowno': ['day2low'],
    'day3lowno': ['day3low'],
    'day4lowno': ['day4low'],
    'day5lowno': ['day5low']
};
systemElements = {
    'ipaddress' : ['ipaddress'],
    'name' : ['devicename'],
    'firmware' : ['firmware'],
    'battery' : ['battery'],
    'batterypercent' : ['battery', '%'],
    'batteryperslashcharge' : ['battery', '%', ' / ', 'chargetext'],
    'chargingtxt' : ['chargetext'],
    'chargingstate' : ['chargetext'],
    'onlycharging' : ['onlycharging'],
    'unlock' : ['Unlock'],
    'sleep' : ['Sleep'],
    'respring' : ['Respring'],
    'flashlight' : ['Flashlight'],
    'searchicon' : ['z'],
    'searchtext' : ['Search'],
    'signal' : ['signalbars'],
    'signalpercent' : ['signalpercent'],
    'alarmstring' : ['getalarmday', ' ', 'getalarmstring'],
    'alarmstringsmall' : ['getalarmday', ' ', 'getalarmtime'],
    'alarm24' : ['getalarmstring'],
    'alarm' : ['getalarmtime'],
    'alarmhr' : ['getalarmhr'],
    'alarmmin' : ['getalarmmin'],
    'alarmday' : ['getalarmweekday'],
    'alarmsday' : ['getalarmday'],
    'wifi': ['wifi'],
    'wifipercent': ['wifi', '%'],
    'notifymail' : ['mailbadge'],
    'notifysms' : ['smsbadge'],
    'notifyphone' : ['phonebadge'],
    'notifywhats' : ['whatsbadge'],
    'notifytelegram' : ['telegrambadge'],
    'notifyfbmessenger' : ['fbmessengerbadge'],
    'notifydiscord' : ['discordbadge'],
    'notifyviber' : ['viberbadge'],
    'notifyinstagram' : ['instagrambadge'],
    'notifyfacebook' : ['facebookbadge'],
    'notifygmail' : ['gmailbadge'],
    'notifyoutlook' : ['outlookbadge'],
    'notifyairmail' : ['airmailbadge'],
    'notifyymail' : ['ymailbadge'],
    'notifysnapchat' : ['snapchatbadge'],
    'notifyreddit' : ['redditbadge'],
    'notifygoogleplus' : ['googleplusbadge'],
    'notifylinkedin' : ['linkedinbadge'],
    'notifyslack' : ['slackbadge'],
    'notifytelegramx' : ['telegramxbadge'],
    'notifyspark' : ['sparkbadge'],
    'notifytwitter' : ['twitterbadge'],
    'notifytweetbot' : ['tweetbot4badge'],
    'notifyyoutube' : ['youtubebadge'],
    'ramFree' : ['ramFree'],
    'ramUsed' : ['ramUsed'],
    'ramAvailable' : ['ramAvailable'],
    'ramFreeMB' : ['ramFree', ' mb'],
    'ramUsedMB' : ['ramUsed', ' mb'],
    'ramAvailableMB' : ['ramAvailable', ' mb'],
    'app1' : ['Mail-com.apple.mobilemail'],
    'app2' : ['SMS-com.apple.MobileSMS'],
    'app3' : ['Phone-com.apple.mobilephone'],
    'app4' : ['Twitter-com.atebits.Tweetie2'],
    'app5' : ['Tweetbot3-com.tapbots.Tweetbot3'],
    'app6' : ['Telegram-ph.telegra.Telegraph'],
    'app7' : ['Instagram-com.burbn.instagram'],
    'app8' : ['Pandora-com.pandora'],
    'app9' : ['Spotify-com.spotify.client'],
    'app10' : ['Facebook-com.facebook.Facebook'],
    'app11' : ['Kik-com.kik.chat'],
    'app12' : ['YouTube-com.google.ios.youtube'],
    'app13' : ['WhatsApp-net.whatsapp.WhatsApp'],
    'app14' : ['Safari-com.apple.mobilesafari'],
    'app15' : ['Weather-com.apple.weather'],
    'app16' : ['Clock-com.apple.mobiletimer'],
    'app17' : ['Music-com.apple.Music'],
    'app18' : ['Camera-com.apple.camera'],
    'app19' : ['Reminders-com.apple.reminders'],
    'app20' : ['Notes-com.apple.mobilenotes'],
    'app21' : ['Maps-com.apple.Maps'],
    'app22' : ['Calendar-com.apple.mobilecal'],
    'app23' : ['Calculator-com.apple.calculator'],
    'app24' : ['Cydia-com.saurik.Cydia'],
    'app25' : ['YouTube-com.google.ios.youtube'],
    'app26' : ['Settings-com.apple.Preferences'],
    'app27' : ['AppStore-com.apple.AppStore'],
    'app28' : ['Health-com.apple.Health'],
    'app29' : ['TelegramHD-org.telegram.TelegramHD'],
    'app30' : ['Discord-com.hammerandchisel.discord'],
    'boxOne' : [''],
    'boxTwo' : [''],
    'boxThree' : [''],
    'boxFour' : [''],
    'boxFive' : [''],
    'boxSix' : [''],
    'boxSeven' : [''],
    'boxEight' : [''],
    'boxNine' : [''],
    'boxTen' : [''],
    'boxEleven' : [''],
    'boxTwelve' : [''],
    'boxThirteen' : [''],
    'boxFourteen' : [''],
    'boxFifteen' : [''],
    'boxSixteen' : [''],
    'boxSeventeen' : [''],
    'boxEighteen' : [''],
    'boxNineteen' : [''],
    'boxTwenty' : ['']
};
clockMethods = {
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    hour: function() {
        var hour = (options.twentyfour === true) ? date.getHours() : (date.getHours() + 11) % 12 + 1;
        return hour;
    },
    zhour: function() {
        var hour = (options.twentyfour === true) ? date.getHours() : (date.getHours() + 11) % 12 + 1;
        hour = hour < 10 ? "0" + hour : " " + hour;
        return hour;
    },
    rawhour: function() {
        return date.getHours();
    },
    minute: function() {
        return (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    },
    second: function() {
        return (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    },
    rawminute: function() {
        return date.getMinutes();
    },
    ampmstrict: function() {
        var ampm = (date.getHours() > 11) ? "pm" : "am";
        return ampm;
    },
    am: function() {
        var ampm = (date.getHours() > 11) ? "pm" : "am";
        if (options.twentyfour) {
            ampm = "";
        }
        return ampm;
    },
    amalways: function() {
        return (date.getHours() > 11) ? "pm" : "am";
    },
    tod: function() {
        return (date.getHours() < 12 ? 'Morning' : date.getHours() < 18 ? 'Afternoon' : 'Evening');
    },
    date: function() {
        return date.getDate();
    },
    paddeddate: function() {
        return (date.getDate() <= 9) ? "0" + date.getDate() : date.getDate();
    },
    paddeddatecut0: function() {
        return (date.getDate() <= 9) ? String("0" + date.getDate()).charAt(0) : String(date.getDate()).charAt(0);
    },
    paddeddatecut1: function() {
        return (date.getDate() <= 9) ? String("0" + date.getDate()).charAt(1) : String(date.getDate()).charAt(1);
    },
    prevdate: function() {
        var pd = (this.date() === 0) ? this.daysInMonth[this.month() - 1] : this.date() - 1;
        return pd;
    },
    nextdate: function() {
        var nd = (this.date() === 0) ? this.daysInMonth[this.month() + 1] : this.date() + 1;
        return nd;
    },
    day: function() {
        return date.getDay();
    },
    month: function() {
        return date.getMonth();
    },
    monthdate: function() {
        var month = date.getMonth() + 1;
        if (month > 12) {
            month = 0;
        }
        return month;
    },
    year: function() {
        return date.getFullYear();
    },
    yearslice24: function() {
        return date.getFullYear().toString().slice(2, 4);
    },
    smyear: function() {
        return date.getFullYear() % 1000;
    },
    daysLeft: function() {
        var nextYear = new Date("Jan 1, " + Number(date.getFullYear() + 1) + " 00:00:00").getTime(),
            today = new Date().getTime(),
            sep = nextYear - today,
            days = Math.floor(sep / (1000 * 60 * 60 * 24));
        //var hours = Math.floor((sep % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //var minutes = Math.floor((sep % (1000 * 60 * 60)) / (1000 * 60));
        //var seconds = Math.floor((sep % (1000 * 60)) / 1000);
        return days;
    },
    hourtext: function() {
        var hourtxt;
        if (options.languages === 'fr') {
            hourtxt = (options.twentyfour === true) ? ["Minuit", "Une heure", "Deux heures", "Trois heures", "Quatre heures", "Cing heures", "Six heures", "Sept heures", "Huit heures", "Neuf heures", "Dix heures", "Onze heures", "Midi", "Treize heures", "Quatorze heures", "Quinze heures", "Seize heures", "Dix-sept heures", "Dix-huit heures", "Dix-neuf heures", "Vingt heures", "Vingt et une heures", "Vingt-deux heures", "Vingt-trois heures", "Minuit"] : ["Minuit", "Une heure", "Deux heure", "Trois heure", "Quatre heure", "Cing heure", "Six heure", "Sept heure", "Huit heure", "Neuf heure", "Dix heure", "Onze heure", "Midi", "Une heure", "Deux heure", "Trois heure", "Quatre heure", "Cing heure", "Six heure", "Sept heure", "Huit heure", "Neuf heure", "Dix heure", "Onze heure", "Minuit"];
        } else {
            hourtxt = (options.twentyfour === true) ? ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four"] : ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
        }
        return hourtxt[this.rawhour()];
    },
    hourtextdot: function() {
        var hourtxt = (options.twentyfour === true) ? ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty.One", "Twenty.Two", "Twenty.Three", "Twenty.Four"] : ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
        return hourtxt[this.rawhour()];
    },
    minuteonetext: function() {
        var minuteone;
        if (options.languages === 'fr') {
            minuteone = ["", "et une", "et deux", "et trois", "et quatre", "et cinq", "et six", "et sept", "et huit", "et neuf", "et dix", "et onze", "et douze", "et treize", "et quatorze", "et quinze", "et seize", "et dix-sept", "et dix-huit", "et dix-neuf", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et trente", "et trente", "et trente", "et trente", "et trente", "et trente", "et trente", "et trente", "et trente", "et trente", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante"];
        } else {
            minuteone = ["o' clock", "o' one", "o' two", "o' three", "o' four", "o' five", "o' six", "o' seven", "o' eight", "o' nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
        }
        if (minuteone[this.rawminute()] !== undefined) {
            return minuteone[this.rawminute()];
        }
        return "";
    },
    minuteonetext2: function() {
        var minuteone = ["zero zero", "zero one", "zero two", "zero three", "zero four", "zero five", "zero six", "zero seven", "zero eight", "zero nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
        if (minuteone[this.rawminute()] !== undefined) {
            return minuteone[this.rawminute()];
        }
        return "";
    },
    minuteonetext3: function () {
        var minuteone = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine", "forty", "forty one", "forty two", "forty three", "forty four", "forty five", "forty six", "forty seven", "forty eight", "forty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine", "sixty"];
        if (minuteone[this.rawminute()] !== undefined) {
            return minuteone[this.rawminute()];
        }
        return "";
    },
    minuteonetextdot: function() {
        var minuteone;
        if (options.languages === 'fr') {
            minuteone = ["", "et.une", "et.deux", "et.trois", "et.quatre", "et.cinq", "et.six", "et.sept", "et.huit", "et.neuf", "et.dix", "et.onze", "et.douze", "et.treize", "et.quatorze", "et.quinze", "et.seize", "et.dix-sept", "et.dix-huit", "et.dix-neuf", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante"];
        } else {
            minuteone = ["", "one", "o.two", "o.three", "o.four", "o.five", "o.six", "o.seven", "o.eight", "o.nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
        }
        if (minuteone[this.rawminute()] !== undefined) {
            return minuteone[this.rawminute()];
        }
        return "";
    },
    minutetwotext: function() {
        var minutetwo;
        if (options.languages === 'fr') {
            minutetwo = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "et-un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "", "et-un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "", "et-un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "", "et-un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", ""];
        } else {
            minutetwo = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", ""];
        }
        if (minutetwo[this.rawminute()] !== undefined) {
            return minutetwo[this.rawminute()];
        }
        return "";
    },
    daytext: function() {
        return translate[options.languages].weekday[this.day()];
    },
    daytextcut: function() {
        return translate[options.languages].weekday[this.day()].substring(3);
    },
    yesterdaydaytext: function() {
        return (this.day() === 0) ? translate[options.languages].weekday[6] : translate[options.languages].weekday[this.day() - 1];
    },
    nextdaytext: function() {
        return (this.day() === 6) ? translate[options.languages].weekday[0] : translate[options.languages].weekday[this.day() + 1];
    },
    sdaytext: function() {
        return translate[options.languages].sday[this.day()];
    },
    sdaytextslice01: function() {
        return String(translate[options.languages].sday[this.day()]).slice(0, 1);
    },
    sdaytextslice12: function() {
        return String(translate[options.languages].sday[this.day()]).slice(1, 2);
    },
    sdaytextslice23: function() {
        return String(translate[options.languages].sday[this.day()]).slice(2, 3);
    },
    mdaytext: function() {
        return translate[options.languages].mday[this.day()];
    },
    snextday: function() {
        return (this.day() === 6) ? translate[options.languages].sday[0] : translate[options.languages].sday[this.day() + 1];
    },
    sprevday: function() {
        return (this.day() === 0) ? translate[options.languages].sday[6] : translate[options.languages].sday[this.day() - 1];
    },
    monthtext: function() {
        return translate[options.languages].month[this.month()];
    },
    monthtextcut: function() {
        return translate[options.languages].month[this.month()].substring(3);
    },
    nextmonthtext: function() {
        return (this.month() === 11) ? translate[options.languages].month[0] : translate[options.languages].month[this.month() + 1];
    },
    prevmonthtext: function() {
        return (this.month() === 0) ? translate[options.languages].month[11] : translate[options.languages].month[this.month() - 1];
    },
    smonthtext: function() {
        return translate[options.languages].smonth[this.month()];
    },
    smonthtextslice01: function() {
        return String(translate[options.languages].smonth[this.month()]).slice(0, 1);
    },
    smonthtextslice12: function() {
        return String(translate[options.languages].smonth[this.month()]).slice(1, 2);
    },
    smonthtextslice23: function() {
        return String(translate[options.languages].smonth[this.month()]).slice(2, 3);
    },
    snextmonth: function() {
        return (this.month() === 11) ? translate[options.languages].smonth[0] : translate[options.languages].smonth[this.month() + 1];
    },
    sprevmonth: function() {
        return (this.month() === 0) ? translate[options.languages].smonth[11] : translate[options.languages].smonth[this.month() - 1];
    },
    datetext: function() {
        var textdate = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eightheenth", "Nineteenth", "Twentieth", "TwentyFirst", "TwentySecond", "TwentyThird", 'TwentyFourth', "TwentyFifth", "TwentySixth", "TwentySeventh", "TwentyEight", "TwentyNinth", "Thirtyith", "ThirtyFirst"];
        return textdate[this.date() - 1];
    },
    nth: function(d) {
        if (d > 3 && d < 21) {
            return 'th';
        }
        switch (d % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    dateplus: function() {
        return this.date() + this.nth(Number(this.date()));
    },
    getTimer: function() {
        return iOSClockTimer;
    },
    hrmintx: function() {
        return (this.minutetwotext() !== "") ? this.hourtextdot() + '.' + this.minuteonetextdot() + '.' + this.minutetwotext() : this.hourtextdot() + '.' + this.minuteonetextdot() + this.minutetwotext();
    },
    yeartext: function() {
        return convertTOWord(this.year());
    }
};
weatherMethods = {
    spd: function(){
        return (options.celsius === true) ? 'kph' : 'mph';
    },
    celsiusorfareinheight: function(){
        return (options.celsius === true) ? 'c' : 'f';
    },
    cvtF: function(temp) {
        //letting iOS handle this
        //return (temp == "--") ? this.temp() : Math.round(temp * 1.8 + 32);
        return temp;
    },
    cvtK: function(wind) {
        //return Math.round(((wind * 1.609344) * 100) / 100);
        return wind; //doesn't need converted anymore.
    },
    cvtM: function(distance) {
        return Math.round(distance * 1.60934);
    },
    cvtS: function(time) {
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
    cvtTwentyFour: function(time) {
        var strTime = String(time),
            secondPart = strTime.slice(-2),
            firstPart = strTime.replace(secondPart, "");
        return firstPart + ":" + secondPart;
    },
    degToCompass: function(num) {
        var val = Math.floor((num / 22.5) + 0.5),
            arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    },
    temp: function() {
        return (options.celsius ? Math.round(injectedWeather.temperature) : this.cvtF(injectedWeather.temperature));
    },
    high: function(deg) {
        if (!deg) {
            deg = '';
        }
        return (options.celsius ? Math.round(injectedWeather.dayForecasts[0].high) + deg : this.cvtF(injectedWeather.dayForecasts[0].high) + deg);
    },
    low: function(deg) {
        if (!deg) {
            deg = '';
        }
        return (options.celsius ? Math.round(injectedWeather.dayForecasts[0].low) + deg : this.cvtF(injectedWeather.dayForecasts[0].low) + deg);
    },
    condition: function() {
        return translate[options.languages].condition[injectedWeather.conditionCode];
    },
    conditionlowercase: function() {
        var string = String(translate[options.languages].condition[injectedWeather.conditionCode]).toLowerCase();
        if (string === 'fog') {
            string = 'foggy';
        }
        return string;
    },
    coloricon: function(){
        return getIconInfo(injectedWeather.conditionCode, 'font');
    },
    icon: function() {
        return injectedWeather.conditionCode;
    },
    iconday1: function() {
        if (injectedWeather.dayForecasts[1].icon) {
            return injectedWeather.dayForecasts[1].icon;
        } else {
            return 20;
        }
    },
    iconday2: function() {
        if (injectedWeather.dayForecasts[2].icon) {
            return injectedWeather.dayForecasts[2].icon;
        } else {
            return 20;
        }
    },
    iconday3: function() {
        if (injectedWeather.dayForecasts[3].icon) {
            return injectedWeather.dayForecasts[3].icon;
        } else {
            return 20;
        }
    },
    iconday4: function() {
        if (injectedWeather.dayForecasts[4].icon) {
            return injectedWeather.dayForecasts[4].icon;
        } else {
            return 20;
        }
    },
    iconday5: function() {
        if (injectedWeather.dayForecasts[5].icon) {
            return injectedWeather.dayForecasts[5].icon;
        } else {
            return 20;
        }
    },
    //dayNumber
    //dayOfWeek
    day1lohigh: function() {
        if (injectedWeather.dayForecasts[1].low) {
            return injectedWeather.dayForecasts[1].high + "&deg;/" + injectedWeather.dayForecasts[1].low + "&deg;";
        } else {
            return "0&deg;/0&deg;";
        }
    },
    day2lohigh: function() {
        if (injectedWeather.dayForecasts[2].low) {
            return injectedWeather.dayForecasts[2].high + "&deg;/" + injectedWeather.dayForecasts[2].low + "&deg;";
        } else {
            return "0&deg;/0&deg;";
        }
    },
    day3lohigh: function() {
        if (injectedWeather.dayForecasts[3].low) {
            return injectedWeather.dayForecasts[3].high + "&deg;/" + injectedWeather.dayForecasts[3].low + "&deg;";
        } else {
            return "0&deg;/0&deg;";
        }
    },
    day4lohigh: function() {
        if (injectedWeather.dayForecasts[4].low) {
            return injectedWeather.dayForecasts[4].high + "&deg;/" + injectedWeather.dayForecasts[4].low + "&deg;";
        } else {
            return "0&deg;/0&deg;";
        }
    },
    day5lohigh: function() {
        if (injectedWeather.dayForecasts[5].low) {
            return injectedWeather.dayForecasts[5].high + "&deg;/" + injectedWeather.dayForecasts[5].low + "&deg;";
        } else {
            return "0&deg;/0&deg;";
        }
    },
    day1day: function() {
        if (injectedWeather.dayForecasts[1].dayOfWeek) {
            return translate[options.languages].sday[injectedWeather.dayForecasts[1].dayOfWeek - 1];
        } else {
            return 'Nil';
        }
    },
    day2day: function() {
        if (injectedWeather.dayForecasts[2].dayOfWeek) {
            return translate[options.languages].sday[injectedWeather.dayForecasts[2].dayOfWeek - 1];
        } else {
            return 'Nil';
        }
    },
    day3day: function() {
        if (injectedWeather.dayForecasts[3].dayOfWeek) {
            return translate[options.languages].sday[injectedWeather.dayForecasts[3].dayOfWeek - 1];
        } else {
            return 'Nil';
        }
    },
    day4day: function() {
        if (injectedWeather.dayForecasts[4].dayOfWeek) {
            return translate[options.languages].sday[injectedWeather.dayForecasts[4].dayOfWeek - 1];
        } else {
            return 'Nil';
        }
    },
    day5day: function() {
        if (injectedWeather.dayForecasts[5].dayOfWeek) {
            return translate[options.languages].sday[injectedWeather.dayForecasts[5].dayOfWeek - 1];
        } else {
            return 'Nil';
        }
    },
    day1high: function() {
        return injectedWeather.dayForecasts[1].high;
    },
    day2high: function() {
        return injectedWeather.dayForecasts[2].high;
    },
    day3high: function() {
        return injectedWeather.dayForecasts[3].high;
    },
    day4high: function() {
        return injectedWeather.dayForecasts[4].high;
    },
    day5high: function() {
        return injectedWeather.dayForecasts[5].high;
    },
    day1low: function() {
        return injectedWeather.dayForecasts[1].low;
    },
    day2low: function() {
        return injectedWeather.dayForecasts[2].low;
    },
    day3low: function() {
        return injectedWeather.dayForecasts[3].low;
    },
    day4low: function() {
        return injectedWeather.dayForecasts[4].low;
    },
    day5low: function() {
        return injectedWeather.dayForecasts[5].low;
    },
    city: function() {
        return injectedWeather.name;
    },
    humidity: function() {
        return Math.round(injectedWeather.humidity);
    },
    windchill: function(deg) {
        if (!deg) {
            deg = '';
        }
        return Math.round(injectedWeather.windChill) + deg;
    },
    wind: function() {
        return (options.celsius ? this.cvtK(Math.round(injectedWeather.windSpeed)) + this.spd() : Math.round(injectedWeather.windSpeed) + this.spd());
    },
    direction: function() {
        return this.degToCompass(injectedWeather.windDirection);
    },
    visible: function() {
        return (options.celsius ? this.cvtM(Math.round(injectedWeather.visibility)) + this.spd() : Math.round(injectedWeather.visibility) + this.spd());
    },
    rain: function() {
        var percent = (injectedWeather.precipitationForecast === 2) ? 0 : injectedWeather.precipitationForecast;
        return percent;
    },
    dewpoint: function() {
        return Math.round(injectedWeather.dewPoint);
    },
    feelslike: function() {
        return (options.celsius ? Math.round(injectedWeather.feelsLike) : this.cvtF(injectedWeather.feelsLike));
    },
    sunset: function() {
        return (options.celsius ? this.cvtTwentyFour(injectedWeather.sunsetTime) : this.cvtS(injectedWeather.sunsetTime));
    },
    sunrise: function() {
        return (options.celsius ? this.cvtTwentyFour(injectedWeather.sunriseTime) : this.cvtS(injectedWeather.sunriseTime));
    },
    updated: function() {
        return injectedWeather.updateTimeString;
    },
    battery: function() {
        return injectedSystem.battery;
    },
    charging: function() {
        return injectedSystem.chargetext;
    },
    charginglowercase: function() {
        return String(injectedSystem.chargetext).toLowerCase();
    }
};
systemMethods = {
    signalArray : ["0%", "20%", "40%", "60%", "80%", "100%"],
    percent : ['0', '40', '60', '100'],
    ipaddress: function(){
        return (injectedSystem.ipaddress == "error") ? "No Wifi" : injectedSystem.ipaddress;
    },
    devicename: function(){
        return injectedSystem.deviceName;
    },
    firmware: function(){
        return injectedSystem.systemVersion;
    },
    battery: function(){
        return injectedSystem.battery;
    },
    chargetext: function(){
        return injectedSystem.chargetext;
    },
    onlycharging: function(){
        return (injectedSystem.chargetext === 'Charging') ? 'Charging' : '';
    },
    signalbars: function(){
        return injectedSystem.signalBars;
    },
    signalpercent: function(){
        return this.signalArray[injectedSystem.signalBars];
    },
    getalarmday: function(){
        if(injectedSystem.alarmDay){
            return translate[options.languages].sday[injectedSystem.alarmDay];
        }else{
            return "";
        }
    },
    getalarmstring: function(){
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
    getalarmtime: function(){
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
    getalarmhr: function(){
        if(injectedSystem.alarmHour){
            return injectedSystem.alarmHour;
        }else{
            return "";
        }
    },
    getalarmmin: function(){
        if(injectedSystem.alarmMinute){
            return (injectedSystem.alarmMinute < 10 && injectedSystem.alarmMinute != "00") ? "0" + injectedSystem.alarmMinute : injectedSystem.alarmMinute;
        }else{
            return "";
        }
    },
    getalarmweekday: function(){
        if(injectedSystem.alarmDay){
            return translate[options.languages].weekday[injectedSystem.alarmDay];
        }else{
            return "";
        }
    },
    wifi: function(){
        return this.percent[Number(injectedSystem.wifiBars)];
    },
    mailbadge: function(){
        return injectedSystem.mailBadge;
    },
    smsbadge: function(){
        return injectedSystem.smsBadge;
    },
    phonebadge: function(){
        return injectedSystem.phoneBadge;
    },
    whatsbadge: function(){
        if(injectedSystem.whatsBadge <= 0){
            return 0;
        }
        return injectedSystem.whatsBadge || 0;
    },
    telegrambadge: function(){
        return injectedSystem.telegramBadge || 0;
    },
    fbmessengerbadge: function(){
        if(injectedSystem.fbMessengerBadge <= 0){
            return 0;
        }
        return injectedSystem.fbMessengerBadge || 0;
    },
    discordbadge: function(){
        return injectedSystem.discord || 0;
    },
    viberbadge: function(){
        return injectedSystem.viber || 0;
    },
    instagrambadge: function(){
        return injectedSystem.instagram || 0;
    },
    facebookbadge: function(){
        if(injectedSystem.facebook <= 0){
            return 0;
        }
        return injectedSystem.facebook || 0;
    },
    gmailbadge: function(){
        return injectedSystem.gmail || 0;
    },
    outlookbadge: function(){
        return injectedSystem.outlook || 0;
    },
    airmailbadge: function(){
        return injectedSystem.airmail || 0;
    },
    ymailbadge: function(){
        return injectedSystem.ymail || 0;
    },
    snapchatbadge: function(){
        return injectedSystem.snapchat || 0;
    },
    redditbadge: function(){
        return injectedSystem.reddit || 0;
    },
    googleplusbadge: function(){
        return injectedSystem.googleplus || 0;
    },
    linkedinbadge: function(){
        return injectedSystem.linkedin || 0;
    },
    slackbadge: function(){
        return injectedSystem.slack || 0;
    },
    telegramxbadge: function(){
        return injectedSystem.telegramXBadge || 0;
    },
    sparkbadge: function(){
        return injectedSystem.spark || 0;
    },
    twitterbadge: function(){
        return injectedSystem.twitter || 0;
    },
    tweetbot4badge: function(){
        return injectedSystem.tweetbot4 || 0;
    },
    youtubebadge: function(){
        return injectedSystem.youtube || 0;
    },
    ramFree: function(){
        return injectedSystem.ramFree;
    },
    ramUsed: function(){
        return injectedSystem.ramUsed;
    },
    ramAvailable: function(){
        return injectedSystem.ramAvailable;
    }
};

