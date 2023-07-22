// page scroll button show and header bg change
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#pageScrolled").addClass('show');
            $("body").addClass("header_scrolled");
        } else {
            $("#pageScrolled").removeClass('show');
            $("body").removeClass("header_scrolled");
        }
    });
    $("#pageScrolled").click(function () {
        $("html, body").animate({
            scrollTop: 0
        });
    });
    $('.faq_sec .faq_ques').click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().removeClass('active');
    });
});

// ===== client slider =======
var swiper = new Swiper(".client_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    },
});

// Counter =============
const counterUp = window.counterUp.default

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 1000,
                delay: 16,
            })
            el.classList.add('is-visible');
        }
    })
}

const IO = new IntersectionObserver(callback, { threshold: 0 })

const el = document.querySelector('#partner');
const el1 = document.querySelector('#teams');
const el2 = document.querySelector('#happyClient');
const el3 = document.querySelector('#serviced');

IO.observe(el);
IO.observe(el1);
IO.observe(el2);
IO.observe(el3);

// ===== client slider end =======