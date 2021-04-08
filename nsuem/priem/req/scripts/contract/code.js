
$(function () {
    
    $('#contract').addClass('mm-active');
    drawTable();
    
    
});

function drawLine(depSh, contractInfo, contractSummValue, employerName, base1, base2, base3, result1, result2, result3){
    
    html = "<tr>";
    html += "<td>" + depSh + "</td>";
    html += "<td data-toggle='tooltip' data-placement='top' title='" + contractInfo + " '>" + contractSummValue + "</td>";
    html += "<td style='border-right: 3px solid #dee2e6'>" + employerName + "</td>";
    
    if(base1 > 0) {
        html += "<td>" + base1 + "</td>";
    } else {
        html +=  "<td><i class='fas fa-times' style='color: lightgray' data-toggle='tooltip' data-placement='top' title='Отчет не требуется'></i></td>";
    }
    
    if(base2 > 0) {
        html += "<td>" + base2 + "</td>";
    } else {
        html +=  "<td><i class='fas fa-times' style='color: lightgray' data-toggle='tooltip' data-placement='top' title='Отчет не требуется'></i></td>";
    }
    
    html +=  "<td style='border-right: 3px solid #dee2e6'><i class='fas fa-clock' style='color: lightgray' data-toggle='tooltip' data-placement='top' title='Отчетный период не наступил'></i></td>";
    
    if(result1 > 0) {
        html += "<td>" + result1 + "</td>";
    } else if (result1 == 0 && base1 == 0) {
        html +=  "<td><i class='fas fa-times' style='color: lightgray' data-toggle='tooltip' data-placement='top' title='Отчет не требуется'></i></td>";
    } else {
        html += "<td>" + result1 + "</td>";
    }
    
    if(result2 > 0) {
        html += "<td>" + result2 + "</td>";
    } else if (result2 == 0 && base2 == 0) {
        html +=  "<td><i class='fas fa-times' style='color: lightgray' data-toggle='tooltip' data-placement='top' title='Отчет не требуется'></i></td>";
    } else {
        html += "<td>" + result2 + "</td>";
    }
    
    html +=  "<td style='border-right: 3px solid #dee2e6'><i class='fas fa-clock' style='color: lightgray' data-toggle='tooltip' data-placement='top' title='Отчетный период не наступил'></i></td>";
    
    if( ((result1 - base1) > 0 || (result1 - base1) == 0) && result1 != 0) {
        html += "<td><i class='fas fa-ruble-sign' style='color: green' data-toggle='tooltip' data-placement='top' title='+ " + (result1 - base1) + " ₽'></i></td>";
    } else if (base1 == 0){
        html +=  "<td><i class='fas fa-times' style='color: lightgray' data-toggle='tooltip' data-placement='top' title='Отчет не требуется'></i></td>";
    } else {
        html +=  "<td><i class='fas fa-exclamation-circle' style='color: orange' data-toggle='tooltip' data-placement='top' title='Отчет не сдан или не набран минимум'></i></td>";
    }
    
    
    if( ((result2 - base2) > 0 || (result2 - base2) == 0) && result2 != 0) {
        html += "<td><i class='fas fa-ruble-sign' style='color: green' data-toggle='tooltip' data-placement='top' title='+ " + (result2 - base2) + " ₽'></i></td>";
    } else {
        html +=  "<td><i class='fas fa-exclamation-circle' style='color: orange' data-toggle='tooltip' data-placement='top' title='Отчет не сдан или не набран минимум'></i></td>";
    }

    html +=  "<td style='border-right: 3px solid #dee2e6'> <i class='fas fa-clock' style='color: lightgray' data-toggle='tooltip' data-placement='top' title='Отчетный период не наступил'></i></td>";
    
    if ( (result1 + result2 - base1 - base2) > 0 ) {
    
        html += "<td><i class='fas fa-ruble-sign' style='color: green' data-toggle='tooltip' data-placement='top' title='+ " + (result1 + result2 - base1 - base2) + " баллов'></i></td>";
        
    } else {
        
        html += "<td><i class='fas fa-exclamation-circle' style='color: orange' data-toggle='tooltip' data-placement='top' title=' " + (result1 + result2 - base1 - base2) + " баллов'></i></td>";
        
    }
    
    
    html +=  "<td><i class='fas fa-plane'></i> <i class='fas fa-plane'></i> <i class='fas fa-plane'></i></td>";

    $("#ecTable").append(html);
    
    
}

function drawTable(){
    
    for (i = 0; i < dataset.length; i++){
        drawLine(dataset[i].depSh, dataset[i].contractInfo, dataset[i].contractSummValue, dataset[i].employerName, dataset[i].base1, dataset[i].base2, dataset[i].base3, dataset[i].result1, dataset[i].result2, dataset[i].result3);
}}