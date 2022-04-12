
new WOW().init();
var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
});

var swiper = new Swiper(".already_mySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",

  },
});