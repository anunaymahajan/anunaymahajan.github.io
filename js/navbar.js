<<<<<<< HEAD
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});
=======
$(document).click(function(e) {
	if (!$(e.target).is('a')) {
    	$('.collapse').collapse('hide');	    
    }
});
>>>>>>> 7655d45cfe4ea479ff470c98c79edaa615219c1a
