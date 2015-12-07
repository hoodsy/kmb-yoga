// Navbar Color Change
// ===================

var offset = $("#header").offset().top + 250;
$(document).scroll(function () {

	if ( $(this).scrollTop() > offset) {
		$('#header').css('background', 'rgba(117, 152, 91, 0.9)');
	} else {
		$('#header').css('background', 'transparent');
	}
})
