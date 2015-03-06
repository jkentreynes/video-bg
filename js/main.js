$( document ).ready( function () {

	var vid         = $( '#bgvid' );
	var pauseButton = $( '#polina button' );

	function vidFade() {
		vid.addClass( 'stopfade' );
	}

	vid.on( 'ended', function() {
		// only functional if 'loop' is removed
		vid.get(0).play();
		// to capture IE10
		vidFade();
	} );

	pauseButton.on( 'click', function () {
		vid.toggleClass( 'stopfade' );
		if ( vid.get(0).paused ) {
			vid.get(0).play();
			pauseButton.text ( 'Pause' );
		} else {
			vid.get(0).pause();
			pauseButton.text ( 'Paused' );
		}
	} )

});

