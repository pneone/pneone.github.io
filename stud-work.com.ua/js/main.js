window.onload = function () {
    
    window.setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
    }, 1500);
  }

document.addEventListener('DOMContentLoaded', ()=>{

    const modal = document.querySelector('.modal'),
          closeModalBtn = modal.querySelector('.close-modal'),
          openModalBtns = document.querySelectorAll('.open-modal');

    openModalBtns.forEach(elem => {
        elem.addEventListener('click', ()=>{
            modal.classList.add('active-modal');
        })
    })

    closeModalBtn.addEventListener('click', ()=>{
        modal.classList.remove('active-modal');
    })

          
    

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


    var wow = new WOW(
        {
          mobile:       false,
        }
      );
      wow.init();
    
    
})