$(function () {
    
    $('#fk_matrix').addClass('mm-active');
    drawLine();
    $('[data-toggle="tooltip"]').tooltip(); 
    
});

function getFA(value){
    
    htmlCode = "";
    
    if(value == '-'){
        
        htmlCode += "<td style='text-align: center'><i data-toggle='tooltip' data-placement='top' title='Критерий не учитывается' style='color: lightgray' class='fas fa-minus'></i></td>"; 
        
    } else if (value == 'Да') {
        
        htmlCode += "<td style='text-align: center'><i data-toggle='tooltip' data-placement='top' title='Критерий учитывается' style='color: green' class='fas fa-check'></i></td>"; 
               
    } else{
        
        htmlCode += "<td style='text-align: center'><i data-toggle='tooltip' data-placement='top' title='В разработке' style='color: lightgray' class='fas fa-clock'></i></td>"; 
        
    }
    
    return htmlCode;
    
}

function drawLine(){
    
    url = "https://spreadsheets.google.com/feeds/list/1aufMe6LL3cg1pFOl0YMqutd0aUCNArD1SLBI4U7zhqE/1/public/values?alt=json"  
    
    $.getJSON(url, function (data) {
    
    
    ds = data.feed.entry    
    console.log(ds)
    
    count = ds.length
        
    for(var i = 0; i < count; i++){
        
        category = ds[i].gsx$категория.$t
        mark = ds[i].gsx$критерий.$t
        description_fk1 = ds[i].gsx$описаниефк1.$t
        description_fk2 = ds[i].gsx$описаниефк2.$t
        
        q2_2019 = ds[i].gsx$q22019.$t
        q3_2019 = ds[i].gsx$q32019.$t
        q4_2019 = ds[i].gsx$q42019.$t
        q1_2020 = ds[i].gsx$q12020.$t
        q2_2020 = ds[i].gsx$q22020.$t
        
        console.log(q1_2020)
        
        html =  "<tr>";
        html += "<td class='name'>" + category + "</td>";
        html += "<td class='name'>" + mark + "</td>";
        html += "<td class='desc'>" + description_fk1 + "</td>";
        html += "<td class='desc'>" + description_fk2 + "</td>";
        
        
        html += getFA(q2_2019);
        html += getFA(q3_2019);
        html += getFA(q4_2019);
        html += getFA(q1_2020);
        html += getFA(q2_2020);
     
        html +=  "</tr>";
        $("#contentTable").append(html); 
        
    }
    
    })
        
    
}



















