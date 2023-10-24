/*<!-- Hamburger menu -->*/
$(document).ready(function() {
	$('.header-burger').click(function(event) {
		$('.header-burger, .main-menu').toggleClass('active');
	});
});