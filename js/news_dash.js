function resizeTwitter() {	
	var twitHeight = $('#widget-faq').height()+$('#widget-links').height()-6;	
	var sizeDiff = $('#widget-twitter iframe').height() - twitHeight;
	if ( sizeDiff < (-1*10) ) {
		$('#widget-twitter iframe').height(twitHeight);
		$('#grid .widgetCont#widget-news').height($('#grid .widgetCont#widget-links').height()-10)
		$('#grid .widgetCont#widget-status').height($('#grid .widgetCont#widget-faq').height()-10)
	} else {
		clearInterval(gridHeight);
	}
}

if (window.innerWidth > 599) {
	var gridHeight = setInterval( "resizeTwitter()", 2000 );
}

window.addEventListener('resize', function(event){
	if (window.innerWidth > 599) {
	  resizeTwitter();
	}
});
