$(function () {

document.querySelector("#och").onclick = function (e) {

    var str = document.querySelector("#och").val();

    alert(str + ' sd');

};

document.querySelector("#cold_more").onclick = function (e) {

    cold += 1;

    e.currentTarget.innerHTML = cold + ' М<sup>3</sup>';

};

$('#calc').click(function(){

    total.hot = cost.hot * hot;
    total.cold = cost.cold * cold;
    total.sliv = cost.sliv * (hot + cold);

    var total_price = total.cold + total.hot + total.sliv;

    $('#place_hot').html((hot).toFixed(2) + ' М<sup>3</sup> * ' + (cost.hot).toFixed(2) + ' руб. = ' + (total.hot).toFixed(2) + ' руб.');
    $('#place_cold').html((cold).toFixed(2) + ' М<sup>3</sup> * ' + (cost.cold).toFixed(2) + ' руб. = ' + (total.cold).toFixed(2) + ' руб.');
    $('#place_sliv').html((hot).toFixed(2) + ' М<sup>3</sup> + ' + (cold).toFixed(2) + ' М<sup>3</sup> * ' + (cost.sliv).toFixed(2) + ' руб. = ' + (total.sliv).toFixed(2) + ' руб.');
    $('#place_total').html((total.hot).toFixed(2) + ' руб. + ' + (total.cold).toFixed(2) + ' руб. + ' + (total.sliv).toFixed(2) + ' руб. = ' + (total_price).toFixed(2) + ' руб.');


})

$('#calc').click(function(){

    total.hot = cost.hot * hot;
    total.cold = cost.cold * cold;
    total.sliv = cost.sliv * (hot + cold);

    var total_price = total.cold + total.hot + total.sliv;

    $('#place_hot').html((hot).toFixed(2) + ' М<sup>3</sup> * ' + (cost.hot).toFixed(2) + ' руб. = ' + (total.hot).toFixed(2) + ' руб.');
    $('#place_cold').html((cold).toFixed(2) + ' М<sup>3</sup> * ' + (cost.cold).toFixed(2) + ' руб. = ' + (total.cold).toFixed(2) + ' руб.');
    $('#place_sliv').html((hot).toFixed(2) + ' М<sup>3</sup> + ' + (cold).toFixed(2) + ' М<sup>3</sup> * ' + (cost.sliv).toFixed(2) + ' руб. = ' + (total.sliv).toFixed(2) + ' руб.');
    $('#place_total').html((total.hot).toFixed(2) + ' руб. + ' + (total.cold).toFixed(2) + ' руб. + ' + (total.sliv).toFixed(2) + ' руб. = ' + (total_price).toFixed(2) + ' руб.');


})


})
