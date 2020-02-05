$(function () {
    
    $('#fk').addClass('mm-active');
    drawLine();
    
});

function getAngledHTML(value){
    
    htmlCode = "";
    
    if(value[0] == '0' || value[0]== null){
        
        htmlCode += "<td class='bg-light opacity-3'>" + value + "</td>"; 
        
    } else if (value[0] == '-') {
        
//        htmlCode += "<td class='neg'>" + value + "</td>";
        htmlCode += "<td class='neg'>" + value + " <i class='fa fa-angle-down text-danger'></i></td>";
               
    } else {
        
//        htmlCode += "<td class='pos'>" + value + " <i class='fa fa-angle-up text-success'></i></td>";
        htmlCode += "<td class='pos'>" + value + "</td>";
        
    }
    
    return htmlCode;
    
}

function drawLine(){
    
    url = "https://spreadsheets.google.com/feeds/list/1h8qeQAJeeuBB7xICdy0m5_BFOq3BAuTbB9WWCTC82Ew/13/public/values?alt=json"  
    
    $.getJSON(url, function (data) {
    
    
    ds = data.feed.entry    
    console.log(ds)
    
    count = ds.length
        
    for(var i = 5; i < count; i++){
        
        facultyes = ds[i].gsx$факультет.$t
        chair = ds[i].gsx$кафедра.$t
        ostatok3kv = ds[i].gsx$остатокнаконец3кв.$t
        
        size = ds[i].gsx$размерность.$t
        fondP = ds[i].gsx$фондыпроректоров.$t
        oopk = ds[i].gsx$оопк.$t
        udo = ds[i].gsx$удо.$t
        ec = ds[i].gsx$выполнениеэк.$t
        highEC = ds[i].gsx$высокиевыплатыпоэк.$t
        vedomosti = ds[i].gsx$ведомостииц.$t
        statya = ds[i].gsx$требованияпостатьям.$t
        rescenter = ds[i].gsx$оценкарц.$t
        rep1819 = ds[i].gsx$отчетза20182019г.$t
        SDCSN = ds[i].gsx$сайтделовойкалендарьсоцсети.$t
        practice = ds[i].gsx$организацияпрактик.$t
        twohprec = ds[i].gsx$выполнениеуказа200.$t
        decan = ds[i].gsx$распределениедеканов.$t
        total = ds[i].gsx$итогокраспределению.$t
        addNach = ds[i].gsx$доначислено.$t
        raspFact = ds[i].gsx$фактическираспределено.$t
        ostatok4kv = ds[i].gsx$остатокнаконец.$t
        
        console.log(fondP)
        
        
        html =  "<tr class='chairRow'>";
        html += "<td class='lefts'>" + facultyes + "</td>";
        html += "<td class='lefts'>" + chair + "</td>";
        
        html += getAngledHTML(ostatok3kv);
        html += getAngledHTML(size);
        html += getAngledHTML(fondP);
        html += getAngledHTML(oopk);
        html += getAngledHTML(udo);
        html += getAngledHTML(rescenter);
        html += getAngledHTML(ec);
        html += getAngledHTML(highEC);
        
        html += getAngledHTML(vedomosti);
        html += getAngledHTML(statya);
        html += getAngledHTML(rep1819);
        html += getAngledHTML(SDCSN);
        html += getAngledHTML(practice);
        html += getAngledHTML(twohprec);
        html += getAngledHTML(decan);
        html += getAngledHTML(total);
     
        html +=  "</tr>";
        $("#contentTable").append(html); 
        
    }
    
    })
        
}