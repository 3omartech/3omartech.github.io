
"use strict";

var deepPressIcon = false;

action.searchGoogle = function(){
    var google = prompt("What would you like to Google?");
    if(google){
        google = encodeURIComponent(google);
        google = "http://www.google.com/search?q=" + google;
        if(google != null){
            openURL(google);
            setTimeout(function(){
                window.location = 'frontpage:openURL:' + google.replace('https://', '').replace('http://', '');
            },0);
        }
    }
};

/* Tweak decides if it actually sleeps */
if(typeof taphold != "undefined"){
    taphold({
        time: 400,
        element: document.getElementById('body'),
        action: function(target) {
            location.href = "js-call:tapHoldSleep";
        },
        passTarget: true
    });
}

// document.body.addEventListener('touchend', function(el){
//     alert('test');
//     alert(el.target.id);
// });

/* when item is clicked */


function handleSingleAction(action){
    switch (action) {
        case 'unlock':
            window.location = 'js-call:unlockPhone';
        break;
        case 'flashlight':
            webviewFlashlight();
        break;
        case 'play':
            webviewPlayMusic();
        break;
        case 'next':
            webviewNextMusic();
        break;
        case 'prev':
            webviewPrevMusic();
        break;
        case 'drawer':
            try{
                FPDrawer.showDrawer();
            }catch(err){

            }
        break;
        case 'respring':
            try{
                setTimeout(function(){
                    webviewRespring();
                },0);
            }catch(err){

            }
        break;
        case 'fpsettings':
            try{
                mainMenu.create();
            }catch(err){

            }
        break;
        case 'search':
            var google = prompt("What would you like to Google?");
            if(google){
                google = encodeURIComponent(google);
                google = "http://www.google.com/search?q=" + google;
                if(google != null){
                    openURL(google);
                    setTimeout(function(){
                        window.location = 'frontpage:openURL:' + google.replace('https://', '').replace('http://', '');
                    },0);
                }
            }
        break;

    }
}

//used to be click
// document.getElementById('body').addEventListener('click', function (el) {
//     if(el.target.className === 'quickMenuButton'){
//         return;
//     }
//     if(el.target.id.substring(0, 7) === 'fpplace' && !deepPressIcon){

//         if(lStorage['appIcons'][el.target.id]){
//             if(lStorage['appIcons'][el.target.id]['drawer']){
//                 FPDrawer.showDrawer();
//                 return;
//             }
//         }
        
//         if(el.target.getAttribute('bundleid')){
//             appToOpen = el.target.getAttribute('bundleid');
//             var div = document.getElementById('quickMenu');
//             if(!div){
//                 webviewOpenApp(appToOpen);
//             }
//         }
//         return;
//     }
// });

document.getElementById('body').addEventListener('touchend', function (el) {

    //If quick menu exists do not handle any touchend events
    if(document.getElementById('quickMenu')){
        return;
    }
    
    if(el.target.className === 'quickMenuButton'){
        return;
    }

    //handle opening apps or showing drawer
    try{
        if(el.target.id.substring(0, 7) === 'fpplace' && !deepPressIcon){
            if(lStorage['appIcons'][el.target.id]){
                if(lStorage['appIcons'][el.target.id]['drawer']){
                    FPDrawer.showDrawer();
                    return;
                }
            }
            if(el.target.getAttribute('bundleid')){
                appToOpen = el.target.getAttribute('bundleid');
                var div = document.getElementById('quickMenu');
                if(!div){
                    webviewOpenApp(appToOpen);
                }
            }
            //return;
        }
    }catch(err){
        console.log(err);
    }

    try{
        if(el.target.id === 'quote1ReadMore' || el.target.id === 'quote1'){
            openURL(el.target.title);
            setTimeout(function(){
                window.location = 'frontpage:openURL:' + el.target.title.replace('https://', '').replace('http://', '');
            },0);
        }
        if(el.target.id === 'iconDivicon'){
            el.target.id = 'icon';
        }
       var actions = action.savedElements.placedElements[el.target.id]['action'];
       if(actions){
            //for single action elments.
            var itemObject = pressOptions[el.target.id];
            if(itemObject.singleAction){
                handleSingleAction(itemObject.singleAction);
            }

           var items = itemObject.affectedItems;
           
           var ext = "";
           var ms = 2000;
           var delay = 0;
           var pressObj = pressOptions[el.target.id];
           var exclude = ['speed', 'delay'];
           var div, actionStyles, d;

           for(var d = 0; d < items.length; d++){
               div = document.getElementById(items[d]);
               if(items[d].includes('/')){
                   items[d] = items[d].split('/')[1];
               }
               actionStyles = pressOptions[el.target.id][items[d]];
               if(pressObj[items[d]].speed){
                   ms = pressObj[items[d]].speed;
               }
               if(pressObj[items[d]].delay){
                   delay = pressObj[items[d]].delay;
               }
               pressOptions[el.target.id][items[d]].speed
               //div.style.transition = "all 0ms ease-in-out";
               div.style.transition = "all 0ms";
               div.style.transitionDuration = ms + 'ms';
               div.style.transitionDelay = delay + 'ms';
               delay = 0;
                Object.keys(actionStyles).forEach(function(key){
                    
                    if(!exclude.includes(key)){

                        if(key === 'left' || key === 'top'){
                        ext = "px";
                        }else{
                            ext = "";
                        }
                        if(actionStyles[key+"pressed"]){
                            div.style[key] = actionStyles["old" + key] + ext;
                            actionStyles[key+"pressed"] = false;
                        }else{
                            if(actionStyles["disableToggle"] === 'true' || actionStyles["disableToggle"] === true){
                                div.style[key] = actionStyles[key] + ext;
                                return;
                            }else{
                                if(!actionStyles["old" + key]){
                                    actionStyles["old" + key] = parseInt(div.style[key], 10) || div.style[key];
                                }
                                div.style[key] = actionStyles[key] + ext;
                                actionStyles[key+"pressed"] = true;
                            }
                        }
                    }
                });
           }
       }
    }catch(err){
        //console.log(err);
    }
    if (el.target.id.substring(0, 3) === 'app') {
        appToOpen = document.getElementById(el.target.id).getAttribute('data-target');
        webviewOpenApp(appToOpen);
    }else if (el.target.id.substring(0, 6) === 'bundle') {
        appToOpen = document.getElementById(el.target.id).getAttribute('bundleID');
        webviewOpenApp(appToOpen);
    } else if (el.target.id === 'unlock') {
        webviewUnlock();
    } else if (el.target.id === 'searchicon' || el.target.id === 'searchtext'){
        setTimeout(action.searchGoogle, 0);
    }else if (el.target.id === 'flashlight'){
        webviewFlashlight();
    }else if (el.target.id === 'timer'){
        appToOpen = 'com.apple.mobiletimer';
        webviewOpenApp(appToOpen);
    }else if (el.target.id === 'respring'){
        webviewRespring();
    }else if (el.target.id === 'playmusic' || el.target.id === 'playmusichide'){
        if(!window.frontpage){
            webviewPlayMusic();
        }
    }else if (el.target.id === 'nextmusic' || el.target.id === 'nextmusichide'){
        if(!window.frontpage){
            webviewNextMusic();
        }
    }else if (el.target.id === 'prevmusic' || el.target.id === 'prevmusichide'){
        if(!window.frontpage){
            webviewPrevMusic();
        }
    }else if (el.target.id === 'sleep'){
        location.href = 'js-call:sleep';
    }else if (el.target.id === 'hueLights'){
        hueController.init('lights');
    }else if (el.target.id === 'hueGroups'){
        hueController.init('groups');
    }
    try{
        appQuickMenu.closeMenu();
    }catch(err){
        //appQuickMenu is not here, it's only in FrontPage exports:)
    }
});


/* Overlay */

action.convertSVG = function () {
    showSVG('.svg', true);
};

action.loadjsfile = function (filename) {
    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", filename);
    fileref.async = true;
    if (fileref !== "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
    if (filename === 'js/themes.js') {
        fileref.onload = action.showThemes;
    } else if (filename === 'js/svg.js') {
        fileref.onload = action.convertSVG;
    }
};

/* Load Info */
/* 
   Obj-c doesn't like to keep order of dictionaries. I parse the dictionary, convert to JSON, then call function loadingTheme()
   in the index.html. It parses the JSON then calls this function. We pass thedict which is the JSON but also a string showing
   the order in which elements should show. Split the order by a space, then take the elements objects and append them to a new
   object "placed" so we can keep order. As a fall back we just use the order Obj-c gave us.
*/
action.loadTheme = function (thedict, order) {
    try {
        var dict = thedict;
        //var elOrder = order.split(' ');
        var elOrder = order;
        var placed = {};
        action.savedElements.overlay = dict.Overlay;
        if (dict.Widget) {
            action.savedElements.widget = dict.Widget;
        }
        if (dict.Elements) {
            if(elOrder.length > 0){
                for (var i = 0; i < elOrder.length; i++) {
                    placed[elOrder[i]] = dict.Elements[elOrder[i]];
                    if(!placed[elOrder[i]]){
                        //alert('err');
                    }
                }
                action.savedElements.placedElements = placed;
            }else{
                action.savedElements.placedElements = dict.Elements;
            }
        } else {
            action.savedElements.placedElements = '';
        }
        if (dict.IconName) {
            action.savedElements.iconName = dict.IconName;
        } else {
            action.savedElements.iconName = 'simply';
        }
        localStorage.setItem('placedElements', JSON.stringify(action.savedElements));
        dict = null;
        placed = null;
        window.location = location.href;
    } catch (err) {
        //alert("LBJS Error " + err);
    }
};