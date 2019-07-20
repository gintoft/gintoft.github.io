function getSub() {

    var token = '427ea78dbf792d86b6d4691f585790d82dd8d62cf65d529fe81f064cfffd3d4855d679a13783a0fd99109';
    var usersID = document.getElementById("usersID").value;

	var arrayIds = usersID.split(", ");
    var resArray = new Array();

    console.log(arrayIds.length + ' elem: ' + arrayIds);

    var usrData = new Object();

for (var i = 0; i < arrayIds.length; i++) {

   $.ajax({

        url: 'https://api.vk.com/method/users.getSubscriptions?&access_token=' + token + '&user_id=' + '165118486' + '&count=200&v=5.87',
        method: 'GET',
        dataType: 'JSONP',
        success: function (data) {
          usrData.id = arrayIds[i];
          usrData.countSub = data.response.groups.count;
          usrData.arraySub = data.response.groups.items;
		  $("#placeSub").append(usrData.countSub);}
    });

//    resArray[i] = usrData;



	//console.log(data.response.groups.count);

	console.log(usrData);

}
}
