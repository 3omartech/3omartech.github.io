//localStorage.placedElements = JSON.stringify(savedElements).replace('var savedElements =', ''); //CHANGED

action.injectFont = function() { //CHANGED
    var css = "",
        i,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    for (i = 0; i < action.loadedFonts.length; i++) {
        if (action.loadedFonts[i] !== 'helvetica') {
            css += "\n@font-face{\nfont-family:'" + action.loadedFonts[i] + "';\nsrc:url('fonts/" + action.loadedFonts[i] + ".otf');\n}";
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