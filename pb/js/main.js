// https://docs.google.com/spreadsheets/d/1EwHfsM5utmAshMp64VGlP9ptbKOU7Zn5stA3PuhWJJk/edit#gid=0

$(function () {
    
    drawLine();
    $('[data-toggle="tooltip"]').tooltip();  
    
    $('.chairFilter').on('click', function() {

        findClass = ""
        findClass += this.id;
        $('.chairRow').hide();
        $('.' + findClass).show();

    })

})

function drawLine(){
    
    $('[data-toggle="tooltip"]').tooltip(); 
    
    url = "https://spreadsheets.google.com/feeds/list/1EwHfsM5utmAshMp64VGlP9ptbKOU7Zn5stA3PuhWJJk/1/public/values?alt=json"  
     
    $.getJSON(url, function (data) {
    
        ds = data.feed.entry
        
        count = ds.length
        console.log(ds)
        
        for(var i = 1; i < count; i++){
            
            html = "<div class='chairRow row " + ds[i].gsx$каф.$t + "'>"
            html += '<div class="col-sm-4">'
            html += "<h5>"
//            html += '<span class="badge badge-pill badge-info">' + ds[i].gsx$каф.$t + '</span>'
            html += '<span class="badge badge badge-light">' + ds[i].gsx$сотрудник.$t + '</span>'
            html += '<span class="badge badge-pill badge-success">' + ds[i].gsx$общийитог.$t + ' ₽</span>'
            html += '</h5>'
            html += '</div>'
            
            html+= '<div class="col-sm-8">'
            html += '<div class="progress" style="height: 25px; margin-bottom: 20px">'
            
            html += '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + ds[i].gsx$зарплата_2.$t + '%" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="Заработная плата ' + ds[i].gsx$зарплата.$t + '₽"><b>' + ds[i].gsx$зарплата_2.$t + '</b></div>'
            
            html += '<div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style="width: ' + ds[i].gsx$экпостоянные_2.$t + '%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="Постоянные выплаты по ЭК ' + ds[i].gsx$экпостоянные.$t + '₽"><b>' + ds[i].gsx$экпостоянные_2.$t + '</b></div>'
            
            html += '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + ds[i].gsx$экразовые_2.$t + '%; background-color: green" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="Разовые выплаты по ЭК ' + ds[i].gsx$экразовые.$t + '₽"><b>' + ds[i].gsx$экразовые_2.$t + '</b></div>'
            
            html += '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + ds[i].gsx$фондыкафедр_2.$t + '%; background-color: orange" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="Фонды кафедр ' + ds[i].gsx$фондыкафедр.$t + '₽"><b>' + ds[i].gsx$фондыкафедр_2.$t + '</b></div>'
            
            html += '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + ds[i].gsx$прочее_2.$t + '%; background-color: slategrey" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="Прочие выплаты ' + ds[i].gsx$прочее.$t + '₽"><b>' + ds[i].gsx$прочее_2.$t + '</b></div>'
            
            html += '</div>'
            html += '</div>'
            html += '</div>'

            
            $("#contentTable").append(html);
            
            
        }
        
        
        $('[data-toggle="tooltip"]').tooltip(); 
    
   })
    
}

