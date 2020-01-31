$(function () {
    
    findClass = ""
    $('[data-toggle="tooltip"]').tooltip(); 
    
    drawLine();
    
    $('#resetFilter').on('click', function() {
        $('.fac').show();
    })
    
    
    $('.facFilter').on('click', function() {
    
        findClass = this.id + '.bad';
        console.log(findClass)
        $('.fac').hide();
        $('.' + findClass).show();
    
    })
        
                                
});

function getData(url){
    
    $.getJSON(url, function (data) {
        
    ds = data.feed.entry
    return ds
    
})}

function drawLine(){
    
    url = "https://spreadsheets.google.com/feeds/list/1h8qeQAJeeuBB7xICdy0m5_BFOq3BAuTbB9WWCTC82Ew/12/public/values?alt=json"  
    
    $.getJSON(url, function (data) {
    
    
    ds = data.feed.entry    
    timeUpdated = 'Обновлено: ' + ds[0].updated.$t
    $("#upd").append(timeUpdated);     
    
    count = ds.length
        
    for(var i = 0; i < count; i++){
        
        facultyes = ds[i].gsx$факультет.$t
        chair = ds[i].gsx$кафедра.$t
        position = ds[i].gsx$должность.$t
        name = ds[i].gsx$фиосотрудника.$t
        
        if (!isNaN(parseInt(ds[i].gsx$wos2019.$t))){
            wos = parseInt(ds[i].gsx$wos2019.$t)
        } else {
            wos = 0;
        }
        
        if (!isNaN(parseInt(ds[i].gsx$esd2019.$t))){
            esd = parseInt(ds[i].gsx$esd2019.$t)
        } else {
            esd = 0;
        }
        
        if (!isNaN(parseInt(ds[i].gsx$scopus2019.$t))){
            scopus = parseInt(ds[i].gsx$scopus2019.$t)
        } else {
            scopus = 0;
        }  
        
        if (!isNaN(parseInt(ds[i].gsx$вак2019.$t))){
            vak = parseInt(ds[i].gsx$вак2019.$t)
        } else {
            vak = 0;
        }
        
        total_pubs = wos + esd + scopus + vak
        
        if(total_pubs > 0){
            
            html =  "<tr class='good fac " + facultyes + "'>";
            status = '<td><i style="font-size: 25px" class="fas fa-ruble-sign text-success" data-toggle="tooltip" data-placement="top" title="Требование выполнено"></i></tr></td>';
            
        } else {
            
            html =  "<tr class='bad fac " + facultyes + "'>";
            status = '<td><i style="font-size: 25px" class="text-danger fas fa-ruble-sign" data-toggle="tooltip" data-placement="top" title="Статья не опубликована"></i></td>'
            
        }
        
        

        html += "<td>" + facultyes + "</td>";
        html += "<td>" + chair + "</td>";
        html += "<td style='text-align: left; padding: 10px'>" + position + "</td>";
        html += "<td style='text-align: left; padding: 10px'>" + name + "</td>";
        
        html += "<td>" + wos + "</td>";
        html += "<td>" + esd + "</td>";
        html += "<td>" + scopus + "</td>";
        html += "<td>" + vak + "</td>";
        
        html += "<td>" + total_pubs + "</td>";
        html += status;
        html +=  "</tr>";
        $("#publicationsTable").append(html); 
        
    }})
        
   }