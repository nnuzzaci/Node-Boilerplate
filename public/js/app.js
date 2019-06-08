
//
var socket = io();

//
$(document).ready(function(){ console.log( 'app.js' );

	//
	socket.on('connect', function() {
		console.log('connect' + socket.id);
	});

	//
	socket.on('changeBackground', function(color){
		console.log( 'changeBackground: '+color );
		$('body').css('background', color);
		$('.msg').text('background is now '+color);
	});


});
