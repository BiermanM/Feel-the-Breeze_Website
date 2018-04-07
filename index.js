$('body').scrollspy({target: "#navbar-scrollspy", offset: 77});

$(".nav-link").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: ($(hash).offset().top)
    }, 800, function(){
        // when done, add hash to url (default click behaviour)
        window.location.hash = hash;
    });
});

$("#link-down-icon").hover(function() {
    $("#link-down-icon").transition({scale: 1.3});
}, function() {
    $("#link-down-icon").transition({scale: 1});
});

$("#link-down-icon").click(function(e) {
    e.preventDefault();
    
    $('html, body').animate({
        scrollTop: $("#product").offset().top
    }, 800);
});

$(document).ready(function() {
    $('#gallery-carousel').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
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

$(function () {
  $('[data-toggle="popover"]').popover()
})


