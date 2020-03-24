<!-------------------------------------------------- 3omartech ------------------------------------------------>

function updateClock ( )
{
   var currentHours_name_array = new Array ("Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve")
   var currentMinutes_name_array = new Array ("O'", "O'", "O'", "O'", "O'", "O'", "O'", "O'", "O'", "O'", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "")
   var currentMinutesunit_name_array = new Array ("clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "", "", "", "", "", "", "", "", "", "", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "")

if (Lang == "fr"){
   var currentHours_name_array = new Array ("minuit", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "midi", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "minuit")
   var currentMinutes_name_array = new Array ("et", "et", "et", "et", "et", "et", "et", "et", "et", "et", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "vingt", "vingt", "vingt", "vingt", "vingt", "vingt", "vingt", "vingt", "vingt", "trente", "trente", "trente", "trente", "trente", "trente", "trente", "trente", "trente", "trente", "quarante", "quarante", "quarante", "quarante", "quarante", "quarante", "quarante", "quarante", "quarante", "quarante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "")
   var currentMinutesunit_name_array = new Array ("heure", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", " ", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", " ", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", " ", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "")
}
if (Lang == "de"){
   var currentHours_name_array = new Array ("null", "ein", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn", "zwanzig", "einundzwanzig", "zweiundzwanzig", "dreiundzwanzig", "null")
   var currentMinutes_name_array = new Array ("uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr", "uhr")
   var currentMinutesunit_name_array = new Array ("", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn", "zwanzig", "einundzwanzig", "zweiundzwanzig", "dreiundzwanzig", "vierundzwanzig", "fünfundzwanzig", "sechsundzwanzig", "siebenundzwanzig", "achtundzwanzig","neunundzwanzig", "dreißig", "einunddreißig", "zweiunddreißig", "dreiunddreißig", "vierunddreißig", "fünfunddreißig", "sechsunddreißig", "siebenunddreißig", "achtunddreißig", "neununddreißig", "vierzig", "einundvierzig", "zweiundvierzig", "dreiundvierzig", "vierundvierzig", "fünfundvierzig", "sechsundvierzig", "siebenundvierzig", "achtundvierzig", "neunundvierzig", "fünfzig", "einundfünfzig", "zweiundfünfzig", "dreiundfünfzig", "vierundfünfzig", "fünfundfünfzig", "sechsundfünfzig", "siebenundfünfzig", "achtundfünfzig", "neunundfünfzig" , "")	
}
if (Lang == "ca"){
   var currentHours_name_array = new Array ("doce", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce")
   var currentMinutes_name_array = new Array ("en punto", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y diez", "y once", "y doce", "y trece", "y catorce", "y quince", "y dieciseis", "y diecisiete", "y dieciocho", "y diecinueve", "y veinte", "y veinti", "y veinti", "y veinti", "y veinti", "y veinti", "y veinti", "y veinti", "y veinti", "y veinti", "y treinta", "y treinta", "y treinta", "y treinta", "y treinta", "y treinta", "treinta", "y treinta", "y treinta", "y treinta", "y cuarenta", "y cuarenta", " cuarenta", "y cuarenta", "y cuarenta", "y cuarenta", "y cuarenta", "y cuarenta", "y cuarenta", "y cuarenta", "y cincuenta", "y cincuenta", "y cincuenta", "y cincuenta", "y cincuenta", "y cincuenta", "y cincuenta", "y cincuenta", "y cincuenta", "y cincuenta", "")
   var currentMinutesunit_name_array = new Array ("", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", " ", "y uno", "y dos", "y tres", "y cuatro", "y cinco", "y seis", "y siete", "y ocho", "y nueve", " ", "y uno", "y dos", "y tres", "y cuatro", "y cinco", "y seis", "y siete", "y ocho", "y nueve", " ", "y uno", "y dos", "y tres", "y cuatro", "y cinco", "y seis", "y siete", "y ocho", "y nueve", "")
}
if (Lang == "it"){
   var currentHours_name_array = new Array ("mezzanotte", "una", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici", "mezzogiorno", "una", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici", "mezzanotte")
   var currentMinutes_name_array = new Array ("e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove", "venti", "venti", "venti", "venti", "venti", "venti", "venti", "venti", "venti", "venti", "trenta", "trenta", "trenta", "trenta", "trenta", "trenta", "trenta", "trenta", "trenta", "trenta", "quaranta", "quaranta", "quaranta", "quaranta", "quaranta", "quaranta", "quaranta", "quaranta", "quaranta", "quaranta", "cinquanta", "cinquanta", "cinquanta", "cinquanta", "cinquanta", "cinquanta", "cinquanta", "cinquanta", "cinquanta", "cinquanta", "")
   var currentMinutesunit_name_array = new Array ("", "una", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "una", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", " ", "una", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", " ", "una", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", " ", "una", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "")
}
        var currentTime = new Date ( );
        var currentHours = currentTime.getHours ( );
        var currentMinutes = currentTime.getMinutes ( );
        var currentMinutesunit = currentTime.getMinutes ( );
        var currentSeconds = currentTime.getSeconds ( );

<!-- Compose the string for display-->
        var currentTimeString = currentHours_name_array[currentHours] + " ";
       var currentTimeString1 = currentMinutes_name_array[currentMinutes];
       var currentTimeString2 = " " + currentMinutesunit_name_array[currentMinutesunit];

<!-- Update the time display-->
        document.getElementById("hours").firstChild.nodeValue = currentTimeString;
       document.getElementById("minutes").firstChild.nodeValue = currentTimeString1;
       document.getElementById("minutesunit").firstChild.nodeValue = currentTimeString2;
}