
$(function () {
    
 createtRecord('asdasd')
    
});


function createtRecord(message){
    
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'key3uBLeBw9LXHiCe'}).base('app3mbteZy0FD5Qls');

      base('answers').create([
  {
    "fields": {'1': message}
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
    
    
}