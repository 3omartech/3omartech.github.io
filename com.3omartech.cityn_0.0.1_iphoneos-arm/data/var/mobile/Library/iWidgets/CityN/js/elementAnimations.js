/*
    Element Animations

    LockPlus tweak will call loadAnimation when LockPlus loads and hideAnimation when it closes.

    ** Called from tweak

    hideAnimations();
    loadAnimations();

    THIS FILE IS ALSO IN LOCKPLUS/JS/elementAnimations.js

*/

/* animate the frame */
function animateFrame(animation, key) {
    var elementDOM = document.getElementById(key),
        xVal = Number(animation.transform.xVal),
        yVal = Number(animation.transform.yVal),
        rotate = Number(animation.transform.rotateVal),
        speed = Number(animation['speedVal']),
        rotateOrigin = animation['origin'];

        elementDOM.style.webkitTransformOrigin = rotateOrigin;
        elementDOM.style.webkitTransition = 'all ' + Number(speed) + 'ms ease-in-out';
        elementDOM.style.webkitTransform = 'rotate(' + Number(rotate) + 'deg) translate('+Number(xVal)+'px, '+Number(yVal)+'px)';

    Object.keys(animation).forEach(function(key) {
        if (key != 'transform' && key != 'rotateVal' && key != 'speedVal' && key != 'delay' && key != 'origin') {
            elementDOM.style[key] = animation[key];
        }
    });
    
    setTimeout(function() {
        elementDOM.style.webkitTransition = ' ';
    }, 0);
}

/* setup delays */
function runAnimations(div) {
    var delay = 0,
        speed = 0,
        counted = 0,
        value = action.savedElements.placedElements[action.selectedItem],
        elDiv = document.getElementById(action.selectedItem),
        name = action.selectedItem,
        temp;

    if (div) {
        value = action.savedElements.placedElements[div];
        elDiv = document.getElementById(div);
        name = div;
    }

    elDiv.style.webkitTransition = '';
    elDiv.style.webkitTransform = 'rotate(0deg) translate(0px, 0px)';

    for (var i = 0; i < value.transformAnimation.length; i++) {
        temp = value.transformAnimation[i];
        delay = Number(temp.delay);
        speed = Number(temp.speedVal);

        if (temp.opacity === 0) {
            elDiv.style.opacity = 0;
        }

        if (i === 0) {
            counted = delay + speed + counted;
            setTimeout(function(val) {
                animateFrame(val, name);
            }, delay, temp);
        } else {
            counted = delay + counted + speed;
            setTimeout(function(val) {
                animateFrame(val, name);
            }, counted, temp);
        }
    }
}


/* Creator Only */
function testAll(){
    var value;
    Object.keys(action.savedElements.placedElements).forEach(function (key) {
        value = action.savedElements.placedElements[key];
        if(value.transformAnimation){
            runAnimations(key);
        }
    });
}
function testAnimation(){
    runAnimations();
}
/* Creator Only */

function hideAnimations() {
    var value = null;
    Object.keys(action.savedElements.placedElements).forEach(function(key) {
        value = action.savedElements.placedElements[key];
        try {
            if (value.fade) {
                $('#' + key).css('opacity', '0');
            }
            var aUp = 0,
                aDown = 0,
                aLeft = 0,
                aRight = 0;
                
            if (value.aniUp) {
                aUp = Number(value.aniUp);
            }
            if (value.aniDown) {
                aDown = Number(value.aniDown);
            }
            if (value.aniLeft) {
                aLeft = Number(value.aniLeft);
            }
            if (value.aniRight) {
                aRight = Number(value.aniRight);
            }
            if (aUp > 0 || aDown > 0 || aLeft > 0 || aRight > 0) {
                $('#' + key).css('visibility', 'hidden');
            }
        } catch (err) {}
    });
}

function runLegacyAnimation(key) {
    var style = action.savedElements.placedElements[key],
        div = document.getElementById(key),
        aUp = style.aniUp || 0,
        aDown = style.aniDown || 0,
        aLeft = style.aniLeft || 0,
        aRight = style.aniRight || 0,
        yVal = 0,
        xVal = 0,
        speed = 0;

    if (style.fade) {
        $('#' + key).css('opacity', '0');
        setTimeout(function() {
            $('#' + key).fadeTo(Number(style.fade), 1);
        }, 300);
    }

    if (aUp > 0 || aDown > 0 || aLeft > 0 || aRight > 0) {
        if (aUp > 0) {
            yVal = 1000;
            speed = aUp;
        }
        if (aDown > 0) {
            yVal = -1000;
            speed = aDown;
        }
        if (aLeft > 0) {
            xVal = 1000;
            speed = aLeft;
        }
        if (aRight > 0) {
            xVal = -1000;
            speed = aRight;
        }
        div.style.webkitTransform = 'translateY(' + yVal + 'px)translateX(' + xVal + 'px)translateZ(0)';
        $('#' + key).css('visibility', 'visible');
        setTimeout(function() {
            div.style.webkitTransition = 'transform ' + speed + 'ms ease-in-out';
            $('#' + key).css('-webkit-transform', 'translateY(0px)translateX(0px)translateZ(0)');
            setTimeout(function() {
                div.style.webkitTransition = '';
            }, speed + 100);
        }, 0);
    }
}

function checkContainsLegacy(styles){
    var legacyValues = ['fade', 'aniUp', 'aniDown', 'aniLeft', 'aniRight'];
    for (var i = 0; i < styles.length; i++) {
        if(legacyValues.contains(styles[i])){
            return true;
        }
    }
    return false;
}

/* LockPlus Only */
function loadAnimations() {
    var value = null,
        containsLegacy = false;

    Object.keys(action.savedElements.placedElements).forEach(function(key) {
        value = action.savedElements.placedElements[key];
        containsLegacy = checkContainsLegacy(Object.keys(value));
        
        if(value.transformAnimation){
            runAnimations(key);
        }
        if(containsLegacy){
            runLegacyAnimation(key);
        }
    });
}
/* LockPlus Only */

// window.addEventListener('DOMContentLoaded',function () {
//     setTimeout(function(){
//         loadAnimations();
//     },0);
// });




