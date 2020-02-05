$(function () {
    
    $('#dep_ok').addClass('mm-active');
    drawLine();
    
                                
});

function drawLine(){
    
    url = "https://spreadsheets.google.com/feeds/list/1h8qeQAJeeuBB7xICdy0m5_BFOq3BAuTbB9WWCTC82Ew/16/public/values?alt=json"  
    
    $.getJSON(url, function (data) {
    
    
    ds = data.feed.entry  
        
    console.log(ds)
    timeUpdated = 'Обновлено: ' + ds[0].updated.$t
    $("#upd").append(timeUpdated);     
    
    html = "<tr>";
        
    for(var i = 2; i < ds.length; i++){
        
        facultyes = ds[i].gsx$факультет.$t
        chair = ds[i].gsx$кафедра.$t
        
        count_rate = ds[i].gsx$количествоставоквсего.$t
        count_people = ds[i].gsx$количествосотрудников.$t
        count_contract = ds[i].gsx$количествотрудовыхдоговороввсего.$t

        rate_professor = ds[i].gsx$профессор.$t
        rate_doc = ds[i].gsx$доцент.$t
        rate_stprep = ds[i].gsx$старшийпреподаватель.$t
        rate_prep = ds[i].gsx$преподаватель.$t
        rate_assystent = ds[i].gsx$ассистент.$t
        
//        console.log(rate_professor)        
        html +=  "<td>" + facultyes + "</td>";
        html +=  "<td>" + chair + "</td>";
        html +=  "<td>" + count_rate + "</td>";
        html +=  "<td>" + count_people + "</td>";
        html +=  "<td>" + count_contract + "</td>";
        
        html +=  "<td>" + rate_professor + "</td>";
        html +=  "<td>" + rate_doc + "</td>";
        html +=  "<td>" + rate_stprep + "</td>";
        html +=  "<td>" + rate_prep + "</td>";
        html +=  "<td>" + rate_assystent + "</td>";
        html +=  "</tr>";
//        
        
        
    }
        
        $("#peopleTable").append(html); 
        
    })
        
   }