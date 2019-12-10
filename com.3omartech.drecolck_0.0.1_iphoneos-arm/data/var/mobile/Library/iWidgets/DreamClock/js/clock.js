var clock = {
	clock: 0,
	clockImg: 0,
	hour: 0,
	min: 0,
	sec: 0,
	secEffect: 'smooth',

	init: function(){

				clock.clock = jQuery('div.clock');
				clock.clockImg = jQuery('div.clock').find('img.bg').show();
				clock.hour = jQuery('div.clock').find('img.hour').show();
				clock.min = jQuery('div.clock').find('img.min').show();
				clock.sec = jQuery('div.clock').find('img.sec').show();

				//Set div.clock to the dimension of the background image (clock skin)
				clock.clock.css('height', (clock.clockImg[0].clientHeight));
				clock.clock.css('width', (clock.clockImg[0].clientWidth));


				//Center hour hand
				clock.hour.css({
					'left' : '50%',
					'margin-left' : -clock.hour[0].clientWidth/2,
					'top' : '49%',
					'margin-top' : -clock.hour[0].clientHeight+7
				});

				//Center minute hand
				clock.min.css({
					'left' : '49.7%',
					'margin-left' : -clock.min[0].clientWidth/2,
					'top' : '48%',
					'margin-top' : -clock.min[0].clientHeight+12
				});

				//Center seconds hand
				clock.sec.css({
					'left' : '47.4%',
					'margin-left' : -clock.sec[0].clientWidth/3,
					'top' : '48.5%',
					'margin-top' : -clock.sec[0].clientHeight+12
				});
			
			setInterval(clock.checkTime,10);

	},

	checkTime: function(){
		var now = new Date();

		var outStr = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+':'+now.getMilliseconds();

		var seg = (now.getSeconds())*6;
		if(clock.secEffect != 'classic'){
			seg = (now.getSeconds()+(now.getMilliseconds()/1000))*6;
		}

		var min = (now.getMinutes()*6)+(now.getSeconds()*0.1);
		var hour = (now.getHours()*30)+(now.getMinutes()*0.5)+(now.getSeconds()*(0.1/60));

		//Rotate seconds hand
		clock.rotate(clock.hour, hour, 8);

		//Rotate seconds hand
		clock.rotate(clock.min, min, 8);

		//Rotate seconds hand
		clock.rotate(clock.sec, seg, 17);

	},

	//ROTATE WITH CSS3
	rotate: function(obj, deg, rotPoint){
		var height = obj[0].clientHeight-rotPoint;//Almost to the bottom the point of rotation

		obj.css({
			'-webkit-transform' : 'rotate('+deg+'deg)',
			'-moz-transform' : 'rotate('+deg+'deg)',
			'-o-transform': 'rotate('+deg+'deg)',
			'-ms-transform': 'rotate('+deg+'deg)',
			'transform': 'rotate('+deg+'deg)',

			'-webkit-transform-origin' : '50% '+height+'px',
			'-moz-transform-origin' : '50% '+height+'px',
			'-o-transform-origin' : '50% '+height+'px',
			'-ms-transform-origin' : '50% '+height+'px',
			'transform-origin' : '50% '+height+'px'
		});	

	}

};

jQuery(window).load(function(){
	clock.init();
});
	

