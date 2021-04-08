$(function () {
    
// https://airtable.com/appjA492WB9HJEU8f/api/docs#javascript/table:%d0%a1%d1%82%d0%b0%d1%82%d0%b8%d1%81%d1%82%d0%b8%d0%ba%d0%b0:update
    
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQgI4FGSD2KRlbJ'}).base('appjA492WB9HJEU8f');
    
ds = []    
    
base('Marks').select({

    maxRecords: 100,
    view: "Grid view"
    
}).eachPage(function page(records, fetchNextPage) {

    records.forEach(function(record) {
        drawRow(record.fields);
        ds.push(record.fields);
    });

    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();
    
})

function getMarkCodeWithFA(mark){
    
    html = '';
    
    if(mark == "4"){
        
        html += '<i class="fas fa-grin-hearts" title="Высшая оценка!" data-toggle="tooltip" data-placement="top"></i>'
        
    } else if (mark == "3") {
            
        html += '<i class="fas fa-grin-alt" title="Высшая оценка!" data-toggle="tooltip" data-placement="top"></i>'
            
    } else if (mark == "2") {
            
        html += '<i class="fas fa-meh" title="Высшая оценка!" data-toggle="tooltip" data-placement="top"></i>'
            
    } else if (mark == "1") {
            
        html += '<i class="fas fa-frown-open" title="Высшая оценка!" data-toggle="tooltip" data-placement="top"></i>'
            
    } else {
        html += '<i class="fas fa-times" data-toggle="tooltip" data-placement="top" title="Оценки нет"></i>';
    }
    
    $('[data-toggle="tooltip"]').tooltip(); 
    return html;
}

function getMarkCode(mark){
    
    html = '';
    
    mark != undefined ? html += mark : html += '<i class="fas fa-times" data-toggle="tooltip" data-placement="top" style="color: lightgray" title="Оценки нет"></i>'
    $('[data-toggle="tooltip"]').tooltip(); 
    return html;
}


function getAnalysesHTMLOld(self, head){
    
    html = '';
    
    // Проверка наличия оценок
    self != undefined ? hasSelf = true : hasSelf = false;
    head != undefined ? hasHead = true : hasHead = false;
    
    if(hasSelf && hasHead){
       
        if(self == head){
    
            html += '<i class="fas fa-check-double" data-toggle="tooltip" data-placement="top" style="color: green" title="Оценки совпадают"></i>';
        }
        
        if(parseInt(self) < parseInt(head)){
            html += '<i class="fas fa-comment-slash" data-toggle="tooltip" data-placement="top" style="color: yellow" title="Самооценка занижена"></i>';
        }
        
        if(parseInt(self) > parseInt(head)){
            html += '<i class="fas fa-comment-slash" data-toggle="tooltip" data-placement="top" style="color: blue" title="Самооценка завышена"></i>';
        }
       
    } else {
        html += '<i class="fas fa-question-circle" data-toggle="tooltip" data-placement="top" style="color: lightgray" title="Нет данных для анализа"></i>';
    }
    
    return html;

}

function calcDiffPoint(q, v, t){
    
    html = '';
    
    // Проверка наличия оценок
    q != "?" ? hasQ = true : hasQ = false;
    v != "?" ? hasV = true : hasV = false;
    t != "?" ? hasT = true : hasT = false;
    
    if(hasQ && hasV && hasT){
       
        html += Math.abs(parseInt(q)) + Math.abs(parseInt(v)) + Math.abs(parseInt(t))
        
    } else {
        html += '<i class="fas fa-question-circle" data-toggle="tooltip" data-placement="top" style="color: lightgray" title="Нет данных для анализа"></i>';
    }
    
    return html;
    
}

function calcToSelf(AQ, AV, AT){
    
    html = '';
    toSelf = 0;
    toHead = 0;
    
    // Проверка наличия оценок
    AQ != "?" ? has_AQ = true : has_AQ = false;
    AV != "?" ? has_AV = true : has_AV = false;
    AT != "?" ? has_AT = true : has_AT = false;

    if(has_AQ && has_AV && has_AT){
       
        if(parseInt(AQ) > 0){
            toSelf += parseInt(AQ);
        } else {
            toHead += parseInt(AQ);
        }
        
        if(parseInt(AV) > 0){
            toSelf += parseInt(AV);
        } else {
            toHead += parseInt(AV);
        }
        
        if(parseInt(AT) > 0){
            toSelf += parseInt(AT);
        } else {
            toHead += parseInt(AT);
        }
        
        html += toSelf;
        
    } else {
        html += '<i class="fas fa-question-circle" data-toggle="tooltip" data-placement="top" style="color: lightgray" title="Нет данных для анализа"></i>';
    }
    
    return html;
    
}

function calcToHead(AQ, AV, AT){
    
    html = '';
    toSelf = 0;
    toHead = 0;
    
    // Проверка наличия оценок
    AQ != "?" ? has_AQ = true : has_AQ = false;
    AV != "?" ? has_AV = true : has_AV = false;
    AT != "?" ? has_AT = true : has_AT = false;

    if(has_AQ && has_AV && has_AT){
       
        if(parseInt(AQ) > 0){
            toSelf += parseInt(AQ);
        } else {
            toHead += parseInt(AQ);
        }
        
        if(parseInt(AV) > 0){
            toSelf += parseInt(AV);
        } else {
            toHead += parseInt(AV);
        }
        
        if(parseInt(AT) > 0){
            toSelf += parseInt(AT);
        } else {
            toHead += parseInt(AT);
        }
        
        html += Math.abs(toHead);
        
    } else {
        html += '<i class="fas fa-question-circle" data-toggle="tooltip" data-placement="top" style="color: lightgray" title="Нет данных для анализа"></i>';
    }
    
    return html;
    
}

function getAnalysesHTML(self, head){
    
    html = '';
    
    // Проверка наличия оценок
    self != undefined ? hasSelf = true : hasSelf = false;
    head != undefined ? hasHead = true : hasHead = false;
    
    if(hasSelf && hasHead){
       
        if(self == head){
    
            html += '<i class="fas fa-balance-scale" data-toggle="tooltip" data-placement="top" style="color: green" title="Оценки совпадают"></i>';
        }
        
        if(parseInt(self) < parseInt(head)){
            html += '<i class="fas fa-balance-scale-left" data-toggle="tooltip" data-placement="top" style="color: orange" title="Самооценка занижена"></i>';
        }
        
        if(parseInt(self) > parseInt(head)){
            html += '<i class="fas fa-balance-scale-right" data-toggle="tooltip" data-placement="top" style="color: red" title="Самооценка завышена"></i>';
        }
       
    } else {
        html += '<i class="fas fa-question-circle" data-toggle="tooltip" data-placement="top" style="color: lightgray" title="Нет данных для анализа"></i>';
    }
    
    return html;

}
    
function drawRow(record){
    
    html = '';
    html += '<tr>';

    html += '<td class="cellDep">' + record["Название подразделения"] + '</td>';
    html += '<td class="cellEmployer">' + record["ФИО Сотрудника"] + '</td>';
    
    html += '<td class="digitMark">' + getMarkCode(record["С Объем"]) +'</td>';
    html += '<td class="digitMark">' + getMarkCode(record["Р Объем"]) +'</td>';
    html += '<td class="digitMark">' + getAnalysesHTML(record["С Объем"], record["Р Объем"]) +'</td>';
    
    html += '<td class="digitMark">' + getMarkCode(record["С Сроки"]) +'</td>';
    html += '<td class="digitMark">' + getMarkCode(record["Р Сроки"]) +'</td>';
    html += '<td class="digitMark">' + getAnalysesHTML(record["С Сроки"], record["Р Сроки"]) +'</td>';
    
    html += '<td class="digitMark">' + getMarkCode(record["С Качество"]) +'</td>';
    html += '<td class="digitMark">' + getMarkCode(record["Р Качество"]) +'</td>';
    html += '<td class="digitMark">' + getAnalysesHTML(record["С Качество"], record["Р Качество"]) +'</td>';
    
    html += '<td class="digitMark">' + getMarkCode(record["С Итог"]) + '</td>';
    html += '<td class="digitMark">' + getMarkCode(record["Р Итог"]) + '</td>';
    
    html += '<td class="TextMark">' + calcDiffPoint(record["А Качество"],record["А Объем"],record["А Сроки"]) +'</td>';
    html += '<td class="TextMark">' + calcToSelf(record["А Качество"],record["А Объем"],record["А Сроки"]) +'</td>';
    html += '<td class="TextMark">' + calcToHead(record["А Качество"],record["А Объем"],record["А Сроки"]) +'</td>';


    html += '</tr>';

    $('#contentTable').append(html);
        
    
}  