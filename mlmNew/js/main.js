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

function fillTable() {
	
	$('#1_Start_Point').html($("#1_Start").val() * 100);
	$('#1_Standart_Point').html($("#1_Standart").val() * 300);
	$('#1_BusinessPRO_Point').html($("#1_BusinessPRO").val() * 900);
	
	$('#1_SUM').html(
		$("#1_Start").val() * 100 +
		$("#1_Standart").val() * 300 +
		$("#1_BusinessPRO").val() * 900
	);
	
	$('#2_Start_Point').html($("#2_Start").val() * 100);
	$('#2_Standart_Point').html($("#2_Standart").val() * 300);
	$('#2_BusinessPRO_Point').html($("#2_BusinessPRO").val() * 900);
	
	$('#2_SUM').html(
		$("#2_Start").val() * 100 +
		$("#2_Standart").val() * 300 +
		$("#2_BusinessPRO").val() * 900
	);
	
	$('#3_Start_Point').html($("#3_Start").val() * 100);
    $('#3_Standart_Point').html($("#3_Standart").val() * 300);
    $('#3_BusinessPRO_Point').html($("#3_BusinessPRO").val() * 900);
    
    $('#3_SUM').html(
        $("#3_Start").val() * 100 +
        $("#3_Standart").val() * 300 +
        $("#3_BusinessPRO").val() * 900
    );
	
	$('#4_Start_Point').html($("#4_Start").val() * 100);
    $('#4_Standart_Point').html($("#4_Standart").val() * 300);
    $('#4_BusinessPRO_Point').html($("#4_BusinessPRO").val() * 900);
    
    $('#4_SUM').html(
        $("#4_Start").val() * 100 +
        $("#4_Standart").val() * 300 +
        $("#4_BusinessPRO").val() * 900
    );
	
	$('#5_Start_Point').html($("#5_Start").val() * 100);
    $('#5_Standart_Point').html($("#5_Standart").val() * 300);
    $('#5_BusinessPRO_Point').html($("#5_BusinessPRO").val() * 900);
    
    $('#5_SUM').html(
        $("#5_Start").val() * 100 +
        $("#5_Standart").val() * 300 +
        $("#5_BusinessPRO").val() * 900
    );
	
    $('#6_Start_Point').html($("#6_Start").val() * 100);
    $('#6_Standart_Point').html($("#6_Standart").val() * 300);
    $('#6_BusinessPRO_Point').html($("#6_BusinessPRO").val() * 900);
    
    $('#6_SUM').html(
        $("#6_Start").val() * 100 +
        $("#6_Standart").val() * 300 +
        $("#6_BusinessPRO").val() * 900
    );
	
    $('#7_Start_Point').html($("#7_Start").val() * 100);
    $('#7_Standart_Point').html($("#7_Standart").val() * 300);
    $('#7_BusinessPRO_Point').html($("#7_BusinessPRO").val() * 900);
    
    $('#7_SUM').html(
        $("#7_Start").val() * 100 +
        $("#7_Standart").val() * 300 +
        $("#7_BusinessPRO").val() * 900
    );
	
	calcProfit();
	
}



function calcProfit(){
	
	$("#hiddenProfit").show();
	
	var SUM_POINT_1 = parseInt($("#1_Start").val() * 100) +	parseInt($("#1_Standart").val() * 300) + parseInt($("#1_BusinessPRO").val() * 900)
	var SUM_POINT_2 = parseInt($("#2_Start").val() * 100) +	parseInt($("#2_Standart").val() * 300) + parseInt($("#2_BusinessPRO").val() * 900)
	var SUM_POINT_3 = parseInt($("#3_Start").val() * 100) +	parseInt($("#3_Standart").val() * 300) + parseInt($("#3_BusinessPRO").val() * 900)
	var SUM_POINT_4 = parseInt($("#4_Start").val() * 100) +	parseInt($("#4_Standart").val() * 300) + parseInt($("#4_BusinessPRO").val() * 900)
	var SUM_POINT_5 = parseInt($("#5_Start").val() * 100) +	parseInt($("#5_Standart").val() * 300) + parseInt($("#5_BusinessPRO").val() * 900)
	var SUM_POINT_6 = parseInt($("#6_Start").val() * 100) +	parseInt($("#6_Standart").val() * 300) + parseInt($("#6_BusinessPRO").val() * 900)
	var SUM_POINT_7 = parseInt($("#7_Start").val() * 100) +	parseInt($("#7_Standart").val() * 300) + parseInt($("#7_BusinessPRO").val() * 900)
	
	var start = SUM_POINT_1 * 0.16 * 60;
	var rasv = (SUM_POINT_2 + SUM_POINT_3) * 0.2 * 60;
	
	$("#start").html(start + "₽");
	
	$("#formula_start").html(SUM_POINT_1 + " * 16% * 60₽");
	
	$("#rasv").html(rasv + "₽");
	$("#formula_rasv").html("(" + SUM_POINT_2 + " + " + SUM_POINT_3 + ") * 20% * 60₽");
		
	var baseValue = 0;
	var sumPeopleFirstLine = parseInt($("#1_Start").val()) + parseInt($("#1_Standart").val()) + parseInt($("#1_BusinessPRO").val());
	
	if(sumPeopleFirstLine >= 3 && SUM_POINT_1 >= 500 && SUM_POINT_1 < 1500) {
		
	   baseValue = 6000;
	   $("#baseValue").html(baseValue + "₽");
	   $("#formula_baseValue").html("Начислена премия 6000₽ за приглашение " + sumPeopleFirstLine + " чел. в 1 линию на сумму " + SUM_POINT_1 + " баллов.");
	   
	} else if(sumPeopleFirstLine >= 3 && SUM_POINT_1 >= 1500) {
	   baseValue = 30000;
	   $("#formula_baseValue").html("Начислена премия 30000₽ за приглашение " + sumPeopleFirstLine + " чел. в 1 линию на сумму " + SUM_POINT_1 + " баллов.");
	   $("#baseValue").html(baseValue + "₽");
	} else {
		$("#formula_baseValue").html("Не выполнены условия начисления премии.");
		$("#baseValue").html("0₽");
	}
	
	
	$("#formula_group").html("(" + SUM_POINT_1 + " + " + SUM_POINT_2 + " + " + SUM_POINT_3 + " + " + SUM_POINT_4 + " + " + SUM_POINT_5 + " + " + SUM_POINT_6 + " + " + SUM_POINT_7 + ") * 20% * 60₽");
	
	
	var group = 0;
	
	if(sumPeopleFirstLine >= 2) {
		
		group = (SUM_POINT_1 + SUM_POINT_2 + SUM_POINT_3 + SUM_POINT_4 + SUM_POINT_5 + SUM_POINT_6 + SUM_POINT_7) * 0.2 * 60;
		$("#group").html(parseInt(group) + "₽");
		
	};
	
	var rosn = 0;
	
	rosn = $("#rosn").val();
	
	var totalCash = parseInt(start) + parseInt(rasv) + parseInt(baseValue) + parseInt(group) + parseInt(rosn);

	$("#totalCash").html(parseInt(totalCash));
	
	
	
  var ctxB = document.getElementById("barChart").getContext('2d');
  var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
      labels: ["Стартовая", "Развития", "Групповая", "За базовый объем", "Спонсорская", "Розничный доход"],
      datasets: [{
        label: 'Размер премии, ₽',
        data: [start, rasv, baseValue, group, 0, rosn],
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
