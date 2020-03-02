$(function () {

    $("#ttable").hide();
    drawTable();
    
    findClass = '';
    csv_row = '';   
    
    MARKED_EMP_ID = 'null';
    DEP_ID = 'null';
    TYPE_MARKED = 'null'; 
    
    flag_FIO = false;
    flag_DEP = false;
    flag_TYPE = false;
    
$('#save').on('click', function(){
    download_csv();
    $("#ttable").hide();
    $("#succ").show();
})
    
$('#reloadPage').click(function(){
    document.location.reload(true);
})
    
// ФИО Сотрудника
$('.f_emp').on('click', function() {
    
    flag_FIO = true;
    
    $(".f_empp").hide();
    MARKED_EMP_ID = this.id;
    $("#EMP").append(this.text);

})
    
// Подразделение
$('.f_pr').on('click', function() {
    
    flag_DEP = true;
    findClass += this.id;
    console.log(findClass)
    
    $(".f_dep").hide();
    DEP_ID = this.id;
    $("#DEP").append(this.text);

})
    
// Режим оценивания    
$('.form-check-input').on('click', function() {
    
    flag_TYPE = true;
    
    $(".f_type").hide();
    TYPE_MARKED = this.id;
    $("#TYPE").append(this.value);

})
    
$('#to_mark').on('click', function() {
    
    if( flag_FIO && flag_DEP && flag_TYPE ) {
        
        $("#ttable").show();
        $('.depLine').hide();
        $('#settings').hide();

        console.log(findClass);
        $('.' + findClass).show();
        
    } else {
        alert('Заполните все параметры: ФИО, подразделение и режим оценивания.');
    }
    
})

    
$('[data-toggle="tooltip"]').tooltip(); 
    
    
})

    
function download_csv() {
    
//    csv = 'AUTHOR_ID,DEP_ID,ROLE,CRITERION,MARK,EVALUATED_EMP_ID\n';
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
   
for(var i = 1; i < count; i++){
            
    html = "<tr class='depLine " + ds[i].gsx$depid.$t + "'>"
    html += "<td class=\"text-left text-muted\">" + ds[i].gsx$dep.$t +"</td>"

    html += "<td>"
    html += "<div class=\"widget-content p-0\">"
    html += "<div class=\"widget-content-wrapper\">"
    html += "<div class=\"widget-content mr-3\"></div>"
    html += "<div class=\"widget-content flex2\">"
    html += "<div class=\"widget-heading bolder\">" + ds[i].gsx$employer.$t + "</div>"
    html += "<div class=\"widget-subheading opacity-7\">" + ds[i].gsx$position.$t + "</div>"
    html += "</div></div></div></td>"

    html += "<td class=\"text-center\"><span>"
    html += '<i class="markHandler fas fa-grin-hearts" title="Высшая оценка!" data-toggle="tooltip" data-placement="top" id="QUALITY,4,' + ds[i].gsx$empid.$t + '"></i>'
    html += '<i class="markHandler fas fa-grin-alt" title="Незначительные замечания" data-toggle="tooltip" data-placement="top" id="QUALITY,3,' + ds[i].gsx$empid.$t + '"></i>'
    html += '<i class="markHandler fas fa-meh" title="Существенные замечания" data-toggle="tooltip" data-placement="top" id="QUALITY,2,' + ds[i].gsx$empid.$t + '"></i>'
    html += '<i class="markHandler fas fa-frown-open" title="Есть проблемы ..." data-toggle="tooltip" data-placement="top" id="QUALITY,1,' + ds[i].gsx$empid.$t + '"></i>'
    html += '</span></td>'

    html += "<td class=\"text-center\"><span>"
    html += '<i class="markHandler fas fa-grin-hearts" title="Высшая оценка!" data-toggle="tooltip" data-placement="top" id="VOLUME,4,' + ds[i].gsx$empid.$t + '"></i>'
    html += '<i class="markHandler fas fa-grin-alt" title="Незначительные замечания" data-toggle="tooltip" data-placement="top" id="VOLUME,3,' + ds[i].gsx$empid.$t + '"></i>'
    html += '<i class="markHandler fas fa-meh" title="Были существенные замечания" data-toggle="tooltip" data-placement="top" id="VOLUME,2,' + ds[i].gsx$empid.$t + '"></i>'
    html += '<i class="markHandler fas fa-frown-open" title="Есть проблемы .." data-toggle="tooltip" data-placement="top" id="VOLUME,1,' + ds[i].gsx$empid.$t + '"></i>'
    html += '</span></td>'

    html += "<td class=\"text-center\"><span>"
    html += '<i class="markHandler fas fa-grin-hearts" title="Высшая оценка!" data-toggle="tooltip" data-placement="top" id="DEADLINES,4,' + ds[i].gsx$empid.$t + '"></i>'
    html += '<i class="markHandler fas fa-grin-alt" title="Незначительные замечания" data-toggle="tooltip" data-placement="top" id="DEADLINES,3,' + ds[i].gsx$empid.$t + '"></i>'
    html += '<i class="markHandler fas fa-meh" title="Были существенные замечания" data-toggle="tooltip" data-placement="top" id="DEADLINES,2,' + ds[i].gsx$empid.$t + '"></i>'
    html += '<i class="markHandler fas fa-frown-open" title="Есть проблемы .." data-toggle="tooltip" data-placement="top" id="DEADLINES,1,' + ds[i].gsx$empid.$t + '"></i>'
    html += '</span></td>'

    html +=  "</tr>";

    $("#contentTable").append(html);
    $('[data-toggle="tooltip"]').tooltip(); 
            
}
        
        $('.markHandler').on('click', function() {
            
            $(this).parent().parent().append('Оценка<br>принята');
            $(this).parent().empty();
            $('.tooltip').remove();
            
            csv_row += MARKED_EMP_ID + ',' + DEP_ID + ',' + TYPE_MARKED + ',' + this.id + '\n';
            
        })
   
    })
        
}