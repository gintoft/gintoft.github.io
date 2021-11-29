$(document).ready(function(){
    
    
function createtRecord(sex, age, sphere, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, points, text1, text2, text3){
    
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'key3uBLeBw9LXHiCe'}).base('app3mbteZy0FD5Qls');

    base('answers').create([
        
        {'fields': {'1': a1, '2': a2,'3': a3,'4': a4,'5': a5,'6': a6,'7': a7,'8': a8,'9': a9,'10': a10, 
                    'Баллов': points, 'Вопрос1': text1, 'Вопрос2': text2, 'Вопрос3': text3,
                    'Пол': sex, 'Возраст': age, 'Сфера': sphere
        }}],
                           
   function(err, records) {
        if (err) {
            console.error(err);
    return;
  }
        
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
    
}
    
  
function calculatePoints() {
 
    points = 0;
    var messageResult = ""
    
    var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10 = "";
    var sex, sphere, age = "";
    
    if (document.getElementById("g_man").checked) { sex = 'Мужской'}
    if (document.getElementById("g_woman").checked) { sex = 'Женский'}
    
    if (document.getElementById("age_14m").checked)  { age = 'До 14 лет'}
    if (document.getElementById("age_1418").checked) { age = '14-18 лет'}
    if (document.getElementById("age_1924").checked) { age = '19-24 года'}
    if (document.getElementById("age_2534").checked) { age = '25-34 года'}
    if (document.getElementById("age_3544").checked) { age = '35-44 года'}
    if (document.getElementById("age_4555").checked) { age = '45-54 года'}
    if (document.getElementById("age_55p").checked)  { age = '55 и старше'}
    
    if (document.getElementById("sphere_usl").checked)  { sphere = 'Сфера услуг'}
    if (document.getElementById("sphere_proisv").checked)  { sphere = 'Производство'}
    if (document.getElementById("sphere_torg").checked)  { sphere = 'Торговля'}
    if (document.getElementById("sphere_other").checked)  { sphere = 'Другое'}
    
    if (document.getElementById("a1_1").checked) { points += 2;  a1='1'}
    if (document.getElementById("a1_2").checked) { points += 5;  a1='2'}
    if (document.getElementById("a1_3").checked) { points += 10; a1='3'}
    
    if (document.getElementById("a2_1").checked) { points += 0;  a2='1'}
    if (document.getElementById("a2_2").checked) { points += 5;  a2='2'}
    if (document.getElementById("a2_3").checked) { points += 10; a2='3'}
        
    if (document.getElementById("a3_1").checked) { points += 10; a3='1'}
    if (document.getElementById("a3_2").checked) { points += 0;  a3='2'}
    if (document.getElementById("a3_3").checked) { points += 0;  a3='3'}
        
    if (document.getElementById("a4_1").checked) { points += 0;  a4='1'}
    if (document.getElementById("a4_2").checked) { points += 0;  a4='2'}
    if (document.getElementById("a4_3").checked) { points += 10; a4='3'}
        
    if (document.getElementById("a5_1").checked) { points += 0;  a5='1'}
    if (document.getElementById("a5_2").checked) { points += 2;  a5='2'}
    if (document.getElementById("a5_3").checked) { points += 10; a5='3'}
        
    if (document.getElementById("a6_1").checked) { points += 0;  a6='1'}
    if (document.getElementById("a6_2").checked) { points += 5;  a6='2'}
    if (document.getElementById("a6_3").checked) { points += 10; a6='3'}
        
    if (document.getElementById("a7_1").checked) { points += 0;  a7='1'}
    if (document.getElementById("a7_2").checked) { points += 2;  a7='2'}
    if (document.getElementById("a7_3").checked) { points += 10; a7='3'}
        
    if (document.getElementById("a8_1").checked) { points += 0;  a8='1'}
    if (document.getElementById("a8_2").checked) { points += 2;  a8='2'}
    if (document.getElementById("a8_3").checked) { points += 10; a8='3'}
        
    if (document.getElementById("a9_1").checked) { points += 10; a9='1'}
    if (document.getElementById("a9_2").checked) { points += 5;  a9='2'}
    if (document.getElementById("a9_3").checked) { points += 2;  a9='3'}
    if (document.getElementById("a9_4").checked) { points += 0;  a9='4'}
        
    if (document.getElementById("a10_1").checked) { points += 0;  a10='1'}
    if (document.getElementById("a10_2").checked) { points += 5;  a10='2'}
    if (document.getElementById("a10_3").checked) { points += 10; a10='3'}
    
    console.log(points);
        
    if (points < 50) {
        
        $("#points").addClass('alert-warning')
        
        messageResult += 'Ваш результат:  <b>' + points + ' </b>баллов из 100!<br><br>' + " Отлично, что вы задумались о своем финансовом благополучии. В вашей ситуации важно равномерно двигаться в направлении увеличения активного дохода, обрести навык распоряжения семейным бюджетом. Особо важно научиться правильно ставить любые финансовые цели и достигать их."
        
        
    } else if (points > 50 && points < 80) { 
        
        $("#points").addClass('alert-info')
        
        messageResult += 'Ваш результат:  <b>' + points + ' </b>баллов из 100!<br><br>' + " В целом ваше финансовое здоровье в норме. Важно удерживать полученный результат, улучшать его шаг за шагом. Важно совершенствовать навык долгосрочного финансового планирования и финансовой защиты будущего"
        
    } else {
        
        $("#points").addClass('alert-success')
        
        messageResult += 'Ваш результат:  <b>' + points + ' </b>баллов из 100!<br><br>' + " Вы в прекрасной финансовой форме. Обратите внимание на те сферы, которые вы оценили хуже, чем остальные. Важно совершенствовать навык оценки имеющихся активов\пассивов, свой человеческий капитал, находить скрытые ресурсы и возможности, чтобы достигать свои финансовые цели быстрее."
        
    }
    
    text1 = $("#text1").val();
    text2 = $("#text2").val();
    text3 = $("#text3").val();
    
    createtRecord(sex, age, sphere, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, points, text1, text2, text3)
    
    
    
    $("#points").html(messageResult)
    
    $("#questions").hide();
    $("#points").show();    
    $("#exit").show();    
        
}
    

$("#calculate").click (function (){    
    calculatePoints();
    
    
})
    
})