var TypeImage = "nsuem_logo";

function TimeChangeImage() {
    
    
    if(TypeImage == "nsuem_logo"){
        document.getElementById("logo").src="img/nsuem_inverse_logo.png"
        TypeImage = "nsuem_inverse_logo"
    } else {
        document.getElementById("logo").src="img/nsuem_logo.png"
        TypeImage = "nsuem_logo"
    }
}



function resize_logo() {
    
    var w = document.body.clientWidth;
    document.getElementById("logo_3").style.width=0.5*w;
    
}


function calculateCoffee() {
 
    var cost;
    
    var priceCoffee = 80;
    var priceCoffeeWithSugar = 120;
    var quantityCoffeeCups = parseInt(document.getElementById("coffee").value);
    
    if (document.getElementById("sugarNeed").checked) {
        
        var cost = priceCoffeeWithSugar * quantityCoffeeCups;
    } else {
        var cost = priceCoffee * quantityCoffeeCups;    
    }
    
   // alert(cost);   
    
    document.getElementById("costCoffee").innerHTML = cost;
    document.getElementById("hiddenCost").style.display="inline";
}


function writeCookie(coffee) {
    var quantity 
    document.cookie = document.getElementById("coffee").value;
    
}

function readCookie() {
    
    var quantity = document.getElementById("coffee").value
}

function ckeckCookie(){
    
    var quantity = readCookie("")
}

