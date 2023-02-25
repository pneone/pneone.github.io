document.addEventListener('DOMContentLoaded', ()=>{

    const openBtn = document.querySelector('#open'),
          closeBtn = document.querySelector('#close')
          navbarLinks = document.querySelector('.navbar__links');

    openBtn.classList.add('show');

    function openNavbarLinks(){
        openBtn.classList.toggle('show');
        closeBtn.classList.toggle('show');
        navbarLinks.classList.toggle('links-open');
    }

    openBtn.addEventListener('click', () => {
        openNavbarLinks();
    });

    closeBtn.addEventListener('click', () => {
        openNavbarLinks();
    });




    //Swiper

    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },

        breakpoints: {
            1024: {
              slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
              },
          },
      });



    let wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
})