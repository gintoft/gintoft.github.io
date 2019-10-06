targetClass = ".card";

$(function () {

    fillCardholder();
    $(".card").hide();

$('#find').click(function(){
    
    $("#filter").hide();
    
    findedCount = $(targetClass).length
    
    if(findedCount == 0) {
        result = '<h4>По Вашему запросу не найдено мероприятий. <br>В программе Фестиваля много интересных событий, <a href="http://nsk.festivalnauki.ru/rasp" target="_self" class="reloadPage">попробуйте поискать снова.</a></h4>';    
    } else {
        result = '<h4 style="color: gray">Найдено мероприятий: ' + findedCount + '.</h4> <a href="http://nsk.festivalnauki.ru/rasp" target="_self" id="reloadPageF">Обновить настройки поиска</a>';
    }
    
    $("#filterResult").append(result);
    
    '<h3>Выберите подходящее мероприятие или откройте<a href="http://nsk.festivalnauki.ru/rasp" target="_self" id="fullRasp">полный список</a></h3>'
    
    $("#filterResult").show();
    $("#main").show();
    $(targetClass).show();

})
    
$('#fullRasp').click(function(){
    
    $(".card").show();
    $("#main").show();
    $('#hid').hide();
    
    $("#filterResult").append('<h4 style="color: gray">Найдено ' + $('.card').length + ' мероприятий.</h4>');
    $("#filterResult").show();
    
})
	
// Дата проведения
$('#1110').click(function(){
    
    targetClass += ".1110"
    $(".date").attr("disabled", "");
    $("#1110").removeAttr("disabled");
    $("#1110").removeClass("btn-light");
    $('#1110').addClass("btn-success");

})
$('#1210').click(function(){
    
    targetClass += ".1210"
    $(".date").attr("disabled", "");
    $("#1210").removeAttr("disabled");
    $("#1210").removeClass("btn-light");
    $('#1210').addClass("btn-success");

})
$('#1310').click(function(){
    
    targetClass += ".1310"
    $(".date").attr("disabled", "");
    $("#1310").removeAttr("disabled");
    $("#1310").removeClass("btn-light");
    $('#1310').addClass("btn-success");

})
$('#1410').click(function(){
    
    targetClass += ".1410"
    $(".date").attr("disabled", "");
    $("#1410").removeAttr("disabled");
    $("#1410").removeClass("btn-light");
    $('#1410').addClass("btn-success");

})
$('#1510').click(function(){
    
    targetClass += ".1510"
    $(".date").attr("disabled", "");
    $("#1510").removeAttr("disabled");
    $("#1510").removeClass("btn-light");
    $('#1510').addClass("btn-success");

})
$('#1610').click(function(){
    
    targetClass += ".1610"
    $(".date").attr("disabled", "");
    $("#1610").removeAttr("disabled");
    $("#1610").removeClass("btn-light");
    $('#1610').addClass("btn-success");

})
$('#1710').click(function(){
    
    targetClass += ".1710"
    $(".date").attr("disabled", "");
    $("#1710").removeAttr("disabled");
    $("#1710").removeClass("btn-light");
    $('#1710').addClass("btn-success");

})
$('#1810').click(function(){
    
    targetClass += ".1810"
    $(".date").attr("disabled", "");
    $("#1810").removeAttr("disabled");
    $("#1810").removeClass("btn-light");
    $('#1810').addClass("btn-success");

})
$('#1910').click(function(){
    
    targetClass += ".1910"
    $(".date").attr("disabled", "");
    $("#1910").removeAttr("disabled");
    $("#1910").removeClass("btn-light");
    $('#1910').addClass("btn-success");

})
$('#2010').click(function(){
    
    targetClass += ".2010"
    $(".date").attr("disabled", "");
    $("#2010").removeAttr("disabled");
    $("#2010").removeClass("btn-light");
    $('#2010').addClass("btn-success");

})

// Место проведения    
$('#MS').click(function(){
    
    targetClass += ".MS"
    $(".place").attr("disabled", "");
    $("#MS").removeAttr("disabled");
    $("#MS").removeClass("btn-light");
    $('#MS').addClass("btn-success");

})
$('#MUS').click(function(){
    targetClass += ".MUS"
    $(".place").attr("disabled", "");
    $("#MUS").removeAttr("disabled");
    $("#MUS").removeClass("btn-light");
    $('#MUS').addClass("btn-success");

})
$('#NII').click(function(){
    targetClass += ".NII"
    $(".place").attr("disabled", "");
    $("#NII").removeAttr("disabled");
    $("#NII").removeClass("btn-light");
    $('#NII').addClass("btn-success");

})
$('#VOO').click(function(){
    targetClass += ".VOO"
    $(".place").attr("disabled", "");
    $("#VOO").removeAttr("disabled");
    $("#VOO").removeClass("btn-light");
    $('#VOO').addClass("btn-success");

})
$('#PP').click(function(){
    targetClass += ".PP"
    $(".place").attr("disabled", "");
    $("#PP").removeAttr("disabled");
    $("#PP").removeClass("btn-light");
    $('#PP').addClass("btn-success");

})
$('#LIB').click(function(){
    targetClass += ".LIB"
    $(".place").attr("disabled", "");
    $("#LIB").removeAttr("disabled");
    $("#LIB").removeClass("btn-light");
    $('#LIB').addClass("btn-success");

})
$('#TP').click(function(){
    targetClass += ".TP"
    $(".place").attr("disabled", "");
    $("#TP").removeAttr("disabled");
    $("#TP").removeClass("btn-light");
    $('#TP').addClass("btn-success");

})
$('#OOP').click(function(){
    targetClass += ".OOP"
    $(".place").attr("disabled", "");
    $("#OOP").removeAttr("disabled");
    $("#OOP").removeClass("btn-light");
    $('#OOP').addClass("btn-success");

})

// Целевая аудитория
$('#ENTR').click(function(){
    
    targetClass += ".ENTR"
    $(".client").attr("disabled", "");
    $("#ENTR").removeAttr("disabled");
    $("#ENTR").removeClass("btn-light");
    $('#ENTR').addClass("btn-success");

})
$('#ADULTS').click(function(){
    
    targetClass += ".ADULTS"
    $(".client").attr("disabled", "");
    $("#ADULTS").removeAttr("disabled");
    $("#ADULTS").removeClass("btn-light");
    $('#ADULTS').addClass("btn-success");

})
$('#SPEC').click(function(){
    
    targetClass += ".SPEC"
    $(".client").attr("disabled", "");
    $("#SPEC").removeAttr("disabled");
    $("#SPEC").removeClass("btn-light");
    $('#SPEC').addClass("btn-success");

})
$('#STUD').click(function(){
    
    targetClass += ".STUD"
    $(".client").attr("disabled", "");
    $("#STUD").removeAttr("disabled");
    $("#STUD").removeClass("btn-light");
    $('#STUD').addClass("btn-success");

})
$('#SCH').click(function(){
    
    targetClass += ".SCH"
    $(".client").attr("disabled", "");
    $("#SCH").removeAttr("disabled");
    $("#SCH").removeClass("btn-light");
    $('#SCH').addClass("btn-success");

})
$('#PSCH').click(function(){
    
    targetClass += ".PSCH"
    $(".client").attr("disabled", "");
    $("#PSCH").removeAttr("disabled");
    $("#PSCH").removeClass("btn-light");
    $('#PSCH').addClass("btn-success");

})

// Формат мероприятия  
$('#LEC').click(function(){
    
    targetClass += ".LEC"
    $(".type").attr("disabled", "");
    $("#LEC").removeAttr("disabled");
    $("#LEC").removeClass("btn-light");
    $('#LEC').addClass("btn-success");

})
$('#SG').click(function(){
    
    targetClass += ".SG"
    $(".type").attr("disabled", "");
    $("#SG").removeAttr("disabled");
    $("#SG").removeClass("btn-light");
    $('#SG').addClass("btn-success");

})
$('#OD').click(function(){
    
    targetClass += ".OD"
    $(".type").attr("disabled", "");
    $("#OD").removeAttr("disabled");
    $("#OD").removeClass("btn-light");
    $('#OD').addClass("btn-success");

})
$('#SHOW').click(function(){
    
    targetClass += ".SHOW"
    $(".type").attr("disabled", "");
    $("#SHOW").removeAttr("disabled");
    $("#SHOW").removeClass("btn-light");
    $('#SHOW').addClass("btn-success");

})
$('#CONF').click(function(){
    
    targetClass += ".CONF"
    $(".type").attr("disabled", "");
    $("#CONF").removeAttr("disabled");
    $("#CONF").removeClass("btn-light");
    $('#CONF').addClass("btn-success");

})
$('#MC').click(function(){
    
    targetClass += ".MC"
    $(".type").attr("disabled", "");
    $("#MC").removeAttr("disabled");
    $("#MC").removeClass("btn-light");
    $('#MC').addClass("btn-success");

})
$('#SS').click(function(){
    
    targetClass += ".SS"
    $(".type").attr("disabled", "");
    $("#SS").removeAttr("disabled");
    $("#SS").removeClass("btn-light");
    $('#SS').addClass("btn-success");

})

})

$('.reloadPage').click(function(){
    document.location.reload(true);
})

function drawCard(date, name, description, type, city, placeType, placeName, address, addressInfo, client, classList, link) {

    html = '<!--Начало карточки-->'
    html += '<div class="card ' + classList + ' " style="margin-top: 20px">'
    html += '<div class="card-body">'
    html += '<h5>' + name + '  <span class="badge badge-warning"><i class="fas fa-calendar-day"></i> ' + date + '</span>  '
    html += '<span class="badge badge-light"> <i class="fas fa-book"></i> ' + type + ' </span></h5>'
    html += '<p class="card-text">' + description + '</p>'
    
    html += '<span class="badge badge-light"><i class="fas fa-building"></i></i> ' + placeName + '</span><br>'
    html += '<span class="badge badge-light"><i class="fas fa-map-marker-alt"></i> ' + address + ' ' + addressInfo + ' </span>'
    html += '<br><span class="badge badge-success"><i class="fa fa-users"></i> ' + client + ' </span>'
    
    html += '<br><br><a href="' + link + '#" target="_blank" style="color: white" class="btn btn-success">Зарегистрироваться!</a>'
    html += '</div></div>';
    
    $("#cardholder").append(html);
    
}

function fillCardholder(){
    
    for (i = 0; i < dataset.length; i++){
        drawCard(dataset[i].date, dataset[i].name, dataset[i].description, dataset[i].type, dataset[i].city, dataset[i].placeType, dataset[i].placeName, dataset[i].address, dataset[i].addressInfo, dataset[i].client, dataset[i].classList, dataset[i].link);
    }
    
//    $('[data-toggle="tooltip"]').tooltip(); 
    
}


