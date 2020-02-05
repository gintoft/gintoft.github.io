$(function () {
    
    $('#scopus').addClass('mm-active');
    
    $("#contentTable").hide();
    drawLine();
    
    $('#resetFilter').on('click', function() {
        $('.univ').show();
    })
    
    
    $('.univFilter').on('click', function() {
    
        findClass = this.id;
        console.log(findClass)
        $('.univ').hide();
        $('.' + findClass).show();
    
    })
        
})

function drawLine(){
    
    url = "https://spreadsheets.google.com/feeds/list/1MtXe8HomkcETDteQw7WmOraribpu8NiAiyKucZgctdU/5/public/values?alt=json"  
     
    $.getJSON(url, function (data) {
    
        ds = data.feed.entry
        timeUpdated = 'Обновлено: ' + ds[0].updated.$t
//        $("#upd").append(timeUpdated);
        
        count = ds.length
        console.log(ds)

        for(var i = 1; i < count; i++){
            
            
            ScopusAuthorID = ds[i].gsx$scopusautrhorid.$t
            uni = ds[i].gsx$uni.$t
            affiliationName = ds[i].gsx$affiliationname.$t
            surName = ds[i].gsx$surname.$t
            givenName = ds[i].gsx$givenname.$t
            
            startPublicationRange = ds[i].gsx$startpublicationrange.$t
            endPublicationRange = ds[i].gsx$endpublicationrange.$t
            
            CitedByCount = ds[i].gsx$citedbycount.$t
            CitationCount = ds[i].gsx$citationcount.$t
            DocumentCount = ds[i].gsx$documentcount.$t
            
            html = "<tr class='univ " + uni + "'>"
            
            html += '<td><a target="_blank" href="https://www.scopus.com/authid/detail.uri?authorId=' + ScopusAuthorID + '">' + ScopusAuthorID +'</a></td>';
            html += '<td>' + uni + '</td>';
            html += '<td style="text-align: left">' + affiliationName + '</td>';
            html += '<td style="text-align: left">' + surName + ' ' + givenName + '</td>';
            html += '<td>' + startPublicationRange + ' - ' + endPublicationRange + '</td>';
            
            html += '<td>' + CitedByCount + '</td>';
            html += '<td>' + CitationCount + '</td>';
            html += '<td>' + DocumentCount + '</td>';
            html +=  "</tr>";
            
            $("#contentTable").append(html);
//            $('.preloader').hide();
            $("#contentTable").show();
            
            
        }
        
    
   })
    
}