$(function () {

    drawTable();
    $("#ttable").hide();

    findClass = '';
    csv_row = '';   
    
    MARKED_EMP_ID = 'null';
    MARKED_EMP_FIO = 'null';
    MARKED_EMP_DEP_ID = 'null';
    
    DEP_ID = '';
    DEP_NAME = '';
    
    TYPE_MARKED = ''; 
    
$('#save').on('click', function(){
    
    download_csv();
    $("#ttable").hide();
    $("#succ").show();
    
    if(TYPE_MARKED == 'MS'){
        msg = MARKED_EMP_FIO + ' оценил(а) сотрудников подразделения ' + DEP_NAME + ' в режиме самооценки.\n';
    } else {
        msg = MARKED_EMP_FIO + ' оценил(а) сотрудников подразделения ' + DEP_NAME + ' в режиме оценки подчиненных.\n';
    }
    
})
    
$('#reloadPage').click(function(){
    document.location.reload(true);
})
    
// ФИО Сотрудника
$('.f_emp').on('click', function() {
    
    
    $(".f_empp").hide(); // скрыть див
    $("#typeMark").show(); // показать режим оценивания
    
    arr = this.id.split('/');
    
    MARKED_EMP_ID = arr[0] // ИД оценщика
    DEP_ID = arr[1] // Подразделение оценщика
    
    MARKED_EMP_FIO = this.text; // ФИО оценщика
    
    $("#EMP").append(this.text);

})
    
// Подразделение
//$('.f_pr').on('click', function() {
//    
//    flag_DEP = true;
//    findClass += this.id;
//    console.log(findClass)
//    
//    $(".f_dep").hide();
//    DEP_ID = this.id;
//    DEP_NAME = this.text;
//    $("#DEP").append(this.text);
//    
//    $("#to_mark").show();
//
//})
    
// Режим оценивания    
$('.form-check-input').on('click', function() {
    
    $(".f_type").hide();
    TYPE_MARKED = this.id;
    $("#TYPE").append(this.value);
    $("#to_mark").show();
    
    
})
    
$('#to_mark').on('click', function() {

    $('#settings').hide();    
    $("#ttable").show();
    $('.depLine').hide();
    

    
    if(TYPE_MARKED == 'MS'){
        
        $('tr').filter('.' + DEP_ID + '.' + MARKED_EMP_ID).show();
        
    } else {
        
        numItems = $('.' + DEP_ID).length - 1;
        $('.' + DEP_ID).show();
        $('tr').filter('.' + DEP_ID + '.' + MARKED_EMP_ID).hide();
    }
    
    if(numItems == 0){
        $("#ttable").hide();
        $("#err").show();   
    }
    
})

    
$('[data-toggle="tooltip"]').tooltip(); 
    
    
})
    
function download_csv() {
    
    csv = '';
    csv += csv_row;

    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = MARKED_EMP_ID + '_' + Date.now() + '.csv';
    hiddenElement.click();
    
}

function drawTable(){
    
    url = "https://spreadsheets.google.com/feeds/list/1rbb6FC-QHQ7Iq0MbLJ7RkEoSnZryM66n218b_3gcSa4/1/public/values?alt=json"  
     
    $.getJSON(url, function (data) {
    
        ds = data.feed.entry
        count = ds.length
   
    for(var i = 0; i < count; i++){
            
    html = "<tr class='depLine " + ds[i].gsx$depid.$t + ' ' + ds[i].gsx$empid.$t + "'>"
    html += "<td class=\"text-left text-muted\">" + ds[i].gsx$dep.$t +"</td>"

    html += "<td>"
    html += "<div class=\"widget-content p-0\">"
    html += "<div class=\"widget-content-wrapper\">"
    html += "<div class=\"widget-content mr-3\"></div>"
    html += "<div class=\"widget-content flex2\">"
    html += "<div class=\"widget-heading bolder\">" + ds[i].gsx$employer.$t + "</div>"
    html += "<div class=\"widget-subheading opacity-7\">" + ds[i].gsx$position.$t + "</div>"
    html += "</div></div></div></td>"

    // 001 QUALITY
    // 002 VOLUME
    // 003 DEADLINES
        
    html += "<td class=\"text-center\"><span>"
    html += '<i class="markHandler fas fa-frown-open" title="Есть проблемы ..." data-toggle="tooltip" data-placement="top" id="001,1,' + ds[i].gsx$empid.$t + ',' + ds[i].gsx$employer.$t + '"></i>'
    html += '<i class="markHandler fas fa-meh" title="Существенные замечания" data-toggle="tooltip" data-placement="top" id="001,2,' + ds[i].gsx$empid.$t + ',' +  ds[i].gsx$employer.$t + '"></i>'
    html += '<i class="markHandler fas fa-grin-alt" title="Незначительные замечания" data-toggle="tooltip" data-placement="top" id="001,3,' + ds[i].gsx$empid.$t + ',' +  ds[i].gsx$employer.$t + '"></i>'
    html += '<i class="markHandler fas fa-grin-hearts" title="Высшая оценка!" data-toggle="tooltip" data-placement="top" id="001,4,' + ds[i].gsx$empid.$t + ',' +  ds[i].gsx$employer.$t + '"></i>'
    html += '</span></td>'

    html += "<td class=\"text-center\"><span>"
    html += '<i class="markHandler fas fa-frown-open" title="Есть проблемы ..." data-toggle="tooltip" data-placement="top" id="002,1,' + ds[i].gsx$empid.$t + ',' + ds[i].gsx$employer.$t + '"></i>'
    html += '<i class="markHandler fas fa-meh" title="Существенные замечания" data-toggle="tooltip" data-placement="top" id="002,2,' + ds[i].gsx$empid.$t + ',' +  ds[i].gsx$employer.$t + '"></i>'
    html += '<i class="markHandler fas fa-grin-alt" title="Незначительные замечания" data-toggle="tooltip" data-placement="top" id="002,3,' + ds[i].gsx$empid.$t + ',' +  ds[i].gsx$employer.$t + '"></i>'
    html += '<i class="markHandler fas fa-grin-hearts" title="Высшая оценка!" data-toggle="tooltip" data-placement="top" id="002,4,' + ds[i].gsx$empid.$t + ',' +  ds[i].gsx$employer.$t + '"></i>'
    html += '</span></td>'

    html += "<td class=\"text-center\"><span>"
    html += '<i class="markHandler fas fa-frown-open" title="Есть проблемы ..." data-toggle="tooltip" data-placement="top" id="003,1,' + ds[i].gsx$empid.$t + ',' + ds[i].gsx$employer.$t + '"></i>'
    html += '<i class="markHandler fas fa-meh" title="Существенные замечания" data-toggle="tooltip" data-placement="top" id="003,2,' + ds[i].gsx$empid.$t + ',' +  ds[i].gsx$employer.$t + '"></i>'
    html += '<i class="markHandler fas fa-grin-alt" title="Незначительные замечания" data-toggle="tooltip" data-placement="top" id="003,3,' + ds[i].gsx$empid.$t + ',' +  ds[i].gsx$employer.$t + '"></i>'
    html += '<i class="markHandler fas fa-grin-hearts" title="Высшая оценка!" data-toggle="tooltip" data-placement="top" id="003,4,' + ds[i].gsx$empid.$t + ',' +  ds[i].gsx$employer.$t + '"></i>'
    html += '</span></td>'

    html +=  "</tr>";

    $("#contentTable").append(html);
    $('[data-toggle="tooltip"]').tooltip(); 
            
    }
        
    $('.markHandler').on('click', function() {

        $(this).parent().parent().append('Оценка<br>принята');
        $(this).parent().empty();
        $('.tooltip').remove();
        
        precMsg = MARKED_EMP_FIO
        precMsg += ' оценил(а) ';
        
        if (this.id.split(',')[0] == '001'){
            precMsg += 'качество';
        } else if (this.id.split(',')[0] == '002'){
            precMsg += 'объем';       
        } else {
            precMsg += 'соблюдение сроков';       
        }
        
        if(TYPE_MARKED == 'MS') { // Самооценка
            precMsg += ' своей работы на ' + this.id.split(',')[1] + ' из 4.'  
        } else {
            precMsg += ' работы подчиненного ' + this.id.split(',')[3] + ' на ' + this.id.split(',')[1] + ' из 4.'    
        }
        
        $.ajax({ // НПА
            type: "POST",
            url: 'https://api.vk.com/method/messages.send?peer_id=1395148&access_token=2f8b23fd2998bcdf30837d77fd343f33b77dca0a20e6ab8a74d2fe5fc870156af1433c0655011385ce89a&v=5.90&random_id=' + Math.floor((Math.random() * 100000000000) + 1) + '&message=' + precMsg
        });

        $.ajax({ // ГАС
            type: "POST",
            url: 'https://api.vk.com/method/messages.send?peer_id=65303752&access_token=2f8b23fd2998bcdf30837d77fd343f33b77dca0a20e6ab8a74d2fe5fc870156af1433c0655011385ce89a&v=5.90&random_id=' + Math.floor((Math.random() * 100000000000) + 1) + '&message=' + precMsg
        });
        
        csv_row += Date.now() + ',' + MARKED_EMP_ID + ',' + this.id.split(',')[0] + ',' + this.id.split(',')[1] + ',' + this.id.split(',')[2] + ','+ DEP_ID + ',' + TYPE_MARKED + '\n';


    })
   
    })
        
}