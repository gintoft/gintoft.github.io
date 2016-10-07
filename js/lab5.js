function calcWater(){
    
    var kitchen = {
        
        cold: parseInt(document.getElementById("kitchenCold").value),
        hot: 10,
        
    }
    
    var cost = {
        
        cold: 14.33,
        hot: 87.77,
        
    }
    
    var cost = kitchen.cold * cost.hot;
        
    document.getElementById("resKitchenCold").innerHTML = cost.toFixed(2);
    //document.getElementById("ResultTable").style.display="table";   
}
