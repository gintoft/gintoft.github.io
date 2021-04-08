$(function () {
    
//    $('#fk_matrix').addClass('mm-active');
    drawLine();
    $('[data-toggle="tooltip"]').tooltip(); 
    
});


function drawLine(){
    
    docID = '1cm-2lfgvZyCn-eiv7gI8GScPp9j3OMOmWobJuF_SZ08'
    url = 'https://spreadsheets.google.com/feeds/list/' + docID + '/2/public/values?alt=json'
    
    $.getJSON(url, function (data) {
    
    ds = data.feed.entry    
//    console.log(ds)
    
    for(var i = 0; i < ds.length; i++){
        
        html =  "<tr>";
        html += "<td class='lvl'>" + ds[i].gsx$lvl.$t + "</td>";
        html += "<td class='programName'>" + ds[i].gsx$program.$t + "</td>";
        
        html += "<td class='digit'>" + '-' + "</td>";
        html += "<td class='digit'>" + '-' + "</td>";
        html += "<td class='digit'>" + '-' + "</td>";
        
        html += "<td class='digit'>" + ds[i].gsx$aoch.$t + "</td>";
        html += "<td class='digit'>" + ds[i].gsx$aoz.$t + "</td>";
        html += "<td class='digit'>" + ds[i].gsx$azao.$t + "</td>";
        
        html +=  "</tr>";
        
        
        
        $("#contentTable").append(html); 
        
    }
    
    })
}