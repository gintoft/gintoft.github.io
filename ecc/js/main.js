
function fillTable() {
	
    var K1 = parseInt($("#K1").val()) // Объем
	var K2 = parseInt($("#K2").val()) // Сроки
	var K3 = parseInt($("#K3").val()) // Качество
	var K4 = parseInt($("#K4").val()) // Интенсивность
	var KS = parseInt($("#KS").val()) // Коэф. стимулирования
	var ZP = parseInt($("#ZP").val()) // Размер заработной платы
	var KPRV = parseInt($("#KPRV").val()) / 100  // Коэф. отношения потерь рабочего времени
    
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
    
    $('#hiddenProfit').show();
	
	var K1 = parseInt($("#K1").val()) // Объем
	var K2 = parseInt($("#K2").val()) // Сроки
	var K3 = parseInt($("#K3").val()) // Качество
	var K4 = parseFloat($("#K4").val()) // Интенсивность
	var KS = parseFloat($("#KS").val()) // Коэф. стимулирования
	var ZP = parseInt($("#ZP").val()) // Размер заработной платы
	var KPRV = parseFloat($("#KPRV").val()) / 100  // Коэф. отношения потерь рабочего времени
    
	var OE = (K1 + 6) *  (K2 + 6) * (K3 + 6) * K4; // Оценка эффективности
    
    var SV_base = 0;  // СВ
    var SV_order = 0; // СВ В приказ
    var SV_total = 0; // СВ На руки
    var part_ZP = 0; // СВ На руки
    
	if(OE >= 725) { // Проверка Оценки эффективности
        
        SV_base = ZP * KS * OE/1000 * 1 - KPRV
        SV_order = SV_base / 1.2
        SV_total = SV_base * 0.87
        part_ZP = SV_base / ZP
        
    } else { 
        
        SV_base = 0;
        SV_order = 0;
        SV_total = 0;
    
    }
    
    formula = 'СВ = (1 - '
    formula+= '<span class="text-info" >' + KPRV + '</span>'
    formula+= ') * '
    formula+= '<span class="text-success" >' + ZP + '</span>'
    formula+= ' * ' 
    formula+= '<span class="text-warning" >' + KS + '</span>'
    formula+= ' * (' 
    formula+= OE
    formula+= ' / 1000) = '
    formula+= SV_base
    
    
    $("#OE").html(OE);
    
    $("#formula").html(formula);
    
    
    $("#SV_base").html(SV_base + "₽");
    $("#SV_total").html(SV_total + "₽");
    $("#part_ZP").html(part_ZP + "%");
    
	
}
