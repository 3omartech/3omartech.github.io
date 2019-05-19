var date,
	loopTimer = 1000,
    iOSClockTimer = "0:00";

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
function setElementInfo(div, value){
	var innerHTML = div.innerHTML.replace('°', '&deg;'),
		innerTEXT = div.innerText.replace('°', '&deg;');
    if(innerHTML === value || innerTEXT === value){
        return;
    }
    if (String(value).indexOf(';') > -1) {
        div.innerHTML = value;
    } else {
        div.innerText = value;
    }
};

/*
    Set icon images.
    Icons contain an inner div.
    We apply the image to this src.
*/
function setIconImage(info, key){
    var value, iconDiv, iconDivUrl, iconName;
    value = weatherMethods[info]();
    iconDiv = document.getElementById('iconDiv' + key);
    if(action.savedElements.iconName){
        iconName = action.savedElements.iconName;
    }else{
        iconName = 'simply';
    }
    if(iconDiv){
        iconDivUrl = 'http://junesiphone.com/weather/IconSets/' + iconName + '/' + value + '.png';
        if(iconDiv.src != iconDivUrl){
            iconDiv.src = iconDivUrl;
        }
    }
}
/* 
	If square is set to battery you need to update the width.
*/

function setBattery(element, percent, fullWidth){
	var calc;
  	fullWidth = fullWidth.replace('px', '');
  	calc = Math.round((percent / 100) * fullWidth);
  	if(element.style.width != calc + "px"){
  		element.style.width = calc + "px";
  	}
}

function mainLoop(option) {
    var getInfo = function() {
        date = new Date();
            option.success();
        setTimeout(function() {
            getInfo();
        }, loopTimer);
    };
    getInfo();
}
function getWeatherInfo(key){
	var value = "";
	weatherElements[key].forEach(function(info) {
        if (String(info).indexOf('icon') > -1) {
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
function getClockInfo(key){
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
function getSystemInfo(key){
	var value = "";
	systemElements[key].forEach(function(info) {
        if (systemMethods[info]) {
            value += systemMethods[info]();
        } else {
            value += info;
        }
    });
    return value;
}

function refreshAllInfo(){
    'use strict';
    var div, prefix, suffix, value;
    Object.keys(action.savedElements.placedElements).forEach(function(key) {
        if(weatherElements[key] || clockElements[key] || systemElements[key]){
            div = document.getElementById(key);
            prefix = div.getAttribute('data-prefix') || '';
            suffix = div.getAttribute('data-suffix') || '';
            value = "";
        }
        if (weatherElements[key]) {
            try{
            value = getWeatherInfo(key);
            if(String(key).indexOf('icon') == -1){
                value = prefix + value + suffix;
                setElementInfo(div, value);
            }
            }catch(err){
                //alert(err);
            }
        }else if (clockElements[key]) {
            value = prefix + getClockInfo(key) + suffix;
            setElementInfo(div, value);
        }else if (systemElements[key]){
            if(key.substring(0, 3) != 'box'){
                value = prefix + getSystemInfo(key) + suffix;
                setElementInfo(div, value);
            }else{
                if(action.savedElements.placedElements[div.id]["is-battery"] === "true"){
                    setBattery(div, injectedSystem.battery, action.savedElements.placedElements[key]["width"]);
                }
            }
            if (key.substring(0, 3) === 'app') {
                setElementInfo(div, value.split('-')[0]);
                if(div.getAttribute('data-target') != value.split('-')[1]){
                    div.setAttribute('data-target', value.split('-')[1]);
                }
            }
        }
    });
}
function startLoop() {
    mainLoop({
        success: function() {
            refreshAllInfo();
        }
    });
}

function testMethods(methods){
    var t0, t1;
    Object.keys(methods).forEach(function(key){
        var name = key,
            method,
            tag;
        t0 = performance.now();
        if(typeof methods[key] == 'function'){
            tag = "Method returned:";
            method = methods[key]();
        }else{
            method = methods[key];
            tag = "Property returned:";
        }
        t1 = performance.now();
        console.log("%cName: %c" + name + "%c " + tag + " %c" + method + "%c Time:" + Math.round((t1 - t0)) + " ms", 'color: black', 'color:blue', 'color:black;', 'color: blue', 'color:red');
    });
    return "Done";
}

function testAllInfoMethods(){
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