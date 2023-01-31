$( document ).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
