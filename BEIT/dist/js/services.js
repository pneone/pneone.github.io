const obj = {
    1: 'WEB-разработка',
    2: 'Заказное ПО',
    3: 'Мобильные приложения',
    4: 'Разработка IT-стартапов',
    5: 'Поддержка'
};
var swiperHeader = new Swiper(".mySwiper", {
    direction: "horizontal",
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + obj[(index + 1)] + "</span>";
    },
    },
});

const swiperPort = new Swiper('.swiper_portfolio', {
    
    slidesPerView: 1,
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        },
    },
    
});
