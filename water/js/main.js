$(function () {

var cost = {

    hot: 100.10,
    cold: 18.90,
    sliv: 15.26

}

var total = {

    hot: 0,
    cold: 0,
    sliv: 0

}

var hot = 0;
var cold = 0;



document.querySelector("#hot_more").onclick = function (e) {

    hot += 1;

    e.currentTarget.innerHTML = hot + ' М<sup>3</sup>';

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


})
