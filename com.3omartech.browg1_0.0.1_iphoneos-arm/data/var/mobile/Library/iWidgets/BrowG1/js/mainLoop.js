var date,
    clockLoopTimerCount = 0,
    clockLoopTimer = 1000, //1000
    otherLoopTimer = 2000, //2000
    iOSClockTimer = "0:00",
    screenShowing = true;


/*
    Called from inside the tweak.xm to update iOS Alarm timer (shows under time in iOS11).
*/
function updateTimer(time) {
    iOSClockTimer = time;
}
/*  
    Sets element info.
    Setting innerText is faster.
    but if has ; we must use inneHTML.
    Called by clock, weather, and system.
    If inneHTML is already the same don't do anything.
*/
function setElementInfo(div, value) {
    var innerHTML = div.innerHTML.replace('°', '&deg;'),
        innerTEXT = div.innerText.replace('°', '&deg;'),
        knockoutEl = null;

    if (innerHTML === value || innerTEXT === value) {
        return;
    }

    //SVG Knockout
    if(action.savedElements.placedElements[div.id].knockout){
        knockoutEl = document.getElementById(div.id + 'knockout');
        if(knockoutEl){
            knockoutEl.innerHTML = value;
        }
    }else{ //normal
        if (String(value).indexOf(';') > -1) {
            div.innerHTML = value;
        } else {
            div.innerText = value;
        }
    }
};

/*
    Set icon images.
    Icons contain an inner div.
    We apply the image to this src.
*/
function setIconImage(info, key) {
    var value, iconDiv, iconDivUrl, iconName;
    value = weatherMethods[info]();
    iconDiv = document.getElementById('iconDiv' + key);
    if (action.savedElements.iconName) {
        iconName = action.savedElements.iconName;
    } else {
        iconName = 'simply';
    }
    if (iconDiv) {
        iconDivUrl = 'https://junesiphone.com/weather/IconSets/' + iconName + '/' + value + '.png';
        if (iconDiv.src != iconDivUrl) {
            var img = new Image();
            img.onload = function(){
                iconDiv.src = iconDivUrl;
                //set opacity to 1 after loaded
                iconDiv.style.opacity = 1;
            }; 
            img.src = iconDivUrl;
        }
    }
}
/* 
    If square is set to battery you need to update the width.
*/
var wifiForSetAsBattery = [0, 40, 60, 100];
var signalForSetAsBattery = [0, 20, 40, 60, 80, 100];

function setBattery(element, percent, fullWidth) {
    switch(percent) {
        case 'battery':
            percent = injectedSystem.battery;
        break;
        case 'signal':
            percent = signalForSetAsBattery[injectedSystem.signalBars];
        break;
        case 'wifi':
            percent = wifiForSetAsBattery[injectedSystem.wifiBars];
        break;
    }
    var calc;
    fullWidth = fullWidth.replace('px', '');
    calc = Math.round((percent / 100) * fullWidth);
    if (element.style.width != calc + "px") {
        element.style.width = calc + "px";
    }
}


function getWeatherInfo(key) {
    var value = "";
    weatherElements[key].forEach(function(info) {
        if(String(info) != 'coloricon'){
            if (String(info).indexOf('icon') > -1 || String(info).indexOf('ConditionCode') > -1) {
                setIconImage(info, key);
                return;
            }
        }
        if (weatherMethods[info]) {
            value += weatherMethods[info]();
        } else {
            value += info;
        }
    });
    if(value.indexOf('undefined') > -1){
        return "";
    }
    return value;
}

function getClockInfo(key) {
    var value = "";
    clockElements[key].forEach(function(info) {
        if (clockMethods[info]) {
            value += clockMethods[info]();
        } else {
            value += info;
        }
    });
    if(value.indexOf('undefined') > -1){
        return "";
    }
    return value;
}

function getSystemInfo(key) {
    var value = "";
    if (systemElements[key]) {
        systemElements[key].forEach(function(info) {
            if (systemMethods[info]) {
                value += systemMethods[info]();
            } else {
                value += info;
            }
        });
    }
    if(value.indexOf('undefined') > -1){
        return "";
    }
    return value;
}

function refreshClockInfo() {
    var div, prefix, suffix, value;
    Object.keys(action.savedElements.placedElements).forEach(function(key) {
        if (clockElements[key]) {
            div = document.getElementById(key);
            prefix = div.getAttribute('data-prefix') || '';
            suffix = div.getAttribute('data-suffix') || '';
            value = prefix + getClockInfo(key) + suffix;
            if(action.savedElements.placedElements[key].knockout){
                if(document.getElementById(key + 'knockout')){
                    document.getElementById(key + 'knockout').textContent = value;
                }
            }else{
                setElementInfo(div, value);
            }
        }
    });
}

function refreshAllInfo() {
    'use strict';
    var div, prefix, suffix, value, name;
    Object.keys(action.savedElements.placedElements).forEach(function(key) {
        if (weatherElements[key] || clockElements[key] || systemElements[key]) {
            div = document.getElementById(key);
            prefix = div.getAttribute('data-prefix') || '';
            suffix = div.getAttribute('data-suffix') || '';
            value = "";
        }

        if(key.substring(0, 3) === 'box'){
            div = document.getElementById(key);
            if(action.savedElements.placedElements[key]['data-image']){
                if(injectedMusic.isPlaying){
                    if(action.savedElements.placedElements[key]['data-image2']){
                        if(div.style.backgroundImage != 'url("'+action.savedElements.placedElements[key]['data-image2']+'")'){
                            div.style.backgroundImage = 'url("'+action.savedElements.placedElements[key]['data-image2']+'")';
                        }
                    }
                }else{
                    try{
                        if(typeof lStorage !== 'undefined'){
                            if(lStorage['iconImageLocations'][div.id]){
                                if(div.style.backgroundImage != "url(file:///var/mobile/Documents/FrontPageImages/" + lStorage['iconImageLocations'][div.id] + ")"){
                                    div.style.backgroundImage = "url(file:///var/mobile/Documents/FrontPageImages/" + lStorage['iconImageLocations'][div.id] + ")";
                                }
                            }else{
                                if(div.style.backgroundImage != 'url("'+action.savedElements.placedElements[key]['data-image']+'")'){
                                    div.style.backgroundImage = 'url("'+action.savedElements.placedElements[key]['data-image']+'")';
                                }
                            }
                        }else{
                            div.style.backgroundImage = 'url("'+action.savedElements.placedElements[key]['data-image']+'")';
                        }
                    }catch(err){
                        console.log(err);
                    }
                }
            }
            if (action.savedElements.placedElements[div.id]["is-battery"] === "true") {
                setBattery(div, 'battery', action.savedElements.placedElements[key]["width"]);
            }
            if (action.savedElements.placedElements[div.id]["is-wifi"] === "true") {
                setBattery(div, 'wifi', action.savedElements.placedElements[key]["width"]);
            }
            if (action.savedElements.placedElements[div.id]["is-signal"] === "true") {
                setBattery(div, 'signal', action.savedElements.placedElements[key]["width"]);
            }
        }

        if(key.indexOf('Panels') > -1){
            div = document.getElementById(key);

            if (action.savedElements.placedElements[key]["is-charging"] === "true") {
                if(injectedSystem.chargetext === 'Charging'){
                    if(div.style.opacity != 1){
                        div.style.opacity = 1;
                    }
                }else{
                    if(div.style.opacity != 0){
                        div.style.opacity = 0;
                    }
                }
            }

            if (action.savedElements.placedElements[key]["is-playing"] === "true") {
                if(injectedMusic.isPlaying === true){
                    if(div.style.opacity != 1 || div.style.opacity === ""){
                        div.style.opacity = 1;
                    }
                }else{
                    if(div.style.opacity != 0 || div.style.opacity === ""){
                        div.style.opacity = 0;
                    }
                }
            }

            if (action.savedElements.placedElements[key]["hide-playing"] === "true") {
                if(injectedMusic.isPlaying === true){
                    if(div.style.opacity != 0 || div.style.opacity === ""){
                        div.style.opacity = 0;
                    }
                }else{
                    if(div.style.opacity != 1 || div.style.opacity === ""){
                        div.style.opacity = 1;
                    }
                }
            }
        }

        if (weatherElements[key]) {
            try {
                value = getWeatherInfo(key);
                if (String(key).indexOf('icon') == -1 && String(key) != 'coloricon') {
                    value = prefix + value + suffix;
                        setElementInfo(div, value);
                } else {
                    setElementInfo(div, value);
                }
            } catch (err) {
                //alert(err);
            }
        } else if (systemElements[key]) {

            if (key.substring(0, 3) != 'box' && key.substring(0, 2) != 'ft') {
                value = prefix + getSystemInfo(key) + suffix;
                setElementInfo(div, value);
            } else if (key.substring(0, 2) === 'ft') {
                name = key.split('_')[1];
                // For font symbols!
                if (div.style.fontFamily != name) {
                    div.className = key.split('_')[1];
                }

                value = systemElements[key];
                setElementInfo(div, value);
            } else {
                //update battery bar was here.
            }
            if (key.substring(0, 3) === 'app') {
                setElementInfo(div, value.split('-')[0]);
                if (div.getAttribute('data-target') != value.split('-')[1]) {
                    div.setAttribute('data-target', value.split('-')[1]);
                }
            }
            //set lockplus notifications to not show if 0
            if(key.substring(0, 6) === 'notify'){
                if(action.savedElements.placedElements[key]['data-dontshot']){
                    if(action.savedElements.placedElements[key]['data-dontshot'] === 'true'){
                        if(div.innerHTML === '0'){
                            if(div.style.display != 'none'){
                                div.style.display = 'none';
                            }
                        }else{
                            if(div.style.display != 'block'){
                                div.style.display = 'block';
                            }
                        }
                    }else{
                        if(div.style.display != 'block'){
                            div.style.display = 'block';
                        }
                    }
                }
            }
        }
    });
}

/* Main Timers */
var Looper = {
    timers : [],
    loopCount: 0,
    stopTimers: function(){
        for (var i = 0; i < this.timers.length; i++) { //loop stored items
            clearTimeout(Looper[this.timers[i]]); //clear timeouts on item
            delete Looper[this.timers[i]]; //delete reference to timeout
        }
        this.timers = []; //clear the array of loops
    },
    removeTimerByName: function(name){
        if(this.timers.contains(name)){
            var newArray = [];
            clearTimeout(Looper[name]);
            delete Looper[name];
            for (var i = 0; i < this.timers.length; i++) {
                if(this.timers[i] != name){
                    newArray.push(this.timers[i]);
                }
            }
            this.timers = newArray;
        }
    },
    loopit: function(obj){
        var loopSetTimeOutValue = 0;
        if(!Looper.timers.contains(obj.name)){
            this.timers.push(obj.name); //push to array to store loops
        }

        this.loopCount += 1;
        /*
            we want this to loop immediately at firest
            then go to a slow timer and eventually the end timer
        */
        if(obj.initialTime){
            if(this.loopCount === 0){
                loopSetTimeOutValue = obj.initialTime;
            }else if (this.loopCount > 0){
                loopSetTimeOutValue = obj.refreshTime;
            }
        }else{
            if(this.loopCount > 2 && this.loopCount < 5){
                loopSetTimeOutValue = 300;
            }else if (this.loopCount > 5){
                loopSetTimeOutValue = obj.refreshTime;
            }
        }
        
        this[obj.name] = setTimeout(function(){ //add reference to timeout on Looper obj
            //location.href = 'js-call:debugThis:loopUpdate' + loopSetTimeOutValue + obj.name;
            obj.success(); //callback to our function
            Looper.loopit(obj); //call loopit with same obj to keep it going
        }, loopSetTimeOutValue);
    },
    create: function(obj){
        if(Looper[obj.name]){ //Check if already exists
            return;
        }
        this.loopit(obj); //start loop
    }
};

/*
    Goal if clock doesn't have seconds don't update every second.
    This is returned to stopLoop.
*/
var elementsWithSeconds = ['second', 'fullclock'];
function checkIfHasSeconds(){
    var obj = {},
        i, j, element;
        for (i = 0; i < elementsWithSeconds.length; i++) { 
            if(!obj[elementsWithSeconds[i]]) { 
                element = elementsWithSeconds[i]; 
                obj[element] = true; 
            } 
        } 
        for (j = 0; j < Object.keys(action.savedElements.placedElements).length ; j++) { 
            if(obj[Object.keys(action.savedElements.placedElements)[j]]) { 
                return true; 
            } 
        } 
    return false;
}

function startLoop(){
    Looper.loopCount = 0;
    Looper.create({
        name: 'clock',
        refreshTime: (checkIfHasSeconds()) ? 1010 : 5000,
        success: function() {
            date = new Date();
            //location.href = 'js-call:debugThis:loadingClock' + checkIfShowingScreen();
            //location.href = 'FrontPage:writeToLog:loadingClock' + checkIfShowingScreen();
            refreshClockInfo();
        }
    });
    Looper.create({
        name: 'other',
        refreshTime: 5000,
        success: function() {
            //location.href = 'js-call:debugThis:loadingSystem' + checkIfShowingScreen();
            //location.href = 'FrontPage:writeToLog:loadingSystem' + checkIfShowingScreen();
            refreshAllInfo();
        }
    });
}

function stopLoops(){
    Looper.stopTimers();
}

/*
    Called from tweak when screen is not showing.
    Stops all loops to preserve battery.
*/
var checkIfShowingScreen = function(){
    return screenShowing;
};
var isShowingScreen = function(){
    screenShowing = true;
    window.location = 'js-call:updateMusicFromLPPHTML';
    startLoop();
    // if(elementscontainelapsed){
    //     calltoupdatemusic()
    // }
    //window.location = 'js-call:updateMusicFromLPPHTML';
};
var notShowingScreen = function(){
    screenShowing = false;
    Looper.removeTimerByName('elapsed');
    stopLoops();
};


/* Tests */
// function testMethods(methods) {
//     var t0, t1;
//     Object.keys(methods).forEach(function(key) {
//         var name = key,
//             method,
//             tag;
//         t0 = performance.now();
//         if (typeof methods[key] == 'function') {
//             tag = "Method returned:";
//             method = methods[key]();
//         } else {
//             method = methods[key];
//             tag = "Property returned:";
//         }
//         t1 = performance.now();
//         console.log("%cName: %c" + name + "%c " + tag + " %c" + method + "%c Time:" + Math.round((t1 - t0)) + " ms", 'color: black', 'color:blue', 'color:black;', 'color: blue', 'color:red');
//     });
//     return "Done";
// }

// function testAllInfoMethods() {
//     var t0, t1;
//     t0 = performance.now();
//     console.log('%cSYSTEM', 'color:red');
//     testMethods(systemMethods);
//     console.log('%cWEATHER', 'color:red');
//     testMethods(weatherMethods);
//     console.log('%cCLOCK', 'color:red');
//     testMethods(clockMethods);
//     t1 = performance.now();
//     return "All calls took " + (t1 - t0) + " milliseconds";
// }