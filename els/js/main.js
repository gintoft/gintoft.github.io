$(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  precent = 20;
})


function editPacket(){
	$("#hidePacket").toggle()
}

function startPacket() {
	
	precent = 10;
	$("#packet").attr("class","badge");
	$("#packet").addClass("badge-warning");
	$("#packet").html("Выбран бизнес-пакет Start");
	console.log(precent);
	
}

function standartPacket() {
	
	precent = 20;
	$("#packet").attr("class","badge");
	$("#packet").addClass("badge-success");
	$("#packet").html("Выбран бизнес-пакет Standart");
	console.log(precent);
}

function BPROPacket() {
	
	precent = 30;
	$("#packet").attr("class","badge");
	$("#packet").addClass("badge-primary");
	$("#packet").html("Выбран бизнес-пакет Business PRO");
	console.log(precent);
}

var point = {

    start: 100,
    standart: 300,
    BusinessPro: 900

}
var packetCost = {

    start: 22420,
    standart: 60180,
    BusinessPro: 173460

}

function checkPassword(){
	
	passList = ['Жанна', 'Еврей', 'Андрей', "123"];
	pass = $("#password").val();
	passInd = passList.indexOf(pass);

	if(passInd != -1){
//	if(true){
	   
		$("#hiddenTable").show();
		$("#auth").hide();
	   
	} else {
	   alert("Неверный пароль!");
	   }
}
function getData(){
	
	L1LStartMan = parseInt($("#L1LStartMan").val());
	L1RStartMan = parseInt($("#L1RStartMan").val());
	L1RStandartMan = parseInt($("#L1RStandartMan").val());
	L1LStandartMan = parseInt($("#L1LStandartMan").val());
	L1LBPROMan = parseInt($("#L1LBPROMan").val());
	L1RBPROMan = parseInt($("#L1RBPROMan").val());
	
	L2LStartMan = parseInt($("#L2LStartMan").val());
	L2RStartMan = parseInt($("#L2RStartMan").val());
	L2RStandartMan = parseInt($("#L2RStandartMan").val());
	L2LStandartMan = parseInt($("#L2RStandartMan").val());
	L2LBPROMan = parseInt($("#L2LBPROMan").val());
	L2RBPROMan = parseInt($("#L2RBPROMan").val());
	
	L3LStartMan = parseInt($("#L3LStartMan").val());
	L3RStartMan = parseInt($("#L3RStartMan").val());
	L3RStandartMan = parseInt($("#L3RStandartMan").val());
	L3LStandartMan = parseInt($("#L3RStandartMan").val());
	L3LBPROMan = parseInt($("#L3LBPROMan").val());
	L3RBPROMan = parseInt($("#L3RBPROMan").val());
	
	L4LStartMan = parseInt($("#L4LStartMan").val());
	L4RStartMan = parseInt($("#L4RStartMan").val());
	L4RStandartMan = parseInt($("#L4RStandartMan").val());
	L4LStandartMan = parseInt($("#L4RStandartMan").val());
	L4LBPROMan = parseInt($("#L4LBPROMan").val());
	L4RBPROMan = parseInt($("#L4RBPROMan").val());
	
	L5LStartMan = parseInt($("#L5LStartMan").val());
	L5RStartMan = parseInt($("#L5RStartMan").val());
	L5RStandartMan = parseInt($("#L5RStandartMan").val());
	L5LStandartMan = parseInt($("#L5RStandartMan").val());
	L5LBPROMan = parseInt($("#L5LBPROMan").val());
	L5RBPROMan = parseInt($("#L5RBPROMan").val());
		
	L6LStartMan = parseInt($("#L6LStartMan").val());
	L6RStartMan = parseInt($("#L6RStartMan").val());
	L6RStandartMan = parseInt($("#L6RStandartMan").val());
	L6LStandartMan = parseInt($("#L6RStandartMan").val());
	L6LBPROMan = parseInt($("#L6LBPROMan").val());
	L6RBPROMan = parseInt($("#L6RBPROMan").val());
		
	L7LStartMan = parseInt($("#L7LStartMan").val());
	L7RStartMan = parseInt($("#L7RStartMan").val());
	L7RStandartMan = parseInt($("#L7RStandartMan").val());
	L7LStandartMan = parseInt($("#L7RStandartMan").val());
	L7LBPROMan = parseInt($("#L7LBPROMan").val());
	L7RBPROMan = parseInt($("#L7RBPROMan").val());
	
}
function fillSumPoints(){
	
	$("#L1LSum").css("background-color", "");
	$("#L1RSum").css("background-color", "");
	
	L1LStartPoint = L1LStartMan * point.start;
	L1LStandartPoint = L1LStandartMan * point.standart;
	L1LBPROPoint = L1LBPROMan * point.BusinessPro;
	L1LSum = L1LStartPoint + L1LStandartPoint + L1LBPROPoint;
	
	$("#L1LStartPoint").html(L1LStartPoint);
	$("#L1LStandartPoint").html(L1LStandartPoint);
	$("#L1LBPROPoint").html(L1LBPROPoint);
	$("#L1LSum").html(L1LSum);
	
	L1RStartPoint = L1RStartMan * point.start;
	L1RStandartPoint = L1RStandartMan * point.standart;
	L1RBPROPoint = L1RBPROMan * point.BusinessPro;
	L1RSum = L1RStartPoint + L1RStandartPoint + L1RBPROPoint;
	
	$("#L1RStartPoint").html(L1RStartPoint);
	$("#L1RStandartPoint").html(L1RStandartPoint);
	$("#L1RBPROPoint").html(L1RBPROPoint);
	$("#L1RSum").html(L1RSum);
	
	if (L1LSum < L1RSum) {
		L1TotalSum = L1LSum;
		$("#L1TotalSum").html(L1LSum);
		$("#L1LSum").css("background-color", "#e6ffe6");
	} else if (L1LSum > L1RSum){
		L1TotalSum = L1RSum;
		$("#L1TotalSum").html(L1RSum);
		$("#L1RSum").css("background-color", "#e6ffe6");
	} else {
		L1TotalSum = L1LSum;
		$("#L1TotalSum").html(L1RSum);
		$("#L1LSum").css("background-color", "#e6ffe6");
		$("#L1RSum").css("background-color", "#e6ffe6");
	}
	
	
	$("#L2LSum").css("background-color", "");
	$("#L2RSum").css("background-color", "");
	
	L2LStartPoint = L2LStartMan * point.start;
	L2LStandartPoint = L2LStandartMan * point.standart;
	L2LBPROPoint = L2LBPROMan * point.BusinessPro;
	L2LSum = L2LStartPoint + L2LStandartPoint + L2LBPROPoint;
	
	$("#L2LStartPoint").html(L2LStartPoint);
	$("#L2LStandartPoint").html(L2LStandartPoint);
	$("#L2LBPROPoint").html(L2LBPROPoint);
	$("#L2LSum").html(L2LSum);
	
	L2RStartPoint = L2RStartMan * point.start;
	L2RStandartPoint = L2RStandartMan * point.standart;
	L2RBPROPoint = L2RBPROMan * point.BusinessPro;
	L2RSum = L2RStartPoint + L2RStandartPoint + L2RBPROPoint;
	
	$("#L2RStartPoint").html(L2RStartPoint);
	$("#L2RStandartPoint").html(L2RStandartPoint);
	$("#L2RBPROPoint").html(L2RBPROPoint);
	$("#L2RSum").html(L2RSum);
	
	if (L2LSum < L2RSum) {
		L2TotalSum = L2LSum;
		$("#L2TotalSum").html(L2LSum);
		$("#L2LSum").css("background-color", "#e6ffe6");
	} else if (L2LSum > L2RSum){
		L2TotalSum = L2RSum;
		$("#L2TotalSum").html(L2RSum);
		$("#L2RSum").css("background-color", "#e6ffe6");
	} else {
		L2TotalSum = L2LSum;
		$("#L2TotalSum").html(L2RSum);
		$("#L2LSum").css("background-color", "#e6ffe6");
		$("#L2RSum").css("background-color", "#e6ffe6");
	}
	
	
	$("#L3LSum").css("background-color", "");
	$("#L3RSum").css("background-color", "");
	
	L3LStartPoint = L3LStartMan * point.start;
	L3LStandartPoint = L3LStandartMan * point.standart;
	L3LBPROPoint = L3LBPROMan * point.BusinessPro;
	L3LSum = L3LStartPoint + L3LStandartPoint + L3LBPROPoint;
	
	$("#L3LStartPoint").html(L3LStartPoint);
	$("#L3LStandartPoint").html(L3LStandartPoint);
	$("#L3LBPROPoint").html(L3LBPROPoint);
	$("#L3LSum").html(L3LSum);
	
	L3RStartPoint = L3RStartMan * point.start;
	L3RStandartPoint = L3RStandartMan * point.standart;
	L3RBPROPoint = L3RBPROMan * point.BusinessPro;
	L3RSum = L3RStartPoint + L3RStandartPoint + L3RBPROPoint;
	
	$("#L3RStartPoint").html(L3RStartPoint);
	$("#L3RStandartPoint").html(L3RStandartPoint);
	$("#L3RBPROPoint").html(L3RBPROPoint);
	$("#L3RSum").html(L3RSum);
	
	if (L3LSum < L3RSum) {
		L3TotalSum = L3LSum;
		$("#L3TotalSum").html(L3LSum);
		$("#L3LSum").css("background-color", "#e6ffe6");
	} else if (L3LSum > L3RSum){
		L3TotalSum = L3RSum;
		$("#L3TotalSum").html(L3RSum);
		$("#L3RSum").css("background-color", "#e6ffe6");
	} else {
		L3TotalSum = L3LSum;
		$("#L3TotalSum").html(L3RSum);
		$("#L3LSum").css("background-color", "#e6ffe6");
		$("#L3RSum").css("background-color", "#e6ffe6");
	}
	
	
	$("#L4LSum").css("background-color", "");
	$("#L4RSum").css("background-color", "");
	
	L4LStartPoint = L4LStartMan * point.start;
	L4LStandartPoint = L4LStandartMan * point.standart;
	L4LBPROPoint = L4LBPROMan * point.BusinessPro;
	L4LSum = L4LStartPoint + L4LStandartPoint + L4LBPROPoint;
	
	$("#L4LStartPoint").html(L4LStartPoint);
	$("#L4LStandartPoint").html(L4LStandartPoint);
	$("#L4LBPROPoint").html(L4LBPROPoint);
	$("#L4LSum").html(L4LSum);
	
	L4RStartPoint = L4RStartMan * point.start;
	L4RStandartPoint = L4RStandartMan * point.standart;
	L4RBPROPoint = L4RBPROMan * point.BusinessPro;
	L4RSum = L4RStartPoint + L4RStandartPoint + L4RBPROPoint;
	
	$("#L4RStartPoint").html(L4RStartPoint);
	$("#L4RStandartPoint").html(L4RStandartPoint);
	$("#L4RBPROPoint").html(L4RBPROPoint);
	$("#L4RSum").html(L4RSum);
	
	if (L4LSum < L4RSum) {
		L4TotalSum = L4LSum;
		$("#L4TotalSum").html(L4LSum);
		$("#L4LSum").css("background-color", "#e6ffe6");
	} else if (L4LSum > L4RSum){
		L4TotalSum = L4RSum;
		$("#L4TotalSum").html(L4RSum);
		$("#L4RSum").css("background-color", "#e6ffe6");
	} else {
		L4TotalSum = L4LSum;
		$("#L4TotalSum").html(L4RSum);
		$("#L4LSum").css("background-color", "#e6ffe6");
		$("#L4RSum").css("background-color", "#e6ffe6");
	}
	
	
	$("#L5LSum").css("background-color", "");
	$("#L5RSum").css("background-color", "");
	
	L5LStartPoint = L5LStartMan * point.start;
	L5LStandartPoint = L5LStandartMan * point.standart;
	L5LBPROPoint = L5LBPROMan * point.BusinessPro;
	L5LSum = L5LStartPoint + L5LStandartPoint + L5LBPROPoint;
	
	$("#L5LStartPoint").html(L5LStartPoint);
	$("#L5LStandartPoint").html(L5LStandartPoint);
	$("#L5LBPROPoint").html(L5LBPROPoint);
	$("#L5LSum").html(L5LSum);
	
	L5RStartPoint = L5RStartMan * point.start;
	L5RStandartPoint = L5RStandartMan * point.standart;
	L5RBPROPoint = L5RBPROMan * point.BusinessPro;
	L5RSum = L5RStartPoint + L5RStandartPoint + L5RBPROPoint;
	
	$("#L5RStartPoint").html(L5RStartPoint);
	$("#L5RStandartPoint").html(L5RStandartPoint);
	$("#L5RBPROPoint").html(L5RBPROPoint);
	$("#L5RSum").html(L5RSum);
	
	if (L5LSum < L5RSum) {
		L5TotalSum = L5LSum;
		$("#L5TotalSum").html(L5LSum);
		$("#L5LSum").css("background-color", "#e6ffe6");
	} else if (L5LSum > L5RSum){
		L5TotalSum = L5RSum;
		$("#L5TotalSum").html(L5RSum);
		$("#L5RSum").css("background-color", "#e6ffe6");
	} else {
		L5TotalSum = L5LSum;
		$("#L5TotalSum").html(L5RSum);
		$("#L5LSum").css("background-color", "#e6ffe6");
		$("#L5RSum").css("background-color", "#e6ffe6");
	}
	
	
	$("#L6LSum").css("background-color", "");
	$("#L6RSum").css("background-color", "");
	
	L6LStartPoint = L6LStartMan * point.start;
	L6LStandartPoint = L6LStandartMan * point.standart;
	L6LBPROPoint = L6LBPROMan * point.BusinessPro;
	L6LSum = L6LStartPoint + L6LStandartPoint + L6LBPROPoint;
	
	$("#L6LStartPoint").html(L6LStartPoint);
	$("#L6LStandartPoint").html(L6LStandartPoint);
	$("#L6LBPROPoint").html(L6LBPROPoint);
	$("#L6LSum").html(L6LSum);
	
	L6RStartPoint = L6RStartMan * point.start;
	L6RStandartPoint = L6RStandartMan * point.standart;
	L6RBPROPoint = L6RBPROMan * point.BusinessPro;
	L6RSum = L6RStartPoint + L6RStandartPoint + L6RBPROPoint;
	
	$("#L6RStartPoint").html(L6RStartPoint);
	$("#L6RStandartPoint").html(L6RStandartPoint);
	$("#L6RBPROPoint").html(L6RBPROPoint);
	$("#L6RSum").html(L6RSum);
	
	if (L6LSum < L6RSum) {
		L6TotalSum = L6LSum;
		$("#L6TotalSum").html(L6LSum);
		$("#L6LSum").css("background-color", "#e6ffe6");
	} else if (L6LSum > L6RSum){
		L6TotalSum = L6RSum;
		$("#L6TotalSum").html(L6RSum);
		$("#L6RSum").css("background-color", "#e6ffe6");
	} else {
		L6TotalSum = L6LSum;
		$("#L6TotalSum").html(L6RSum);
		$("#L6LSum").css("background-color", "#e6ffe6");
		$("#L6RSum").css("background-color", "#e6ffe6");
	}
	
	
	$("#L7LSum").css("background-color", "");
	$("#L7RSum").css("background-color", "");
	
	L7LStartPoint = L7LStartMan * point.start;
	L7LStandartPoint = L7LStandartMan * point.standart;
	L7LBPROPoint = L7LBPROMan * point.BusinessPro;
	L7LSum = L7LStartPoint + L7LStandartPoint + L7LBPROPoint;
	
	$("#L7LStartPoint").html(L7LStartPoint);
	$("#L7LStandartPoint").html(L7LStandartPoint);
	$("#L7LBPROPoint").html(L7LBPROPoint);
	$("#L7LSum").html(L7LSum);
	
	L7RStartPoint = L7RStartMan * point.start;
	L7RStandartPoint = L7RStandartMan * point.standart;
	L7RBPROPoint = L7RBPROMan * point.BusinessPro;
	L7RSum = L7RStartPoint + L7RStandartPoint + L7RBPROPoint;
	
	$("#L7RStartPoint").html(L7RStartPoint);
	$("#L7RStandartPoint").html(L7RStandartPoint);
	$("#L7RBPROPoint").html(L7RBPROPoint);
	$("#L7RSum").html(L7RSum);
	
	if (L7LSum < L7RSum) {
		L7TotalSum = L7LSum;
		$("#L7TotalSum").html(L7LSum);
		$("#L7LSum").css("background-color", "#e6ffe6");
	} else if (L7LSum > L7RSum){
		L7TotalSum = L7RSum;
		$("#L7TotalSum").html(L7RSum);
		$("#L7RSum").css("background-color", "#e6ffe6");
	} else {
		L7TotalSum = L7LSum;
		$("#L7TotalSum").html(L7RSum);
		$("#L7LSum").css("background-color", "#e6ffe6");
		$("#L7RSum").css("background-color", "#e6ffe6");
	}
}
function clearTable(){

$("#L1LStartMan").val(0);
$("#L1RStartMan").val(0);
$("#L1RStandartMan").val(0);
$("#L1LStandartMan").val(0);
$("#L1LBPROMan").val(0);
$("#L1RBPROMan").val(0);

$("#L2LStartMan").val(0);
$("#L2RStartMan").val(0);
$("#L2RStandartMan").val(0);
$("#L2LStandartMan").val(0);
$("#L2LBPROMan").val(0);
$("#L2RBPROMan").val(0);

$("#L3LStartMan").val(0);
$("#L3RStartMan").val(0);
$("#L3RStandartMan").val(0);
$("#L3LStandartMan").val(0);
$("#L3LBPROMan").val(0);
$("#L3RBPROMan").val(0);

$("#L4LStartMan").val(0);
$("#L4RStartMan").val(0);
$("#L4RStandartMan").val(0);
$("#L4LStandartMan").val(0);
$("#L4LBPROMan").val(0);
$("#L4RBPROMan").val(0);

$("#L5LStartMan").val(0);
$("#L5RStartMan").val(0);
$("#L5RStandartMan").val(0);
$("#L5LStandartMan").val(0);
$("#L5LBPROMan").val(0);
$("#L5RBPROMan").val(0);

$("#L6LStartMan").val(0);
$("#L6RStartMan").val(0);
$("#L6RStandartMan").val(0);
$("#L6LStandartMan").val(0);
$("#L6LBPROMan").val(0);
$("#L6RBPROMan").val(0);

$("#L7LStartMan").val(0);
$("#L7RStartMan").val(0);
$("#L7RStandartMan").val(0);
$("#L7LStandartMan").val(0);
$("#L7LBPROMan").val(0);
$("#L7RBPROMan").val(0);
	
}
function hideStructTable(){
	$("#structTable").toggle();
}

function fillDemo(){
$("#L1LStartMan").val(0);
$("#L1RStartMan").val(0);
$("#L1RStandartMan").val(0);
$("#L1LStandartMan").val(0);
$("#L1LBPROMan").val(0);
$("#L1RBPROMan").val(0);

$("#L2LStartMan").val(0);
$("#L2RStartMan").val(0);
$("#L2RStandartMan").val(0);
$("#L2LStandartMan").val(0);
$("#L2LBPROMan").val(0);
$("#L2RBPROMan").val(0);

$("#L3LStartMan").val(0);
$("#L3RStartMan").val(0);
$("#L3RStandartMan").val(0);
$("#L3LStandartMan").val(0);
$("#L3LBPROMan").val(0);
$("#L3RBPROMan").val(0);

$("#L4LStartMan").val(0);
$("#L4RStartMan").val(0);
$("#L4RStandartMan").val(0);
$("#L4LStandartMan").val(0);
$("#L4LBPROMan").val(0);
$("#L4RBPROMan").val(0);

$("#L5LStartMan").val(0);
$("#L5RStartMan").val(0);
$("#L5RStandartMan").val(0);
$("#L5LStandartMan").val(0);
$("#L5LBPROMan").val(0);
$("#L5RBPROMan").val(0);

$("#L6LStartMan").val(0);
$("#L6RStartMan").val(0);
$("#L6RStandartMan").val(0);
$("#L6LStandartMan").val(0);
$("#L6LBPROMan").val(0);
$("#L6RBPROMan").val(0);

$("#L7LStartMan").val(0);
$("#L7RStartMan").val(0);
$("#L7RStandartMan").val(0);
$("#L7LStandartMan").val(0);
$("#L7LBPROMan").val(0);
$("#L7RBPROMan").val(0);
	
}

function fillTable() {
	
getData();
fillSumPoints();
calcProfit();
$("#hiddenProfit").show();

}

function calcProfit(){
	 
	// Стартовая премия. Сумма баллов по меньшей ветке первой линии * 16% * 60 рублей
	
	var start = L1TotalSum * 0.16 * 60;
	$("#formula_start").html(L1TotalSum + " * 16% * 60₽");
	$("#start").html(start + " ₽");
	
	// Премия развития. Сумма баллов по меньшей ветке второй и третьей линии * 20% * 60 рублей 
	
	var rasv = (L2TotalSum + L3TotalSum) * 0.2 * 60;
	$("#formula_rasv").html("(" + L2TotalSum + " + " + L3TotalSum + ") * 20% * 60₽");
	$("#rasv").html(rasv + " ₽");
	
	// Премия за базовый объем
	
	var baseValue = 0;
	
	var CountPeople_1_Line_L = L1LStartMan + L1LStandartMan + L1LBPROMan;
	var CountPeople_1_Line_R = L1RStartMan + L1RStandartMan + L1RBPROMan;
	var CountPeople_1_Line_Total = CountPeople_1_Line_L + CountPeople_1_Line_R;

	var SumPoint_1_Line_L = L1LSum;
	var SumPoint_1_Line_R = L1RSum;
	var SumPoint_1_Line_Total = SumPoint_1_Line_L + SumPoint_1_Line_R;
	
	
	if(CountPeople_1_Line_Total >= 3 && SumPoint_1_Line_Total >= 500 && SumPoint_1_Line_Total < 1500) {
		
	   baseValue = 6000;
	   $("#baseValue").html(baseValue + " ₽");
	   $("#formula_baseValue").html("Начислена премия 6000₽ за приглашение " + CountPeople_1_Line_Total + " чел. в 1 линию на сумму " + SumPoint_1_Line_Total + " баллов.");
	   
	} else if(CountPeople_1_Line_Total >= 3 && SumPoint_1_Line_Total >= 1500) {
	   baseValue = 30000;
	   $("#formula_baseValue").html("Начислена премия 30000₽ за приглашение " + CountPeople_1_Line_Total + " чел. в 1 линию на сумму " + SumPoint_1_Line_Total + " баллов.");
	   $("#baseValue").html(baseValue + " ₽");
	} else {
		baseValue = 0;
		$("#formula_baseValue").html("Не выполнены условия начисления премии (приглашено меньше 3 человек в 1 линию, и/или сумма баллов за приглашения в 1 линию меньше 500.");
		$("#baseValue").html("0₽");
	}
	
	// Групповая премия
	
	var group = 0;
	
	if(CountPeople_1_Line_L > 0 && CountPeople_1_Line_R > 0) {
		
		group = (L1TotalSum + L2TotalSum + L3TotalSum + L4TotalSum + L5TotalSum + L6TotalSum + L7TotalSum) * precent/100 * 60;
		
		$("#formula_group").html("(" + L1TotalSum + " + " + L2TotalSum + " + " + L3TotalSum + " + " + L4TotalSum + " + " + L5TotalSum + " + " + L6TotalSum + " + " + L7TotalSum + ") * " + precent + "% * 60₽");
		
		$("#group").html(parseInt(group) + "₽");
		
	} else {
		$("#formula_group").html("Не выполнены условия для получения премии - отсутствуют партнеры слева и справа.")
		$("#group").html(parseInt(group) + "₽");
	};
	
	// Спонсорская премия
	
	sponsored = $("#sponsored").val();
	
	
	// Розничная премия
	
	rosn = $("#rosn").val();
	
	// Лидерская премия
	
	leader = $("#leader").val();
	
	// Автомобильная премия
	
	avto = $("#avto").val();
	
	var totalCash = start + rasv + group + baseValue + parseInt(sponsored) + parseInt(rosn) + parseInt(leader) + parseInt(avto);
	
	$("#totalCash").html(totalCash + "₽");
	
	
	// Отрисовка графика
	
  var ctxB = document.getElementById("barChart").getContext('2d');
  var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
      labels: ["Стартовая", "Развития", "Групповая", "За базовый объем", "Спонсорская", "Розничный доход", "Лидерская", "Автомобильная"],
      datasets: [{
        label: 'Размер премии, ₽',
        data: [start, rasv, group, baseValue, sponsored, rosn, leader, avto],
//        data: [100, 200, 300,400,500,600,700,800],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
	
}

