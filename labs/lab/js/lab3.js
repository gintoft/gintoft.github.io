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

