// Image Preloading
function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		var img4 = new Image();
		var img5 = new Image();
		var img6 = new Image();
		var img7 = new Image();
		var img8 = new Image();
		var img9 = new Image();
		var img10 = new Image();
		var img11 = new Image();
		var img12 = new Image();
		var img13 = new Image();
		var img14 = new Image();
		var img15 = new Image();
		var img16 = new Image();
		var img17 = new Image();
		var img18 = new Image();
		var img19 = new Image();
		var img20 = new Image();
		var img21 = new Image();
		var img22 = new Image();
		var img23 = new Image();

		img1.src = "images/about.jpg";
		img2.src = "images/background1.jpeg";
		img3.src = "images/background2.jpeg";
        img4.src = "images/background3.jpeg";
        img5.src = "images/BBB%20Logo.png";
        img6.src = "images/conditioner.png";
        img7.src = "images/gallery_01.jpg";
        img8.src = "images/gallery_02.jpg";
        img9.src = "images/gallery_03.jpg";
        img10.src = "images/gallery_04.jpg";
        img11.src = "images/gallery_05.jpg";
        img12.src = "images/gallery_06.jpg";
        img13.src = "images/gallery_07.jpg";
        img14.src = "images/gallery_08.jpg";
        img15.src = "images/gallery_09.jpg";
        img16.src = "images/gallery_10.jpg";
        img17.src = "images/gallery_11.jpg";
        img18.src = "images/Icon%20Green.png";
        img19.src = "images/Icon%20White.png";
        img20.src = "images/Logo%20Green.png";
        img21.src = "images/Logo%20White.png";
        img22.src = "images/Quality%20Guaranteed.png";
        img23.src = "images/shampoo.png";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);

// Enable scrollspy
$('body').scrollspy({target: "#navbar-scrollspy", offset: 77});

// Smooth scrolling for navbar links
$(".nav-link").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
        scrollTop: ($(hash).offset().top)
    }, 800, function() {
        window.location.hash = hash;
    });
});

// Enlarge down arrow in jumbotron on hover
$("#link-down-icon").hover(function() {
    $("#link-down-icon").transition({scale: 1.3});
}, function() {
    $("#link-down-icon").transition({scale: 1});
});

// Smooth scrolling for down arrow in jumbotron
$("#link-down-icon").click(function(e) {
    e.preventDefault();
    
    $('html, body').animate({
        scrollTop: $("#product").offset().top
    }, 800);
});


$(window).resize(function() {
    fixProduct();
    menuSizing();
});

$("#product-accordion-card-1").on('shown.bs.collapse', function () {
    fixProduct();
    $(window).trigger('resize.px.parallax');
});
$("#product-accordion-card-2").on('shown.bs.collapse', function () {
    fixProduct();
    $(window).trigger('resize.px.parallax');
});
$("#product-accordion-card-3").on('shown.bs.collapse', function () {
    fixProduct();
    $(window).trigger('resize.px.parallax');
});
$("#product-accordion-card-1").on('hidden.bs.collapse', function () {
    fixProduct();
    $(window).trigger('resize.px.parallax');
});
$("#product-accordion-card-2").on('hidden.bs.collapse', function () {
    fixProduct();
    $(window).trigger('resize.px.parallax');
});
$("#product-accordion-card-3").on('hidden.bs.collapse', function () {
    fixProduct();
    $(window).trigger('resize.px.parallax');
});

function fixProduct() {
    // Resize product div (accordian overflows on small/medium sized screen)
    if ($(window).width() > 575) {
        if (($("#product-title").height() + $("#product-accordion-card-1").height() + $("#product-accordion-card-2").height() + $("#product-accordion-card-3").height()) > 400)
            $("#product").height($("#product-title").height() + $("#product-accordion-card-1").height() + $("#product-accordion-card-2").height() + $("#product-accordion-card-3").height());
        else
            $("#product").height(520);
    } else
        $("#product").height($("#product-title").height() + $(".product-img").height() + $("#product-accordion-card-1").height() + $("#product-accordion-card-2").height() + $("#product-accordion-card-3").height());
    
    // Make product images smaller for extra-small screens
    if ($(window).width() < 330)
        $(".product-img").height(200);
    else
        $(".product-img").height(400);
    
    // Make titles smaller for extra-small screens
    if ($(window).width() < 330)
        $(".title-text").css("font-size", 30);
    else
        $(".title-text").css("font-size", 50);
}

function menuSizing() {
    if ($(window).width() > 767) {
        $("#navbar-section-list").css("padding-left", (($("#navbar-scrollspy").width() / 2) - ($("#navbar-section-list").width() / 2) - $(".navbar-brand").width()));
        $("#navbar-section-list").css("padding-right", (($("#navbar-scrollspy").width() / 2) - ($("#navbar-section-list").width() / 2) - $("#navbar-button").width()));
        
        if ($(window).width() - 60 != $("#navbar-scrollspy").width()) {
            $("#navbar-section-list").css("padding-left", parseFloat($("#navbar-section-list").css("padding-left")) - 30);
            $("#navbar-section-list").css("padding-right", parseFloat($("#navbar-section-list").css("padding-right")) - 30);
        }
    }
}

// Enable gallery
$(document).ready(function() {
    fixProduct();
    menuSizing();
    
    $('#gallery-carousel').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            // Shows 3 images at a time for large screens, 2 for medium, and 1 for small/mobile (and without dots at bottom for small/mobile)
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]
    });
});

// Enable popovers
$(function () {
  $('[data-toggle="popover"]').popover()
});

// Collapse menu on section click
$(".nav-link").click(function() {
    $('#collapsingNavbar').collapse('toggle');
});