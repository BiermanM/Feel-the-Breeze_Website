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

$(window).resize(function() {
    if ($(window).width() < 768)
        $("#about-img").height("300px");
});

$(function () {
  $('[data-toggle="popover"]').popover()
})


