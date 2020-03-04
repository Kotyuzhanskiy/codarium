$(document).ready(function(){
	$('.header').height($(window).height() - $('nav.navbar.navbar-expand-lg.navbar-light').height());
})

// изменение размеров обложки при изменении экрана
$(window).resize(function() {
 	$(document).ready(function(){
	$('.header').height($(window).height() - $('nav.navbar.navbar-expand-lg.navbar-light').height());
	})
});

$(function() {
    $('#navbarSupportedContent ul li a').click(function() {
    	console.log('изменить класс')
        $('#navbarSupportedContent').removeClass("show");         

    });
});

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

// плавный переход по якорю со смещением
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
var navHeight = $("nav.navbar.navbar-expand-lg.navbar-light").height();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 20 - navHeight
    }, 1000);
});

// анимация иконок при наведении на телефон
$(document).ready(function(){
  $('div.col.card.contact.contact-phone').mouseenter(
	function() {
    $('div.col.card.contact.contact-phone i.fas').addClass('animated shake');
    $('div.col.card.contact.contact-phone i.fas').css({'color': '#007bff'});
    $('div.col.card.contact.contact-phone div.contact-popup > p').first().text("зателефонувати");
    }
  );
});

$(document).ready(function(){
  $('div.col.card.contact.contact-phone').mouseleave(
	function() {
    $('div.col.card.contact.contact-phone i.fas').removeClass('animated shake');
    $('div.col.card.contact.contact-phone i.fas').css({'color': '#00000080'})
    $('div.col.card.contact.contact-phone div.contact-popup > p').first().text("");
    }
  );
});

// анимация иконок при наведении на карту
$(document).ready(function(){
  $('div.col.card.contact.contact-map').mouseenter(
	function() {
    $('div.col.card.contact.contact-map i.fas').addClass('animated shake');
    $('div.col.card.contact.contact-map i.fas').css({'color': '#007bff'})
    $('div.col.card.contact.contact-map div.contact-popup > p').first().text("до карти");
    }
  );
});

$(document).ready(function(){
  $('div.col.card.contact.contact-map').mouseleave(
	function() {
    $('div.col.card.contact.contact-map i.fas').removeClass('animated shake');
    $('div.col.card.contact.contact-map i.fas').css({'color': '#00000080'})
    $('div.col.card.contact.contact-map div.contact-popup > p').first().text("");
    }
  );
});

// анимация иконок при наведении на email #00000080
$(document).ready(function(){
  $('div.col.card.contact.contact-mail').mouseenter(
	function() {
    $('div.col.card.contact.contact-mail i.fas').addClass('animated shake');
    $('div.col.card.contact.contact-mail i.fas').css({'color': '#007bff'})
    $('div.col.card.contact.contact-mail div.contact-popup > p').first().text("написати");
    }
  );
});

$(document).ready(function(){
  $('div.col.card.contact.contact-mail').mouseleave(
	function() {
    $('div.col.card.contact.contact-mail i.fas').removeClass('animated shake');
    $('div.col.card.contact.contact-mail i.fas').css({'color': '#00000080'})
    $('div.col.card.contact.contact-mail div.contact-popup > p').first().text("");
    }
  );
});