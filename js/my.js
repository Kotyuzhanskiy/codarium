$(document).ready(function(){
	$('.header').height($(window).height());
})

//  popup menu
	var navFixed = $("nav.navbar.navbar-expand-lg.navbar-light"),
    	navHeight = $("nav.navbar.navbar-expand-lg.navbar-light").height();

	if ($(window).scrollTop()) {
		navFixed.addClass("fixed").removeClass("nofixed");
	};

	if (navFixed.length > 0) {
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
            
            
			if (scroll < navHeight + 50) {
				navFixed.addClass("nofixed");
				navFixed.removeClass("fixed hidden");
			};
			if (scroll > navHeight){
				navFixed.addClass("hidden");
			};
			if (scroll > navHeight + 50){
				navFixed.addClass("fixed");
				navFixed.removeClass("nofixed");
			};
            
		});
	};
