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

function updateMusicElements() {
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
        setDiv('songalbumArt', 'url("file:///var/mobile/Library/LockPlus/Artwork.jpg?' + new Date().getMilliseconds() + '")', true);
        setDiv('songalbumArtnohide', 'url("file:///var/mobile/Library/LockPlus/Artwork.jpg?' + new Date().getMilliseconds() + '")', true);
        musicDisplay = "block";
    } else {
        musicDisplay = "none";
        setDiv('playmusic', 'r', false);
        setDiv('nextmusic', 'y', false);
        setDiv('prevmusic', 'x', false);
        setDiv('playmusichide', 'u', false);
        setDiv('nextmusichide', 'y', false);
        setDiv('prevmusichide', 'x', false);
        setDiv('songtitle', '', false);
        setDiv('songartist', '', false);
        setDiv('songalbum', '', false);
        setDiv('songalbumArt', 'url("")', true);
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
