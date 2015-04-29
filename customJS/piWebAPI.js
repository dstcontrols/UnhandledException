



var result = $.ajax("https://osiproghackuc2015.osisoft.com/piwebapi/streams/A0EjSJsJ258_0mQZSscfNuctQ7RK9lpfu5BGAywANOjGGlQ5BDuQVJa7VoiDkXYVGKomATUVSQ1VSWTAwMVxEQVRBQkFTRUhBQ0tHUk9VUDExXEFOQUtJTiBTT0xPXFJVTktFRVBFUnxFTEVWQVRJT04/summary", 
	{ 
		type : 'GET', 
		headers: { "Authorization" : "Basic " + btoa("osiproghack\\hackuser051:bO2rA53P2")
	}});


// var result = $.ajax('https://osiproghackuc2015.osisoft.com/piwebapi/streams/A0EjSJsJ258_0mQZSscfNuctQ7RK9lpfu5BGAywANOjGGlQ5BDuQVJa7VoiDkXYVGKomATUVSQ1VSWTAwMVxEQVRBQkFTRUhBQ0tHUk9VUDExXEFOQUtJTiBTT0xPXFJVTktFRVBFUnxFTEVWQVRJT04/summary', {
//     type: 'GET',
//     username: 'osiproghack\\hackuser051',
//     password: 'bO2rA53P2',
//     dataType: "jsonp",
//     contentType: "application/json; charset=utf-8",
//     xhrFields: {
//         withCredentials: false
//     }
// }).then(function (data) {
//     alert('success');
// }, function (xhr) {
//     alert('failure');
// });