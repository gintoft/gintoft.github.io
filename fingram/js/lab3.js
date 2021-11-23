$(document).ready (function(){
    
    
    
  
function calculatePoints() {
 
    points = 0;
    var messageResult = ""
    
    if (document.getElementById("a1_1").checked) { points += 2}
    if (document.getElementById("a1_2").checked) { points += 5} 
    if (document.getElementById("a1_3").checked) { points += 10} 
    
    if (document.getElementById("a2_1").checked) { points += 0 } 
    if (document.getElementById("a2_2").checked) { points += 5 } 
    if (document.getElementById("a2_3").checked) { points += 10 } 
        
    if (document.getElementById("a3_1").checked) { points += 10 } 
    if (document.getElementById("a3_2").checked) { points += 0 } 
    if (document.getElementById("a3_3").checked) { points += 0 } 
        
    if (document.getElementById("a4_1").checked) { points += 0 } 
    if (document.getElementById("a4_2").checked) { points += 0 } 
    if (document.getElementById("a4_3").checked) { points += 10 } 
        
    if (document.getElementById("a5_1").checked) { points += 0 } 
    if (document.getElementById("a5_2").checked) { points += 2 } 
    if (document.getElementById("a5_3").checked) { points += 10 } 
        
    if (document.getElementById("a6_1").checked) { points += 0 } 
    if (document.getElementById("a6_2").checked) { points += 5 } 
    if (document.getElementById("a6_3").checked) { points += 10 } 
        
    if (document.getElementById("a7_1").checked) { points += 0 } 
    if (document.getElementById("a7_2").checked) { points += 2 } 
    if (document.getElementById("a7_3").checked) { points += 10 } 
        
    if (document.getElementById("a8_1").checked) { points += 0 } 
    if (document.getElementById("a8_2").checked) { points += 2 } 
    if (document.getElementById("a8_3").checked) { points += 10 } 
        
    if (document.getElementById("a9_1").checked) { points += 10 } 
    if (document.getElementById("a9_2").checked) { points += 5 } 
    if (document.getElementById("a9_3").checked) { points += 2 } 
    if (document.getElementById("a9_4").checked) { points += 0 } 
        
    if (document.getElementById("a10_1").checked) { points += 0 } 
    if (document.getElementById("a10_2").checked) { points += 5 } 
    if (document.getElementById("a10_3").checked) { points += 10 } 
    
    console.log(points);
        
    if (points < 50) {
        
        $("#points").addClass('alert-warning')
        
        messageResult += 'Ваш результат:  <b>' + points + ' </b>баллов из 100!<br><br>' + " Вы в прекрасной финансовой форме. Обратите внимание на те сферы, которые вы оценили хуже, чем остальные. Важно совершенствовать навык оценки имеющихся активов\пассивов, свой человеческий капитал, находить скрытые ресурсы и возможности, чтобы достигать свои финансовые цели быстрее."
        
        
    } else if (points > 50 && points < 80) { 
        
        $("#points").addClass('alert-info')
        
        messageResult += 'Ваш результат:  <b>' + points + ' </b>баллов из 100!<br><br>' + " В целом ваше финансовое здоровье в норме. Важно удерживать полученный результат, улучшать его шаг за шагом. Важно совершенствовать навык долгосрочного финансового планирования и финансовой защиты будущего"
        
    } else {
        
        $("#points").addClass('alert-success')
        
        messageResult += 'Ваш результат:  <b>' + points + ' </b>баллов из 100!<br><br>' + " Отлично, что вы задумались о своем финансовом благополучии. В вашей ситуации важно равномерно двигаться в направлении увеличения активного дохода, обрести навык распоряжения семейным бюджетом. Особо важно научиться правильно ставить любые финансовые цели и достигать их."
        
    }
    
    console.log(messageResult)
    
    $("#points").html(messageResult)
    
    $("#questions").hide();
    $("#points").show();    
    $("#nextQ").show();   
        
}
    

$("#calculate").click (function (){    
    calculatePoints();
})
    
$("#exit").click (function (){    
    
    $("#questions").hide();
    $("#points").hide();    
    $("#nextQ").hide();   
    $("#exit").show();   
    
    
})
    
})