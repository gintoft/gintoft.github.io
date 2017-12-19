$(function () {

$('#AES').click(function(){

      AES_Init();

    var block = new Array(16);
    for(var i = 0; i < 16; i++)
    block[i] = 0x11 * i;

    var key = new Array(32);
    for(var i = 0; i < 32; i++)
    key[i] = i;

    AES_ExpandKey(key);
    var pass = AES_Encrypt(block, key);


    AES_Done();

$('#AES_Decrypt').html(pass);




})


})
