$( document ).ready(function() {
    $('.autos_slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        centerMode: false,
        rows: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
