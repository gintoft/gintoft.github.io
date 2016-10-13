function createSimple() {

$("#calculator").append('<h3>Обычный калькулятор</h3>');
$("#calculator").append('<input class="mrg-rght" placeholder="Введите число" type="text" id="id_n1">');
$("#calculator").append('<select class="mrg-rght"id="operand"> <option value="+">+</option><option value="-">-</option></select>');
$("#calculator").append('<input class="mrg-rght"placeholder="Введите число" type="text" id="id_n2">');
$("#calculator").append('<input class="mrg-rght"value="=" type="button" onclick="calculateResult()">');
$("#calculator").append('<input class="mrg-rght"type="text" placeholder="Результат" id="result">');

}

function calculateResult(){
    
var n1 = parseFloat($("#id_n1").val());
var n2 = parseFloat($("#id_n2").val());
var operand = $("#operand").val();
var result = operand == "+" ? n1+n2 : n1-n2;

$("#result").val(result);
    
}


function createPrecent() {

$("#calculator").append('<h3>Калькулятор процентов</h3>');    
$("#calculator").append('<input class="mrg-rght" placeholder="Сумма вклада" type="text" id="summ">');
$("#calculator").append('<input class="mrg-rght"placeholder="Срок вклада" type="text" id="time">');
$("#calculator").append('<input class="mrg-rght"placeholder="Процентная ставка" type="text" id="precent">');
$("#calculator").append('<div class="btn btn-primary" value="Посчитать" onclick="calculatePrecent()">Рассчитать доход</div>');    
$("#calculator").append('<br><div class="alert alert-success" id="money" style="display: none;"></div>');
    
}


function calculatePrecent(){

$("#money").hide();

var s = parseInt($("#summ").val());
var t = parseInt($("#time").val());
var p = parseInt($("#precent").val());

var res = 0.01*s*t*p;

$("#money").html("Доход составит: " + res + " рублей.");
$("#money").show();

}



