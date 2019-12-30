// https://oauth.vk.com/authorize?client_id=6632780&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.52

function getLink(){
	return document.location.href
}

function getUrl(method, params){
	
	params = params || {};
	params['access_token'] = '91604ce4f23647d2431b059cb75890798fef10a9fc2961c6381b25c97d051deeaf71c97b9ab2ba9840923'
	return "https://api.vk.com/method/" + method + "?" + $.param(params);
}

function sendRequest(method, params, func) {
	
    $.ajax({

        url: getUrl(method, params),
        method: 'GET',
        dataType: 'JSONP',
        success: func
		
    })

}

function getCloud() {
	
	var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
	
	var lines = text.split(/[,\. ]+/g),
		
    data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

	Highcharts.chart('container', {
		series: [{
			type: 'wordcloud',
			data: data,
			name: 'Occurrences'
		}],
		title: {
			text: 'Семантический анализ'
		}
	});
	
}

function getToken() {
	
    $.ajax({

        url: 'https://oauth.vk.com/authorize?client_id=6632780&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.52',
        method: 'GET',
//        dataType: 'JSONP',
        complete : function(){
			alert(this.url)
		},
		success: function(xml){
    }
    })

}

function checkProfile(){
	
	$('#helloPage').hide();
	$('#preLoader').show();
	
	sendRequest('friends.search', {count: 1000, fields: 'photo_100', v: 5.87}, function(data){
		getProfileInfo(data.response);
	});
}

function getSubscriptions(){
	
	usrID = $('#usrID').val();
	
	sendRequest('users.getSubscriptions', {user_id: usrID, extended: 1, count: 200, fields: 'name', v: 5.92}, function(data){
		
		allPublicName = '';

		for(i = 0; i < data.response.count; i++) {
			allPublicName += data.response.items[i].name + ' ';
		}
		
		text = allPublicName;
	
		var lines = text.split(/[,\. ]+/g),
			
		data = Highcharts.reduce(lines, function (arr, word) {
				var obj = Highcharts.find(arr, function (obj) {
					return obj.name === word;
				});
				if (obj) {
					obj.weight += 1;
				} else {
					obj = {
						name: word,
						weight: 1
					};
					arr.push(obj);
				}
				return arr;
			}, []);

		Highcharts.chart('subscriptions', {
			series: [{
				type: 'wordcloud',
				data: data,
				name: 'Occurrences'
			}],
			title: {
				text: ''
			}
		});

		
	})
	
}

function getProfileInfo(){
	
	getSubscriptions();
	
	usrID = $('#usrID').val();
	
	sendRequest('users.get', {user_ids: usrID, name_case: 'Nom', count: 1000, fields: 'photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me, counters', v: 5.92}, function(data){
		
		usr = data.response[0];
		
//		console.log(usr);
	
		$('#getMoreInfoAboutUser').html("Подробная информация о пользователе " + usr.first_name + ' ' + usr.last_name);
		$('#friendsCount').html(usr.counters.friends);
		$('#followersCount').html(usr.counters.followers);
		$('#photosCount').html(usr.counters.photos);
		$('#pagesCount').html(usr.counters.pages);
		
		img = '<img src="' + usr.photo_200 + '"/ style="border-radius: 50%; width: 150px">';
		
		$('#moreInfo').html(img)
		
//		drawContentChart(usr.counters.friends, usr.counters.followers, usr.counters.pages, usr.counters.photos);
		
	});
	
	
	$('#preLoader').hide();
	$('#mainContainer').show();
	
	url = getLink();
	
	
//	setTimeout(function() { $('#preLoader').hide() }, 5000);	
//	setTimeout(function() { $('#mainContainer').show() }, 5000);	
	
}

function drawContentChart(fr,fo,gr,ph){
	
	var ctx = $('#contentChart');
	var contentChart = new Chart(ctx, {

		type: 'pie',
		label: 'Анализ профиля пользователя',
		data : {
			labels: ['Друзья', 'Подписчики', 'Группы', 'Фотографии'],
			datasets: [{
				
				data: [fr, fo, gr,ph],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
				]
		}]},

});
}

function drawFriends(friends){

	var html = '';
	
	for(var i = 1; i < friends.length; i++) {
		var f = friends.items[i];
		console.log(f.last_name + '\n')
		
	}
}

function loggingInfo(){
    
usrID = $('#usrID').val();
	
sendRequest('groups.get', {user_id: usrID, extended: 1, count: 1000, fields: 'activity,description,members_count', v: 5.92}, function(data){
    // 99099155
    console.log(data.response)
    
    htmlGroups = '<ul>';
    
    for(i = 0; i < 5; i++) {
        
        htmlGroups += '<li>' + data.response.items[i].name + '<b> (' + data.response.items[i].activity + ') </b></li>'
    }
    
    htmlGroups += '</ul>'
    
    $('#top5Subs').html(htmlGroups);
		
    
    
})}
