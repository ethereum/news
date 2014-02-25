var twitFix = null;
var fixTwitter = 0;
function fixTwitStyle() {
	if(fixTwitter==0){
		var cssLink = document.createElement("link");
		cssLink.href = "./css/eth-twitter.css";  cssLink .rel = "stylesheet";  
		cssLink .type = "text/css";
		frames['twitter-widget-0'].document.body.appendChild(cssLink);
		fixTwitter = 1;		
	} else {
		clearInterval(twitFix);
	}
}
function resizeGrid() {	
	var viewHeight = window.innerHeight-20;
	$('#grid .widgetCont').not('#widget-twitter').height((viewHeight/2)-10);
	$('#widget-twitter').height(viewHeight).find('iframe').height(window.innerHeight-20);
	var twitHeight = $('#widget-faq').height()+$('#widget-links').height()+20;	
	var sizeDiff = $('#widget-twitter').height() - twitHeight;
	if ( sizeDiff >= (0) ) {
		fixTwitStyle();
		clearInterval(gridHeight);
	}
}

if (window.innerWidth > 599) {
	var gridHeight = setInterval( "resizeGrid()", 1500 );
} else {
	jQuery(document).ready(function($){
		var twitFrame = frames['twitter-widget-0'];
		if(!twitFrame) {
			twitFix = setInterval( "fixTwitStyle()", 1500 );
		}
	});
}

window.addEventListener('resize', function(event){
	if (window.innerWidth > 599) {
	  resizeGrid();
	} else {
		jQuery('.widgetCont').attr('style','');
	}
});
