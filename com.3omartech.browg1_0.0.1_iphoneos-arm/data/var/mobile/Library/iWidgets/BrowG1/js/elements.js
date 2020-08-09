var clockElements, clockMethods, weatherElements, weatherMethods, systemElements, systemMethods;
clockElements = {
    'daysleft': ['daysLeft'],
    'daysleftpercent': ['daysLeftPercentLeft'],
    'daysleftpercent2': ['daysLeftPercentToGo'],
    'fullclock': ['zhour', ':', 'minute', ':', 'second'],
    'datedotsmonth': ['date', '.', 'sdaytext'],
    'datedotsmonthpad': ['paddeddate', '.', 'sdaytext'],
    'smonthdotdate': ['sdaytext', '.', 'date'],
    'smonthdotdatepad': ['sdaytext', '.', 'paddeddate'],
    'monthnumslashdatepad': ['monthdate', '/', 'paddeddate'],
    'monthnumslashdatepad2': ['monthdatepadded', '/', 'paddeddate'],
    'monthnumslashdatepad3': ['paddeddate', '/', 'monthdatepadded'],
    'monthnumslashdate': ['monthdate', '/', 'date'],
    'dateslashmonthnumber': ['date', '/', 'monthdate'],
    'dateslashmonthpad': ['paddeddate', '/', 'monthdate'],
    'dateslashmonth': ['date', '/', 'monthdate'],
    'dateliketime1': ['paddeddate',':','monthdatepadded'],
    'dateliketime2': ['monthdatepadded', ':', 'paddeddate'],
    'dstring': ['sdaytext', ', ', 'smonthtext', ' ', 'date'],
    'dstringpad': ['sdaytext', ', ', 'smonthtext', ' ', 'paddeddate'],
    'daycut': ['daytextcut'],
    'daycut1': ['daytextcut1'],
    'daycut2': ['daytextcut2'],
    'smonthsplit': ['monthtextcut'],
    'datepad': ['paddeddate'],
    'datepadfirst': ['paddeddatecut0'],
    'datepadsecond': ['paddeddatecut1'],
    'timer': ['getTimer'],
    'mday': ['mdaytext'],
    'amalways': ['amalways'],
    'sday1': ['sdaytextslice01'],
    'sday2': ['sdaytextslice12'],
    'sday3': ['sdaytextslice23'],
    'smonth1': ['smonthtextslice01'],
    'smonth2': ['smonthtextslice12'],
    'smonth3': ['smonthtextslice23'],
    'yearnum': ['yearslice24'],
    'lngclstring': ["It's ", "hour", ":", "minute", " on ", "daytext", " the ", "dateplus"],
    'prevdaystrings': ['yesterdaydaytext', ' ', 'monthtext', ' ', 'prevdate'],
    'todaystrings': ['daytext', ' ', 'monthtext', ' ', 'date'],
    'nextdaystrings': ['nextdaytext', ' ', 'monthtext', ' ', 'nextdate'],
    'datemonthrev': ['monthtext', ' ', 'date'],
    'monthlinespace': ['monthtext', ' | ', 'date', ' | ', 'year'],
    'daydate': ['daytext', ' ', 'date'],
    'datespace': ['daytext', ' ', 'monthtext', ' ', 'date'],
    'daydotdate': ['daytext', '.', 'date'],
    'datestringrev': ['monthtext', ' ', 'date', ', ', 'daytext'],
    'hrmintx': ['hrmintx'],
    'hrmin': ['hourtext', '.', 'minute'],
    'daydatemonth': ['daytext', ' | ', 'date', 'monthtext'],
    'daydatemonth2': ['date', 'monthtext', ' | ', 'daytext'],
    'monthdateyear': ['monthtext', ' ', 'date', ', ', 'year'],
    'clock': ['hour', ':', 'minute'],
    'clockdot': ['hour', '.', 'minute'],
    'zclockdot': ['zhour', '.', 'minute'],
    'sclock': ['hour', ':', 'minute', 'ampmstrict'],
    'sclockpadded': ['zhour', ':', 'minute', 'ampmstrict'],
    'zclock': ['zhour', ':', 'minute'],
    'clockline': ['hour', '|', 'minute'],
    'clockpm': ['hour', ':', 'minute', 'am'],
    'zhour': ['zhour'],
    'hour': ['hour'],
    'minute': ['minute'],
    'second': ['second'],
    'pm': ['am'],
    'tod': ['tod'],
    'tod2': ['tod2'],
    'ttext': ['hourtext', ' ', 'minuteonetext', ' ', 'minutetwotext'],
    'ttextstr': ['hourtext', '', 'minuteonetext', '', 'minutetwotext' + '<span style="text-transform:uppercase">', 'daytext', '</span><span style="text-transform:lowercase">the', 'dateplus', '</span>'],
    'htext': ['hourtext'],
    'mtext': ['minuteonetext', ' ', 'minutetwotext'],
    'mtext2': ['minuteonetext2', ' ', 'minutetwotext'],
    'mtext3': ['minuteonetext3'],
    'min1': ['minuteonetext'],
    'min2': ['minutetwotext'],
    'min3': ['minuteonetextNoSpace'],
    'date': ['date'],
    'prevdate': ['prevdate'],
    'nextdate': ['nextdate'],
    'dateplus': ['dateplus'],
    'dateplusof': ['dateplus', ' of ', 'monthtext'],
    'dateplusplusof': ['daytext', ', ', 'dateplus', ' of ', 'monthtext'],
    'datetext': ['datetext'],
    'day': ['daytext'],
    'nextday': ['nextdaytext'],
    'yestday': ['yesterdaydaytext'],
    'sday': ['sdaytext'],
    'snextday': ['snextday'],
    'sprevday': ['sprevday'],
    'month': ['monthtext'],
    'nextmonth': ['nextmonthtext'],
    'prevmonth': ['prevmonthtext'],
    'monthstring': ['monthtext', ' the ', 'dateplus'],
    'datedotmonth': ['paddeddate', '.', 'monthtext'],
    'dateslashmonth': ['date', '/', 'monthtext'],
    'datemonth': ['date', ' ', 'monthtext'],
    'smonth': ['smonthtext'],
    'snextmonth': ['snextmonth'],
    'sprevmonth': ['sprevmonth'],
    'monthdot': ['monthtext', '.', 'paddeddate'],
    'monthline': ['monthtext', '|', 'date', '|', 'year'],
    'mdy': ['monthdate', '/', 'date', '/', 'year'],
    'mdy2': ['date', '/', 'monthdate', '/', 'year'],
    'monthD': ['monthdate'],
    'datestring': ['daytext', ', ', 'monthtext', ' ', 'date'],
    'datedash': ['daytext', '-', 'monthtext', '-', 'date'],
    'year': ['year'],
    'daydatesmonth': ['daytext', ' ', 'date', ' ', 'smonthtext'],
    'daydatescommamonth': ['daytext', ', ', 'date', ' ', 'smonthtext'],
    'yeartext': ['yeartext'],
    'datebar': ['monthdate', '|', 'date', '|', 'smyear'],
    'datebar2': ['date', '|', 'monthdate', '|', 'smyear'],
    'datesnslash': ['monthdate', '/', 'date', '/', 'smyear'],
    'datesnslash2': ['date', '/', 'monthdate', '/', 'smyear'],
    'datesingled': ['monthdate', '-', 'date', '-', 'smyear'],
    'datesingled2': ['date', '-', 'monthdate', '-', 'smyear'],
    'hrsmush': ['hourtext', '', 'minute'],
    'dayabdatemonth': ['sdaytext', ' ', 'date', ' ', 'smonthtext'],
    'daycommadatemonth': ['sdaytext', ', ', 'date', ' ', 'smonthtext'],
    'hrnsmin': ['hourtext', ' ', 'minute'],
    'clocksmush': ['hour', '', 'minute'],
    'clocksmush1': ['zhour', '', 'minute'],
    'clockdsh1': ['zhour', '-', 'minute'],
    'clockdsh2': ['hour', '-', 'minute'],
    'datemonthfirst': ['date', ' ', 'monthtext'],
    'nsmd': ['smonthtext', ' ', 'date'],
    'ndsm': ['date', ' ', 'smonthtext'],
    'ndsm2': ['paddeddate', ' ', 'smonthtext'],
    'ndsm3': ['smonthtext', ' ', 'paddeddate'],
    'ndsm4': ['sdaytext', ' ', 'paddeddate'],
    'ndsmd': ['date', ' ', 'sdaytext'],
    'nsmdd': ['sdaytext', ' ', 'date'],
    'ndatedash': ['daytext', ' - ', 'monthtext', ' - ', 'date'],
    'nsmmyear': ['smonthtext', ' ', 'year'],
    'nmdplusyear': ['monthtext', ' ', 'dateplus', ' ', 'year'],
    'nhrtmin': ['hourtext', ':', 'minute'],
    'nhrtmin2': ['zhour', ':', 'minuteonetext', ' ', 'minutetwotext'],
    'nhrtmin3': ['zhour', ':', 'minuteonetextNoSpace', ' ', 'minutetwotext'],
    'nhrtarrowmin': ['hourtext', '>>', 'minute'],
    'nttext': ['[', 'hourtext', ']', 'minuteonetext', 'minutetwotext'],
    'nttext1': ['(', 'hourtext', ')', 'minuteonetext', 'minutetwotext'],
    'smdotdate': ['smonthtext', '.', 'date'],
    'datesmdot': ['date', '.', 'smonthtext'],
    'monthdayyear': ['monthtext', ' ', 'date', ' ', 'year'],
    'monthslashdate': ['monthtext', '/', 'date'],
    'fullmonthdotdate': ['monthtext', '.', 'date'],
    'datedotmonthfull': ['date', '.', 'monthtext'],
    'datemonthyear': ['date', ' ', 'monthtext', ', ', 'year'],
    'monthDPadded':['monthdatepadded'],
    'datemonthnum': ['paddeddate', '', 'monthdatepadded'],
    'monthnumdate': ['monthdatepadded', '', 'paddeddate'],
    'timeslashdatemonth': ['zhour', 'minute', ' / ', 'paddeddate', 'monthdatepadded'],
    'timeslashmonthdate': ['zhour', 'minute', ' / ', 'monthdatepadded', 'paddeddate'],
    'monthdateslashtime': ['monthdatepadded', 'paddeddate', ' / ', 'zhour', 'minute'],
    'datemonthslashtime': ['paddeddate', 'monthdatepadded', ' / ', 'zhour', 'minute'],
    'sdaymonthdate': ['sdaytext', ', ', 'monthtext', ' ', 'paddeddate'],
    'sdaydatemonth': ['sdaytext', ', ', 'paddeddate', ' ', 'monthtext'],
    'sdaymonthdateno': ['sdaytext', ' ', 'monthtext', ' ', 'paddeddate'],
    'sdaydatemonthno': ['sdaytext', ' ', 'paddeddate', ' ', 'monthtext'],
    'sdaymonth': ['sdaytext', ', ', 'monthtext']
};

weatherElements = {
    'medwstring': ['condition', '&amp;', 'temp', '&deg;'],
    'lngwstring': ["It's ", "conditionlowercase", " outside and the temp is around ", 'temp', '&deg;.'],
    'lngwstring2': ["Currently it's ", 'temp', '&deg; outside.'],
    'lngwstring3': ["Currently it's ", "conditionlowercase", ", the high today will reach ", "high", "&deg; </br> Right now it's ", "temp", "&deg; and your battery is at ", "battery", "%."],
    'lngwstring4': ["It could be ", "conditionlowercase", " and ", "temp", "&deg; but who really knows. </br> What I can tell you is your battery is ", "battery", '%:)'],
    'lngwstring5': ["The curent temperature is ", "temp", "&deg;, it's ", "conditionlowercase", " with a wind speed of ", "wind", ". </br> Your battery is at ", 'battery', '% and is ', 'charginglowercase', '.'],
    'contemp': ['condition', ' ', 'temp', '&deg;'],
    'contemp2': ['condition', ' ', 'temp', '&deg;', 'celsiusorfareinheight'],
    'tempcon': ['temp', ' ', 'condition'],
    'tempcon1': ['temp', '&deg;', 'celsiusorfareinheight', ' ', 'condition'],
    'tempcon2': ['temp', '&deg; ', 'condition'],
    'tempcon2': ['temp', '&deg; ', 'condition'],
    'windstr': ['wind', ' ', 'direction'],
    'temp': ['temp'],
    'tempdeg': ['temp', '&deg;'],
    'tempdegplus': ['temp', '&deg;', 'celsiusorfareinheight'],
    'high': ['high'],
    'highdeg': ['high', '&deg;'],
    'highdegplus': ['high', '&deg;', 'celsiusorfareinheight'],
    'low': ['low'],
    'lowdeg': ['low', '&deg;'],
    'lowdegplus': ['low', '&deg;', 'celsiusorfareinheight'],
    'highdashlow': ['high', '-', 'low'],
    'highslashlow': ['high', '/', 'low'],
    'highdashlowdeg': ['high', '&deg;-', 'low', '&deg;'],
    'highslashlowdeg': ['high', '&deg;/', 'low', '&deg;'],
    'city': ['city'],
    'condition': ['condition'],
    'humidity': ['humidity'],
    'windchill': ['windchill', '&deg;'],
    'wind': ['wind'],
    'uvindex': ['uvindex'],
    'county': ['county'],
    'country': ['country'],
    'countryAbbr': ['countryAbbr'],
    'pressure': ['pressure'],
    'heatindex': ['heatindex'],
    'pressureRising': ['pressureRising'],
    'airquality': ['airquality'],
    //'state' : ['state'],
    'stateAbbr' : ['stateAbbr'],
    'windDirection': ['direction'],
    'visibility': ['visible'],
    'rain': ['rain', '%'],
    'dewpoint': ['dewpoint', '&deg;'],
    'feelslike': ['feelslike'],
    'feelslikedeg': ['feelslike', '&deg;'],

    'hour1': ['hour1'],
    'hour1temp': ['hour1temp'],
    'hour1icon': ['hour1ConditionCode'],
    'hour1precip': ['hour1precip'],

    'hour2': ['hour2'],
    'hour2temp': ['hour2temp'],
    'hour2icon': ['hour2ConditionCode'],
    'hour2precip': ['hour2precip'],

    'hour3': ['hour3'],
    'hour3temp': ['hour3temp'],
    'hour3icon': ['hour3ConditionCode'],
    'hour3precip': ['hour3precip'],

    'hour4': ['hour4'],
    'hour4temp': ['hour4temp'],
    'hour4icon': ['hour4ConditionCode'],
    'hour4precip': ['hour4precip'],

    'hour5': ['hour5'],
    'hour5temp': ['hour5temp'],
    'hour5icon': ['hour5ConditionCode'],
    'hour5precip': ['hour5precip'],

    'hourlystring1': ['hour1', ' Temp: ', 'hour1temp', ' Precip: ', 'hour1precip'],
    'hourlystring2': ['hour2', ' Temp: ', 'hour2temp', ' Precip: ', 'hour2precip'],
    'hourlystring3': ['hour3', ' Temp: ', 'hour3temp', ' Precip: ', 'hour3precip'],
    'hourlystring4': ['hour4', ' Temp: ', 'hour4temp', ' Precip: ', 'hour4precip'],
    'hourlystring5': ['hour5', ' Temp: ', 'hour5temp', ' Precip: ', 'hour5precip'],

    'hourlystringprecip1': ['hour1', ' ', 'hour1precip'],
    'hourlystringprecip2': ['hour2', ' ', 'hour2precip'],
    'hourlystringprecip3': ['hour3', ' ', 'hour3precip'],
    'hourlystringprecip4': ['hour4', ' ', 'hour4precip'],
    'hourlystringprecip5': ['hour5', ' ', 'hour5precip'],

    'hourlystringprecipdash1': ['hour1', ' - ', 'hour1precip'],
    'hourlystringprecipdash2': ['hour2', ' - ', 'hour2precip'],
    'hourlystringprecipdash3': ['hour3', ' - ', 'hour3precip'],
    'hourlystringprecipdash4': ['hour4', ' - ', 'hour4precip'],
    'hourlystringprecipdash5': ['hour5', ' - ', 'hour5precip'],

    'hourlystringprecipcolon1': ['hour1', ' : ', 'hour1precip'],
    'hourlystringprecipcolon2': ['hour2', ' : ', 'hour2precip'],
    'hourlystringprecipcolon3': ['hour3', ' : ', 'hour3precip'],
    'hourlystringprecipcolon4': ['hour4', ' : ', 'hour4precip'],
    'hourlystringprecipcolon5': ['hour5', ' : ', 'hour5precip'],

    'hourlystringtemp1': ['hour1', ' ', 'hour1temp'],
    'hourlystringtemp2': ['hour2', ' ', 'hour2temp'],
    'hourlystringtemp3': ['hour3', ' ', 'hour3temp'],
    'hourlystringtemp4': ['hour4', ' ', 'hour4temp'],
    'hourlystringtemp5': ['hour5', ' ', 'hour5temp'],

    'hourlystringtempdash1': ['hour1', ' - ', 'hour1temp'],
    'hourlystringtempdash2': ['hour2', ' - ', 'hour2temp'],
    'hourlystringtempdash3': ['hour3', ' - ', 'hour3temp'],
    'hourlystringtempdash4': ['hour4', ' - ', 'hour4temp'],
    'hourlystringtempdash5': ['hour5', ' - ', 'hour5temp'],

    'hourlystringtempcolon1': ['hour1', ' : ', 'hour1temp'],
    'hourlystringtempcolon2': ['hour2', ' : ', 'hour2temp'],
    'hourlystringtempcolon3': ['hour3', ' : ', 'hour3temp'],
    'hourlystringtempcolon4': ['hour4', ' : ', 'hour4temp'],
    'hourlystringtempcolon5': ['hour5', ' : ', 'hour5temp'],

    'sunrise': ['sunrise'],
    'sunset': ['sunset'],
    'update': ['updated'],
    'icon': ['icon'],
    'coloricon': ['coloricon'],
    'day1lohigh': ['day1lohigh'],
    'day2lohigh': ['day2lohigh'],
    'day3lohigh': ['day3lohigh'],
    'day4lohigh': ['day4lohigh'],
    'day5lohigh': ['day5lohigh'],
    'day1icon': ['iconday1'],
    'day2icon': ['iconday2'],
    'day3icon': ['iconday3'],
    'day4icon': ['iconday4'],
    'day5icon': ['iconday5'],
    'day1day': ['day1day'],
    'day2day': ['day2day'],
    'day3day': ['day3day'],
    'day4day': ['day4day'],
    'day5day': ['day5day'],
    'day1high': ['day1high', '&deg;'],
    'day2high': ['day2high', '&deg;'],
    'day3high': ['day3high', '&deg;'],
    'day4high': ['day4high', '&deg;'],
    'day5high': ['day5high', '&deg;'],
    'day1highno': ['day1high'],
    'day2highno': ['day2high'],
    'day3highno': ['day3high'],
    'day4highno': ['day4high'],
    'day5highno': ['day5high'],
    'day1low': ['day1low', '&deg;'],
    'day2low': ['day2low', '&deg;'],
    'day3low': ['day3low', '&deg;'],
    'day4low': ['day4low', '&deg;'],
    'day5low': ['day5low', '&deg;'],
    'day1lowno': ['day1low'],
    'day2lowno': ['day2low'],
    'day3lowno': ['day3low'],
    'day4lowno': ['day4low'],
    'day5lowno': ['day5low']
};
systemElements = {
    'ipaddress' : ['ipaddress'],
    'name' : ['devicename'],
    'phonename' : ['devicename'],
    'phonename2' : ['Hello, ','devicename'],
    'phonename3' : ['Good ', 'tod2', ', ' ,'devicename'],
    'firmware' : ['firmware'],

    'stepsToday0': ['stepsToday0'],
    'stepsTodayDay0': ['stepsTodayDay0'],
    'stepsTodaySDay0': ['stepsTodaySDay0'],
    'stepsTodayDate0': ['stepsTodayDate0'],
    'stepsTodayDatePlus0': ['stepsTodayDatePlus0'],

    'stepsToday1': ['stepsToday1'],
    'stepsTodayDay1': ['stepsTodayDay1'],
    'stepsTodaySDay1': ['stepsTodaySDay1'],
    'stepsTodayDate1': ['stepsTodayDate1'],
    'stepsTodayDatePlus1': ['stepsTodayDatePlus1'],

    'stepsToday2': ['stepsToday2'],
    'stepsTodayDay2': ['stepsTodayDay2'],
    'stepsTodaySDay2': ['stepsTodaySDay2'],
    'stepsTodayDate2': ['stepsTodayDate2'],
    'stepsTodayDatePlus2': ['stepsTodayDatePlus2'],

    'stepsToday3': ['stepsToday3'],
    'stepsTodayDay3': ['stepsTodayDay3'],
    'stepsTodaySDay3': ['stepsTodaySDay3'],
    'stepsTodayDate3': ['stepsTodayDate3'],
    'stepsTodayDatePlus3': ['stepsTodayDatePlus3'],

    'stepsToday4': ['stepsToday4'],
    'stepsTodayDay4': ['stepsTodayDay4'],
    'stepsTodaySDay4': ['stepsTodaySDay4'],
    'stepsTodayDate4': ['stepsTodayDate4'],
    'stepsTodayDatePlus4': ['stepsTodayDatePlus4'],

    'stepsToday5': ['stepsToday5'],
    'stepsTodayDay5': ['stepsTodayDay5'],
    'stepsTodaySDay5': ['stepsTodaySDay5'],
    'stepsTodayDate5': ['stepsTodayDate5'],
    'stepsTodayDatePlus5': ['stepsTodayDatePlus5'],

    'stepsToday': ['stepsToday'],
    'stepsTodayDay': ['stepsTodayDay'],
    'stepsTodaySDay': ['stepsTodaySDay'],
    'stepsTodayDate': ['stepsTodayDate'],
    'stepsTodayDatePlus': ['stepsTodayDatePlus'],

    'stepsToday6': ['stepsToday6'],
    'stepsTodayDay6': ['stepsTodayDay6'],
    'stepsTodaySDay6': ['stepsTodaySDay6'],
    'stepsTodayDate6': ['stepsTodayDate6'],
    'stepsTodayDatePlus6': ['stepsTodayDatePlus6'],

    'stepsToday7': ['stepsToday7'],
    'stepsTodayDay7': ['stepsTodayDay7'],
    'stepsTodaySDay7': ['stepsTodaySDay7'],
    'stepsTodayDate7': ['stepsTodayDate7'],
    'stepsTodayDatePlus7': ['stepsTodayDatePlus7'],

    'events1timestring': ['events1timestring'],
    'events2timestring': ['events2timestring'],
    'events3timestring': ['events3timestring'],
    'events4timestring': ['events4timestring'],

    'events1daystring': ['events1sday' , ': ', 'events1title'],
    'events2daystring': ['events2sday' , ': ', 'events2title'],
    'events3daystring': ['events3sday' , ': ', 'events3title'],
    'events4daystring': ['events4sday' , ': ', 'events4title'],

    'events1daystring7': ['events1day' , ' ', 'events1title'],
    'events2daystring7': ['events2day' , ' ', 'events2title'],
    'events3daystring7': ['events3day' , ' ', 'events3title'],
    'events4daystring7': ['events4day' , ' ', 'events4title'],

    'events1monthstring': ['events1month', ' ', 'events1dateval', ': ', 'events1title'],
    'events2monthstring': ['events2month', ' ', 'events2dateval', ': ', 'events2title'],
    'events3monthstring': ['events3month', ' ', 'events3dateval', ': ', 'events3title'],
    'events4monthstring': ['events4month', ' ', 'events4dateval', ': ', 'events4title'],

    'events1monthstring2': ['events1month', ' ', 'events1dateplus', ' ', 'events1title'],
    'events2monthstring2': ['events2month', ' ', 'events2dateplus', ' ', 'events2title'],
    'events3monthstring2': ['events3month', ' ', 'events3dateplus', ' ', 'events3title'],
    'events4monthstring2': ['events4month', ' ', 'events4dateplus', ' ', 'events4title'],

    'events1monthstring3': ['events1month', ' ', 'events1dateplus'],
    'events2monthstring3': ['events2month', ' ', 'events2dateplus'],
    'events3monthstring3': ['events3month', ' ', 'events3dateplus'],
    'events4monthstring3': ['events4month', ' ', 'events4dateplus'],

    'events1monthstring4': ['events1month', ' ', 'events1dateval'],
    'events2monthstring4': ['events2month', ' ', 'events2dateval'],
    'events3monthstring4': ['events3month', ' ', 'events3dateval'],
    'events4monthstring4': ['events4month', ' ', 'events4dateval'],

    'events1monthstring5': ['events1month', ' ', 'events1dateplus', ': ', 'events1title'],
    'events2monthstring5': ['events2month', ' ', 'events2dateplus', ': ', 'events2title'],
    'events3monthstring5': ['events3month', ' ', 'events3dateplus', ': ', 'events3title'],
    'events4monthstring5': ['events4month', ' ', 'events4dateplus', ': ', 'events4title'],

    'events1monthstring6': ['events1month', ' ', 'events1dateval', ' ', 'events1title'],
    'events2monthstring6': ['events2month', ' ', 'events2dateval', ' ', 'events2title'],
    'events3monthstring6': ['events3month', ' ', 'events3dateval', ' ', 'events3title'],
    'events4monthstring6': ['events4month', ' ', 'events4dateval', ' ', 'events4title'],

    'events1daystring8': ['events1day', ' ', 'events1dateplus', ' ', 'events1month'],
    'events2daystring8': ['events2day', ' ', 'events2dateplus', ' ', 'events2month'],
    'events3daystring8': ['events3day', ' ', 'events3dateplus', ' ', 'events3month'],
    'events4daystring8': ['events4day', ' ', 'events4dateplus', ' ', 'events4month'],

    

    'events1date' : ['events1date'],
    'events1day' : ['events1day'],
    'events1title' : ['events1title'],
    'events1sday' : ['events1sday'],
    'events1dateval' : ['events1dateval'],
    'events1month' : ['events1month'],
    'events1dateplus': ['events1dateplus'],

    'events1starttime': ['events1starttime'],
    'events1starttimepadded': ['events1starttimepadded'],
    'events1starttime': ['events1starttime'],
    'events1starttimepaddedpm': ['events1starttimepaddedpm'],
    'events1starttimepm': ['events1starttimepm'],
    'events1endtime': ['events1endtime'],
    'events1endtimepadded': ['events1endtimepadded'],
    'events1endtimepaddedpm': ['events1endtimepaddedpm'],
    'events1endtimepm': ['events1endtimepm'],



    'events2date' : ['events2date'],
    'events2day' : ['events2day'],
    'events2title' : ['events2title'],
    'events2sday' : ['events2sday'],
    'events2dateval' : ['events2dateval'],
    'events2month' : ['events2month'],
    'events2dateplus': ['events2dateplus'],
    'events2starttime': ['events2starttime'],
    'events2starttimepadded': ['events2starttimepadded'],
    'events2starttime': ['events2starttime'],
    'events2starttimepaddedpm': ['events2starttimepaddedpm'],
    'events2starttimepm': ['events2starttimepm'],
    'events2endtime': ['events2endtime'],
    'events2endtimepadded': ['events2endtimepadded'],
    'events2endtimepaddedpm': ['events2endtimepaddedpm'],
    'events2endtimepm': ['events2endtimepm'],

    'events3date' : ['events3date'],
    'events3day' : ['events3day'],
    'events3title' : ['events3title'],
    'events3sday' : ['events3sday'],
    'events3dateval' : ['events3dateval'],
    'events3month' : ['events3month'],
    'events3dateplus': ['events3dateplus'],
    'events3starttime': ['events3starttime'],
    'events3starttimepadded': ['events3starttimepadded'],
    'events3starttime': ['events3starttime'],
    'events3starttimepaddedpm': ['events3starttimepaddedpm'],
    'events3starttimepm': ['events3starttimepm'],
    'events3endtime': ['events3endtime'],
    'events3endtimepadded': ['events3endtimepadded'],
    'events3endtimepaddedpm': ['events3endtimepaddedpm'],
    'events3endtimepm': ['events3endtimepm'],

    'events4date' : ['events4date'],
    'events4day' : ['events4day'],
    'events4title' : ['events4title'],
    'events4sday' : ['events4sday'],
    'events4dateval' : ['events4dateval'],
    'events4month' : ['events4month'],
    'events4dateplus': ['events4dateplus'],
    'events4starttime': ['events4starttime'],
    'events4starttimepadded': ['events4starttimepadded'],
    'events4starttime': ['events4starttime'],
    'events4starttimepaddedpm': ['events4starttimepaddedpm'],
    'events4starttimepm': ['events4starttimepm'],
    'events4endtime': ['events4endtime'],
    'events4endtimepadded': ['events4endtimepadded'],
    'events4endtimepaddedpm': ['events4endtimepaddedpm'],
    'events4endtimepm': ['events4endtimepm'],

    'battery' : ['battery'],
    'batterypercent' : ['battery', '%'],
    'batterypie' : ['batterycircle'],
    'batteryperslashcharge' : ['battery', '%', ' / ', 'chargetext'],
    'chargingtxt' : ['chargetext'],
    'chargingstate' : ['chargetext'],
    'onlycharging' : ['onlycharging'],
    'unlock' : ['Unlock'],
    'sleep' : ['Sleep'],
    'respring' : ['Respring'],
    'flashlight' : ['Flashlight'],
    'searchicon' : ['z'],
    'searchtext' : ['Search'],
    'signal' : ['signalbars'],
    'signalpercent' : ['signalpercent'],
    'alarmstring' : ['getalarmday', ' ', 'getalarmstring'],
    'alarmstringsmall' : ['getalarmday', ' ', 'getalarmtime'],
    'alarm24' : ['getalarmstring'],
    'alarm' : ['getalarmtime'],
    'alarmhr' : ['getalarmhr'],
    'alarmmin' : ['getalarmmin'],
    'alarmday' : ['getalarmweekday'],
    'alarmsday' : ['getalarmday'],
    'wifi': ['wifibars'],
    'wifipercent': ['wifi', '%'],
    'notifymail' : ['mailbadge'],
    'notifysms' : ['smsbadge'],
    'notifyphone' : ['phonebadge'],
    'notifywhats' : ['whatsbadge'],
    'notifytelegram' : ['telegrambadge'],
    'notifyfbmessenger' : ['fbmessengerbadge'],
    'notifydiscord' : ['discordbadge'],
    'notifyviber' : ['viberbadge'],
    'notifyinstagram' : ['instagrambadge'],
    'notifyfacebook' : ['facebookbadge'],
    'notifygmail' : ['gmailbadge'],
    'notifyoutlook' : ['outlookbadge'],
    'notifyairmail' : ['airmailbadge'],
    'notifyymail' : ['ymailbadge'],
    'notifysnapchat' : ['snapchatbadge'],
    'notifyreddit' : ['redditbadge'],
    'notifygoogleplus' : ['googleplusbadge'],
    'notifylinkedin' : ['linkedinbadge'],
    'notifyslack' : ['slackbadge'],
    'notifytelegramx' : ['telegramxbadge'],
    'notifyspark' : ['sparkbadge'],
    'notifytwitter' : ['twitterbadge'],
    'notifytweetbot' : ['tweetbot4badge'],
    'notifyyoutube' : ['youtubebadge'],
    'ramFree' : ['ramFree'],
    'ramUsed' : ['ramUsed'],
    'ramAvailable' : ['ramAvailable'],
    'ramFreeMB' : ['ramFree', ' mb'],
    'ramUsedMB' : ['ramUsed', ' mb'],
    'ramAvailableMB' : ['ramAvailable', ' mb'],
    'app1' : ['Mail-com.apple.mobilemail'],
    'app2' : ['SMS-com.apple.MobileSMS'],
    'app3' : ['Phone-com.apple.mobilephone'],
    'app4' : ['Twitter-com.atebits.Tweetie2'],
    'app5' : ['Tweetbot3-com.tapbots.Tweetbot3'],
    'app6' : ['Telegram-ph.telegra.Telegraph'],
    'app7' : ['Instagram-com.burbn.instagram'],
    'app8' : ['Pandora-com.pandora'],
    'app9' : ['Spotify-com.spotify.client'],
    'app10' : ['Facebook-com.facebook.Facebook'],
    'app11' : ['Kik-com.kik.chat'],
    'app12' : ['YouTube-com.google.ios.youtube'],
    'app13' : ['WhatsApp-net.whatsapp.WhatsApp'],
    'app14' : ['Safari-com.apple.mobilesafari'],
    'app15' : ['Weather-com.apple.weather'],
    'app16' : ['Clock-com.apple.mobiletimer'],
    'app17' : ['Music-com.apple.Music'],
    'app18' : ['Camera-com.apple.camera'],
    'app19' : ['Reminders-com.apple.reminders'],
    'app20' : ['Notes-com.apple.mobilenotes'],
    'app21' : ['Maps-com.apple.Maps'],
    'app22' : ['Calendar-com.apple.mobilecal'],
    'app23' : ['Calculator-com.apple.calculator'],
    'app24' : ['Cydia-com.saurik.Cydia'],
    'app25' : ['YouTube-com.google.ios.youtube'],
    'app26' : ['Settings-com.apple.Preferences'],
    'app27' : ['AppStore-com.apple.AppStore'],
    'app28' : ['Health-com.apple.Health'],
    'app29' : ['TelegramHD-org.telegram.TelegramHD'],
    'app30' : ['Discord-com.hammerandchisel.discord'],
    'boxOne' : [''],
    'boxTwo' : [''],
    'boxThree' : [''],
    'boxFour' : [''],
    'boxFive' : [''],
    'boxSix' : [''],
    'boxSeven' : [''],
    'boxEight' : [''],
    'boxNine' : [''],
    'boxTen' : [''],
    'boxEleven' : [''],
    'boxTwelve' : [''],
    'boxThirteen' : [''],
    'boxFourteen' : [''],
    'boxFifteen' : [''],
    'boxSixteen' : [''],
    'boxSeventeen' : [''],
    'boxEighteen' : [''],
    'boxNineteen' : [''],
    'boxTwenty' : [''],

    'sy1': ['⦿'],
    'sy2': ['◉'],
    'sy3': ['○'],
    'sy4': ['◌'],
    'sy':  ['◎'],
    'sy6': ['●'],
    'sy7': ['◔'],
    'sy8': ['◯'],
    'sy9': ['〇'],
    'sy10': ['⊕'],
    'sy11': ['⊖'],
    'sy12': ['⊘'],
    'sy13': ['❝'],
    'sy14': ['❞'],
    'sy15': ['♛'],
    'sy16': ['☾'],
    'sy17': ['﹏'],
    'sy18': ['︴'],
    'sy19': ['☰'],
    'sy20': ['▸'],
    'sy21': ['▾'],
    'sy22': ['⎔'],
    'sy23': [''],
    'sy24': ['⍝'],
    'sy25': ['⌘'],
    'sy26': ['⌥'],
    'sy27': ['⍋'],
    'sy28': ['✖'],
    'sy29': ['❜'],
    'sy30': ['❛'],
    'sy31': ['▦'],
    'sy32': ['❀'],
    'sy33': ['⋆'],
    'sy34': ['™'],
    'sy35': ['⊛'],
    'sy36': ['◐'],
    'sy37': ['◑'],
    'sy38': ['﹄'],
    'sy39': ['﹃'],
    'sy40': ['〣'],
    'sy41': ['㋡'],
    'sy42': ['ッ'],
    'sy43': ['✘'],
    'sy44': ['❤'],
    'sy45': ['⤻'],
    'sy46': ['⬏'],
    'sy47': ['☽'],
    'sy48': ['☾'],
    'sy49': ['♪'],
    'sy50': ['〈'],
    'sy51': ['〉'],
    'sy52': ['✹'],
    'sy53': ['☂'],

    'ft1_mashup': ['A'],
    'ft2_mashup': ['B'],
    'ft3_mashup': ['C'],
    'ft4_mashup': ['D'],
    'ft5_mashup': ['E'],
    'ft6_mashup': ['F'],
    'ft7_mashup': ['G'],
    'ft8_mashup': ['H'],
    'ft9_mashup': ['I'],
    'ft10_mashup': ['J'],
    'ft11_mashup': ['K'],
    'ft12_mashup': ['L'],
    'ft13_mashup': ['M'],
    'ft14_mashup': ['N'],
    'ft15_mashup': ['O'],
    'ft16_mashup': ['P'],
    'ft17_mashup': ['Q'],
    'ft18_mashup': ['R'],
    'ft19_mashup': ['S'],
    'ft20_mashup': ['T'],
    'ft21_mashup': ['U'],
    'ft22_mashup': ['V'],
    'ft23_mashup': ['W'],
    'ft24_mashup': ['X'],
    'ft25_mashup': ['Y'],
    'ft26_mashup': ['Z'],
    'ft27_mashup': ['a'],
    'ft28_mashup': ['b'],
    'ft29_mashup': ['c'],
    'ft30_mashup': ['d'],
    'ft31_mashup': ['e'],
    'ft32_mashup': ['f'],
    'ft33_mashup': ['g'],
    'ft34_mashup': ['h'],
    'ft35_mashup': ['i'],
    'ft36_mashup': ['j'],
    'ft37_mashup': ['k'],
    'ft38_mashup': ['l'],
    'ft39_mashup': ['m'],
    'ft40_mashup': ['n'],
    'ft41_mashup': ['o'],
    'ft42_mashup': ['p'],
    'ft43_mashup': ['q'],
    'ft44_mashup': ['r'],
    'ft45_mashup': ['s'],
    'ft46_mashup': ['t'],
    'ft47_mashup': ['u'],
    'ft48_mashup': ['v'],
    'ft49_mashup': ['w'],
    'ft50_mashup': ['x'],
    'ft51_mashup': ['y'],
    'ft52_mashup': ['z'],
    'ft53_mashup': ['0'],
    'ft54_mashup': ['1'],
    'ft55_mashup': ['2'],
    'ft56_mashup': ['3'],
    'ft57_mashup': ['4'],
    'ft58_mashup': ['5'],
    'ft59_mashup': ['6'],
    'ft60_mashup': ['7'],
    'ft61_mashup': ['8'],
    'ft62_mashup': ['9'],



    'ft1_entypoF': ['A'],
    'ft2_entypoF': ['B'],
    'ft3_entypoF': ['C'],
    'ft4_entypoF': ['D'],
    'ft5_entypoF': ['E'],
    'ft6_entypoF': ['F'],
    'ft7_entypoF': ['G'],
    'ft8_entypoF': ['H'],
    'ft9_entypoF': ['I'],
    'ft10_entypoF': ['J'],
    'ft11_entypoF': ['K'],
    'ft12_entypoF': ['L'],
    'ft13_entypoF': ['M'],
    'ft14_entypoF': ['N'],
    'ft15_entypoF': ['O'],
    'ft16_entypoF': ['P'],
    'ft17_entypoF': ['Q'],
    'ft18_entypoF': ['R'],
    'ft19_entypoF': ['S'],
    'ft20_entypoF': ['T'],
    'ft21_entypoF': ['U'],
    'ft22_entypoF': ['V'],
    'ft23_entypoF': ['W'],
    'ft24_entypoF': ['X'],
    'ft25_entypoF': ['Y'],
    'ft26_entypoF': ['Z'],
    'ft27_entypoF': ['a'],
    'ft28_entypoF': ['b'],
    'ft29_entypoF': ['c'],
    'ft30_entypoF': ['d'],
    'ft31_entypoF': ['e'],
    'ft32_entypoF': ['f'],
    'ft33_entypoF': ['g'],
    'ft34_entypoF': ['h'],
    'ft35_entypoF': ['i'],
    'ft36_entypoF': ['j'],
    'ft37_entypoF': ['k'],
    'ft38_entypoF': ['l'],
    'ft39_entypoF': ['m'],
    'ft40_entypoF': ['n'],
    'ft41_entypoF': ['o'],
    'ft42_entypoF': ['p'],
    'ft43_entypoF': ['q'],
    'ft44_entypoF': ['r'],
    'ft45_entypoF': ['s'],
    'ft46_entypoF': ['t'],
    'ft47_entypoF': ['u'],
    'ft48_entypoF': ['v'],
    'ft49_entypoF': ['w'],
    'ft50_entypoF': ['x'],
    'ft51_entypoF': ['y'],
    'ft52_entypoF': ['z'],
    'ft53_entypoF': ['0'],
    'ft54_entypoF': ['1'],
    'ft55_entypoF': ['2'],
    'ft56_entypoF': ['3'],
    'ft57_entypoF': ['4'],
    'ft58_entypoF': ['5'],
    'ft59_entypoF': ['6'],
    'ft60_entypoF': ['7'],
    'ft61_entypoF': ['8'],
    'ft62_entypoF': ['9'],

    'ft1_mat2F': ['A'],
    'ft2_mat2F': ['B'],
    'ft3_mat2F': ['C'],
    'ft4_mat2F': ['D'],
    'ft5_mat2F': ['E'],
    'ft6_mat2F': ['F'],
    'ft7_mat2F': ['G'],
    'ft8_mat2F': ['H'],
    'ft9_mat2F': ['I'],
    'ft10_mat2F': ['J'],
    'ft11_mat2F': ['K'],
    'ft12_mat2F': ['L'],
    'ft13_mat2F': ['M'],
    'ft14_mat2F': ['N'],
    'ft15_mat2F': ['O'],
    'ft16_mat2F': ['P'],
    'ft17_mat2F': ['Q'],
    'ft18_mat2F': ['R'],
    'ft19_mat2F': ['S'],
    'ft20_mat2F': ['T'],
    'ft27_mat2F': ['a'],
    'ft28_mat2F': ['b'],
    'ft29_mat2F': ['c'],
    'ft30_mat2F': ['d'],
    'ft31_mat2F': ['e'],
    'ft32_mat2F': ['f'],
    'ft33_mat2F': ['g'],
    'ft34_mat2F': ['h'],
    'ft35_mat2F': ['i'],
    'ft36_mat2F': ['j'],
    'ft37_mat2F': ['k'],
    'ft38_mat2F': ['l'],
    'ft39_mat2F': ['m'],
    'ft40_mat2F': ['n'],
    'ft41_mat2F': ['o'],
    'ft42_mat2F': ['p'],
    'ft43_mat2F': ['q'],
    'ft44_mat2F': ['r'],
    'ft45_mat2F': ['s'],
    'ft46_mat2F': ['t'],

    'ft1_mat3F': ['A'],
    'ft2_mat3F': ['B'],
    'ft3_mat3F': ['C'],
    'ft4_mat3F': ['D'],
    'ft5_mat3F': ['E'],
    'ft6_mat3F': ['F'],
    'ft7_mat3F': ['G'],
    'ft8_mat3F': ['H'],
    'ft9_mat3F': ['I'],
    'ft10_mat3F': ['J'],
    'ft11_mat3F': ['K'],
    'ft12_mat3F': ['L'],
    'ft13_mat3F': ['M'],
    'ft14_mat3F': ['N'],
    'ft15_mat3F': ['O'],
    'ft16_mat3F': ['P'],
    'ft17_mat3F': ['Q'],
    'ft18_mat3F': ['R'],
    'ft19_mat3F': ['S'],
    'ft20_mat3F': ['T'],
    'ft21_mat3F': ['U'],
    'ft22_mat3F': ['V'],
    'ft23_mat3F': ['W'],
    'ft24_mat3F': ['X'],
    'ft25_mat3F': ['Y'],
    'ft26_mat3F': ['Z'],
    'ft27_mat3F': ['a'],
    'ft28_mat3F': ['b'],
    'ft29_mat3F': ['c'],
    'ft30_mat3F': ['d'],
    'ft31_mat3F': ['e'],
    'ft32_mat3F': ['f'],
    'ft33_mat3F': ['g'],
    'ft34_mat3F': ['h'],
    'ft35_mat3F': ['i'],
    'ft36_mat3F': ['j'],
    'ft37_mat3F': ['k'],
    'ft38_mat3F': ['l'],
    'ft39_mat3F': ['m'],
    'ft40_mat3F': ['n'],
    'ft41_mat3F': ['o'],
    'ft42_mat3F': ['p'],
    'ft43_mat3F': ['q'],
    'ft44_mat3F': ['r'],
    'ft45_mat3F': ['s'],
    'ft46_mat3F': ['t'],
    'ft47_mat3F': ['u'],
    'ft48_mat3F': ['v'],
    'ft49_mat3F': ['w'],
    'ft50_mat3F': ['x'],
    'ft51_mat3F': ['y'],
    'ft52_mat3F': ['z'],
    'ft53_mat3F': ['0'],
    'ft54_mat3F': ['1'],
    'ft55_mat3F': ['2'],
    'ft56_mat3F': ['3'],
    'ft57_mat3F': ['4'],
    'ft58_mat3F': ['5'],
    'ft59_mat3F': ['6'],
    'ft60_mat3F': ['7'],
    'ft61_mat3F': ['8'],
    'ft62_mat3F': ['9'],

    'ft1_mat4F': ['A'],
    'ft2_mat4F': ['B'],
    'ft3_mat4F': ['C'],
    'ft4_mat4F': ['D'],
    'ft5_mat4F': ['E'],
    'ft6_mat4F': ['F'],
    'ft7_mat4F': ['G'],
    'ft8_mat4F': ['H'],
    'ft9_mat4F': ['I'],
    'ft10_mat4F': ['J'],
    'ft11_mat4F': ['K'],
    'ft12_mat4F': ['L'],
    'ft13_mat4F': ['M'],
    'ft14_mat4F': ['N'],
    'ft15_mat4F': ['O'],
    'ft16_mat4F': ['P'],
    'ft17_mat4F': ['Q'],
    'ft18_mat4F': ['R'],
    'ft19_mat4F': ['S'],
    'ft20_mat4F': ['T'],
    'ft21_mat4F': ['U'],
    'ft22_mat4F': ['V'],
    'ft23_mat4F': ['W'],
    'ft24_mat4F': ['X'],
    'ft25_mat4F': ['Y'],
    'ft26_mat4F': ['Z'],
    'ft27_mat4F': ['a'],
    'ft28_mat4F': ['b'],
    'ft29_mat4F': ['c'],
    'ft30_mat4F': ['d'],
    'ft31_mat4F': ['e'],
    'ft32_mat4F': ['f'],
    'ft33_mat4F': ['g'],
    'ft34_mat4F': ['h'],
    'ft35_mat4F': ['i'],
    'ft36_mat4F': ['j'],
    'ft37_mat4F': ['k'],
    'ft38_mat4F': ['l'],
    'ft39_mat4F': ['m'],
    'ft40_mat4F': ['n'],
    'ft41_mat4F': ['o'],
    'ft42_mat4F': ['p'],
    'ft43_mat4F': ['q'],
    'ft44_mat4F': ['r'],
    'ft45_mat4F': ['s'],
    'ft46_mat4F': ['t'],
    'ft47_mat4F': ['u'],
    'ft48_mat4F': ['v'],
    'ft49_mat4F': ['w'],
    'ft50_mat4F': ['x'],
    'ft51_mat4F': ['y'],
    'ft52_mat4F': ['z'],
    'ft53_mat4F': ['0'],
    'ft54_mat4F': ['1'],
    'ft55_mat4F': ['2'],
    'ft56_mat4F': ['3'],
    'ft57_mat4F': ['4'],
    'ft58_mat4F': ['5'],
    'ft59_mat4F': ['6'],
    'ft60_mat4F': ['7'],
    'ft61_mat4F': ['8'],
    'ft62_mat4F': ['9'],

    'ft1_mat5F': ['A'],
    'ft2_mat5F': ['B'],
    'ft3_mat5F': ['C'],
    'ft4_mat5F': ['D'],
    'ft5_mat5F': ['E'],
    'ft6_mat5F': ['F'],
    'ft7_mat5F': ['G'],
    'ft8_mat5F': ['H'],
    'ft9_mat5F': ['I'],
    'ft10_mat5F': ['J'],
    'ft11_mat5F': ['K'],
    'ft12_mat5F': ['L'],
    'ft13_mat5F': ['M'],
    'ft14_mat5F': ['N'],
    'ft15_mat5F': ['O'],
    'ft16_mat5F': ['P'],
    'ft17_mat5F': ['Q'],
    'ft18_mat5F': ['R'],
    'ft19_mat5F': ['S'],
    'ft20_mat5F': ['T'],
    'ft21_mat5F': ['U'],
    'ft22_mat5F': ['V'],
    'ft23_mat5F': ['W'],
    'ft24_mat5F': ['X'],
    'ft25_mat5F': ['Y'],
    'ft26_mat5F': ['Z'],
    'ft27_mat5F': ['a'],
    'ft28_mat5F': ['b'],
    'ft29_mat5F': ['c'],
    'ft30_mat5F': ['d'],
    'ft31_mat5F': ['e'],
    'ft32_mat5F': ['f'],
    'ft33_mat5F': ['g'],
    'ft34_mat5F': ['h'],
    'ft35_mat5F': ['i'],
    'ft36_mat5F': ['j'],
    'ft37_mat5F': ['k'],
    'ft38_mat5F': ['l'],
    'ft39_mat5F': ['m'],
    'ft40_mat5F': ['n'],
    'ft41_mat5F': ['o'],
    'ft42_mat5F': ['p'],
    'ft43_mat5F': ['q'],
    'ft44_mat5F': ['r'],
    'ft45_mat5F': ['s'],
    'ft46_mat5F': ['t'],
    'ft47_mat5F': ['u'],
    'ft48_mat5F': ['v'],
    'ft49_mat5F': ['w'],
    'ft50_mat5F': ['x'],
    'ft51_mat5F': ['y'],
    'ft52_mat5F': ['z'],
    'ft53_mat5F': ['0'],
    'ft54_mat5F': ['1'],
    'ft55_mat5F': ['2'],
    'ft56_mat5F': ['3'],
    'ft57_mat5F': ['4'],
    'ft58_mat5F': ['5'],
    'ft59_mat5F': ['6'],
    'ft60_mat5F': ['7'],
    'ft61_mat5F': ['8'],
    'ft62_mat5F': ['9'],

};
clockMethods = {
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    hour: function() {
        var hour = (options.twentyfour === true) ? date.getHours() : (date.getHours() + 11) % 12 + 1;
        return hour;
    },
    zhour: function() {
        var hour = (options.twentyfour === true) ? date.getHours() : (date.getHours() + 11) % 12 + 1;
        hour = hour < 10 ? "0" + hour : " " + hour;
        return hour;
    },
    rawhour: function() {
        return date.getHours();
    },
    minute: function() {
        return (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    },
    second: function() {
        return (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    },
    rawminute: function() {
        return date.getMinutes();
    },
    ampmstrict: function() {
        var ampm = (date.getHours() > 11) ? "pm" : "am";
        return ampm;
    },
    am: function() {
        var ampm = (date.getHours() > 11) ? "pm" : "am";
        if (options.twentyfour) {
            ampm = "";
        }
        return ampm;
    },
    amalways: function() {
        return (date.getHours() > 11) ? "pm" : "am";
    },
    tod: function() {
        return (date.getHours() < 12 ? 'Morning' : date.getHours() < 18 ? 'Afternoon' : 'Evening');
    },
    tod2: function() {
        return (date.getHours() < 12 ? 'Morning' : date.getHours() < 18 ? 'Afternoon' : 'Night');
    },
    date: function() {
        return date.getDate();
    },
    paddeddate: function() {
        return (date.getDate() <= 9) ? "0" + date.getDate() : date.getDate();
    },
    paddeddatecut0: function() {
        return (date.getDate() <= 9) ? String("0" + date.getDate()).charAt(0) : String(date.getDate()).charAt(0);
    },
    paddeddatecut1: function() {
        return (date.getDate() <= 9) ? String("0" + date.getDate()).charAt(1) : String(date.getDate()).charAt(1);
    },
    prevdate: function() {
        var pd = (this.date() === 0) ? this.daysInMonth[this.month() - 1] : this.date() - 1;
        return pd;
    },
    nextdate: function() {
        var nd = (this.date() === 0) ? this.daysInMonth[this.month() + 1] : this.date() + 1;
        return nd;
    },
    day: function() {
        return date.getDay();
    },
    month: function() {
        return date.getMonth();
    },
    monthdate: function() {
        var month = date.getMonth() + 1;
        if (month > 12) {
            month = 0;
        }
        return month;
    },
    monthdatepadded: function () {
        var month = date.getMonth() + 1;
        if (month > 12) {
            month = 0;
        }
        return (month <= 9) ? "0" + month : month;
    },
    year: function() {
        return date.getFullYear();
    },
    yearslice24: function() {
        return date.getFullYear().toString().slice(2, 4);
    },
    smyear: function() {
        return date.getFullYear() % 1000;
    },
    daysLeft: function() {
        var nextYear = new Date("Jan 1, " + Number(date.getFullYear() + 1) + " 00:00:00").getTime(),
            today = new Date().getTime(),
            sep = nextYear - today,
            days = Math.floor(sep / (1000 * 60 * 60 * 24));
        //var hours = Math.floor((sep % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //var minutes = Math.floor((sep % (1000 * 60 * 60)) / (1000 * 60));
        //var seconds = Math.floor((sep % (1000 * 60)) / 1000);
        return days;
    },
    daysLeftPercentToGo: function(){
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);  // Start of this year
        var end = new Date(now.getFullYear() + 1, 0, 0);  // End of this year
        var done = (now-start) / (end-start);
        return Math.round(100 - (done*100)) + "%";
    },
    daysLeftPercentLeft: function(){
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);  // Start of this year
        var end = new Date(now.getFullYear() + 1, 0, 0);  // End of this year
        var done = (now-start) / (end-start);
        return  Math.round(done*100) + "%";
    },
    hourtext: function() {
        var hourtxt;
        if (options.languages === 'fr') {
            hourtxt = (options.twentyfour === true) ? ["Minuit", "Une heure", "Deux heures", "Trois heures", "Quatre heures", "Cing heures", "Six heures", "Sept heures", "Huit heures", "Neuf heures", "Dix heures", "Onze heures", "Midi", "Treize heures", "Quatorze heures", "Quinze heures", "Seize heures", "Dix-sept heures", "Dix-huit heures", "Dix-neuf heures", "Vingt heures", "Vingt et une heures", "Vingt-deux heures", "Vingt-trois heures", "Minuit"] : ["Minuit", "Une heure", "Deux heure", "Trois heure", "Quatre heure", "Cing heure", "Six heure", "Sept heure", "Huit heure", "Neuf heure", "Dix heure", "Onze heure", "Midi", "Une heure", "Deux heure", "Trois heure", "Quatre heure", "Cing heure", "Six heure", "Sept heure", "Huit heure", "Neuf heure", "Dix heure", "Onze heure", "Minuit"];
        } else {
            hourtxt = (options.twentyfour === true) ? ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four"] : ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
        }
        return hourtxt[this.rawhour()];
    },
    hourtextdot: function() {
        var hourtxt = (options.twentyfour === true) ? ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty.One", "Twenty.Two", "Twenty.Three", "Twenty.Four"] : ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
        return hourtxt[this.rawhour()];
    },
    minuteonetext: function() {
        var minuteone;
        if (options.languages === 'fr') {
            minuteone = ["", "et une", "et deux", "et trois", "et quatre", "et cinq", "et six", "et sept", "et huit", "et neuf", "et dix", "et onze", "et douze", "et treize", "et quatorze", "et quinze", "et seize", "et dix-sept", "et dix-huit", "et dix-neuf", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et vingt", "et trente", "et trente", "et trente", "et trente", "et trente", "et trente", "et trente", "et trente", "et trente", "et trente", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et quarante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante", "et cinquante"];
        } else {
            minuteone = ["o' clock", "o' one", "o' two", "o' three", "o' four", "o' five", "o' six", "o' seven", "o' eight", "o' nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
        }
        if (minuteone[this.rawminute()] !== undefined) {
            return minuteone[this.rawminute()];
        }
        return "";
    },
    minuteonetextNoSpace: function () {
        var minuteone = ["o'clock", "o'one", "o'two", "o'three", "o'four", "o'five", "o'six", "o'seven", "o'eight", "o'nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
        if (minuteone[this.rawminute()] !== undefined) {
            return minuteone[this.rawminute()];
        }
        return "";
    },
    minuteonetext2: function() {
        var minuteone = ["zero zero", "zero one", "zero two", "zero three", "zero four", "zero five", "zero six", "zero seven", "zero eight", "zero nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
        if (minuteone[this.rawminute()] !== undefined) {
            return minuteone[this.rawminute()];
        }
        return "";
    },
    minuteonetext3: function () {
        var minuteone = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine", "forty", "forty one", "forty two", "forty three", "forty four", "forty five", "forty six", "forty seven", "forty eight", "forty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine", "sixty"];
        if (minuteone[this.rawminute()] !== undefined) {
            return minuteone[this.rawminute()];
        }
        return "";
    },
    minuteonetextdot: function() {
        var minuteone;
        if (options.languages === 'fr') {
            minuteone = ["", "et.une", "et.deux", "et.trois", "et.quatre", "et.cinq", "et.six", "et.sept", "et.huit", "et.neuf", "et.dix", "et.onze", "et.douze", "et.treize", "et.quatorze", "et.quinze", "et.seize", "et.dix-sept", "et.dix-huit", "et.dix-neuf", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.vingt", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.trente", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.quarante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante", "et.cinquante"];
        } else {
            minuteone = ["", "one", "o.two", "o.three", "o.four", "o.five", "o.six", "o.seven", "o.eight", "o.nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
        }
        if (minuteone[this.rawminute()] !== undefined) {
            return minuteone[this.rawminute()];
        }
        return "";
    },
    minutetwotext: function() {
        var minutetwo;
        if (options.languages === 'fr') {
            minutetwo = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "et-un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "", "et-un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "", "et-un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "", "et-un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", ""];
        } else {
            minutetwo = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", ""];
        }
        if (minutetwo[this.rawminute()] !== undefined) {
            return minutetwo[this.rawminute()];
        }
        return "";
    },
    daytext: function() {
        return translate[options.languages].weekday[this.day()];
    },
    daytextcut: function() {
        return translate[options.languages].weekday[this.day()].substring(3);
    },
    daytextcut1: function() {
        return translate[options.languages].weekday[this.day()].substring(1);
    },
    yesterdaydaytext: function() {
        return (this.day() === 0) ? translate[options.languages].weekday[6] : translate[options.languages].weekday[this.day() - 1];
    },
    nextdaytext: function() {
        return (this.day() === 6) ? translate[options.languages].weekday[0] : translate[options.languages].weekday[this.day() + 1];
    },
    sdaytext: function() {
        return translate[options.languages].sday[this.day()];
    },
    sdaytextslice01: function() {
        return String(translate[options.languages].sday[this.day()]).slice(0, 1);
    },
    sdaytextslice12: function() {
        return String(translate[options.languages].sday[this.day()]).slice(1, 2);
    },
    sdaytextslice23: function() {
        return String(translate[options.languages].sday[this.day()]).slice(2, 3);
    },
    mdaytext: function() {
        return translate[options.languages].mday[this.day()];
    },
    snextday: function() {
        return (this.day() === 6) ? translate[options.languages].sday[0] : translate[options.languages].sday[this.day() + 1];
    },
    sprevday: function() {
        return (this.day() === 0) ? translate[options.languages].sday[6] : translate[options.languages].sday[this.day() - 1];
    },
    monthtext: function() {
        return translate[options.languages].month[this.month()];
    },
    monthtextcut: function() {
        return translate[options.languages].month[this.month()].substring(3);
    },
    nextmonthtext: function() {
        return (this.month() === 11) ? translate[options.languages].month[0] : translate[options.languages].month[this.month() + 1];
    },
    prevmonthtext: function() {
        return (this.month() === 0) ? translate[options.languages].month[11] : translate[options.languages].month[this.month() - 1];
    },
    smonthtext: function() {
        return translate[options.languages].smonth[this.month()];
    },
    smonthtextslice01: function() {
        return String(translate[options.languages].smonth[this.month()]).slice(0, 1);
    },
    smonthtextslice12: function() {
        return String(translate[options.languages].smonth[this.month()]).slice(1, 2);
    },
    smonthtextslice23: function() {
        return String(translate[options.languages].smonth[this.month()]).slice(2, 3);
    },
    snextmonth: function() {
        return (this.month() === 11) ? translate[options.languages].smonth[0] : translate[options.languages].smonth[this.month() + 1];
    },
    sprevmonth: function() {
        return (this.month() === 0) ? translate[options.languages].smonth[11] : translate[options.languages].smonth[this.month() - 1];
    },
    datetext: function() {
        var textdate = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eightheenth", "Nineteenth", "Twentieth", "TwentyFirst", "TwentySecond", "TwentyThird", 'TwentyFourth', "TwentyFifth", "TwentySixth", "TwentySeventh", "TwentyEight", "TwentyNinth", "Thirtyith", "ThirtyFirst"];
        return textdate[this.date() - 1];
    },
    nth: function(d) {
        if (d > 3 && d < 21) {
            return 'th';
        }
        switch (d % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    dateplus: function() {
        return this.date() + this.nth(Number(this.date()));
    },
    getTimer: function() {
        return iOSClockTimer;
    },
    hrmintx: function() {
        return (this.minutetwotext() !== "") ? this.hourtextdot() + '.' + this.minuteonetextdot() + '.' + this.minutetwotext() : this.hourtextdot() + '.' + this.minuteonetextdot() + this.minutetwotext();
    },
    yeartext: function() {
        return convertTOWord(this.year());
    }
};
weatherMethods = {
    spd: function(){
        return (options.celsius === true) ? 'kph' : 'mph';
    },
    celsiusorfareinheight: function(){
        return (options.celsius === true) ? 'c' : 'f';
    },
    cvtF: function(temp) {
        //letting iOS handle this
        //return (temp == "--") ? this.temp() : Math.round(temp * 1.8 + 32);
        return temp;
    },
    cvtK: function(wind) {
        //return Math.round(((wind * 1.609344) * 100) / 100);
        return wind; //doesn't need converted anymore.
    },
    cvtM: function(distance) {
        return Math.round(distance * 1.60934);
    },
    cvtS: function(time) {
        var timecut, timeE, cvtt;
        if (String(time).length > 3) {
            timecut = String(time).slice(0, 2);
            timeE = String(time).slice(2, 4);
        } else {
            timeE = String(time).slice(1, 3);
            timecut = String(time).slice(0, 1);
        }
        if (timecut === "00") {
            return 12;
        }
        cvtt = (timecut > 12) ? timecut - 12 : timecut;
        return cvtt + ":" + timeE;
    },
    cvtTwentyFour: function(time) {
        var strTime = String(time),
            secondPart = strTime.slice(-2),
            firstPart = strTime.replace(secondPart, "");
        return firstPart + ":" + secondPart;
    },
    degToCompass: function(num) {
        var val = Math.floor((num / 22.5) + 0.5),
            arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    },
    temp: function() {
        return (options.celsius ? Math.round(injectedWeather.temperature) : this.cvtF(injectedWeather.temperature));
    },
    high: function(deg) {
        if (!deg) {
            deg = '';
        }
        return (options.celsius ? Math.round(injectedWeather.dayForecasts[0].high) + deg : this.cvtF(injectedWeather.dayForecasts[0].high) + deg);
    },
    low: function(deg) {
        if (!deg) {
            deg = '';
        }
        return (options.celsius ? Math.round(injectedWeather.dayForecasts[0].low) + deg : this.cvtF(injectedWeather.dayForecasts[0].low) + deg);
    },
    condition: function() {
        return translate[options.languages].condition[injectedWeather.conditionCode];
    },
    conditionlowercase: function() {
        var string = String(translate[options.languages].condition[injectedWeather.conditionCode]).toLowerCase();
        if (string === 'fog') {
            string = 'foggy';
        }
        return string;
    },
    coloricon: function(){
        return getIconInfo(injectedWeather.conditionCode, 'font');
    },
    icon: function() {
        return injectedWeather.conditionCode;
    },
    iconday1: function() {
        if (injectedWeather.dayForecasts[1].icon) {
            return injectedWeather.dayForecasts[1].icon;
        } else {
            return 20;
        }
    },
    iconday2: function() {
        if (injectedWeather.dayForecasts[2].icon) {
            return injectedWeather.dayForecasts[2].icon;
        } else {
            return 20;
        }
    },
    iconday3: function() {
        if (injectedWeather.dayForecasts[3].icon) {
            return injectedWeather.dayForecasts[3].icon;
        } else {
            return 20;
        }
    },
    iconday4: function() {
        if (injectedWeather.dayForecasts[4].icon) {
            return injectedWeather.dayForecasts[4].icon;
        } else {
            return 20;
        }
    },
    iconday5: function() {
        if (injectedWeather.dayForecasts[5].icon) {
            return injectedWeather.dayForecasts[5].icon;
        } else {
            return 20;
        }
    },
    //dayNumber
    //dayOfWeek
    day1lohigh: function() {
        if (injectedWeather.dayForecasts[1].low) {
            return injectedWeather.dayForecasts[1].high + "&deg;/" + injectedWeather.dayForecasts[1].low + "&deg;";
        } else {
            return "0&deg;/0&deg;";
        }
    },
    day2lohigh: function() {
        if (injectedWeather.dayForecasts[2].low) {
            return injectedWeather.dayForecasts[2].high + "&deg;/" + injectedWeather.dayForecasts[2].low + "&deg;";
        } else {
            return "0&deg;/0&deg;";
        }
    },
    day3lohigh: function() {
        if (injectedWeather.dayForecasts[3].low) {
            return injectedWeather.dayForecasts[3].high + "&deg;/" + injectedWeather.dayForecasts[3].low + "&deg;";
        } else {
            return "0&deg;/0&deg;";
        }
    },
    day4lohigh: function() {
        if (injectedWeather.dayForecasts[4].low) {
            return injectedWeather.dayForecasts[4].high + "&deg;/" + injectedWeather.dayForecasts[4].low + "&deg;";
        } else {
            return "0&deg;/0&deg;";
        }
    },
    day5lohigh: function() {
        if (injectedWeather.dayForecasts[5].low) {
            return injectedWeather.dayForecasts[5].high + "&deg;/" + injectedWeather.dayForecasts[5].low + "&deg;";
        } else {
            return "0&deg;/0&deg;";
        }
    },
    day1day: function() {
        if (injectedWeather.dayForecasts[1].dayOfWeek) {
            return translate[options.languages].sday[injectedWeather.dayForecasts[1].dayOfWeek - 1];
        } else {
            return 'Nil';
        }
    },
    day2day: function() {
        if (injectedWeather.dayForecasts[2].dayOfWeek) {
            return translate[options.languages].sday[injectedWeather.dayForecasts[2].dayOfWeek - 1];
        } else {
            return 'Nil';
        }
    },
    day3day: function() {
        if (injectedWeather.dayForecasts[3].dayOfWeek) {
            return translate[options.languages].sday[injectedWeather.dayForecasts[3].dayOfWeek - 1];
        } else {
            return 'Nil';
        }
    },
    day4day: function() {
        if (injectedWeather.dayForecasts[4].dayOfWeek) {
            return translate[options.languages].sday[injectedWeather.dayForecasts[4].dayOfWeek - 1];
        } else {
            return 'Nil';
        }
    },
    day5day: function() {
        if (injectedWeather.dayForecasts[5].dayOfWeek) {
            return translate[options.languages].sday[injectedWeather.dayForecasts[5].dayOfWeek - 1];
        } else {
            return 'Nil';
        }
    },
    day1high: function() {
        return injectedWeather.dayForecasts[1].high;
    },
    day2high: function() {
        return injectedWeather.dayForecasts[2].high;
    },
    day3high: function() {
        return injectedWeather.dayForecasts[3].high;
    },
    day4high: function() {
        return injectedWeather.dayForecasts[4].high;
    },
    day5high: function() {
        return injectedWeather.dayForecasts[5].high;
    },
    day1low: function() {
        return injectedWeather.dayForecasts[1].low;
    },
    day2low: function() {
        return injectedWeather.dayForecasts[2].low;
    },
    day3low: function() {
        return injectedWeather.dayForecasts[3].low;
    },
    day4low: function() {
        return injectedWeather.dayForecasts[4].low;
    },
    day5low: function() {
        return injectedWeather.dayForecasts[5].low;
    },
    city: function() {
        return injectedWeather.name;
    },
    humidity: function() {
        return Math.round(injectedWeather.humidity);
    },
    windchill: function(deg) {
        if (!deg) {
            deg = '';
        }
        return Math.round(injectedWeather.windChill) + deg;
    },
    wind: function() {
        return (options.celsius ? this.cvtK(Math.round(injectedWeather.windSpeed)) + this.spd() : Math.round(injectedWeather.windSpeed) + this.spd());
    },
    direction: function() {
        return this.degToCompass(injectedWeather.windDirection);
    },
    visible: function() {
        return (options.celsius ? this.cvtM(Math.round(injectedWeather.visibility)) + this.spd() : Math.round(injectedWeather.visibility) + this.spd());
    },
    rain: function() {
        var percent = (injectedWeather.precipitationForecast === 2) ? 0 : injectedWeather.precipitationForecast;
        return percent;
    },
    uvindex: function(){
        return injectedWeather.uvIndex;
    },
    county: function(){
        return injectedWeather.county;
    },
    country: function(){
        return injectedWeather.country;
    },
    countryAbbr: function(){
        return injectedWeather.countryAbbreviation;
    },
    // state: function(){
    //     return injectedWeather.state;
    // },
    pressure: function(){
        return parseFloat(injectedWeather.pressure).toFixed(2) || "";
    },

    hour1: function(){
        var hourlyTime = injectedWeather.hourlyForecasts[0].time;
        var splitTime = hourlyTime.split(':');
        var hour = Number(splitTime[0]);
        var minute = splitTime[1];
        hour = (options.twentyfour === true) ? hour : (hour + 11) % 12 + 1;
        hour = hour < 10 ? "0" + hour : hour;
        return hour + ":" + minute;
    },
    hour1temp: function(){
        return injectedWeather.hourlyForecasts[0].temperature + "°";
    },
    hour1ConditionCode: function(){
        return injectedWeather.hourlyForecasts[0].conditionCode;
    },
    hour1precip: function(){
        return injectedWeather.hourlyForecasts[0].percentPrecipitation + "%";
    },

    hour2: function(){
        var hourlyTime = injectedWeather.hourlyForecasts[1].time;
        var splitTime = hourlyTime.split(':');
        var hour = Number(splitTime[0]);
        var minute = splitTime[1];
        hour = (options.twentyfour === true) ? hour : (hour + 11) % 12 + 1;
        hour = hour < 10 ? "0" + hour : " " + hour;
        return hour + ":" + minute;
    },
    hour2temp: function(){
        return injectedWeather.hourlyForecasts[1].temperature + "°";
    },
    hour2ConditionCode: function(){
        return injectedWeather.hourlyForecasts[1].conditionCode;
    },
    hour2precip: function(){
        return injectedWeather.hourlyForecasts[1].percentPrecipitation + "%";
    },

    hour3: function(){
        var hourlyTime = injectedWeather.hourlyForecasts[2].time;
        var splitTime = hourlyTime.split(':');
        var hour = Number(splitTime[0]);
        var minute = splitTime[1];
        hour = (options.twentyfour === true) ? hour : (hour + 11) % 12 + 1;
        hour = hour < 10 ? "0" + hour : " " + hour;
        return hour + ":" + minute;
    },
    hour3temp: function(){
        return injectedWeather.hourlyForecasts[2].temperature + "°";
    },
    hour3ConditionCode: function(){
        return injectedWeather.hourlyForecasts[2].conditionCode;
    },
    hour3precip: function(){
        return injectedWeather.hourlyForecasts[2].percentPrecipitation + "%";
    },

    hour4: function(){
        var hourlyTime = injectedWeather.hourlyForecasts[3].time;
        var splitTime = hourlyTime.split(':');
        var hour = Number(splitTime[0]);
        var minute = splitTime[1];
        hour = (options.twentyfour === true) ? hour : (hour + 11) % 12 + 1;
        hour = hour < 10 ? "0" + hour : " " + hour;
        return hour + ":" + minute;
    },
    hour4temp: function(){
        return injectedWeather.hourlyForecasts[3].temperature + "°";
    },
    hour4ConditionCode: function(){
        return injectedWeather.hourlyForecasts[3].conditionCode;
    },
    hour4precip: function(){
        return injectedWeather.hourlyForecasts[3].percentPrecipitation + "%";
    },

    hour5: function(){
        var hourlyTime = injectedWeather.hourlyForecasts[4].time;
        var splitTime = hourlyTime.split(':');
        var hour = Number(splitTime[0]);
        var minute = splitTime[1];
        hour = (options.twentyfour === true) ? hour : (hour + 11) % 12 + 1;
        hour = hour < 10 ? "0" + hour : " " + hour;
        return hour + ":" + minute;
    },
    hour5temp: function(){
        return injectedWeather.hourlyForecasts[4].temperature + "°";
    },
    hour5ConditionCode: function(){
        return injectedWeather.hourlyForecasts[4].conditionCode;
    },
    hour5precip: function(){
        return injectedWeather.hourlyForecasts[4].percentPrecipitation + "%";
    },


    airquality: function(){
        return injectedWeather.airQualityIndex;
    },
    heatindex: function(){
        return parseFloat(injectedWeather.heatIndex).toFixed(2) || ""
    },
    pressureRising: function(){
        return injectedWeather.pressureRising;
    },
    stateAbbr: function(){
        return injectedWeather.stateAbbreviation;
    },
    dewpoint: function() {
        return Math.round(injectedWeather.dewPoint);
    },
    feelslike: function() {
        return (options.celsius ? Math.round(injectedWeather.feelsLike) : this.cvtF(injectedWeather.feelsLike));
    },
    sunset: function() {
        return (options.celsius ? this.cvtTwentyFour(injectedWeather.sunsetTime) : this.cvtS(injectedWeather.sunsetTime));
    },
    sunrise: function() {
        return (options.celsius ? this.cvtTwentyFour(injectedWeather.sunriseTime) : this.cvtS(injectedWeather.sunriseTime));
    },
    updated: function() {
        return injectedWeather.updateTimeString;
    },
    battery: function() {
        return injectedSystem.battery || '';
    },
    charging: function() {
        return injectedSystem.chargetext || '';
    },
    charginglowercase: function() {
        return String(injectedSystem.chargetext).toLowerCase();
    }
};

function checkIfEventExists(number){
    if(injectedSystem.events){
        if(injectedSystem.events[number]){
            return true;
        }else{
            return false;
        }
    }
    return false;
}

systemMethods = {
    signalArray : ["0%", "20%", "40%", "60%", "80%", "100%"],
    percent : ['0', '40', '60', '100'],
    nth: function(d) {
        if (d > 3 && d < 21) {
            return 'th';
        }
        switch (d % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    getHour: function(eventtype, padded){
            if(eventtype){
                var dateInner = new Date(0);
                dateInner.setUTCSeconds(Number(eventtype)); //set current timezone
                var hourInner = (options.twentyfour === true) ? dateInner.getHours() : (dateInner.getHours() + 11) % 12 + 1;
                var zhourInner = (options.twentyfour === true) ? dateInner.getHours() : (dateInner.getHours() + 11) % 12 + 1;
                zhourInner = zhourInner < 10 ? "0" + zhourInner : " " + zhourInner;
                if(padded){
                    hourInner = zhourInner;
                }
                return hourInner;
            }
    },
    getam: function(event) {
        var dateInner = new Date(0);
            dateInner.setUTCSeconds(Number(event));
        return (dateInner.getHours() > 11) ? "pm" : "am";
    },
    day: function() {
        return date.getDay();
    },
    getMinute: function(event){
            var dateInner = new Date(0);
            dateInner.setUTCSeconds(Number(event)); //set current timezone
            var minute = (dateInner.getMinutes() < 10) ? "0" + dateInner.getMinutes() : dateInner.getMinutes();
            return minute;
    },
    tod2: function() {
        return (date.getHours() < 12 ? 'Morning' : date.getHours() < 18 ? 'Afternoon' : 'Night');
    },
    ipaddress: function(){
        return (injectedSystem.ipaddress == "error") ? "No Wifi" : injectedSystem.ipaddress;
    },
    devicename: function(){
        return injectedSystem.deviceName || '';
    },
    firmware: function(){
        return injectedSystem.systemVersion || '';
    },
    battery: function(){
        return injectedSystem.battery || '';
    },
    events1date: function(){
        if(checkIfEventExists(0)){
            return injectedSystem.events[0].date;
        }
        return "";
    },
    events1dateplus:function(){
        var date = "";
        if(checkIfEventExists(0)){
            date = injectedSystem.events[0].date.split('-')[1];
            return Number(date) + this.nth(Number(date));
        }
        return "";
    },
    events1dateval: function(){
        if(checkIfEventExists(0)){
            return injectedSystem.events[0].date.split('-')[1];
        }
        return "";
    },
    events1month: function(){
        if(checkIfEventExists(0)){
            var mnth = injectedSystem.events[0].date.split('-')[0];
            mnth = Number(mnth);
            return translate[options.languages].month[mnth-1];
        }
        return "";
    },
    events1title: function(){
        if(checkIfEventExists(0)){
            return injectedSystem.events[0].title;
        }
        return "";
    },
    events1day: function(){
        if(checkIfEventExists(0)){
            if(this.day() === Number(injectedSystem.events[0].daynum)-1){
                return "Today";
            }
            return injectedSystem.events[0].weekday;
        }
        return "";
    },
    events1sday: function(){
        if(checkIfEventExists(0)){
            return translate[options.languages].sday[Number(injectedSystem.events[0].daynum)-1];
        }
        return "";
    },
    events1starttime: function(){
        if(checkIfEventExists(0)){
            if(injectedSystem.events[0].allDay === "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[0].startTime;
            var hr = systemMethods.getHour(startTimeString, false);
            var min = systemMethods.getMinute(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events1starttimepadded: function(){
        if(checkIfEventExists(0)){
            if(injectedSystem.events[0].allDay === "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[0].startTime;
            var hr = systemMethods.getHour(startTimeString, true);
            var min = systemMethods.getMinute(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events1starttimepaddedpm: function(){
        if(checkIfEventExists(0)){
            if(injectedSystem.events[0].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[0].startTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events1starttimepm: function(){
        if(checkIfEventExists(0)){
            if(injectedSystem.events[0].allDay === "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[0].startTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events1endtime: function(){
        if(checkIfEventExists(0)){
            if(injectedSystem.events[0].allDay === "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[0].endTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events1endtimepadded: function(){
        if(checkIfEventExists(0)){
            if(injectedSystem.events[0].allDay === "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[0].endTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events1endtimepaddedpm: function(){
        if(checkIfEventExists(0)){
            if(injectedSystem.events[0].allDay === "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[0].endTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events1endtimepm: function(){
        if(checkIfEventExists(0)){
            if(injectedSystem.events[0].allDay === "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[0].endTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },


    
    events2date: function(){
        if(checkIfEventExists(1)){
            return injectedSystem.events[1].date;
        }
        return "";
    },
    events2dateplus:function(){
        var date = "";
        if(checkIfEventExists(1)){
            date = injectedSystem.events[1].date.split('-')[1];
            return Number(date) + this.nth(Number(date));
        }
        return "";
    },
    events2dateval: function(){
        if(checkIfEventExists(1)){
            return injectedSystem.events[1].date.split('-')[1];
        }
        return "";
    },
    events2month: function(){
        if(checkIfEventExists(1)){
            var mnth = injectedSystem.events[1].date.split('-')[0];
            mnth = Number(mnth);
            return translate[options.languages].month[mnth-1];
        }
        return "";
    },
    events2title: function(){
        if(checkIfEventExists(1)){
            return injectedSystem.events[1].title;
        }
        return "";
    },
    events2day: function(){
        if(checkIfEventExists(1)){
            if(this.day() === Number(injectedSystem.events[1].daynum)-1){
                return "Today";
            }
            return injectedSystem.events[1].weekday;
        }
        return "";
    },
    events2sday: function(){
        if(checkIfEventExists(1)){
            return translate[options.languages].sday[Number(injectedSystem.events[1].daynum)-1];
        }
        return "";
    },
    events2starttime: function(){
        if(checkIfEventExists(1)){
            if(injectedSystem.events[1].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[1].startTime;
            var hr = systemMethods.getHour(startTimeString, false);
            var min = systemMethods.getMinute(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events2starttimepadded: function(){
        if(checkIfEventExists(1)){
            if(injectedSystem.events[1].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[1].startTime;
            var hr = systemMethods.getHour(startTimeString, true);
            var min = systemMethods.getMinute(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events2starttimepaddedpm: function(){
        if(checkIfEventExists(1)){
            if(injectedSystem.events[1].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[1].startTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events2starttimepm: function(){
        if(checkIfEventExists(1)){
            if(injectedSystem.events[1].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[1].startTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events2endtime: function(){
        if(checkIfEventExists(1)){
            if(injectedSystem.events[1].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[1].endTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events2endtimepadded: function(){
        if(checkIfEventExists(1)){
            if(injectedSystem.events[1].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[1].endTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events2endtimepaddedpm: function(){
        if(checkIfEventExists(1)){
            if(injectedSystem.events[1].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[1].endTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events2endtimepm: function(){
        if(checkIfEventExists(1)){
            if(injectedSystem.events[1].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[1].endTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },


    events3date: function(){
        if(checkIfEventExists(2)){
            return injectedSystem.events[2].date;
        }
        return "";
    },
    events3dateplus:function(){
        var date = "";
        if(checkIfEventExists(2)){
            date = injectedSystem.events[2].date.split('-')[1];
            return Number(date) + this.nth(Number(date));
        }
        return "";
    },
    events3dateval: function(){
        if(checkIfEventExists(2)){
            return injectedSystem.events[2].date.split('-')[1];
        }
        return "";
    },
    events3month: function(){
        if(checkIfEventExists(2)){
            var mnth = injectedSystem.events[2].date.split('-')[0];
            mnth = Number(mnth);
            return translate[options.languages].month[mnth-1];
        }
        return "";
    },
    events3title: function(){
        if(checkIfEventExists(2)){
            return injectedSystem.events[2].title;
        }
        return "";
    },
    events3day: function(){
        if(checkIfEventExists(2)){
            if(this.day() === Number(injectedSystem.events[2].daynum)-1){
                return "Today";
            }
            return injectedSystem.events[2].weekday;
        }
        return "";
    },
    events3sday: function(){
        if(checkIfEventExists(2)){
            return translate[options.languages].sday[Number(injectedSystem.events[2].daynum)-1];
        }
        return "";
    },
    events3starttime: function(){
        if(checkIfEventExists(2)){
            if(injectedSystem.events[2].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[2].startTime;
            var hr = systemMethods.getHour(startTimeString, false);
            var min = systemMethods.getMinute(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events3starttimepadded: function(){
        if(checkIfEventExists(2)){
            if(injectedSystem.events[2].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[2].startTime;
            var hr = systemMethods.getHour(startTimeString, true);
            var min = systemMethods.getMinute(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events3starttimepaddedpm: function(){
        if(checkIfEventExists(2)){
            if(injectedSystem.events[2].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[2].startTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events3starttimepm: function(){
        if(checkIfEventExists(2)){
            if(injectedSystem.events[2].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[2].startTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events3endtime: function(){
        if(checkIfEventExists(2)){
            if(injectedSystem.events[2].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[2].endTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events3endtimepadded: function(){
        if(checkIfEventExists(2)){
            if(injectedSystem.events[2].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[2].endTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events3endtimepaddedpm: function(){
        if(checkIfEventExists(2)){
            if(injectedSystem.events[2].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[2].endTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events3endtimepm: function(){
        if(checkIfEventExists(2)){
            if(injectedSystem.events[2].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[2].endTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },

    events4date: function(){
        if(checkIfEventExists(3)){
            return injectedSystem.events[3].date;
        }
        return "";
    },
    events4dateplus:function(){
        var date = "";
        if(checkIfEventExists(3)){
            date = injectedSystem.events[3].date.split('-')[1];
            return Number(date) + this.nth(Number(date));
        }
        return "";
    },
    events4dateval: function(){
        if(checkIfEventExists(3)){
            return injectedSystem.events[3].date.split('-')[1];
        }
        return "";
    },
    events4month: function(){
        if(checkIfEventExists(3)){
            var mnth = injectedSystem.events[3].date.split('-')[0];
            mnth = Number(mnth);
            return translate[options.languages].month[mnth-1];
        }
        return "";
    },
    events4title: function(){
        if(checkIfEventExists(3)){
            return injectedSystem.events[3].title;
        }
        return "";
    },
    events4day: function(){
        if(checkIfEventExists(3)){
            if(this.day() === Number(injectedSystem.events[3].daynum)-1){
                return "Today";
            }
            return injectedSystem.events[3].weekday;
        }
        return "";
    },
    events4sday: function(){
        if(checkIfEventExists(3)){
            return translate[options.languages].sday[Number(injectedSystem.events[3].daynum)-1];
        }
        return "";
    },
    events4starttime: function(){
        if(checkIfEventExists(3)){
            if(injectedSystem.events[3].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[3].startTime;
            var hr = systemMethods.getHour(startTimeString, false);
            var min = systemMethods.getMinute(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events4starttimepadded: function(){
        if(checkIfEventExists(3)){
            if(injectedSystem.events[3].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[3].startTime;
            var hr = systemMethods.getHour(startTimeString, true);
            var min = systemMethods.getMinute(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events4starttimepaddedpm: function(){
        if(checkIfEventExists(3)){
            if(injectedSystem.events[3].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[3].startTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events4starttimepm: function(){
        if(checkIfEventExists(3)){
            if(injectedSystem.events[3].allDay == "1"){
                return "All Day";
            }
            var startTimeString = injectedSystem.events[3].startTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events4endtime: function(){
        if(checkIfEventExists(3)){
            if(injectedSystem.events[3].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[3].endTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events4endtimepadded: function(){
        if(checkIfEventExists(3)){
            if(injectedSystem.events[3].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[3].endTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min;
        }
        return "";
    },
    events4endtimepaddedpm: function(){
        if(checkIfEventExists(3)){
            if(injectedSystem.events[3].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[3].endTime;
            var hr = this.getHour(startTimeString, true);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    events4endtimepm: function(){
        if(checkIfEventExists(3)){
            if(injectedSystem.events[3].allDay == "1"){
                return "";
            }
            var startTimeString = injectedSystem.events[3].endTime;
            var hr = this.getHour(startTimeString, false);
            var min = this.getMinute(startTimeString);
            var pm = this.getam(startTimeString);
            return hr + ":" + min + pm;
        }
        return "";
    },
    stepsToday: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            return injectedSystem.health[healthLength-1].steps;
        }else{
            return "NA";
        }
    },
    stepsTodayDay: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            return "Today";
        }else{
            return "NA";
        }
    },
    stepsTodaySDay: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            return translate[options.languages].sday[Number(injectedSystem.health[healthLength-1].daynum)-1];
        }else{
            return "NA";
        }
    },
    stepsTodayDate: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            return injectedSystem.health[healthLength-1].dateday;
        }else{
            return "NA";
        }
    },
    stepsTodayDatePlus: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            var dateV = injectedSystem.health[healthLength-1].dateday;
            return  Number(dateV) + this.nth(Number(dateV));
        }else{
            return "NA";
        }
    },

    stepsToday0: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            return injectedSystem.health[0].steps;
        }else{
            return "NA";
        }
    },
    stepsTodayDay0: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            return injectedSystem.health[0].day;
        }else{
            return "NA";
        }
    },
    stepsTodaySDay0: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            return translate[options.languages].sday[Number(injectedSystem.health[0].daynum)-1];
        }else{
            return "NA";
        }
    },
    stepsTodayDate0: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            return injectedSystem.health[0].dateday;
        }else{
            return "NA";
        }
    },
    stepsTodayDatePlus0: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            var dateV = injectedSystem.health[0].dateday;
            return  Number(dateV) + this.nth(Number(dateV));
        }else{
            return "NA";
        }
    },

    stepsToday1: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 1){
            return injectedSystem.health[1].steps;
        }else{
            return "NA";
        }
    },
    stepsTodayDay1: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 1){
            return injectedSystem.health[1].day;
        }else{
            return "NA";
        }
    },
    stepsTodaySDay1: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 1){
            return translate[options.languages].sday[Number(injectedSystem.health[1].daynum)-1];
        }else{
            return "NA";
        }
    },
    stepsTodayDate1: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            return injectedSystem.health[1].dateday;
        }else{
            return "NA";
        }
    },
    stepsTodayDatePlus1: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 0){
            var dateV = injectedSystem.health[1].dateday;
            return  Number(dateV) + this.nth(Number(dateV));
        }else{
            return "NA";
        }
    },

    stepsToday2: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 2){
            return injectedSystem.health[2].steps;
        }else{
            return "NA";
        }
    },
    stepsTodayDay2: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 2){
            return injectedSystem.health[2].day;
        }else{
            return "NA";
        }
    },
    stepsTodaySDay2: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 2){
            return translate[options.languages].sday[Number(injectedSystem.health[2].daynum)-1];
        }else{
            return "NA";
        }
    },
    stepsTodayDate2: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 2){
            return injectedSystem.health[2].dateday;
        }else{
            return "NA";
        }
    },
    stepsTodayDatePlus2: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 2){
            var dateV = injectedSystem.health[2].dateday;
            return  Number(dateV) + this.nth(Number(dateV));
        }else{
            return "NA";
        }
    },

    stepsToday3: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 3){
            return injectedSystem.health[3].steps;
        }else{
            return "NA";
        }
    },
    stepsTodayDay3: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 3){
            return injectedSystem.health[3].day;
        }else{
            return "NA";
        }
    },
    stepsTodaySDay3: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 3){
            return translate[options.languages].sday[Number(injectedSystem.health[3].daynum)-1];
        }else{
            return "NA";
        }
    },
    stepsTodayDate3: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 3){
            return injectedSystem.health[3].dateday;
        }else{
            return "NA";
        }
    },
    stepsTodayDatePlus3: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 3){
            var dateV = injectedSystem.health[3].dateday;
            return  Number(dateV) + this.nth(Number(dateV));
        }else{
            return "NA";
        }
    },

    stepsToday4: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 4){
            return injectedSystem.health[4].steps;
        }else{
            return "NA";
        }
    },
    stepsTodayDay4: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 4){
            return injectedSystem.health[4].day;
        }else{
            return "NA";
        }
    },
    stepsTodaySDay4: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 4){
            return translate[options.languages].sday[Number(injectedSystem.health[4].daynum)-1];
        }else{
            return "NA";
        }
    },
    stepsTodayDate4: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 4){
            return injectedSystem.health[4].dateday;
        }else{
            return "NA";
        }
    },
    stepsTodayDatePlus4: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 4){
            var dateV = injectedSystem.health[4].dateday;
            return  Number(dateV) + this.nth(Number(dateV));
        }else{
            return "NA";
        }
    },

    stepsToday5: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 5){
            return injectedSystem.health[5].steps;
        }else{
            return "NA";
        }
    },
    stepsTodayDay5: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 5){
            return injectedSystem.health[5].day;
        }else{
            return "NA";
        }
    },
    stepsTodaySDay5: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 5){
            return translate[options.languages].sday[Number(injectedSystem.health[5].daynum)-1];
        }else{
            return "NA";
        }
    },
    stepsTodayDate5: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 5){
            return injectedSystem.health[5].dateday;
        }else{
            return "NA";
        }
    },
    stepsTodayDatePlus5: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 5){
            var dateV = injectedSystem.health[5].dateday;
            return  Number(dateV) + this.nth(Number(dateV));
        }else{
            return "NA";
        }
    },

    stepsToday6: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 6){
            return injectedSystem.health[6].steps;
        }else{
            return "NA";
        }
    },
    stepsTodayDay6: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 6){
            return injectedSystem.health[6].day;
        }else{
            return "NA";
        }
    },
    stepsTodaySDay6: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 6){
            return translate[options.languages].sday[Number(injectedSystem.health[6].daynum)-1];
        }else{
            return "NA";
        }
    },
    stepsTodayDate6: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 6){
            return injectedSystem.health[6].dateday;
        }else{
            return "NA";
        }
    },
    stepsTodayDatePlus6: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 6){
            var dateV = injectedSystem.health[6].dateday;
            return  Number(dateV) + this.nth(Number(dateV));
        }else{
            return "NA";
        }
    },

    stepsToday7: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 7){
            return injectedSystem.health[7].steps;
        }else{
            return "NA";
        }
    },
    stepsTodayDay7: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 7){
            return injectedSystem.health[7].day;
        }else{
            return "NA";
        }
    },
    stepsTodaySDay7: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 7){
            return translate[options.languages].sday[Number(injectedSystem.health[7].daynum)-1];
        }else{
            return "NA";
        }
    },
    stepsTodayDate7: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 7){
            return injectedSystem.health[7].dateday;
        }else{
            return "NA";
        }
    },
    stepsTodayDatePlus7: function(){
        if(!injectedSystem.health){
            return;
        }
        var healthLength = injectedSystem.health.length;
        if(healthLength > 7){
            var dateV = injectedSystem.health[7].dateday;
            return  Number(dateV) + this.nth(Number(dateV));
        }else{
            return "NA";
        }
    },

    events1timestring: function(){
        if(checkIfEventExists(0)){
            if(injectedSystem.events[0].allDay == "1"){
                return "All Day";
            }
            return this.events1starttimepaddedpm() + " - " + this.events1endtimepaddedpm();
        }
    },
    events2timestring: function(){
        if(checkIfEventExists(1)){
            if(injectedSystem.events[1].allDay == "1"){
                return "All Day";
            }
            return this.events2starttimepaddedpm() + " - " + this.events2endtimepaddedpm();
        }
    },
    events3timestring: function(){
        if(checkIfEventExists(2)){
            if(injectedSystem.events[2].allDay == "1"){
                return "All Day";
            }
            return this.events3starttimepaddedpm() + " - " + this.events3endtimepaddedpm();
        }
    },
    events4timestring: function(){
        if(checkIfEventExists(3)){
            if(injectedSystem.events[3].allDay == "1"){
                return "All Day";
            }
            return this.events4starttimepaddedpm() + " - " + this.events4endtimepaddedpm();
        }
    },
    


    chargetext: function(){
        return injectedSystem.chargetext || '';
    },
    batterycircle: function (){
        try{
            if(circleProgress){
                if(circleProgress.value != injectedSystem.battery){
                    circleProgress.value = injectedSystem.battery;
                }
            }
        }catch(err){}
        return "";
    },
    onlycharging: function(){
        return (injectedSystem.chargetext === 'Charging') ? 'Charging' : '';
    },
    signalbars: function(){
        return injectedSystem.signalBars;
    },
    signalpercent: function(){
        if(injectedSystem.signalStrength > 6){
            return injectedSystem.signalStrength + "%";
        }else{
            return this.signalArray[injectedSystem.signalBars];
        }
    },
    getalarmday: function(){
        if(injectedSystem.alarmDay){
            return translate[options.languages].sday[injectedSystem.alarmDay];
        }else{
            return "";
        }
    },
    getalarmstring: function(){
        if(injectedSystem.alarmString){
            var split = injectedSystem.alarmString.split(':'),
            hr = split[0],
            min = split[1].split(' ')[0],
            am = split[1].split(' ')[1];
            if(min < 10 && min != "00"){
                min = "0" + min;
            }
            return hr + ":" + min + " " + am;
        }else{
            return "";
        }
    },
    getalarmtime: function(){
        if(injectedSystem.alarmTime){
            var split = injectedSystem.alarmTime.split(':'),
            hr = split[0];
            min = split[1];
            if(min < 10 && min != "00"){
                min = "0" + min;
            }
            return hr + ":" + min;
        }else{
            return "";
        }
    },
    getalarmhr: function(){
        if(injectedSystem.alarmHour){
            return injectedSystem.alarmHour;
        }else{
            return "";
        }
    },
    getalarmmin: function(){
        if(injectedSystem.alarmMinute){
            return (injectedSystem.alarmMinute < 10 && injectedSystem.alarmMinute != "00") ? "0" + injectedSystem.alarmMinute : injectedSystem.alarmMinute;
        }else{
            return "";
        }
    },
    getalarmweekday: function(){
        if(injectedSystem.alarmDay){
            return translate[options.languages].weekday[injectedSystem.alarmDay];
        }else{
            return "";
        }
    },
    wifibars: function(){
        return injectedSystem.wifiBars;
    },
    wifi: function(){
        return this.percent[Number(injectedSystem.wifiBars)];
    },
    mailbadge: function(){
        return injectedSystem.mailBadge;
    },
    smsbadge: function(){
        return injectedSystem.smsBadge;
    },
    phonebadge: function(){
        return injectedSystem.phoneBadge;
    },
    whatsbadge: function(){
        if(injectedSystem.whatsBadge <= 0){
            return 0;
        }
        return injectedSystem.whatsBadge || 0;
    },
    telegrambadge: function(){
        return injectedSystem.telegramBadge || 0;
    },
    fbmessengerbadge: function(){
        if(injectedSystem.fbMessengerBadge <= 0){
            return 0;
        }
        return injectedSystem.fbMessengerBadge || 0;
    },
    discordbadge: function(){
        return injectedSystem.discord || 0;
    },
    viberbadge: function(){
        return injectedSystem.viber || 0;
    },
    instagrambadge: function(){
        return injectedSystem.instagram || 0;
    },
    facebookbadge: function(){
        if(injectedSystem.facebook <= 0){
            return 0;
        }
        return injectedSystem.facebook || 0;
    },
    gmailbadge: function(){
        return injectedSystem.gmail || 0;
    },
    outlookbadge: function(){
        return injectedSystem.outlook || 0;
    },
    airmailbadge: function(){
        return injectedSystem.airmail || 0;
    },
    ymailbadge: function(){
        return injectedSystem.ymail || 0;
    },
    snapchatbadge: function(){
        return injectedSystem.snapchat || 0;
    },
    redditbadge: function(){
        return injectedSystem.reddit || 0;
    },
    googleplusbadge: function(){
        return injectedSystem.googleplus || 0;
    },
    linkedinbadge: function(){
        return injectedSystem.linkedin || 0;
    },
    slackbadge: function(){
        return injectedSystem.slack || 0;
    },
    telegramxbadge: function(){
        return injectedSystem.telegramXBadge || 0;
    },
    sparkbadge: function(){
        return injectedSystem.spark || 0;
    },
    twitterbadge: function(){
        return injectedSystem.twitter || 0;
    },
    tweetbot4badge: function(){
        return injectedSystem.tweetbot4 || 0;
    },
    youtubebadge: function(){
        return injectedSystem.youtube || 0;
    },
    ramFree: function(){
        return injectedSystem.ramFree;
    },
    ramUsed: function(){
        return injectedSystem.ramUsed;
    },
    ramAvailable: function(){
        return injectedSystem.ramAvailable;
    }
};

