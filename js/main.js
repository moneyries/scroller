$(function() {
  // Handler for .ready() called.
  
$(window).scroll(function(){

	if($(window).scrollTop() > 220) {
		$('.header-lg').hide();
		$('.header-sm').slideDown();
	} else {
		$('.header-lg').show();
		$('.header-sm').slideUp();
	}

});

});