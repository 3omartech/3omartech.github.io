//music items
var musicHideItems = ['songalbumArt', 'playmusichide', 'nextmusichide', 'prevmusichide', 'boxCircleAutoHideOne', 'boxCircleAutoHideTwo', 'boxCircleAutoHideThree', 'boxCircleAutoHideFour', 'boxCircleAutoHideFive', 'boxCircleAutoHideSix', 'boxAutoHideOne', 'boxAutoHideTwo', 'boxAutoHideThree', 'boxAutoHideFour', 'boxAutoHideFive', 'boxAutoHideSix'];
var musicDisplay = "block";

function setDiv(id, value, bg) {
    var arworkPreload;
    if (document.getElementById(id)) {
        if (bg) {
            artworkPreload = new Image();
            artworkPreload.onload = function() {
                document.getElementById(id).style.backgroundImage = "url(" + this.src + ")";
                artworkPreload = null;
            };
            artworkPreload.src = "file:///var/mobile/Library/LockPlus/Artwork.jpg?" + (new Date()).getTime();
        } else {
            document.getElementById(id).innerHTML = value;
        }
    }
}
function setWidthForBar(percent, element){
    var calc;
    var fullWidth = action.savedElements.placedElements['durationbar']["width"];
    fullWidth = fullWidth.replace('px', '');
    calc = Math.round((percent / 100) * fullWidth);
    if (element.style.width != calc + "px") {
        element.style.width = calc + "px";
    }
}
function getPercent(percentFor,percentOf){
    return Math.floor(percentFor/percentOf*100);
}
// injectedMusic.isPlaying = true;
// injectedMusic.elapsed = "0:00";
var globalElapsed = null;
function updateMusicElements() {
    var durationBar = document.getElementById('durationbar');
    if (injectedMusic.isPlaying) {
        setDiv('playmusic', 'u', false);
        setDiv('nextmusic', 'y', false);
        setDiv('prevmusic', 'x', false);
        setDiv('playmusichide', 'u', false);
        setDiv('nextmusichide', 'y', false);
        setDiv('prevmusichide', 'x', false);
        setDiv('songtitle', injectedMusic.title, false);
        setDiv('songartist', injectedMusic.artist, false);
        setDiv('songalbum', injectedMusic.album, false);
        setDiv('songtitlenohide', injectedMusic.title, false);
        setDiv('songartistnohide', injectedMusic.artist, false);
        setDiv('songalbumnohide', injectedMusic.album, false);
        setDiv('duration', injectedMusic.duration, false);
        setDiv('elapsed', injectedMusic.elapsed, false);
        globalElapsed = injectedMusic.elapsed;

        // if(placeelementscontainselapsed){

        // }
        Looper.removeTimerByName('elapsed');
        Looper.create({
            name: 'elapsed',
            refreshTime: 1000,
            initialTime: 0,
            success: function() {
                var current = injectedMusic.elapsed;
                if(Number(injectedMusic.elapsed.replace(':', '')) < Number(globalElapsed.replace(':',''))){
                    current = globalElapsed;
                }else{
                }
                var piece = String(current).split(':');
                    m = Number(piece[0]);
                    s = Number(piece[1]);
                    if(s + 1 >= 59){
                        m = m + 1;
                        s = 00;
                    }else{
                        s = s + 1;
                    }
                    if(s < 10){
                        s = "0" + s;
                    }
                globalElapsed = m + ":" + s;
                setDiv('elapsed', m + ":" + s, false);
                injectedMusic.elapsedSec = Number(injectedMusic.elapsedSec) + 1;
                if(durationBar){
                    setWidthForBar(getPercent(injectedMusic.elapsedSec, injectedMusic.durationSec), durationBar);
                }
            }
        });
        setDiv('songalbumArt', 'url("file:///var/mobile/Library/LockPlus/Artwork.jpg?' + new Date().getMilliseconds() + '")', true);
        setDiv('songalbumArtnohide', 'url("file:///var/mobile/Library/LockPlus/Artwork.jpg?' + new Date().getMilliseconds() + '")', true);
        musicDisplay = "block";
    } else {
        musicDisplay = "none";
        Looper.removeTimerByName('elapsed');
        setDiv('playmusic', 'r', false);
        setDiv('nextmusic', 'y', false);
        setDiv('prevmusic', 'x', false);
        setDiv('playmusichide', 'u', false);
        setDiv('nextmusichide', 'y', false);
        setDiv('prevmusichide', 'x', false);
        setDiv('songtitle', '', false);
        setDiv('songartist', '', false);
        setDiv('songalbum', '', false);
        setDiv('duration', injectedMusic.duration || '0:00', false);
        setDiv('elapsed', injectedMusic.elapsed || '0:00', false);
        setDiv('songalbumArt', 'url("")', true);
        if(durationBar){
            if(!injectedMusic.elapsedSec || Number(injectedMusic.elapsedSec) <= 0){
                setWidthForBar(0, durationBar);
            }
        }
    }
    for (var i = 0; i < musicHideItems.length; i++) {
        if (document.getElementById(musicHideItems[i])) {
            document.getElementById(musicHideItems[i]).style.display = musicDisplay;
        }
    }
}

setTimeout(function() {
    updateMusicElements();
}, 400);
