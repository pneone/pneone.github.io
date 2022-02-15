
const swiper = new Swiper('.mySlider', {
    slidesPerView: 6.8,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        1024: {
            slidesPerView: 4.7,
        },
        1440: {
            slidesPerView: 3.6,
        },
    },
});


const obj = {
    1: 'Перезвоните Мне',
    2: 'Заполнить Бриф'
};
var swiperBrief = new Swiper(".slider", {
    direction: "horizontal",
    mousewheel: false,
    allowTouchMove: false,
    autoHeight: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + obj[(index + 1)] + "</span>";
    },
    },
});



