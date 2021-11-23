
$(function () {
    
    
    var chapters = [
        
        {number: '1.1', name: 'За получение', expert: 'Рейнгардт'},
        {number: '2.2', name: 'За получение', expert: 'Рязанова'},
        {number: '3.1', name: 'За получение', expert: 'Цуриков'},
        {number: '3.2', name: 'За получение', expert: 'Цуриков'},
        {number: '4.1', name: 'За получение', expert: 'Цуриков'},
        
    ];
    
    
    for(i = 0; i < chapters.length; i++) {
    
        getCountRecords(chapters[i].number, chapters[i].expert)
        
    }
    
});


function getCountRecords(table, expert){
    
    var all = 0    
    var neprov = 0   
    
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyQgI4FGSD2KRlbJ'}).base('appxQcWlqbS1MIkQo');

    base(table).select({view: "Отчеты", filterByFormula: '{Результат проверки} = BLANK()'}).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            neprov+=1;
    }); 

    fetchNextPage();

    }, function done(err) {
        html = '<tr>' + '<td>' + table + '</td>' + '<td>' + expert + '</td>' + '<td>' + all + '</td>' + '<td>' + neprov + '</td>' + '</tr>'
        $("#ecTable").append(html); 
        if (err) { console.error(err); return; }
    });

    
}