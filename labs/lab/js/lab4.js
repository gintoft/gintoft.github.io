$(document).ready (function(){
    
    $("#registr").click (function checkForm(){
        
        
        $('#errorRegistration').hide();
        $('#successRegistration').hide();
        
        var name = $("#name").val();
        var lastName = $("#lastName").val();
        var postIndex = $("#postIndex").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var brithday = $("#brithday").val();
        var errorMessage = "";
        
        // Проверка корректности заполнения полей
        if(name.length < 3) errorMessage = "Некорректная длина имени пользователя. Имя должно содержать не менее 3 символов"
        else if (lastName.length < 3) errorMessage = "Некорректная длина фамилии пользователя. Фамилия должна быть длинее 3 символов"
        else if (parseInt(postIndex) < 100000 || parseInt(postIndex) >= 1000000) errorMessage = "Некорректный почтовый индекс"
        
        
        
        
        if(errorMessage != "") {
            
            $('#errorRegistration').html (errorMessage);
            $('#errorRegistration').show ();
            return false;
        } else {
            $('#successRegistration').html (name + ", регистрация прошла успешно!");
            $('#successRegistration').show ();
        }
})              
})
    
