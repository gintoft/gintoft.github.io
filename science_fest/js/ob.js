
targetClass = ""

$(function () {

	$(".card").hide();
    $("#main").show();

$('#find').click(function(){
    
    
    $(targetClass).hide();

})

$('#reset').click(function(){
    
    document.location.reload(true);
    targetClass = ""
    $("#main").hide();
    
    $(".date").removeAttr("disabled");
    $(".date").removeClass("btn-success");
    $(".date").addClass("btn-light");
    
    $(".place").removeAttr("disabled");
    $(".place").removeClass("btn-success");
    $(".place").addClass("btn-light");
    
    $(".type").removeAttr("disabled");
    $(".type").removeClass("btn-success");
    $(".type").addClass("btn-light");
    
    $(".client").removeAttr("disabled");
    $(".client").removeClass("btn-success");
    $(".client").addClass("btn-light");
    
})
    
$('#fullRasp').click(function(){ // Открыть полный список мероприятий
    
    $(".jumbotron").hide();

})
    
	
// Дата проведения
$('#1010').click(function(){
    
    $(".1010").show();
    targetClass += ".1010"
    
    $(".date").attr("disabled", "");
    $("#1010").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#1010").removeClass("btn-light");
    $('#1010').addClass("btn-success"); // применить этой кнопке выделение

})
$('#1110').click(function(){
    
    $(".1110").show();
    targetClass += ".1110"
    $(".date").attr("disabled", "");
    $("#1110").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#1110").removeClass("btn-light");
    $('#1110').addClass("btn-success"); // применить этой кнопке выделение

})
$('#1210').click(function(){
    
    $(".1210").show();
    targetClass += ".1210"
    $(".date").attr("disabled", "");
    $("#1210").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#1210").removeClass("btn-light");
    $('#1210').addClass("btn-success"); // применить этой кнопке выделение

})
$('#1310').click(function(){
    
    $(".1310").show();
    targetClass += ".1310"
    $(".date").attr("disabled", "");
    $("#1310").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#1310").removeClass("btn-light");
    $('#1310').addClass("btn-success"); // применить этой кнопке выделение

})
$('#1410').click(function(){
    
    $(".1410").show();
    targetClass += ".1410"
    $(".date").attr("disabled", "");
    $("#1410").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#1410").removeClass("btn-light");
    $('#1410').addClass("btn-success"); // применить этой кнопке выделение

})
$('#1510').click(function(){
    
    $(".1510").show();
    targetClass += ".1510"
    $(".date").attr("disabled", "");
    $("#1510").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#1510").removeClass("btn-light");
    $('#1510').addClass("btn-success"); // применить этой кнопке выделение

})
$('#1610').click(function(){
    
    $(".1610").show();
    targetClass += ".1610"
    $(".date").attr("disabled", "");
    $("#1610").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#1610").removeClass("btn-light");
    $('#1610').addClass("btn-success"); // применить этой кнопке выделение

})
$('#1710').click(function(){
    
    $(".1710").show();
    targetClass += ".1710"
    $(".date").attr("disabled", "");
    $("#1710").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#1710").removeClass("btn-light");
    $('#1710').addClass("btn-success"); // применить этой кнопке выделение

})
$('#1810').click(function(){
    
    $(".1810").show();
    targetClass += ".1810"
    $(".date").attr("disabled", "");
    $("#1810").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#1810").removeClass("btn-light");
    $('#1810').addClass("btn-success"); // применить этой кнопке выделение

})
$('#1910').click(function(){
    
    $(".1910").show();
    targetClass += ".1910"
    $(".date").attr("disabled", "");
    $("#1910").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#1910").removeClass("btn-light");
    $('#1910').addClass("btn-success"); // применить этой кнопке выделение

})
$('#2010').click(function(){
    
    $(".2010").show();
    targetClass += ".2010"
    $(".date").attr("disabled", "");
    $("#2010").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#2010").removeClass("btn-light");
    $('#2010').addClass("btn-success"); // применить этой кнопке выделение

})
$('#2110').click(function(){
    
    $(".2110").show();
    targetClass += ".2110"
    $(".date").attr("disabled", "");
    $("#2110").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#2110").removeClass("btn-light");
    $('#2110').addClass("btn-success"); // применить этой кнопке выделение

})

// Место проведения    
$('#NSUEM').click(function(){
    
//    $(".SCH").show();
    
    $(".place").attr("disabled", "");
    $("#NSUEM").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#NSUEM").removeClass("btn-light");
    $('#NSUEM').addClass("btn-success"); // применить этой кнопке выделение

})
 
$('#NSUEM').click(function(){
    
//    $(".SCH").show();
    
    $(".place").attr("disabled", "");
    $("#NSUEM").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#NSUEM").removeClass("btn-light");
    $('#NSUEM').addClass("btn-success"); // применить этой кнопке выделение

})
    
$('#NSPU').click(function(){
    
//    $(".SCH").show();
    
    $(".place").attr("disabled", "");
    $("#NSPU").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#NSPU").removeClass("btn-light");
    $('#NSPU').addClass("btn-success"); // применить этой кнопке выделение

})
$('#NGONB').click(function(){
    
//    $(".SCH").show();
    
    $(".place").attr("disabled", "");
    $("#NGONB").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#NGONB").removeClass("btn-light");
    $('#NGONB').addClass("btn-success"); // применить этой кнопке выделение

})
$('#NTEC').click(function(){
    
//    $(".SCH").show();
    
    $(".place").attr("disabled", "");
    $("#NTEC").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#NTEC").removeClass("btn-light");
    $('#NTEC').addClass("btn-success"); // применить этой кнопке выделение

})
$('#GPNTB').click(function(){
    
//    $(".SCH").show();
    
    $(".place").attr("disabled", "");
    $("#GPNTB").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#GPNTB").removeClass("btn-light");
    $('#GPNTB').addClass("btn-success"); // применить этой кнопке выделение

})
    
// Целевая аудитория
$('#SCH').click(function(){
    
//    $(".SCH").show();
    
    $(".client").attr("disabled", "");
    $("#SCH").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#SCH").removeClass("btn-light");
    $('#SCH').addClass("btn-success"); // применить этой кнопке выделение

})
$('#STU').click(function(){
    
//    $(".SCH").show();
    
    $(".client").attr("disabled", "");
    $("#STU").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#STU").removeClass("btn-light");
    $('#STU').addClass("btn-success"); // применить этой кнопке выделение

})
$('#ENR').click(function(){
    
//    $(".SCH").show();
    
    $(".client").attr("disabled", "");
    $("#ENR").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#ENR").removeClass("btn-light");
    $('#ENR').addClass("btn-success"); // применить этой кнопке выделение

})
$('#MAN').click(function(){
    
//    $(".SCH").show();
    
    $(".client").attr("disabled", "");
    $("#MAN").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#MAN").removeClass("btn-light");
    $('#MAN').addClass("btn-success"); // применить этой кнопке выделение

})
$('#SPC').click(function(){
    
//    $(".SCH").show();
    
    $(".client").attr("disabled", "");
    $("#SPC").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#SPC").removeClass("btn-light");
    $('#SPC').addClass("btn-success"); // применить этой кнопке выделение

})


// Формат мероприятия  
$('#LEC').click(function(){
    
//    $(".SCH").show();
    
    $(".type").attr("disabled", "");
    $("#LEC").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#LEC").removeClass("btn-light");
    $('#LEC').addClass("btn-success"); // применить этой кнопке выделение

})
$('#ECS').click(function(){
    
//    $(".SCH").show();
    
    $(".type").attr("disabled", "");
    $("#ECS").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#ECS").removeClass("btn-light");
    $('#ECS').addClass("btn-success"); // применить этой кнопке выделение

})
$('#GAME').click(function(){
    
//    $(".SCH").show();
    
    $(".type").attr("disabled", "");
    $("#GAME").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#GAME").removeClass("btn-light");
    $('#GAME').addClass("btn-success"); // применить этой кнопке выделение

})
$('#INT').click(function(){
    
//    $(".SCH").show();
    
    $(".type").attr("disabled", "");
    $("#INT").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#INT").removeClass("btn-light");
    $('#INT').addClass("btn-success"); // применить этой кнопке выделение

})
$('#VIC').click(function(){
    
//    $(".SCH").show();
    
    $(".type").attr("disabled", "");
    $("#VIC").removeAttr("disabled"); // деактивировать все кнопки этого класса
    $("#VIC").removeClass("btn-light");
    $('#VIC').addClass("btn-success"); // применить этой кнопке выделение

})
    
})

dataset = [    
    
//    {name: "1", date: "2", info: "3", place: "3", type: "4", client: "5"},
    
    {name: "ЭкоХимикум", date: "10 октября с 10:00 до 12:00", info: "Думаете, химию можно изучать только по учебникам? Мы докажем, что эта наука не только интересная, но и веселая! Мероприятие позволит расширить кругозор обучающихся, повысит мотивацию к изучению химии и экологии через занимательные экономические опыты, викторины, загадки, которые, в свою очередь, способствуют развитию творческих способностей обучающихся к перечисленным предметам.", place: "Новосибирский торгово-экономический колледж", type: "Игра, викторина", client: "Школьники, Абитуриенты", classList: "NTEC 1010 SCH AB"},
    
    {name: "Гражданский судебный процесс", date: "11 октября с 10:00 до 12:00", info: "Мероприятие в формате интерактивной игры Гражданский  судебный  процесс.  Цель мероприятия - знакомство абитуриентов  с гражданским законодательством РФ, анализ  принципов справедливого, демократического  судопроизводства, независимостью  судей  и состязательностью  сторон.", place: "Новосибирский торгово-экономический колледж", type: "Интерактивная игра", client: "Абитуриенты", classList: "NTEC 1110"},
    
    {name: "Водородная энергетика", date: "12 октября с 10:00 до 12:00", info: "Правда ли, что в скором времени подойдут к концу привычные нам энергетические ресурсы? Тогда пора бы придумать что-то новое! И наука не стоит на месте. В рамках открытой лекции вы узнаете современные тренды развития мировой энергетической системы.", place: "Новосибирский государственный педагогический университет", type: "Лекция", client: "Школьники, Абитуриенты, Студенты, Взрослые, Специалисты", classList: "NSPU 1210"}
    
]

$(document).ready(function(){
    
    fillCardholder();
    
}); // Анонимная функция при загрузке страницы


function drawCard(name, date, info, place, type, client, classList) {

    html = '<!--Начало карточки-->'
    html += '<div class="card ' + classList + '">'
    html += '<div class="card-body">'
    html += '<h5>' + name + '  <span class="badge badge-warning"><i class="fas fa-calendar-day"></i> ' + date + '</span>  '
    html += '<span class="badge badge-light"> <i class="fas fa-book"></i> ' + type + ' </span></h5>'
    html += '<p class="card-text">' + info + '</p>'
    
    html += '<span class="badge badge-light"><i class="fas fa-map-marker-alt"></i> ' + place + ' </span>'
    html += '<br><span class="badge badge-success"><i class="fa fa-users"></i> ' + client + ' </span>'
    
    html += '<br><br><a href="#" class="btn btn-success">Зарегистрироваться!</a>'
    html += '</div></div><br>';
    
    $("#cardholder").append(html);
    
}

function fillCardholder(){
    
    for (i = 0; i < dataset.length; i++){
        drawCard(dataset[i].name, dataset[i].date, dataset[i].info, dataset[i].place, dataset[i].type, dataset[i].client, dataset[i].classList);
    }
    
    $('[data-toggle="tooltip"]').tooltip(); 
    
} // Цикл рисует список вопросов


