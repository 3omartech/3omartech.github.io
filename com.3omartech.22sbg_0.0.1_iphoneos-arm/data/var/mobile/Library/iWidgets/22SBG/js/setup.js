
"use strict";
options.seconds = false;
options.disableweather = false;
options.disableoverlay = false;
options.clockrefresh = 1000;
options.languages = (window.navigator.language.length >= 2) ? window.navigator.language.split('-')[0] : 'en';

var translate = {
    en: {
        weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        sday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        smonth: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        condition: ["Tornado", "Tropical Storm", "Hurricane", "Severe Thunderstorm", "Thunderstorms", "Rain and Snow", "Rain and Sleet", "Snow and Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Raining", "Raining", "Flurries", "Light Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Cloudy", "Mostly Cloudy", "Mostly Cloudy", "Partly Cloudy", "Partly Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Isolated Thunderstorms", "Scattered Thunderstorms", "Scattered Thunderstorms", "Scattered Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorms", "Snow", "Isolated Thunderstorm", "blank"]
    },
    nl: {
        weekday: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
        sday: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
        smonth: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        condition: ["Tornado", "Tropische Storm", "Orkaan", "Onweer", "Onweer", "Sneeuw", "Natte sneeuw", "Natte sneeuw", "Hagel", "Miezer", "Hagel", "Buien", "Buien", "Natte sneeuw", "Sneeuw", "Sneeuw", "Sneeuw", "Hagel", "Natte sneeuw", "Stof", "Mist", "Nevel", "Dampig", "Blustery", "Winderig", "Koud", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Helder", "Zon", "Normaal", "Normaal", "Natte sneeuw", "Heet", "Onweer", "Onweer", "Onweer", "Buien", "Zware sneeuw", "Lichte sneeuw", "Zware sneeuw", "Licht bewolkt", "Onweer", "Sneeuw", "Onweer", "blank"]
    },
    ru: {
        weekday: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        sday: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        smonth: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        condition: ["Торнадо", "Тропический шторм", "Ураган", "Гроза", "Гроза", "Снег", "Мокрый снег", "Мокрый снег", "Изморозь", "Морось", "Ледяной дождь", "Ливень", "Ливень", "Сильные порывы ветра", "Снег", "Снег", "Снег", "Град", "Мокрый снег", "Пыль", "Туман", "Легкий туман", "Туманно", "Порывисто", "Ветренно", "Холодно", "Облачно", "Облачно", "Облачно", "Облачно", "Облачно", "Ясно", "Солнечно", "Ясно", "Ясно", "Мокрый снег", "Жарко", "Гроза", "Гроза", "Гроза", "Ливень", "Снегопад", "Небольшой снег", "Снегопад", "Переменная облачность", "Гроза", "Снег", "Гроза", "пусто"]
    },
    cz: {
        weekday: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        sday: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        smonth: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čen", "Čec", "Srp", "Zář", "Říj", "Lis", "Pro"],
        condition: ["Tornádo", "Tropická bouře", "Hurikán", "Bouře", "Bouře", "Sněžení", "Déšť a sníh", "Déšť a sníh", "Mrznoucí mrholení", "Mrholení", "Mrznoucí déšť", "Přeháňky", "Přeháňky", "Poryvy větru", "Sněžení", "Sněžení", "Sněžení", "Kroupy", "Déšť a sníh", "Prach", "Mlhy", "Řídké mlhy", "Kouř", "Větrno s bouřkami", "Větrno", "Chladno", "Oblačno", "Oblačno", "Oblačno", "Oblačno", "Oblačno", "Jasno", "Slunečno", "Krásně", "Krásně", "Déšť a sníh", "Horko", "Bouře", "Bouře", "Bouře", "Přeháňky", "Husté sněžení", "Lehké sněžení", "Husté sněžení", "Polojasno", "Bouře", "Sněžení", "Bouře", "prázdné"]
    },
    it: {
        weekday: ['Domenica', 'Luned&#236;', 'Marted&#236;', 'Mercoled&#236;', 'Gioved&#236;', 'Venerd&#236;', 'Sabato'],
        sday: ["Sun", "Mon", "Mar", "Mer", "Gio", "Ven", "Sat"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        smonth: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        condition: ["Tornado", "Tempesta Tropicale", "Uragano", "Temporali Forti", "Temporali", "Pioggia mista a Neve", "Nevischio", "Nevischio", "Pioggia Gelata", "Pioggerella", "Pioggia Ghiacciata", "Pioggia", "Pioggia", "Neve a Raffiche", "Neve Leggera", "Tempesta di Neve", "Neve", "Grandine", "Nevischio", "Irregolare", "Nebbia", "Foschia", "Fumoso", "Raffiche di Vento", "Ventoso", "Freddo", "Nuvoloso", "Molto Nuvoloso", "Molto Nuvoloso", "Nuvoloso", "Nuvoloso", "Sereno", "Sereno", "Bel Tempo", "Bel Tempo", "Pioggia e Grandine", "Caldo", "Temporali Isolati", "Temporali Sparsi", "Temporali Sparsi", "Rovesci Sparsi", "Neve Forte", "Nevicate Sparse", "Neve Forte", "Nuvoloso", "Rovesci Temporaleschi", "Rovesci di Neve", "Temporali isolati", "Non Disponibile"]
    },
    tr: {
        weekday: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        sday: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cts"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        smonth: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
        condition: ["Hortum", "Tropik Fırtına", "Kasırga", "Gök Gürültülü", "Gök Gürültülü", "Kar", "Karla Karışık Yağmur", "Karla Karışık Yağmur", "Kırağı", "Kırağı", "Dondurucu Yağmur", "Yağmur", "Yağmur", "Sağanak", "Kar", "Kar", "Kar", "Dolu", "Karla Karışık Yağmur", "Rüzgar", "Sis", "Puslu", "Sisli", "Sert", "Rüzgarlı", "Soğuk", "Bulutlu", "Bulutlu", "Bulutlu", "Bulutlu", "Bulutlu", "Açık", "Güneşli", "Açık", "Açık", "Sulu Kar", "Sıcak", "Gök Gürültülü", "Gök Gürültülü", "Gök Gürültülü", "Yağmur", "Ağır Kar", "Hafif Karlı", "Ağır Kar", "Parçalı Bulutlu", "Gök Gürültülü", "Kar", "Gök Gürültülü", "Boş"]
    },
    es: {
        weekday: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        sday: ["Sol", "Mon", "Mar", "Mie", "Jue", "Vie", "Sat"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        smonth: ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"],
        condition: ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"]
    },
    sp: {
        weekday: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        sday: ["Sol", "Mon", "Mar", "Mie", "Jue", "Vie", "Sat"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        smonth: ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"],
        condition: ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"]
    },
    de: {
        weekday: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        sday: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        smonth: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez "],
        condition: ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "Schneegestöber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "Stürmisch", "Windig", "Kalt", "Bewölkt", "Meist Bewölkt", "Meist Bewölkt", "Bewölkt", "Bewölkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "Örtliche Gewitter", "Vereinzelte Gewitter", "Vereinzelte Gewitter", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "Bewölkt", "Gewitter", "Scheeschauer", "Örtliche Gewitterschauer", "Nicht Verfügbar"]
    },
    fr: {
        weekday: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        sday: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        smonth: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
        condition: ["Tornade", "Tropical", "Ouragan", "Orages Violents", "Orages", "Pluie", "Pluie", "Neige", "Bruine", "Bruine", "Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "Grêle", "Neige Fondue", "Poussiéreux", "Brouillard", "Brume", "Brumeux", "Tempête", "Vent", "Temps Froid", "Temps Nuageux ", "Très Nuageux", "Très Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleillé", "Beau Temps", "Beau Temps", "Pluie et Grêles", "Temps Chaud", "Orages Isolés", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Nuageux", "Orages", "Chute de Neige", "Orages Isolés", "Non Disponible"]
    },
    zh: {
        weekday: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        sday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        smonth: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        condition: ["龙卷风", "热带风暴", "飓风", "雷暴", "雷暴", "雪", "雨夹雪", "雨夹雪", "有小冻雨", "细雨", "冻雨", "阵雨", "阵雨", "飘雪", "雪", "雪", "雪", "冰雹", "雨雪", "尘雾", "雾", "雾霾", "有雾", "大风", "有风", "冷", "多云", "多云", "多云", "多云", "多云", "晴朗", "晴天", "阴转晴", "阴转晴", "雨雪", "炎热", "雷暴", "雷暴", "雷暴", "淋浴", "大雪", "小雪", "大雪", "局部多云", "雷暴", "雪", "雷暴", "空白"]
    },
    he: {
        weekday: ["שבת", "שישי", "חמיש", "רביעי", "שלישי", "שני", "ראשון"],
        sday: ["ז’", "ו’", "ה", "ד’", "ג’", "ב’", "א’"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
        smonth: ["ינו", "פבר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוג", "ספט", "אוקט", "נוב", "דצמ"],
        condition: ["טורנדו", "סופה טרופית", "הוריקן", "סופת-רעמים", "סופת-רעמים", "שלג", "ברד קל", "ברד קל", "ברד", "טפטוף", "טפטוף", "מקלחת", "מקלחת", "משב רוח", "שלג", "שלג", "שלג", "ברד", "ברד קל", "Dust", "ערפל", "אובך", "אובך", "סוער", "סוער", "קר", "מעונן", "מעונן", "מעונן", "מעונן", "מעונן", "בהיר", "שמשי", "נאה", "נאה", "ברד קל", "חם", "סופת-רעמים", "סופת-רעמים", "סופת-רעמים", "מקלחת", "שלג כבד", "שלג קל", "שלג כבד", "מעונן חלקית", "סופת-רעמים", "שלג", "סופת-רעמים", "ריק"]
    },
    pl: {
        weekday: ["Niedziela", "Poniedzialek", "Wtorek", "Sroda", "Czwartek", "Piatek", "Sobota"],
        sday: ["Nie", "Pon", "Wto", "Sro", "Czw", "Pia", "Sob"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Styczen", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien", "Pazdziernik", "Listopad", "Grudzien"],
        smonth: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paz", "Lis", "Gru"],
        condition: ["Tornado", "Tropikalna Burza", "Huragan", "Burza Z Piorunami", "Burza Z Piorunami", "Snieg", "Deszcz Ze Sniegiem", "Deszcz Ze Sniegiem", "Zamarzajaca Mzawka", "Mzawka", "Zamarzajacy Deszcz", "Przelotny Deszcz", "Przelotny Deszcz", "Przelotny Deszcz", "Snieg", "Snieg", "Snieg", "Grad", "Deszcz Ze Sniegiem", "Pyl", "Mgla", "Mgla", "Zadymiony", "Wietrznie", "Wietrznie", "Zimno", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Czyste Niebo", "Slonecznie", "Slonecznie", "Slonecznie", "Deszcz Ze Sniegiem", "Cieplo", "Burze z Piorunami", "Burze z Piorunami", "Burze z Piorunami", "Przelotny Deszcz", "Mocny Snieg", "Lekki Snieg", "Mocny Snieg", "Czesciowo Pochmurnie", "Burza Z Piorunami", "Snieg", "Burza Z Piorunami", "puste"]
    },
    da: {
        weekday: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        sday: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
        mday: ["Søn", "Man", "Tirs", "Ons", "Tor", "Fre", "Lør"],
        month: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
        smonth: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        condition: ["Tornado", "Tropisk Storm", "Orkan", "Tordenvejr", "Tordenvejr", "Sne", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Raining", "Raining", "Flurries", "Snow", "Sne", "Sne", "Hagl", "Sleet", "Dust", "Tåge", "Dis", "Smoky", "Blustery", "Blæsende", "Koldt", "Overskyet", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Klart", "Solrigt", "Fair", "Fair", "Sleet", "Varmt", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Raining", "Tung sne", "Let sne", "Tung sne", "Delvist skyet", "Thunderstorm", "Sne", "Thunderstorm", "blank"]
    },
    pt: {
        weekday: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        sday: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        mday: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"],
        month: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        smonth: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        condition: ["Tornado", "Tempestade Tropical", "Furacão", "Trovoada", "Trovoada", "Neve", "Chuva com Neve", "Chuva com Neve", "Geada", "Garoa", "Chuva Gélida", "Pancadas de Chuva", "Pancadas de Chuva", "Rajadas", "Neve", "Neve", "Neve", "Granizo", "Chuva Gélida", "Poeira", "Névoa", "Névoa", "Nebuloso", "Vendaval", "Ventando", "Frio", "Nublado", "Nublado", "Nublado", "Nublado", "Nublado", "Céu Limpo", "Ensolarado", "Bom Tempo", "Bom Tempo", "Chuva Gélida", "Quente", "Trovoadas", "Trovoadas", "Trovoadas", "Pancadas de Chuva", "Nevasca Pesada", "Nevasca Leve", "Nevasca Pesada", "Parcialmente Nublado", "Trovoada", "Neve", "Trovoada", "em branco"]
    }
};

try {
    if (!translate[options.languages]) {
        options.languages = 'en';
    }
} catch (err) {
    //alert("setup err" + err);
}
if (options.seconds === true) {
    options.clockrefresh = 1000;
}

function convertTOWord(num) {
    var onesText = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tensText = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        aboveText = ['', ' thousand ', ' million ', ' billion ', ' trillion ', ' quadrillion ', ' quintillion ', ' sextillion '],
        generatedArray = [],
        converted = '',
        i = 0;
    while (num) {
        generatedArray.push(num % 1000);
        num = parseInt(num / 1000, 10);
    }
    while (generatedArray.length) {
        converted = (function (a) {
            var x = Math.floor(a / 100),
                y = Math.floor(a / 10) % 10,
                z = a % 10;
            return (x > 0 ? onesText[x] + ' hundred ' : '') +
                (y >= 2 ? tensText[y] + ' ' + onesText[z] : onesText[10 * y + z]);
        })(generatedArray.shift()) + aboveText[i++] + converted;
    }
    return converted;
}

function checkDiv(div) { //check if element is placed
    var keys = Object.keys(action.savedElements.placedElements),
        loc = keys.indexOf(div);
    if (loc !== -1) {
        return document.getElementById(keys[loc]);
    }
    return;
}
