;(function () {
  'use strict'

  var passwordMD5 = 'e242f36f4f95f12966da8fa2efd59992'; // пароль Пукина

  var input = document.getElementById('input')

  document.getElementById('calculate').addEventListener(
    'click',
    function (event) {
      event.preventDefault()

      if (passwordMD5 == md5(input.value)) {
        alert("Владимир Пукин, Вы успешно авторизованы!");
      } else {
        alert("Пароль введент неверно!");
      }

    }
  )
}())
