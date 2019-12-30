function notDigits(field) {
    
    var digits = "0123456789";
    
    for(var i=0; i < field.length; i++){
        
        if(digits.indexOf(field[i]) == -1) {
            return true;
        }} 
    
        return false;
}

function isEmpty(field){
    if(field.length == 0){
        return true;
    } else return false;
}

function checkName(field){
    
var errorMsg = "";
var name = $("#name").val();
$("#nameError").hide();
$("#name").removeClass('error');
$("#name").removeClass('success');
    
if(name.length > 15){

    errorMsg = "Имя не может быть длиннее 15 символов.";
    $("#nameError").html(errorMsg);
    $("#nameError").show();
    $("#name").addClass('error');


}

if(!$("#name").hasClass('error')){
        $("#name").addClass('success');
    }

}

function checkLastName(field){
    
var errorMsg = "";
var lastName = $("#lastName").val();
$("#lastName").removeClass('error');
$("#lastName").removeClass('success');
$("#lastNameError").hide();
    
if(lastName.length > 20){

    errorMsg = "Фамилия не может быть длиннее 20 символов.";
    $("#lastNameError").html(errorMsg);
    $("#lastNameError").show();
    $("#lastName").addClass('error');

}

if(!$("#lastName").hasClass('error')){
    $("#lastName").addClass('success');
}

    
}

function checkPostIndex(field){
    
var errorMsg = "";
var postIndex = $("#postIndex").val();
    
$("#postIndex").removeClass('error');
$("#postIndex").removeClass('success');

$("#postIndexError").hide();

if(postIndex.length != 6){

    errorMsg = "Почтовый индекс должен состоять из 6 цифр.";
    $("#postIndexError").html(errorMsg);
    $("#postIndexError").show();
    $("#postIndex").addClass('error');

} else if (notDigits(postIndex)) {
    
    errorMsg = "Почтовый индекс не должен содержать буквы!";
    
    $("#postIndexError").html(errorMsg).show();
    $("#postIndex").addClass('error');
   
}
    else if (isEmpty($("#postIndex").val())) {
    
    errorMsg = "Почтовый индекс должен быть заполнен!";
    
    $("#postIndexError").html(errorMsg).show();
    $("#postIndex").addClass('error');
   
}
    
    
    if(!$("#postIndex").hasClass('error')){
        $("#postIndex").addClass('success');
    }

}

function isCorrectEmail(field){
    
    var emailRegex = /^\w+@\w+\.\w{2,4}$/;
    return emailRegex.test(field.value)
    
}

function checkEmail(field){
    
var errorMsg = "";
var postIndex = $("#email").val();
    
$("#email").removeClass('error');
$("#email").removeClass('success');

$("#emailError").hide();

if(!isCorrectEmail(field)){

    errorMsg = "Некорректный e-mail.";
    $("#emailError").html(errorMsg);
    $("#emailError").show();
    $("#email").addClass('error');
}
    
    if(!$("#email").hasClass('error')) {
        $("#email").addClass('success');
    }

}

function isCorrectPhone(field){
    
    var phoneRegex = /^8-\d{3}-\d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(field.value)   
}

function checkPhone(field){
    
var errorMsg = "";
var postIndex = $("#phone").val();
    
$("#phone").removeClass('error');
$("#phone").removeClass('success');

$("#phoneError").hide();

if(!isCorrectPhone(field)){

    errorMsg = "Некорректный номер телефона. Введите телефон в формате 8-ххх-ххх-хх-хх";
    $("#phoneError").html(errorMsg);
    $("#phoneError").show();
    $("#phone").addClass('error');
    
}
    
    if(!$("#phone").hasClass('error')) {
        $("#phone").addClass('success');
    }

}


function isCorrectDate(field){
    
    var dateRegex = /^\d{2}(\/|\.)\d{2}(\/|\.)\d{4}$/;
    return dateRegex.test(field.value)   
}


function isCorrectDateValue(field){
    
    var dd = parseInt(field.value.substring(0,2));
    var mm = parseInt(field.value.substring(3,5));
    return 1<= dd && dd<= 31 && 1<=mm && mm <= 12;

}

function checkBrithday(field){
    
var errorMsg = "";
var postIndex = $("#brithday").val();
    
$("#brithday").removeClass('error');
$("#brithday").removeClass('success');

$("#brithdayError").hide();

if(!isCorrectDate(field)){

    errorMsg = "Неверно введена дата рождения";
    $("#brithdayError").html(errorMsg);
    $("#brithdayError").show();
    $("#brithday").addClass('error');
    
}
    
else if(!isCorrectDateValue(field)){

    errorMsg = "Некорректная дата рождения.";
    $("#brithdayError").html(errorMsg);
    $("#brithdayError").show();
    $("#brithday").addClass('error');
    
}
    
    if(!$("#brithday").hasClass('error')) {
        $("#brithday").addClass('success');
    }

}

function isCorrectForm(){
    
    if( $("#name").hasClass('success') ||
        $("lastName").hasClass('success') ||
        $("#postIndex").hasClass('success') ||
        $("#phone").hasClass('success') ||
        $("#email").hasClass('success') ||
        $("#brithday").hasClass('success')) 
    {
        alert("Вы успешно зарегистрированы!");
    } else {
        alert("Проверьте заполнение полей! Поля не должны быть пустыми и не должны содержать некорректные данные.");
        }
        
    }
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    