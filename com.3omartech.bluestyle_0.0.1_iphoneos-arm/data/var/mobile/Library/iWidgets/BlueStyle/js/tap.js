(function(){
    var taphold = function (t) {
            var tapTimer = null;
            if(!t){return;}
            t.element.addEventListener('touchstart', function(e){
                tapTimer = setTimeout(function(){
                    if(t.passTarget){
                        t.action(e.target);
                    }else{
                        t.action();
                    }
                }, t.time);
            });
            t.element.addEventListener('touchend', function(){
                clearTimeout(tapTimer);
            });
            t.element.addEventListener('touchcancel', function(){
                clearTimeout(tapTimer);
            });
        };
    window.taphold = taphold;
}());
