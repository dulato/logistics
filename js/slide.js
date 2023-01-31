$( document ).ready(function() {
    $('.slider_1_slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        centerMode: false,
        rows: 1
    });
});
