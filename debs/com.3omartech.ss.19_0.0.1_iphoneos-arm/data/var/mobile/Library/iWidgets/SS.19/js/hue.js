(function(window, doc) {
    var hueController = {
        hue: jsHue(),
        user: null,
        lights: null,
        groups: null,
        setWindowPosition:function(div, type){
            var offsetY, offsetX, width, ele;
            //width: 100
            //height: 150
            if(type === 'lights'){
                ele = document.getElementById('hueLights');
                offsetY = parseInt(ele.style.top);
                offsetX = parseInt(ele.style.left);
                width = parseInt(ele.style.width);
            }else{
                ele = document.getElementById('hueGroups');
                offsetY = parseInt(ele.style.top);
                offsetX = parseInt(ele.style.left);
                width = parseInt(ele.style.width);
            }
            offsetX = offsetX - 100;
            offsetY = offsetY - 75;
            if(offsetX < 0){
                offsetX = width;
            }
            if(offsetY < 0){
                offsetY = 0;
            }
            if(offsetX > 320){
                offsetX = 320;
            }
            if(offsetY + 150 > 568){
                offsetY = offsetY - 50;
            }
            div.style.top = offsetY + 'px';
            div.style.left = offsetX + 'px';
        },
        displayWindow: function(info, type){
            var holder = document.createElement('div'),
                scrollView = document.createElement('div');
                scrollView.className = 'hueScrollView';
                holder.id = 'hueWindow';
                holder.className = 'hueWindow';
                hueController.setWindowPosition(holder, type);
                holder.appendChild(scrollView);
                doc.body.appendChild(holder);
            Object.keys(info).forEach(function(key) {
                var div = doc.createElement('div');
                div.innerHTML = info[key].name;
                if(type === 'lights'){
                    div.title = info[key].state.on;
                    div.onclick = function(el) {
                        hueController.toggleLight(el.target.innerHTML);
                        doc.body.removeChild(scrollView);
                    };
                }else{
                    div.title = info[key].state.all_on;
                    div.onclick = function(el) {
                        hueController.toggleGroup(el.target.innerHTML);
                        doc.body.removeChild(scrollView);
                    };
                }
                scrollView.appendChild(div);
            });
        },
        getLights: function(forceUpdate) {
            if (!this.lights || forceUpdate) {
                hueController.user.getLights().then(function(hueLights) {
                    hueController.lights = hueLights;
                    hueController.displayWindow(hueLights, 'lights');
                });
            }
        },
        getGroups: function(forceUpdate) {
            if (!this.groups || forceUpdate) {
                hueController.user.getGroups().then(function(hueLights) {
                    hueController.groups = hueLights;
                    hueController.displayWindow(hueLights, 'groups');
                });
            }
        },
        toggleGroup: function(groupName) {
            Object.keys(hueController.groups).forEach(function(key) {
                if (hueController.groups[key].name === groupName) {
                    hueController.user.setGroupState(hueController.groups[key].name, {
                        on: !hueController.groups[key].state.all_on
                    });
                    //hueController.getGroups(true);
                }
            });
        },
        toggleLight: function(lightName) {
            for (light in hueController.lights) {
                if (hueController.lights[light].name === lightName) {
                    hueController.user.setLightState(light, {
                        on: !hueController.lights[light].state.on
                    });
                    //hueController.getLights(true);
                }
            }
        },
        getBridge: function(type) {
            var hue = this.hue,
                bridgeIP, bridge, username;
            hue.discover().then(function(bridges) {
                if (bridges.length === 0) {
                    hueController.bridgeList.innerHTML = "No Hue";
                } else {
                    if (localStorage.hueUser) {
                        bridge = hue.bridge(localStorage.bridgeIP);
                        hueController.user = bridge.user(localStorage.hueUser);
                        if(type === 'lights'){
                            if(doc.getElementById('hueWindow')){
                                doc.body.removeChild(doc.getElementById('hueWindow'));
                            }else{
                                hueController.getLights(true);
                            }
                        }else if(type === 'groups'){
                            if(doc.getElementById('hueWindow')){
                                doc.body.removeChild(doc.getElementById('hueWindow'));
                            }else{
                                hueController.getGroups(true);
                            }
                        }
                    }
                }
            });
        },
        init: function(type) {
            this.getBridge(type);
        }
    };
    window.hueController = hueController;
}(window, document));