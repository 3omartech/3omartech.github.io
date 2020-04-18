var date,
    clockLoopTimerCount = 0,
    clockLoopTimer = 0, //1000
    otherLoopTimer = 0, //2000
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
        iconDivUrl = 'http://junesiphone.com/weather/IconSets/' + iconName + '/' + value + '.png';
        if (iconDiv.src != iconDivUrl) {
            iconDiv.src = iconDivUrl;
        }
    }
}
/* 
    If square is set to battery you need to update the width.
*/
function setBattery(element, percent, fullWidth) {
    var calc;
    fullWidth = fullWidth.replace('px', '');
    calc = Math.round((percent / 100) * fullWidth);
    if (element.style.width != calc + "px") {
        element.style.width = calc + "px";
    }
}

function mainLoop(option) {
    var getInfo = function() {
        date = new Date();
        option.success();
        if(!screenShowing){
            return;
        }
        if(option.name === 'other'){
            setTimeout(function() {
                getInfo();
            }, otherLoopTimer);
        }else if(option.name === 'clock'){
            setTimeout(function() {
                getInfo();
            }, clockLoopTimer);
        }
    };
    getInfo();
}

function getWeatherInfo(key) {
    var value = "";
    weatherElements[key].forEach(function(info) {
        if (String(info).indexOf('icon') > -1 && String(info) != 'coloricon') {
            setIconImage(info, key);
            return;
        }
        if (weatherMethods[info]) {
            value += weatherMethods[info]();
        } else {
            value += info;
        }
    });
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

            //location.href = 'js-call:debugThis:' + action.savedElements.placedElements[key];

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

            // if (action.savedElements.placedElements[key]["hide-charging"] === "true") {
                
            //     if(injectedSystem.chargetext === 'Charging'){
                    
            //         if(div.style.opacity != 0){
                        
            //             div.style.opacity = 0;
            //         }
            //     }else{
            //         if(div.style.opacity != 1){
            //             div.style.opacity = 1;
            //         }
            //     }
            // }

            
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
                if (action.savedElements.placedElements[div.id]["is-battery"] === "true") {
                    setBattery(div, injectedSystem.battery, action.savedElements.placedElements[key]["width"]);
                }
            }
            if (key.substring(0, 3) === 'app') {
                setElementInfo(div, value.split('-')[0]);
                if (div.getAttribute('data-target') != value.split('-')[1]) {
                    div.setAttribute('data-target', value.split('-')[1]);
                }
            }
        }
    });
}

function startLoop() {

    /* System, Weather, Etc */
    mainLoop({
        name: 'other',
        success: function() {
            /*
                We want this to load as fast as possible at the start
                So I set otherLoopTimer and clockLoopTimer to 0 intially
                To perserve battery and usage it's changed after 2 counts
                to 2000 and 1000.
            */
            clockLoopTimerCount++;
            if(clockLoopTimerCount === 2){
                otherLoopTimer = 2000;
                clockLoopTimer = 1000;
            }
            refreshAllInfo();
        }
    });

    /* Clock only so we can iterate faster for seconds */
    mainLoop({
        name: 'clock',
        success: function() {
            refreshClockInfo();
        }
    });
}


/* Tests */
function testMethods(methods) {
    var t0, t1;
    Object.keys(methods).forEach(function(key) {
        var name = key,
            method,
            tag;
        t0 = performance.now();
        if (typeof methods[key] == 'function') {
            tag = "Method returned:";
            method = methods[key]();
        } else {
            method = methods[key];
            tag = "Property returned:";
        }
        t1 = performance.now();
        console.log("%cName: %c" + name + "%c " + tag + " %c" + method + "%c Time:" + Math.round((t1 - t0)) + " ms", 'color: black', 'color:blue', 'color:black;', 'color: blue', 'color:red');
    });
    return "Done";
}

function testAllInfoMethods() {
    var t0, t1;
    t0 = performance.now();
    console.log('%cSYSTEM', 'color:red');
    testMethods(systemMethods);
    console.log('%cWEATHER', 'color:red');
    testMethods(weatherMethods);
    console.log('%cCLOCK', 'color:red');
    testMethods(clockMethods);
    t1 = performance.now();
    return "All calls took " + (t1 - t0) + " milliseconds";
}