// Объект записи
function Record(text, date) {
  this.text = text;
  this.date = date;
  this.time = function() {
    return this.date.toLocaleTimeString();
	};
 this.day = function() {
   return this.date.toLocaleDateString();
}
}

// Изначальные записи

var records = [
  new Record("У меня есть блог!!!", new Date(2015, 10, 19, 07, 00, 0, 0)),
  new Record("Я буду тут писать всякие вещи", new Date(2015, 10, 19, 07, 10, 0, 0)),
  new Record("Это даже круче, чем твиттер", new Date(2015, 10, 19, 07, 20, 0, 0)),
  new Record("Кто пойдет гулять?", new Date(2015, 10, 19, 07, 50, 0, 0)),
  new Record("Сегодня был ужасный день", new Date(2015, 10, 19, 08, 05, 0, 0))
];

// Рендер всех записей

function displayRecords() {
  var text = "";
  var odd = true; // нечетный
  for (var i in records) {
    if (odd) {
      text += "<p style='background-color:#ff8b99;'>";
    } else {
      text += "<p style='background-color:#8cf799;'>";
    }
    odd = !odd;
    text += "<i>" + records[i].time() + " ";
    text += "<strong>" + records[i].day() + "</strong></i><br />";
    text += records[i].text + "</p>";
  }
  document.getElementById("records_place").innerHTML = text;
}

// Добавление новой записи

function send() {
  var r = new Record(document.getElementById("newtext").value, new Date());
  records.push(r);
  displayRecords();
}


// Утренние записи с 6 до 10
function showMorning() {
  var text = "";
  var odd = true; // нечетный
  var morningTime, morningTimeHours; // Вычленяем часы
  for (var i in records) {
    morningTime = records[i].time();
    // parseInt удаляет двоеточие, если час - это цифра меньше 10.
    morningTimeHours = parseInt(morningTime.substring(0,2));
	//console.log(morningTime + " " + morningTimeHours);
    // Если значение Часа между 6 и 10, то выводим посты
    if (morningTimeHours >= 6 && morningTimeHours <= 10) {
        if (odd) {
          text += "<p style='background-color:#a6caf0;'>";
        } else {
          text += "<p style='background-color:#b0e0e6;'>";
        }
        odd = !odd;
        text += "<i>" + records[i].time() + " ";
		text += "<strong>" + records[i].day() + "</strong></i><br />";
		text += records[i].text + "</p>";
      }
  }
  document.getElementById("records_place").innerHTML = text;
}

// Поиск
function findAll() {
  var text = "";
  var odd = true; // нечетный
  var query = document.getElementById("newtext").value; // то, что ввели
  for (var i in records) {
    // Если такие символы в элементах из массива записей имеются - то выводим их!
    // выражение.indexOf(что-то) == -1 значит нет.
    // Соответственно, мы идем "от противного":
    if (records[i].text.indexOf(query) != -1) {
        if (odd) {
          text += "<p style='background-color:#a6caf0;'>";
        } else {
          text += "<p style='background-color:#b0e0e6;'>";
        }
        odd = !odd;
        text += "<i>" + records[i].time() + " ";
        text += "<strong>" + records[i].day() + "</strong></i><br />";
        text += records[i].text + "</p>";
      }
  }
  document.getElementById("records_place").innerHTML = text;
} 
  
// Сортировка записей


function sort(compare) {

  var l = records.length;

  for (var i = 0; i < l - 1; i++) {

    var j_min = i;
    for (var j = i + 1; j < l; j++) {
      // console.log(i + " " + j);
      if (compare(records[j], records[j_min])) {
        j_min = j;
      }
    }

    var r = records[j_min];
    records[j_min] = records[i];
    records[i] = r;

  }

  displayRecords();

}

// Массив методов сравнения

var comparers = [
  function comp1(r1, r2) {
    return r1.date < r2.date;
  },
  function comp2(r1, r2) {
    return r1.date > r2.date;
  },
  function comp3(r1, r2) {
    return r1.text < r2.text;
  },
  function comp4(r1, r2) {
    return r1.text > r2.text;
  }
];