var iPad = false;
var iPhoneX = false;
var overlayMaker = document.getElementById('overlayMaker');

if (window.innerWidth === 375) {
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.18, maximum-scale=1.18, user-scalable=0');
} else if (window.innerWidth === 414 || window.innerWidth === 425) { //upscale fix
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.3, maximum-scale=1.3, user-scalable=0');
} else if (window.innerWidth === 427) {
    iPad = true;
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.3, maximum-scale=1.3, user-scalable=0');
} else if (window.innerWidth === 768) {
    iPad = true;
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.8, maximum-scale=1.8 user-scalable=0');
    document.getElementById('menuiPad').style.display = 'block';
}

//alert(window.innerWidth);


if(overlayMaker){
    overlayMaker.style.width = window.innerWidth;
    overlayMaker.style.height = window.innerHeight;
}

if (window.innerHeight == 689) {
    document.getElementById('mainContainer').style.height = "689px";
    iPhoneX = true;
    //document.getElementById('mainContainer').style.backgroundColor = "blue";
}

function doiPad(type) {
    if (type === 'land') {
        document.getElementById('body').style.marginLeft = '120px';
        document.getElementById('body').style.marginTop = '-70px';
    } else {
        document.getElementById('body').style.marginLeft = '55px';
        document.getElementById('body').style.marginTop = '0px';
    }
}

function doOnOrientationChange() {
    window.addEventListener('orientationchange', doOnOrientationChange);
    switch (window.orientation) {
        case -90:
        case 90:
            doiPad('land');
            break;
        default:
            doiPad('por');
            break;
    }
}

if (iPad) {
    doOnOrientationChange();
}