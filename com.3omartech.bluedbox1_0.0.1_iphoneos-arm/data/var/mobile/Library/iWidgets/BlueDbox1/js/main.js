Array.prototype.contains = function ( needle ) {
    for (i in this) {
        if (this[i] == needle) return true;
    }
    return false;
 }

 var circleProgress = null;
 
 var action = {};
 /*
     LOADLPPJSTOLPP
     If set to true it will load info into storage so it loads on lockplus
     users can use this to exit widgets made with LockPlus.
     If the widget is applied when this is set to true the widget needs 
     to be re-enabled in XenHTML.
 
     Steps.
     Change tag to true.
     Reload the widget in XenHTML
     Respring. 
 
     Widget will not be in LockPlus.
 */
 action.LOADLPPJSTOLPP = false;
 action.savedElements = {};
 action.loadedFonts = [];
 action.containsWeather = false;
 
 
 action.setOverlay = function (img) { //apply overlay to screenoverlay
     setTimeout(function () {
         var screenOverDiv, svgdiv;
         screenOverDiv = document.createElement('div');
         screenOverDiv.className = 'screenOverlay';
         screenOverDiv.style.backgroundImage = 'url(' + img + ')';
 
         //if(key === 'overlayStyle'){
            // var obj = action.savedElements.placedElements['overlayStyle'];
             if(screenOverDiv){
                 if(action.savedElements.placedElements['overlayStyle']){
                     var obj = action.savedElements.placedElements['overlayStyle'];
                     if(obj.left){
                         screenOverDiv.style.left = obj.left;
                     }else{
                         screenOverDiv.style.left = obj.left + "0px";
                     }
                     if(obj.top){
                         screenOverDiv.style.top = obj.top;
                     }else{
                         screenOverDiv.style.top = "0px";
                     }
                 }
             }
             //return;
        // }
         document.body.appendChild(screenOverDiv);
         if(iPhoneX){
             //screenOverDiv.style.top = "50px";
         }
         if (img.split(';')[0].split('/')[1].split('+')[0] === 'svg') {
             action.loadjsfile("js/svg.js");
             svgdiv = document.createElement('img');
             svgdiv.className = 'svg';
             svgdiv.style.display = 'none';
             svgdiv.style.opacity = '0';
             svgdiv.src = img;
             document.body.appendChild(svgdiv);
         }
     }, 0);
 };
 
 action.isWeather = function (id) {
     if (action.containsWeather === false) {
         var weather = ['day1day', 'day1high', 'day1low', 'day1highno', 'day1lowno', 'day1icon', 'day1lohigh', 'day2day', 'day2high', 'day2low', 'day2highno', 'day2lowno', 'day2icon', 'day2lohigh', 'day3day', 'day3high', 'day3low', 'day3highno', 'day3lowno', 'day3icon', 'day3lohigh', 'day4day', 'day4high', 'day4low', 'day4highno', 'day4lowno', 'day4icon', 'day4lohigh', 'day5day', 'day5high', 'day5low', 'day5highno', 'day5lowno', 'day5icon', 'day5lohigh','lngwstring', 'lngwstring2', 'lngwstring3', 'lngwstring4', 'lngwstring5', 'temp', 'tempdeg', 'tempdegplus', 'high', 'highdeg', 'highdegplus', 'low', 'lowdeg', 'lowdegplus', 'highdashlow', 'highslashlow', 'highdashlowdeg', 'highslashlowdeg', 'city', 'condition', 'humidity', 'windchill', 'wind', 'winddirection', 'visibility', 'rain', 'dewpoint', 'feelslike', 'feelslikedeg', 'sunrise', 'sunset', 'update', 'icon', 'tempcon', 'tempcon1', 'tempcon2', 'windstr', 'contemp', 'contemp2', 'Forecast','Fcast1','Fcast2','Fcast3','Fcast4','Fcast5','Fcast6','Fcast7','Fcast8','Fcast9','Fcast10'],
             i;
         for (i = 0; i < weather.length; i++) {
             if (id === weather[i]) {
                 action.containsWeather = true;
                //webviewUpdateWeather();
             }
         }
     }
 };
 
 action.quoteFeed = function(data){
     try{
        var entries = data.responseData.feed.entries,
            quoteBody = null,
            quoteArtist = null;
            if(document.getElementById('quote1Artist')){
                quoteArtist = document.getElementById('quote1Artist');
            }
            if(document.getElementById('quote1')){
                quoteBody = document.getElementById('quote1');
            }
        for (var i = 0; i < entries.length; i++) {
            var title, body, image, link, author, body, date, imgurl, smallbody, fullbody,
                entry = entries[i];
            title = entry.title;
            link = entry.link;
            date = entry.publishedDate;
            author = entry.author;
            smallbody = entry.contentSnippet.replace(/<\/?[^>]+>/gi, ''),
                fullbody = entry.content
                .replace(/<script[\\r\\\s\S]*<\/script>/mgi, '')
                .replace(/<\/?[^>]+>/gi, '')
                .replace('Read More', '').substr(0, 350);
    
            if(quoteBody){
                quoteBody.title = link;
                quoteBody.innerHTML = fullbody;
            }
            if(quoteArtist){
                quoteArtist.innerHTML = title;
            }
        }
     }catch(err){
         console.log("Error in action.quoteFeed in main.js line 86");
     }
 };
 
 action.getFeedQuote = function(callback, url){
     var feed = "http://feeds.feedburner.com/quotationspage/qotd",
         apiUrl = 'http://feedrapp.info?callback=?&q=' + feed + ' &num=1';
         if(url){
             apiUrl = 'http://feedrapp.info?callback=?&q=' + url + ' &num=1';
         }
     $.getJSON(apiUrl, callback);
 };
 
 function createSVG(div, bgColor){
     div = div || action.selectedItem;
     var html = "";
     html += '<svg style="position:absolute;left:0;top:0;pointer-events:none;-webkit-transform:translateZ(0)" class="'+div+'-text-container" width="100%" height="100%">';
     html += '<rect width="100%" height="100%" fill="'+bgColor+'" x="0" y="0" fill-opacity="1" mask="url(#'+div+'-knockout)" />';
     html += '<mask id="'+div+'-knockout">';
     html += '<rect width="100%" height="100%" fill="#fff" x="0" y="0" />';
     html += '<text id="'+div+'knockout" alignment-baseline="central" x="50%" y="50%" fill="#000" text-anchor="middle"></text>';
     html += ' </mask></svg>';
     return html;
 }

 function badgeAutoColor(badge, image){
    var img, vibrant, swatches, backupColor = "#343434";
        img = document.createElement('img');
        img.setAttribute('src', image);
        img.addEventListener('load', function() {
            var badgeBGColor = document.getElementById('badgeBackgroundColor');
            if(badgeBGColor){
                badgeBGColor.parentElement.removeChild(badgeBGColor);
            }
            try{
                vibrant = new Vibrant(img);
                swatches = vibrant.swatches();
                if(swatches['Vibrant']){
                    badge.style.backgroundColor = swatches['Vibrant'].getHex();
                    //addStyleString('.drawer_icon::before{background-color:'+swatches['Vibrant'].getHex()+';}', 'badgeBackgroundColorDrawer');  
                }else{
                    if(swatches['LightVibrant']){
                        badge.style.backgroundColor = swatches['LightVibrant'].getHex();
                    }else{
                        if(swatches['DarkVibrant']){
                            badge.style.backgroundColor = swatches['DarkVibrant'].getHex();
                        }else{
                            if(swatches['Muted']){
                                badge.style.backgroundColor = swatches['Muted'].getHex();
                            }else{
                                if(swatches['DarkMuted']){
                                    badge.style.backgroundColor = swatches['DarkMuted'].getHex();
                                }
                            }
                        }
                    }
                }
            }catch(err){
                badge.style.backgroundColor = backupColor;
            }
            img = null;
            vibrant = null;
            swatches = null;
            /*
            * Results into:
            * Vibrant #7a4426
            * Muted #7b9eae
            * DarkVibrant #348945
            * DarkMuted #141414
            * LightVibrant #f3ccb4
            */
        });
}

 function createLabel(storage, div){
    var label = document.createElement('div'),
        divWidth = parseInt(div.style.width, 10),
        labelName = "",
        badgeValue = "";
        if(FPI.bundle[storage.bundle]){
            labelName = FPI.bundle[storage.bundle].name;
        }
        if(storage.label){
            labelName = storage.label;
        }
        label.innerHTML = labelName;
        if(lStorage['labelBadges']){
            if(FPI.bundle[storage.bundle]){
                badgeValue = (FPI.bundle[storage.bundle].badge > 0) ? FPI.bundle[storage.bundle].badge : "";
            }
            label.innerHTML = badgeValue + " " + labelName;
        }
        label.className = "FPLabel";
        label.style.color = 'white';
        label.style.fontSize = divWidth/4 + 'px';
        label.style.textAlign = 'center';
        label.style.position = "absolute";
        label.style.marginTop = divWidth + 2 + 'px';
        label.style.width = divWidth + 5 + 'px';
        label.style.left = '50%';
        label.style.webkitTransform ='translate(-50%)';
        label.style.pointerEvents = 'none';

        if(lStorage['labelPosition']){
            var xy = lStorage['labelPosition'];
            label.style.marginTop = xy.top + 'px';
            label.style.marginLeft = xy.left + 'px';
        }

        if(lStorage['alignlabelsleft']){
            addStyleString('.FPLabel{text-align:left!important;}', 'alignlabelsleft');
        }

        if(lStorage['hideapplabels']){
            addStyleString('.FPLabel{opacity:0;}', 'hideapplabels');
        }
        if(lStorage['labelFontSize']){
            addStyleString('.FPLabel{font-size:'+lStorage['labelFontSize']+'px!important;}', 'labelFontSize');
        }
        return label;
 }
 function createBadge(storage, div, image){
     var badge = document.createElement('badge'),
        divWidth = parseInt(div.style.width, 10);
        badge.style.position = 'absolute';
        badge.innerHTML = "";
        if(FPI.bundle[storage.bundle]){
            badge.innerHTML = (FPI.bundle[storage.bundle].badge > 0) ? FPI.bundle[storage.bundle].badge : "";
        }
        badge.style.width = "auto";
        badge.className = 'FPBadge';
        badge.style.fontSize = divWidth/4 + 'px';
        badge.style.height = "auto";
        badge.style.marginLeft = divWidth - 8 + "px";
        badge.style.marginTop = "-5px";
        badge.style.paddingLeft = "5px";
        badge.style.paddingRight = "5px";
        badge.style.paddingTop = "1px";
        badge.style.paddingBottom = "1px";
        badge.style.borderRadius = "99px";
        badge.style.backgroundColor = "red";
        badge.style.backgroundSize = 'contain';
        badge.style.backgroundRepeat = 'no-repeat';
        badge.style.pointerEvents = 'none';

        if(lStorage.badgeFontSize){
            badge.style.fontSize = lStorage.badgeFontSize + 'px';
        }

        if(lStorage.badgeImage){
            badge.style.width = "20px";
            badge.style.height = "20px";
            if(lStorage.badgeSize){
                badge.style.width = lStorage.badgeSize + "px";
                badge.style.height = lStorage.badgeSize + "px";
            }
            badge.style.backgroundImage = 'url("' + lStorage.badgeImage + '")';
        }
        if(lStorage['badgePosition']){
            var xy = lStorage['badgePosition'];
            badge.style.marginTop = xy.top + 'px';
            badge.style.marginLeft = xy.left + 'px';
        }
        if(lStorage['appIcons'][div.id]){
            if(lStorage['appIcons'][div.id]['drawer']){
                badge.style.opacity = 0;
            }
        }
        if(lStorage['hideappbadges']){
            addStyleString('.FPBadge{opacity:0;}', 'hideappbadges');
        }
        if(lStorage.enablecolorbadges){
            badgeAutoColor(badge, image);
        }
        if(lStorage['badgeBorderRadius']){
            badge.style.borderRadius = lStorage['badgeBorderRadius'];
        }
    return badge;
 }

 function createOverlayImage(storage, div){
    var overlay = document.createElement('div');
        overlay.style.width = div.style.width;
        overlay.style.height = div.style.width;
        overlay.style.backgroundColor = 'transparent';
        overlay.style.left = div.style.left;
        overlay.style.top = div.style.top;
        overlay.style.zIndex = div.style.zIndex + 1;
        overlay.style.pointerEvents = 'none';
        overlay.className = 'overlayClass';
        overlay.style.backgroundSize = 'cover';
        overlay.style.backgroundRepeat = 'no-repeat';
        if(lStorage['overlayPosition']){
            var xy = lStorage['overlayPosition'];
            overlay.style.marginTop = xy.top + 'px';
            overlay.style.marginLeft = xy.left + 'px';
        }
        if(lStorage['overlayImage']){
            addStyleString('.overlayClass{background-image:'+lStorage['overlayImage']+'!important;}', 'overlayImage');
        }
        if(lStorage['overlayScale']){
            addStyleString('.overlayClass{-webkit-transform:scale('+lStorage['overlayScale']+')!important;}', 'overlayScale');
        }
        div.parentElement.appendChild(overlay); 
 }
 function createUnderlayImage(storage, div){
    var underlay = document.createElement('div');
        underlay.style.width = div.style.width;
        underlay.style.height = div.style.width;
        underlay.style.backgroundColor = 'transparent';
        underlay.style.left = div.style.left;
        underlay.style.top = div.style.top;
        underlay.style.pointerEvents = 'none';
        underlay.className = 'underlayClass';
        underlay.style.backgroundSize = 'cover';
        underlay.style.backgroundRepeat = 'no-repeat';
        if(lStorage['underlayPosition']){
            var xy = lStorage['underlayPosition'];
            underlay.style.marginTop = xy.top + 'px';
            underlay.style.marginLeft = xy.left + 'px';
        }
        if(lStorage['underlayImage']){
            addStyleString('.underlayClass{background-image:'+lStorage['underlayImage']+'!important;}', 'underlayImage');
        }
        if(lStorage['underlayScale']){
            addStyleString('.underlayClass{-webkit-transform:scale('+lStorage['underlayScale']+')!important;}', 'underlayScale');
        }
        div.parentElement.appendChild(underlay); 
 }

var stockBundles = ['com.apple.mobilephone','com.apple.mobilemail', 'com.apple.MobileSMS', 'com.apple.Music', 'com.apple.mobilesafari', 'com.apple.mobilenotes', 'com.apple.Preferences', 'com.apple.mobiletimer', 'com.apple.stocks', 'com.apple.weather', 'com.apple.Maps', 'com.apple.reminders', 'com.apple.Health', 'com.apple.mobileslideshow', 'com.apple.AppStore', 'com.apple.facetime', 'com.apple.calculator', 'com.apple.compass', 'com.apple.news', 'com.apple.VoiceMemos', 'com.apple.mobilecal'];
 function createFrontPageElement(div, id){
    var bundle, label, badge, overlayImage, underlayImage, iconBGImage;
    div.innerHTML = ""; //remove anything in this div.
    if(lStorage['appIcons'][id]){
        bundle = lStorage['appIcons'][id]['bundle'];
        iconBGImage = getIconImage(bundle);
        div.setAttribute('bundleid', bundle);
        div.style.backgroundImage =  'url("' + iconBGImage + '")';

        label = createLabel(lStorage['appIcons'][id], div);
        badge = createBadge(lStorage['appIcons'][id], div, iconBGImage); 
        createOverlayImage(lStorage['appIcons'][id], div);
        createUnderlayImage(lStorage['appIcons'][id], div);         
        div.appendChild(badge);
        div.appendChild(label);
    }else{
        if(id === 'drawer'){
            return;
        }
        if(stockBundles[0]){
            lStorage['appIcons'][id] = {};
            lStorage['appIcons'][id]['bundle'] = stockBundles[0];
            lStorage.saveStorage();
            createFrontPageElement(div, id);
            stockBundles.shift();
        }
    }
 }

 function reloadAllFPPlaceholders(){
    Object.keys(savedElements.placedElements).forEach(function(key){
        if(key.substring(0, 7) === 'fpplace'){
            elem = document.getElementById(key);
            createFrontPageElement(elem, elem.id);
        }
    });
 }
 
 
 action.remakeDIV = function (id) {
 
     if(id === 'overlayStyle' || id === 'pressActions'){
         return;
     }
     
     if(document.getElementById(id)){
         return document.getElementById(id);
     }
 
     var div = document.createElement('div');
     div.id = id;
     div.style.zIndex = 1;
 
     if(id.substring(0, 3) === 'box'){
         if(action.savedElements.placedElements[id]['data-image']){
             div.style.backgroundImage = 'url("'+action.savedElements.placedElements[id]['data-image']+'")';
             div.style.backgroundSize = 'cover';
             div.style.backgroundRepeat = 'no-repeat';
            try{
             if(lStorage['iconImageLocations'][div.id]){
                div.style.backgroundImage = "url(file:///var/mobile/Documents/FrontPageImages/" + lStorage['iconImageLocations'][div.id] + ")";
             }
            }catch(err){
                console.log(err);
            }
         }
     }
     var checkIfHasActions = null;
     if(action.savedElements.placedElements[id]){
         checkIfHasActions = action.savedElements.placedElements[id]['action'];
     }
     
     if (id !== 'flipclock' && id !== 'quote1ReadMore' && id !== 'quote1' && id !== 'batterypie' && id.substring(0, 7) != 'fpplace' && id.substring(0, 6) !== 'bundle' && id.substring(0, 11) !== 'customPanel' && id !== 'hueLights' && id !== 'hueGroups' && id.substring(0, 9) !== 'customDiv' && id !== 'avatarImage' && id !== 'respring' && id !== 'sleep' && id !== 'timer' && id !== 'icon' && id !== 'day1icon' && id !== 'day2icon' && id !== 'day3icon' && id !== 'day4icon' && id !== 'day5icon' && id !== 'songalbumArtnohide' && id !== 'songalbumArt' && id !== 'searchicon' && id !== 'searchtext' && id !== 'unlock' && id !== 'flashlight' && id !== 'playmusic' && id !== 'nextmusic' && id !== 'prevmusic' && id !== 'playmusichide' && id !== 'nextmusichide' && id !== 'prevmusichide' && id.substring(0, 4) !== 'text' && id.substring(0, 3) !== 'box' && id.substring(0, 3) !== 'tri' && id.substring(0, 3) !== 'app') {
         div.innerText = "*";
         if(checkIfHasActions === undefined){
             div.style.pointerEvents = "none";
         }
     }
     if(id.substring(0, 7) === 'fpplace'){
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.backgroundImage = 'url("file:///Library/LockPlus/Creator/images/placeholder.png")';
        div.style.backgroundSize = 'contain';
        div.style.backgroundRepeat = 'no-repeat';
        div.style.borderColor = 'black';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '0px';
        div.style.zIndex = 1;
        div.innerHTML = "";
        div.style.pointerEvents = 'auto!important'; 
        setTimeout(function(){
            try{
                createFrontPageElement(div, id);
            }catch(err){
                //alert(err);
            }
        },300);
     }
     switch(id){
         case 'songalbumArtnohide':
             div.style.backgroundImage = 'url("file:///Library/LockPlus/Creator/images/blank.png")';
         break;
         case 'avatarImage':
             div.style.backgroundColor = 'black';
             div.style.backgroundImage = 'url("file:///var/mobile/Library/LockPlus/avatarspecialforlpp.png?'+ Math.floor((Math.random() * 1000) + 1) +' ")';
             div.style.backgroundSize = 'contain';
             div.style.backgroundRepeat = 'no-repeat';
         break;
         case 'songalbumnohide':
             div.innerText = 'No Album';
         break;
         case 'songartistnohide':
             div.innerText = 'No Artist';
         break;
         case 'songtitlenohide':
             div.innerText = 'No Title';
         break;
         case 'hueLights':
             div.innerText = 'Lights';
         break;
         case 'hueGroups':
             div.innerText = 'Groups';
         break;
         case 'quote1':
             div.innerText = "";
             if(action.savedElements.placedElements[id]){
                 if(action.savedElements.placedElements[id]['data-url']){
                    action.getFeedQuote(action.quoteFeed, action.savedElements.placedElements[id]['data-url']);
                    div.title = action.savedElements.placedElements['quote1']['data-url'];
                 }else{
                    action.getFeedQuote(action.quoteFeed);
                 }
             }else{
                action.getFeedQuote(action.quoteFeed); 
             }
         break;
         case 'quote1Artist':
             div.innerText = "";
         break;
         case 'quote1ReadMore':
             div.innerText = 'read more';
             if(action.savedElements.placedElements['quote1']){
                if(action.savedElements.placedElements['quote1']['data-url']){
                    div.title = action.savedElements.placedElements['quote1']['data-url'];
                }
             }
         break;
         default:
         break;
     }
 
     if (action.containsWeather === false) {
         action.isWeather(id);
     }
 
     if(action.savedElements.placedElements[id]){
         if(action.savedElements.placedElements[id].knockout){
             div.innerHTML = createSVG(id, action.savedElements.placedElements[id]['knockout'].knockoutColor);
         }
     }
 
     document.getElementById('screenElements').appendChild(div);

     if(id === 'batterypie'){
        div.className = 'progress';
        div.style.width = 'auto';
        div.style.height = 'auto';
        circleProgress = new CircleProgress('.progress');
		circleProgress.max = 100;
        circleProgress.value = 75;
        circleProgress.textFormat = 'none';
        addStyleString('.circle-progress{overflow:visible;pointer-events:none;}', 'circleoverflow');
    }

    if(id === 'flipclock'){
        setTimeout(function(){
            flipClock.create(div, true);
        },0);
    }
     return div;
 };
 
 action.injectFont = function () {
     var css = "",
         i,
         head = document.head || document.getElementsByTagName('head')[0],
         style = document.createElement('style');
     for (i = 0; i < action.loadedFonts.length; i++) {
         if(action.loadedFonts[i] !== 'helvetica'){
             css += "\n@font-face{\nfont-family:'" + action.loadedFonts[i] + "';\nsrc:url('../../../../var/mobile/Documents/lockplusfonts/" + action.loadedFonts[i] + ".otf');\n}";
         }
     }
     style.type = 'text/css';
     if (style.styleSheet) {
         style.styleSheet.cssText = css;
     } else {
         style.appendChild(document.createTextNode(css));
     }
     head.appendChild(style);
 };
 
 
 action.stageFont = function (font) {
     if (action.loadedFonts.indexOf(font) === -1) {
         action.loadedFonts.push(font);
     }
 };
 
 action.weatherJSLoaded = function () {
     wlib();
 };
 
 action.loadWeatherJS = function () {
     var fileref = document.createElement('script');
     fileref.setAttribute("type", "text/javascript");
     fileref.setAttribute("src", 'js/weather.js');
     fileref.async = true;
     fileref.addEventListener('error', function () {
         //alert("error retrieving weather");
     }, true);
     if (fileref !== "undefined") {
         document.getElementsByTagName("head")[0].appendChild(fileref);
     }
     fileref.onload = action.weatherJSLoaded;
 };
 
 var replaceWidget = function(key) {
     var value = action.savedElements.placedElements[key];
     Object.keys(value).forEach(function(skey) { //loop styles on the object
         var styleVal = value[skey];
         if (skey != 'type') {
             document.getElementById(key).style.cssText += skey + ":" + styleVal;
         }
     });
 };
 
 var loadexjsfile = function (id, over) {
     var d = new Date().getTime();
     var link = 'https://lockplus.us/creator/widgets/' + id + '.js?' + d;
     var fileref = document.createElement('script');
     fileref.setAttribute("type", "text/javascript");
     fileref.setAttribute("src", link);
     fileref.async = true;
     if (fileref !== "undefined") {
         document.getElementsByTagName("head")[0].appendChild(fileref);
     }
     fileref.onload = function () {
         try {
             replaceWidget(id);
         } catch (err) {
             //console.log(err + "Widget not replacing");
         }
     }
 };
 

 function addStyleString(str, id) {
    var element, node, doc = document;
    if (id) {
        /* If exists remove */
        if (doc.getElementById(id)) {
            element = doc.getElementById(id);
            doc.body.removeChild(element);
        }
    }
    node = doc.createElement('style');
    node.innerHTML = str;
    node.id = id;
    doc.body.appendChild(node);
};
 
 action.loadStyles = function(key, value, createdDiv){
     var styleVal;
     Object.keys(value).forEach(function (skey) {        
         styleVal = value[skey];


         if (skey === 'data-prefix' || skey === 'data-suffix' || skey === 'bundleID' || skey === 'name') {
             createdDiv.setAttribute(skey, styleVal);
             //set on apps. bundle is set and name.
             if(skey === 'name'){
                 createdDiv.innerHTML = styleVal;
             }
        }else if(skey === 'circle-width'){
            addStyleString('.circle-progress{width:'+styleVal+';height:'+styleVal+';}', 'circlewidth');
        }else if(skey === 'circle-stroke'){
            addStyleString('.circle-progress-circle{stroke-width:'+styleVal+';}', 'circlestroke');  
        }else if(skey === 'circle-stroke-dasharray'){
            addStyleString('.circle-progress-value{stroke-dasharray:'+styleVal+' 2;}', 'circlestrokedash');  
        }else if(skey === 'circle-stroke-value'){
            addStyleString('.circle-progress-value{stroke-width:'+styleVal+';}', 'circlestrokevalue');  
        }else if(skey === 'outer-color'){
            addStyleString('.circle-progress-value{stroke:'+styleVal+';}', 'circleoutercolor');  
        }else if(skey === 'inner-color'){
            addStyleString('.circle-progress-circle{stroke:'+styleVal+';}', 'circleinnercolor');  
        } else {
            if(skey === 'scale'){
                document.getElementById(key).style.webkitTransform = 'scale('+styleVal+')';
            }
             //When text gradient was used it would show an edge of the div block if
             //text was close to the edge. Adding a border or translate3d fixes this.
             if(skey === '-webkit-background-clip'){
                 //createdDiv.style['border'] = '1px solid transparent';
                 createdDiv.style['-webkit-transform'] += 'translate3d(0,0,0)';
             }
             try{
                createdDiv.style[skey] = styleVal;
             }catch(err){
                 //console.log(err);
             }
         }
 
         //gradient fixes gradientText has background-clip set to text.
         if(skey === 'background' || skey === '-webkit-text-fill-color'){
             if(Object.keys(value).contains('-webkit-background-clip')){
                 if(createdDiv.id.substring(0, 3) != 'box'){
                     createdDiv.className = 'gradientText';
                 }
             }
         }
 
         try{
             switch(skey) {
                 case 'font-family':
                     action.stageFont(styleVal);
                 break;
                 case 'data-vars':
                     try{
                     for (var i = 0; i < styleVal.length; i++) {
                         if(createdDiv.id.indexOf('customPanel') > -1){
                             createdDiv.className = 'customPanel';
                         }else{
                             createdDiv.className = 'customDiv';
                         }
 
                         var div;
                         if(document.getElementById(styleVal[i])){
                             createdDiv.appendChild(document.getElementById(styleVal[i]));
                         }else{
                             if(styleVal[i].length > 0){
                                 
                                 if(!action.savedElements.placedElements[styleVal[i]]){
                                     //alert(JSON.stringify(action.savedElements.placedElements));
                                     //alert(styleVal[i]);
                                 }
                                 div = action.remakeDIV(styleVal[i]);
                                 createdDiv.appendChild(div);
                             }
                         }
                     }
                     }catch(err){
                         alert(err);
                     }
                 break;
                 default:
                 break;
             }
         }catch(err){
             console.log(err);
             //alert(err);
         }
 
         switch(key) {
             case 'songalbumArt':
                 document.getElementById('songalbumArt').style.backgroundColor = "transparent";
             break;
             case 'icon':
             case 'day1icon':
             case 'day2icon':
             case 'day3icon':
             case 'day4icon':
             case 'day5icon':
                 createdDiv.style[skey] = styleVal;
                 if (skey !== 'position' && skey !== 'font-family') {
                     if (skey === 'width' || skey === 'height') {
                         document.querySelector('.iconClass' + key).style.cssText += skey + ":" + value[skey];
                     }
                 }
                 createdDiv.style.zIndex = 99;
             break;
             default:
             break;
         }
         try{
             if(key.substring(0, 4) === 'text' && skey === 'innerHTML'){
                 createdDiv.innerHTML = styleVal;
                 if(action.savedElements.placedElements[createdDiv.id]['knockout']){
                     createdDiv.innerHTML = createSVG(createdDiv.id, action.savedElements.placedElements[createdDiv.id]['knockout'].knockoutColor);
                     if(document.getElementById(key + 'knockout')){
                         document.getElementById(key + 'knockout').innerHTML = styleVal;
                     }
                 }
             }
         }catch(err){
             //alert("Main.js if text or innerHTML" + err);
         }
         
     });
 };
 
 action.createIconElementIfNeeded = function(key, createdDiv){
     if (key === 'icon' || key === 'day1icon' || key === 'day2icon' || key === 'day3icon' || key === 'day4icon' || key === 'day5icon') {
         var img = document.createElement('img');
         img.className = 'iconClass' + key;
         img.id = 'iconDiv' + key;
         createdDiv.appendChild(img);
     }
 };
 
 action.replaceElements = function () {
     var value, styleVal, createdDiv,
         placedElements = this.savedElements.placedElements;
 
         //alert(JSON.stringify(placedElements));
     Object.keys(placedElements).forEach(function (key) {
 
         if (placedElements[key].type == 'widget') {
             loadexjsfile(key, true);
             action.isWeather(key);
         } else {
             try{
                 createdDiv = action.remakeDIV(key);
                 if(createdDiv.id.indexOf('Panels') > -1){
                     createdDiv.style.webkitTransition = 'opacity 300ms ease-in-out';
                 }
             }catch(err){
                 //alert("createdDiv error " + err);
             }
             try{
                 value = placedElements[key];
             }catch(err){
                 //alert("value error " + err);
             }
             try{
                 action.createIconElementIfNeeded(key, createdDiv);
             }catch(err){
                 //alert("createIcon error " + err);
             }
             try{
                 action.loadStyles(key, value, createdDiv);
             }catch(err){
                 //alert("loadStyles error " + err);
             }
         }
     });
     startLoop();
     action.injectFont();
     action.savedElements.overlay = null;
 };
 
 function hasWidgetInfo(){
     try{
         if(savedElements){
             return savedElements;
         }
         return false;
     }catch(err){
         return false;
     }
 }
 
 function setOverlayIfAvailable(){
     if(action.savedElements.overlay != undefined){
         if (action.savedElements.overlay.length > 1) {
             if (!options.disableoverlay) {
                 action.setOverlay(action.savedElements.overlay);
             }
         }
     }
 }
 function makeTheElements(){
     if (action.savedElements.placedElements) {
             action.replaceElements();
     }
 }
 function loadSVGFile(){
     setTimeout(function () {
         action.loadjsfile("js/svg.js");
     }, 100);
 }
 
 action.loadFromStorage = function () {
     if(hasWidgetInfo()){ //LPP.js
         action.savedElements = savedElements;
         setOverlayIfAvailable();
         makeTheElements();
         if(action.LOADLPPJSTOLPP){
             localStorage.placedElements = JSON.stringify(savedElements).replace('var savedElements =', '');
         }
     }else{
         if (localStorage.placedElements) { //LockPlus
             action.savedElements = JSON.parse(localStorage.placedElements);
             setOverlayIfAvailable();
             makeTheElements();
         } else {
             loadSVGFile();
         }
     }
 };
 
 function loadInfo(){
     action.loadFromStorage();
     try{
        if(lStorage['moveAllItems']){
            var xy = lStorage['moveAllItems'];
            addStyleString('#mainContainer{margin-left:'+xy.left+'px!important;margin-top:'+xy.top+'px!important;}', 'moveAllItems');  
        }
     }catch(err){
        //only available in FrontPage
     }
 }
 
 setTimeout(function () {
     loadInfo();
 }, 0);
 