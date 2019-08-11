(function (document, window) {
    var Analog = function (params) {
        var analog = document.createElement('div'),
            clockHolder = document.createElement('div'),
            sdiv = document.createElement('div'),
            mdiv = document.createElement('div'),
            hdiv = document.createElement('div');

        var startAnalog = function(){
            with(new Date()) {
                var h, m, s;
                h = 30 * (getHours() % 12 + getMinutes() / 60);
                m = 6 * getMinutes();
                s = 6 * getSeconds();
                hdiv.title = getHours();
                hdiv.title = (hdiv.title < 10 ? "0" + hdiv.title : "" + hdiv.title);
                mdiv.title = (getMinutes() < 10) ? "0" + getMinutes() : getMinutes();
                sdiv.title = (getSeconds() < 10) ? "0" + getSeconds() : getSeconds();
                sdiv.style.cssText = "-webkit-transform:rotate(" + s + "deg);";
                mdiv.style.cssText = "-webkit-transform:rotate(" + m + "deg);";
                hdiv.style.cssText = "-webkit-transform:rotate(" + h + "deg);";
                setTimeout(startAnalog, 1000);
            }
        },
        setStyle = function(){

            var scolor = params.secondColor,
                hcolor = params.hourColor,
                mcolor = params.minuteColor,
                numbers = (params.numbers) ? 1 : 0,
                clockCSS = ".clock{position: absolute; width:100%; height:100%; border: 2px solid gray; border-radius:9999px; background-color: #d1d0ce; z-index:9;}",
                clockAfter = ".clock::after{content: '';position: absolute;background-color: transparent;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);width: 6px;height: 6px;border-radius: 99px;}",
                trnsForm = ".transform{width: 1px;position: absolute;left:50%;height: 50%;-webkit-transform:translate(-50%);-webkit-transform-origin:bottom;}",
                sd = "#s{background: -webkit-linear-gradient(bottom, "+scolor+" 80%, transparent 80%);}",
                md = "#m{background: -webkit-linear-gradient(bottom, "+mcolor+" 60%, transparent 60%);}",
                hd = "#h{background: -webkit-linear-gradient(bottom, "+hcolor+" 40%, transparent 40%);}",
                mhb = '#m::before, #h::before{position: relative;top:100%;content: "";width: 1px;height: '+params.handendlength+'px;display: inline-block;background-color: '+hcolor+';}',
                sb = ' #s::before{position: relative;top:100%;content: "";width: 1px;height: '+params.handendlength+'px;display: inline-block;background-color: '+scolor+';}',
                sbh = ' #m::before{background-color: '+mcolor+';}';
                smba = '#s::after, #m::after, #h::after{position: absolute;content: attr(title);margin-left: -5px;display: block;width: 10px;text-align: center;font-size: 7px;opacity: '+numbers+';}',
                smha = '#s::after{top:7%;}#m::after{top: 25%;}#h::after{top:45%;font-weight: bold;}',
                ddd = '#m::before, #h::before, #s::before{position: relative;top:100%;content: "";width: 1px;height: 12px;display: inline-block;background-color: transparent;}',
                clockAfterDot = ".clock::after{content: '';position: absolute;background-color: black;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);width: 4px;height: 4px;border-radius: 99px;}",
                finalCSS = clockCSS + clockAfter + trnsForm + sd + md + hd + mhb + sb + smba + smha + sbh,
                style = document.createElement('style');

                style.type = 'text/css';

                if(!params.longhands){
                    finalCSS += ddd + clockAfterDot;
                }

                style.appendChild(document.createTextNode(finalCSS));
                document.head.appendChild(style);

            startAnalog();
        },
        AnalogCreate = function (methods) {

                clockHolder.style.position = 'relative';
                clockHolder.style.width = params.width;
                clockHolder.style.height = params.width;

                sdiv.className = "transform";
                mdiv.className = "transform";
                hdiv.className = "transform";

                sdiv.id = "s";
                mdiv.id = "m";
                hdiv.id = "h";

                analog.className = "clock";

                analog.appendChild(sdiv);
                analog.appendChild(mdiv);
                analog.appendChild(hdiv);
                clockHolder.appendChild(analog);
                params.parent.appendChild(clockHolder);
                setStyle();

            return params.parent;
        };

        return AnalogCreate(this);
    };

    window.Analog = Analog;
}(document, window));





