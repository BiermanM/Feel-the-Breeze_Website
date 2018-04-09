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
});

function fixProduct() {
    // Resize product div (accordian overflows on small/medium sized screen)
    if ($(window).width() > 575)
        $("#product").height($("#product-title").height() + $("#product-accordion-card-1").height() + $("#product-accordion-card-2").height() + $("#product-accordion-card-3").height());
    else
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

// Enable gallery
$(document).ready(function() {
    fixProduct();
    
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
})


