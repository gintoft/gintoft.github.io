function getSub() {

    var token = 'e1d7cdac753e6d491cb3b2d0d52d2a650e577f9e1f3caed2ebadf5da810ed1c092cb05d16b695a2e725e5';
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
