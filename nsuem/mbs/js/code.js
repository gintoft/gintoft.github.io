function drawEvent(name, eventType, format, date, time, speaker, location, regLink, placesFree) {

    html = '<!--Начало мероприятия -->'
    html += '<div class="card ' + '' + ' " style="margin-top: 20px">'
    html += '<div class="card-body">'
    html += '<h5>' + name + '  <span class="badge badge-warning"><i class="fas fa-calendar-day"></i> ' + date + '</span>  '
    html += '<span class="badge badge-light"> <i class="fas fa-book"></i> ' + eventType + ' </span></h5>'
    html += '<p class="card-text">' + 'description' + '</p>'
    
    html += '<br><span class="badge badge-success"><i class="fa fa-users"></i> ' + speaker + ' </span>'
    
    html += '<br><br><a href="' + regLink + '#" target="_blank" style="color: white" class="btn btn-success">Зарегистрироваться!</a>'
    html += '</div></div>';
    
    $("#events").append(html);
    
}

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQgI4FGSD2KRlbJ'}).base('appTHnq8vpv6ctxFL');

base('Расписание').select({maxRecords: 5, view: "Grid view", fields: ["Название", "Участие", "Дата", "Время", "Формат", "Осталось мест", "Локация"]}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        
        console.log(record)
        drawEvent(record.fields.Название, record.fields.Участие, record.fields.Дата, record.fields.Время, record.fields.Ведущий, record.fields.Локация, record.fields.reg, record.fields.Осталосьмест)
        
    });
});