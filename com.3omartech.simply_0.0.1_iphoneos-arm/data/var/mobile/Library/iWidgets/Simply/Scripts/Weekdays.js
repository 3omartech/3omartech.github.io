<!-------------------------------------------------- 3omartech ------------------------------------------------>

function buildCal(m, y, cM, cH, cDW, cD){
var this_weekday_name_array = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

	if (Lang == "fr"){
	var this_weekday_name_array=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];
	}
	if (Lang == "de"){
	var this_weekday_name_array = ["Son","Mon","Die","Mit","Don","Fre","Sam"];
	}
	if (Lang == "ca"){
	var this_weekday_name_array = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
	}
	if (Lang == "it"){
	var this_weekday_name_array = ["Dom","Lun","Mar","Mer","Gio","Ven","Sab"];
	}

var mn=['January','February','March','APril','May','June','July','August','September','October','November','December'];
var dim=[31,0,31,30,31,30,31,31,30,31,30,31];
var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st
var todaydate=new Date() //DD added
var this_weekday = todaydate.getDay()
var this_month = todaydate.getMonth()
var this_date = todaydate.getDate()
var this_year = todaydate.getYear()
if (this_year < 2000){this_year = this_year + 1900;}

dim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
var t = '';
days_TM=dim[this_month];
if (this_month==0)
	days_PM=dim[11];
else
	days_PM=dim[this_month-1];
if (this_month==11)
	days_NM=dim[0];
else
	days_NM=dim[this_month+1];
k=0;
do{
	k2=this_date-k;
	if(k2<=0)
		wkstart=days_PM+k2;
	else
		wkstart=k2;
	k++;
}

while(k<=this_weekday)
for (s=0;s<7;s++){
	if (s==this_weekday){
		t+='<span id="today">'+this_weekday_name_array[s]+'</span>';
       }
	else{
		t+='<span id="daysofweek">'+this_weekday_name_array[s]+'</span>';
	}
}

	t+='<span id="daysofweek"></span>';//<span id="today">'+this_date+'</spean>';
for (L=0;L<this_weekday;L++){
	L2=L+wkstart;
	if(L2>days_PM) L2=L2-days_PM;
	if(L2==this_date) t+='<span id="today">'+L2+'</span>';
}

t+='<div class="month">'+mn[this_month]+'</div>';
t+='<div class="year">'+this_year+'</div>';
return t;
}
