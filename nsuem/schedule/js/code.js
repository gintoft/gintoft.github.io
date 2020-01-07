$(function () {
    
stream = "";
currStyle = "";
    
$(".typeUP").on("click", function() {
    
    currStyle = this.id;
    
});
    

$(".stream").on("click", function() {
    
    streamName = $('#' + this.id).attr("data-streamname");
    
    $('#currentStream').html(streamName);
    $('#placeStream').show();
    
    stream = this.id;
    
    
});   
    
    

$("td").on("click", function() {
    
    console.log(stream + ';' + this.id + ';' + currStyle);
    
    $('#' + this.id).addClass(currStyle);
    
});
    
});
