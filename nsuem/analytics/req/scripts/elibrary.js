$(function () {
    
    
    $('#elibrary').addClass('mm-active');
    
    
    $('#onlyWithChair').on('click', function(){
        $('.withoutChair').hide();
    })
    
    drawLine();
    
    $('[data-toggle="tooltip"]').tooltip();   
                                
})

function drawLine(){
    
    url = "https://spreadsheets.google.com/feeds/list/1MtXe8HomkcETDteQw7WmOraribpu8NiAiyKucZgctdU/1/public/values?alt=json"  
     
    $.getJSON(url, function (data) {
    
        ds = data.feed.entry
//        timeUpdated = 'Обновлено: ' + ds[0].updated.$t
//        $("#upd").append(timeUpdated);
        
        count = ds.length
        console.log(ds)
        
        for(var i = 1; i < count; i++){
            
            html = "<tr>"
        
            authorID = ds[i].gsx$id.$t
            name = ds[i].gsx$фамилия.$t + ' ' + ds[i].gsx$имя.$t + ' ' + ds[i].gsx$отчество.$t
            post = ds[i].gsx$должность.$t
            chair = ds[i].gsx$кафедра.$t
            
            numOfCoreItems = ds[i].gsx$numofcoreitems.$t
            numOfItemsFull = ds[i].gsx$numofitemsfull.$t
            numOfLibraryItems = ds[i].gsx$numoflibraryitems.$t
            publForeign = ds[i].gsx$publforeign.$t
            publVAK = ds[i].gsx$publvak.$t
            
            cit5 = ds[i].gsx$cit5.$t
            citVAK = ds[i].gsx$citvak.$t
            citedRefs = ds[i].gsx$citedrefs.$t
            
            
            hirschCore = ds[i].gsx$hirschcore.$t
            hirschFull = ds[i].gsx$hirschfull.$t
            hirschs = ds[i].gsx$hirschs.$t
            
            if(chair == "-"){
                html +=  '<tr class="withoutChair">'
            } 
            
            author_items_link = '<a href="http://elibrary.ru/author_items.asp?authorid=' + authorID + '" target="_blank"><i class="fas fa-book" style="color:#FFC300" data-toggle="tooltip" data-placement="top" title="Открыть список публикаций"></i></a>'
            author_profile_link = '<a href="http://elibrary.ru/author_profile.asp?authorid=' + authorID + '" target="_blank"><i class="fas fa-user" style="color:#FFC300" data-toggle="tooltip" data-placement="top" title="Открыть профиль"></i></a>'
            
            
            html += '<td>' + author_profile_link + ' ' + author_items_link + ' | ' + authorID + '</td>';
            
        
            html += '<td>' + chair + '</td>';
//            html +=  "<td><i class='fas fa-times' style='color: lightgray' data-toggle='tooltip' data-placement='top' title='Отчет не требуется'></i></td>";
            html += '<td style="text-align: left" data-toggle="tooltip" data-placement="top" title="' + post + '">' + name + '</td>';
            
            html += '<td data-toggle="tooltip" data-placement="top" title="Число публикаций, входящих в ядро РИНЦ">' + numOfCoreItems + '</td>';
            html += '<td data-toggle="tooltip" data-placement="top" title="Число публикаций в РИНЦ">' + numOfItemsFull + '</td>';
            html += '<td data-toggle="tooltip" data-placement="top" title="Общее число публикаций на elibrary.ru">' + numOfLibraryItems + '</td>';
            html += '<td data-toggle="tooltip" data-placement="top" title="Число публикаций в зарубежных журналах">' + publForeign + '</td>';
            html += '<td data-toggle="tooltip" data-placement="top" title="Число публикаций в российских журналах из перечня ВАК">' + publVAK + '</td>';
        
            html += '<td data-toggle="tooltip" data-placement="top" title="Число цитирований всех публикаций автора из статей, опубликованных за последние 5 лет">' + cit5 + '</td>';
            html += '<td data-toggle="tooltip" data-placement="top" title="Число цитирований из российских журналов из перечня ВАК">' + citVAK + '</td>';
            html += '<td data-toggle="tooltip" data-placement="top" title="Число цитирований публикаций автора в РИНЦ">' + citedRefs + '</td>';
            
            html += '<td data-toggle="tooltip" data-placement="top" title="Индекс Хирша по ядру РИНЦ">' + hirschCore + '</td>';
            html += '<td data-toggle="tooltip" data-placement="top" title="Индекс Хирша по всем публикациям на elibrary.ru">' + hirschFull + '</td>';
            html += '<td data-toggle="tooltip" data-placement="top" title="Индекс Хирша без учета самоцитирований">' + hirschs + '</td>';
            
            html +=  "</tr>";
            
            $("#contentTable").append(html);
            
            
        }
        
        
        
    
   })
    
}

              
//	<th rowspan="2">Author ID</th>
//	<th rowspan="2">Ссылки на<br>Elibrary</th>
//	<th rowspan="2">Автор</th>

//	<th data-toggle="tooltip" data-placement="top" title="Число публикаций, входящих в ядро РИНЦ" style="width: 5%">P1</th>
//	<th  style="width: 5%">P2</th>
//	<th  style="width: 5%">P3</th>
//	<th  style="width: 5%">P5</th>
//	<th  style="width: 5%">P6</th>
//	
//	<th  style="width: 5%">C1</th>
//	<th  style="width: 5%">C2</th>
//	<th  style="width: 5%">C3</th>
//
//	<th  style="width: 5%">H1</th>
//	<th  style="width: 5%">H2</th>
//	<th  style="width: 5%">H3</th>