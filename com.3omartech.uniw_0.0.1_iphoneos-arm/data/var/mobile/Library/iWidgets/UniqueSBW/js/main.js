 Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}

var action = {};
action.savedElements = {};
action.loadedFonts = [];
action.containsWeather = false;


action.setOverlay = function (img) { //apply overlay to screenoverlay
    setTimeout(function () {
        var screenOverDiv, svgdiv;
        screenOverDiv = document.createElement('div');
        screenOverDiv.className = 'screenOverlay';
        screenOverDiv.style.backgroundImage = 'url(' + img + ')';
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
            quoteBody.innerText = fullbody;
        }
        if(quoteArtist){
            quoteArtist.innerText = title;
        }
    }
};

action.getFeedQuote = function(callback){
    var feed = "http://feeds.feedburner.com/quotationspage/qotd",
        apiUrl = 'http://feedrapp.info?callback=?&q=' + feed + ' &num=1';
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


action.remakeDIV = function (id) {

    if(document.getElementById(id)){
        return document.getElementById(id);
    }

    var div = document.createElement('div');
    div.id = id;

    if (id.substring(0, 11) !== 'customPanel' && id !== 'hueLights' && id !== 'hueGroups' && id.substring(0, 9) !== 'customDiv' && id !== 'avatarImage' && id !== 'respring' && id !== 'sleep' && id !== 'timer' && id !== 'icon' && id !== 'day1icon' && id !== 'day2icon' && id !== 'day3icon' && id !== 'day4icon' && id !== 'day5icon' && id !== 'songalbumArtnohide' && id !== 'songalbumArt' && id !== 'searchicon' && id !== 'searchtext' && id !== 'unlock' && id !== 'flashlight' && id !== 'playmusic' && id !== 'nextmusic' && id !== 'prevmusic' && id !== 'playmusichide' && id !== 'nextmusichide' && id !== 'prevmusichide' && id.substring(0, 4) !== 'text' && id.substring(0, 3) !== 'box' && id.substring(0, 3) !== 'tri' && id.substring(0, 3) !== 'app') {
        div.innerText = "*";
        div.style.pointerEvents = "none";
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
            action.getFeedQuote(action.quoteFeed);
        break;
        case 'quote1Artist':
            div.innerText = "";
        break;
        default:
        break;
    }

    if (action.containsWeather === false) {
        action.isWeather(id);
    }

    if(action.savedElements.placedElements[id].knockout){
        div.innerHTML = createSVG(id, action.savedElements.placedElements[id]['knockout'].knockoutColor);
    }

    document.getElementById('screenElements').appendChild(div);
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
    var link = 'http://lockplus.us/creator/widgets/' + id + '.js?' + d;
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
            console.log(err + "Widget not replacing");
        }
    }
};

action.loadStyles = function(key, value, createdDiv){
    var styleVal;
    Object.keys(value).forEach(function (skey) {

        styleVal = value[skey];

        if (skey === 'data-prefix' || skey === 'data-suffix') {
            createdDiv.setAttribute(skey, styleVal);
        } else {
            //When text gradient was used it would show an edge of the div block if
            //text was close to the edge. Adding a border or translate3d fixes this.
            if(skey === '-webkit-background-clip'){
                //createdDiv.style['border'] = '1px solid transparent';
                createdDiv.style['-webkit-transform'] += 'translate3d(0,0,0)';
            }

            createdDiv.style[skey] = styleVal;
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
                                div = action.remakeDIV(styleVal[i]);
                                createdDiv.appendChild(div);
                            }
                        }
                    }
                break;
                default:
                break;
            }
        }catch(err){
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

action.loadFromStorage = function () {
    if (localStorage.placedElements) {
        this.savedElements = JSON.parse(localStorage.placedElements);
        if(this.savedElements.overlay != undefined){
            if (this.savedElements.overlay.length > 1) {
                if (!options.disableoverlay) {
                    this.setOverlay(this.savedElements.overlay);
                }
            }
        }
        if (this.savedElements.placedElements) {
                this.replaceElements();
        }
    } else {
        setTimeout(function () {
            action.loadjsfile("js/svg.js");
        }, 100);
    }
};

function loadInfo(){
    action.loadFromStorage();
}

setTimeout(function () {
    loadInfo();
}, 0);
