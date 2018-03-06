function print1(){

  $('#FIO').show();
  $('#PASSPORT').show();
  $('#GN').show();
  $('#PHONE').show();

  $('#place_FIO').html("Иванов Игорь Иванович")
  $('#place_PASSPORT').html("серия 1921 номер 989023")
  $('#place_GN').html("Р 613 ТИ 54RUS")
  $('#place_PHONE').html("+7 (913) 978 65 43")

};

function print2(){

  $('#FIO').show();
  $('#PASSPORT').show();
  $('#GN').show();
  $('#PHONE').show();

  $('#place_FIO').html("Топтолыгин Савелий Ефремович")
  $('#place_PASSPORT').html("серия 2422 номер 456789")
  $('#place_GN').html("О 777 ОО 54RUS")
  $('#place_PHONE').html("+7 (913) 123 45 67")

};

function print3(){

  $('#FIO').show();
  $('#PASSPORT').show();
  $('#GN').show();
  $('#PHONE').show();

  $('#place_FIO').html("Петров Игорь Семенович")
  $('#place_PASSPORT').html("серия 2342 номер 123123")
  $('#place_GN').html("У 534 УУ 96RUS")
  $('#place_PHONE').html("+7 (978) 342 63 65")

};



$(function () {

  $('#FIO').hide();
  $('#PASSPORT').hide();
  $('#GN').hide();
  $('#PHONE').hide();

document.querySelector("#find").onclick = function (e) {

    var input = $("#inputInfo").val();

    console.log(input);

    switch (input) {

      case 'Р123СТ54':  print1(); break;
      case '89130172628':    print2(); break;
      case '0000123456':   print3(); break;

      default: alert("Такого человека нет в списке клиентов.");

    }

    // break;

};

})
