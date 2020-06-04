(function(window, doc) {

    var clockShown = true;

    function removeClock() {
        clockShown = false;
    }

    function CountdownTracker(value) {
        var el = document.createElement('span');
        el.className = 'flip-clock__piece';
        el.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>';
        this.el = el;

        var top = el.querySelector('.card__top'),
            bottom = el.querySelector('.card__bottom'),
            back = el.querySelector('.card__back'),
            backBottom = el.querySelector('.card__back .card__bottom');

        this.update = function(val) {
            val = ('0' + val).slice(-2);
            if (val !== this.currentValue) {

                if (this.currentValue >= 0) {
                    back.setAttribute('data-value', this.currentValue);
                    bottom.setAttribute('data-value', this.currentValue);
                }
                this.currentValue = val;
                top.innerText = this.currentValue;
                backBottom.setAttribute('data-value', this.currentValue);

                this.el.classList.remove('flip');
                void this.el.offsetWidth;
                this.el.classList.add('flip');
            }
        }
        this.update(value);
    }

    function getTime() {
        var t = new Date();
        return {
            'Total': t,
            'Hours': (t.getHours() % 12 === 0) ? 12 : t.getHours() % 12,
            'Minutes': t.getMinutes(),
            'Seconds': t.getSeconds()
        };
    }

    function Clock(div, showSeconds) {
        var flipClock = doc.getElementById('flipClock');
        if(flipClock){
          flipClock.parentElement.removeChild(flipClock);
        }
        this.el = document.createElement('div');
        this.el.id = 'flipClock';
        this.el.className = 'flip-clock';

        div.appendChild(this.el);

        var trackers = {},
            t = getTime(),
            key, timeinterval;

        for (key in t) {
            if (key === 'Total') {
                continue;
            }
            if (!showSeconds && key === 'Seconds') {
                continue;
            }
            trackers[key] = new CountdownTracker(t[key]);
            this.el.appendChild(trackers[key].el);
        }

        var i = 0;

        function updateClock() {
            if (clockShown) {
                timeinterval = requestAnimationFrame(updateClock);
                // throttle so it's not constantly updating the time.
                if (i++ % 10) {
                    return;
                }
                var t = getTime();
                for (key in trackers) {
                    trackers[key].update(t[key]);
                }
            }
        }
        setTimeout(updateClock, 500);
    }

    function initExternalMethods() {
        var externalMethods = {};
        externalMethods.create = function(div) {
            var seconds = localStorage.getItem('flipclockseconds');
            if(seconds === 'false'){
                return new Clock(div, false);
            }else{
                return new Clock(div, true);
            }
        };
        externalMethods.remove = function() {
            removeClock();
        };
        return externalMethods;
    }
    window.flipClock = initExternalMethods();
}(window, document));
