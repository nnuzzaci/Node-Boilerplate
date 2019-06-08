
//
var socket = io();

//
$(document).ready(function(){ console.log( 'mobile.js' );

	// iOS Detection
	var iOS = !!navigator.platform.match(/iPhone|iPod|iPad/);

	// Detects if device is in standalone mode
	var isInStandaloneMode = (function(){
		return ('standalone' in window.navigator) && (window.navigator.standalone);
	})();

	console.log( 'iOs = '+iOS );
	console.log( 'isInStandaloneMode =' + isInStandaloneMode );

	//
	socket.on('changeBackground', function(color){
		console.log( 'changeBackground: '+color );
		$('body').css('background', color);
	});

	//
	$(document).on( 'click', 'a', function( event ){
		event.preventDefault();
		socket.emit('changeBackground');
	});

});
