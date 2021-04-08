$(function () {
    
    $('#secret').show();
    $('#fk_rasp').addClass('mm-active');
    
    findClass = ""
    
    $('#resetFilter').on('click', function() {
        $('.chairRow').show();
    })
    
    $('#showSecret').dblclick(function() {
        $('#secret').show();
    });
    
    
    $('.chairFilter').on('click', function() {
        
        findClass = ""
        findClass += this.id;
        console.log(findClass)
        $('.chairRow').hide();
        $('.' + findClass).show();
    
    })
    
    
    drawLine();
    
});

function getHTML_Change(value){
    
    htmlCode = "";
    
    if(value[0] == '-'){
        
        htmlCode += "<span class='NEG_CHANGE'>" + value + "</td>"; 
               
    } else if (value[0] == null) {
               
        htmlCode += "<span class='PREC'>" + '' + "</td>"; 
               
    } else {
        
        htmlCode += "<span class='POS_CHANGE'>+" + value + "</td>"; 
        
    }
    
    return htmlCode;
    
}

function drawLine(){
    
    url = "https://spreadsheets.google.com/feeds/list/1zOU4KIx6iUGOyzUtWyY-dJfAGLDKBOZ8uI8A23g6pL4/2/public/values?alt=json"  
    
    $.getJSON(url, function (data) {
    
    
    ds = data.feed.entry    
    console.log(ds)
    
    count = ds.length
        
    for(var i = 0; i < count; i++){
        
        chair = ds[i].gsx$кафедра.$t
        contract = ds[i].gsx$договор.$t
        name = ds[i].gsx$фио.$t
        
        if(ds[i].gsx$сумматг.$t.length > 0) {
           
            TG_SUM = "<td class='RUB_TOTAL'>" + ds[i].gsx$сумматг.$t + "</td>" 
            
        } else {
            
            TG_SUM = "<td><span class='empty'>0 ₽</span></td>";
           
        }
        
        
        if(ds[i].gsx$сумматг.$t.length > 0){
            
            TG_DESC = ds[i].gsx$сумматг1.$t + ' (' + ds[i].gsx$месяцтг1.$t + ')';
            
            if(ds[i].gsx$сумматг2.$t.length > 0){
             
                TG_DESC += '<br>' + ds[i].gsx$сумматг2.$t + ' (' + ds[i].gsx$месяцтг2.$t + ')';
                
            }
            
        } else {
            TG_DESC = "<span class='empty'> - </span>";
        }
        
        Q2_FK1_RUB = ds[i].gsx$q2fk1rub.$t
        Q2_FK1_PREC = ds[i].gsx$q2fk1prec.$t
        Q2_FK2_RUB = ds[i].gsx$q2fk2rub.$t
        Q2_FK2_PREC = ds[i].gsx$q2fk2prec.$t
        Q2_TOTAL_RUB = ds[i].gsx$q2totalrub.$t
        Q2_TOTAL_DESC = ds[i].gsx$q2totaldesc.$t
        
        Q3_FK1_RUB = ds[i].gsx$q3fk1rub.$t
        Q3_FK1_PREC = ds[i].gsx$q3fk1prec.$t
        Q3_FK2_RUB = ds[i].gsx$q3fk2rub.$t
        Q3_FK2_PREC = ds[i].gsx$q3fk2prec.$t
        Q3_TOTAL_RUB = ds[i].gsx$q3totalrub.$t
        Q3_TOTAL_CHANGE = ds[i].gsx$q3totalchange.$t
        Q3_TOTAL_DESC = ds[i].gsx$q3totaldesc.$t

        Q4_FK1_RUB = ds[i].gsx$q4fk1rub.$t
        Q4_FK1_PREC = ds[i].gsx$q4fk1prec.$t
        Q4_FK2_RUB = ds[i].gsx$q4fk2rub.$t
        Q4_FK2_PREC = ds[i].gsx$q4fk2prec.$t
        Q4_TOTAL_RUB = ds[i].gsx$q4totalrub.$t
        Q4_TOTAL_CHANGE = ds[i].gsx$q4totalchange.$t
        Q4_TOTAL_DESC = ds[i].gsx$q4totaldesc.$t

        html =  "<tr class='chairRow "+ chair + "'>";
        
        html += "<td class='lefts'>" + chair + "</td>";
        
        html += "<td class='lefts' data-toggle='tooltip' data-placement='top' title='" + ds[i].gsx$договор.$t + "'>" + name + "</td>";
        html += "<td class='small'>" + contract + "</td>";
        
        html += TG_SUM;
        html += "<td class='TG_DETAIL'>" + TG_DESC + "</td>";
        
        
        if(Q2_FK1_RUB.length > 0) {
            html += "<td><span class='RUB'>" + Q2_FK1_RUB + "</span><br><span class='PREC'>" + Q2_FK1_PREC + " ФК1</span></td>";
        } else {
            html += "<td><span class='empty'>0 ₽</span></td>";
        }
        
        if(Q2_FK2_RUB.length > 0) {
            html += "<td><span class='RUB'>" + Q2_FK2_RUB + "</span><br><span class='PREC'>" + Q2_FK2_PREC + " ФК2</span></td>";
        } else {
            html += "<td><span class='empty'>0 ₽</span></td>";
        }
        
        if(Q2_TOTAL_RUB.length > 0) {
            html += "<td style='backgroung-color: lightgreen' data-toggle='tooltip' data-placement='top' title='" + Q2_TOTAL_DESC + "'><span class='RUB_TOTAL'>" + Q2_TOTAL_RUB + "</span></td>";
        } else {
            html += "<td><span class='empty'>0 ₽</span></td>";
        }
        
        if(Q3_FK1_RUB.length > 0) {
            html += "<td><span class='RUB'>" + Q3_FK1_RUB + "</span><br><span class='PREC'>" + Q3_FK1_PREC + " ФК1</span></td>";
        } else {
            html += "<td><span class='empty'>0 ₽</span></td>";
        }
        
        if(Q3_FK2_RUB.length > 0) {
            html += "<td><span class='RUB'>" + Q3_FK2_RUB + "</span><br><span class='PREC'>" + Q3_FK2_PREC + " ФК2</span></td>";
        } else {
            html += "<td><span class='empty'>0 ₽</span></td>";
        }
        
        if(Q2_TOTAL_RUB.length > 0) {
            html += "<td data-toggle='tooltip' data-placement='top' title='" + Q3_TOTAL_DESC + "'><span class='RUB_TOTAL'>" + Q3_TOTAL_RUB + "</span><br>" + getHTML_Change(Q3_TOTAL_CHANGE) + " Q2</td>";
        } else {
            html += "<td><span class='empty'>0 ₽</span></td>";
        }
        
        
        
        if(Q4_FK1_RUB.length > 0) {
            html += "<td><span class='RUB'>" + Q4_FK1_RUB + "</span><br><span class='PREC'>" + Q4_FK1_PREC + " ФК1</span></td>";
        } else {
            html += "<td><span class='empty'>0 ₽</span></td>";
        }
        
        if(Q4_FK2_RUB.length > 0) {
            html += "<td><span class='RUB'>" + Q4_FK2_RUB + "</span><br><span class='PREC'>" + Q4_FK2_PREC + " ФК2</span></td>";
        } else {
            html += "<td><span class='empty'>0 ₽</span></td>";
        }
        
        if(Q4_TOTAL_RUB.length > 0) {
            html += "<td data-toggle='tooltip' data-placement='top' title='" + Q4_TOTAL_DESC + "'><span class='RUB_TOTAL'>" + Q4_TOTAL_RUB + "</span><br>" + getHTML_Change(Q4_TOTAL_CHANGE) + " Q3</td>";
        } else {
            html += "<td><span class='empty'>0 ₽</span></td>";
        }
        
        
        html +=  "</tr>";
        $("#contentTable").append(html); 
        
    }
    
    })
        
}