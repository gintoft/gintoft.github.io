document.onkeydown = function(event){
    
    console.log(event.key)
    
    key = ''
    
    if(event.ctrlKey) {
        key += 'Ctrl + '
    }
    
    key += event.key
    
    console.log(key)
    key = ''
    
}