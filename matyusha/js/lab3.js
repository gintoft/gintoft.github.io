// Задание 1.


$(document).ready (function(){

    $("#getAuto").click (function (){
    $("#autoListSwitch").hide();
        
    var country = $("#country").val();
    var result = "";
        
        switch(country) {
            case "Россия" : result = "Марки автомобилей: Лада, УАЗ, ВАЗ, ЗИЛ"; break;
            case "Германия" : result = "Марки автомобилей: BMW, Audi, Volkswagen"; break;
            case "США" : result = "Марки автомобилей: Cadillac, Ford, Chrysler"; break;
            case "Франция" : result = "Марки автомобилей: Renault, Peugeout"; break;
            //default : result = "Страна не найдена. Выберите одну из стран: Россия, Германия, США, Франция.";
            }
        
        if(result != "") {
        $("#autoListSwitch").html (result);
        $("#autoListSwitch").show();
        } else alert("Ошибка! Введите одну из стран: Россия, Германия, США, Франция.");
        
    })
})


// Задание 2.


$(document).ready (function(){

    $("#getList").click (function (){
    
    $("#autoList").hide();
        
    var result = "";
        
    
    if ($("#Russia").prop("checked")) { result = "Марки автомобилей: Лада, УАЗ, ВАЗ, ЗИЛ"; }
    else if ($("#Germany").prop("checked")) { result = "Марки автомобилей: BMW, Audi, Volkswagen"; }
    else if ($("#USA").prop("checked")) { result = "Марки автомобилей: Cadillac, Ford, Chrysler"; }
    else if ($("#France").prop("checked")) { result = "Марки автомобилей: Renault, Peugeout"; }
    else if ($("#AnyCountry").prop("checked")) { result = "Марки автомобилей: Лада, УАЗ, ВАЗ, ЗИЛ, BMW, Audi, Volkswagen, Cadillac, Ford, Chrysler, Renault, Peugeout"; }

    if(result != "") {
        $("#autoList").html (result);
        $("#autoList").show();
    } else {
        alert("Ошибка! Выберите одну из стран!");}
        
})})


// Задание 3.

$(document).ready (function(){

$("#getNumbersList").click (function (){
$("#numberList").hide();
$("#error").hide();
    
var countNumber = parseInt($("#countNumber").val());    
var res = "Диапазон чисел: ";        
    
if ($("#ordered").prop("checked")) { 
    
    for (var i=1; i < countNumber; i++) {
        res+= (i + ', ');    
    } if (i = countNumber) {
        res += (countNumber + '.');
}}

if ($("#reverse").prop("checked")) { 
       
    for (var i=countNumber; i > 1; i--) {
        res+= (i + ', ');    
    } if (i = 1) {
        res += (1 + '.');
}}
       
if ($("#random").prop("checked")) { 
    
    for (var i=1; i < countNumber; i++) {
        res+= (Math.floor(1000*Math.random()) + ', ');    
    } if (i = countNumber) {
        res += (Math.floor(1000*Math.random()) + '.');
}} 
        
if(res != "Диапазон чисел: ") {
    $("#numberList").html (res);
    $("#numberList").show();
} else {
    $("#error").show();
}      
        
})})





