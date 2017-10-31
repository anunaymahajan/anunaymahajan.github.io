$(document).click(function(e) {
	if (!$(e.target).is('a')) {
    	$('.collapse').collapse('hide');	    
    }
});
