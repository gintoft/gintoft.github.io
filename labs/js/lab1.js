var TypeImage = "nsuem_logo";

function changeImage() {
    
    if(TypeImage == "nsuem_logo"){
        document.getElementById("logo").src="img/nsuem_inverse_logo.png"
        TypeImage = "nsuem_inverse_logo"
    } else {
        document.getElementById("logo").src="img/nsuem_logo.png"
        TypeImage = "nsuem_logo"
    }
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