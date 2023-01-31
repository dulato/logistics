$( document ).ready(function() {
    $('.language').on('click', function(){
        $('.ln_span').toggleClass('active');
        $('.ln_block').toggleClass('active');
    });
});
$('.menu_link').on('click', function(event){
    var checkBox = document.querySelector('#menu-toggle');
    checkBox.checked = false;
});

window.onscroll = function showHead() {
    let header = document.querySelector('.header_bottom_act');
    let logo = document.querySelector('.logo_type');
    let tops = document.querySelector('.body_top_');
    if (window.pageYOffset > 200) {
        header.classList.add('header_fixed');
        // logo.innerHTML = '<img src="img/logo_main.svg" alt="">';
        tops.classList.add('active');
    }
    else {
        header.classList.remove('header_fixed');
        // logo.innerHTML = '<img src="img/logo_second.svg" alt="">';
        tops.classList.remove('active');
    }
}


$('.event_span_1').on('click', function(event){
    $('.event_span_1').toggleClass('active');
    if($('.event_span_1').hasClass('active')){
        $('.event_question_text_1').css('display', 'block');
    }
    else{
        $('.event_question_text_1').css('display', 'none');
    }
});
$('.event_span_2').on('click', function(event){
    $('.event_span_2').toggleClass('active');
    if($('.event_span_2').hasClass('active')){
        $('.event_question_text_2').css('display', 'block');
    }
    else{
        $('.event_question_text_2').css('display', 'none');
    }
});
$('.event_span_3').on('click', function(event){
    $('.event_span_3').toggleClass('active');
    if($('.event_span_3').hasClass('active')){
        $('.event_question_text_3').css('display', 'block');
    }
    else{
        $('.event_question_text_3').css('display', 'none');
    }
});
$('.event_span_4').on('click', function(event){
    $('.event_span_4').toggleClass('active');
    if($('.event_span_4').hasClass('active')){
        $('.event_question_text_4').css('display', 'block');
    }
    else{
        $('.event_question_text_4').css('display', 'none');
    }
});


// window.onscroll = function() {
//     let topHead = document.querySelector('#header').offsetHeight;
//     let counter = document.querySelector('.main_6');
//     let countElem = counter.getBoundingClientRect().top;
//     let tops = countElem + topHead;
//     var span = document.querySelector('.main_6_content_digit_span');

//     if (window.pageYOffset >= tops) {
//         const counters = document.querySelectorAll('.counter');
//         span.classList.add('active');
//         counters.forEach((counter) => {
//             counter.innerHTML = "0";
//             const updateCounter = () => {
//                 const target = +counter.getAttribute("data-target");
//                 const c = +counter.innerText;
//                 if (c < target) {
//                     counter.innerText = c + 1;
//                     setTimeout(updateCounter, 100);
//                 } else{
//                     counter.innerText = target;
//                 }
//             }
//             updateCounter();
//         });
//     }
// }

jQuery(function() {
    var a = 0;
    $(window).scroll(function () {
        var oTop = $("#counter_block").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".counter").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-target");
                $({
                    countNum: $this.text()
                }).animate(
                    {
                        countNum: countTo
                    },

                    {
                        duration: 850,
                        easing: "swing",
                        step: function () {
                            //$this.text(Math.ceil(this.countNum));
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                        },
                        complete: function () {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                            //alert('finished');
                        }
                    }
                );
            });
            a = 1;
        }
    });


    // var stickyOffset = $('.main_6').offset().top;
    // $(window).scroll(function(){
    //     var scroll = $('.header_bottom').offset().top + 120;
    //     var span = document.querySelector('.main_6_content_digit_span');
    //     if (scroll >= stickyOffset) {
    //         const counters = document.querySelectorAll('.counter');
    //         span.classList.add('active');
    //         counters.forEach((counter) => {
    //             counter.innerHTML = "0";
    //             const updateCounter = () => {
    //                 const target = +counter.getAttribute("data-target");
    //                 const c = +counter.innerText;
    //                 if (c < target) {
    //                     counter.innerText = c + 1;
    //                     setTimeout(updateCounter, 100);
    //                 } else{
    //                     counter.innerText = target;
    //                 }
    //             };
    //             updateCounter();
    //         });
    //     }
    // });
});



// const counters = document.querySelectorAll('.counter');
// counters.forEach((counter) => {
//     counter.innerHTML = "0";
//     const updateCounter = () => {
//         const target = +counter.getAttribute("data-target");
//         const c = +counter.innerText;
//         if (c < target) {
//             counter.innerText = c + 1;
//             setTimeout(updateCounter, 30);
//         } else{
//             counter.innerText = target;
//         }
//     };
//     updateCounter();
// });

jQuery(function() {
    let element = document.getElementById('weight');
    let maskOptions = {
        mask: '0000000'
    };
    let mask = IMask(element, maskOptions);
});


jQuery(function() {
    let element = document.querySelector('.pupup_input');
    let maskOptions = {
        mask: '{+7} (000)-000-00-00'
    };
    let mask = IMask(element, maskOptions);
});



jQuery(function() {
    $('.popup_open').on('click', function () {
        $('.popup_fade').addClass('open');
    });
    $('.popup_close').on('click', function() {
        $('.popup_fade').removeClass('open');
    });
    $('.popup_fade').on('click', function(event) {
        if (!event.target.closest('.popup_content')) {
            $('.popup_fade').removeClass('open');
        }
    });
});

