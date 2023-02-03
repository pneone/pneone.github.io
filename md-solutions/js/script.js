addEventListener('DOMContentLoaded', () => {

    const openBtn = document.querySelector('#open'),
          closeBtn = document.querySelector('#close')
          navbarLinks = document.querySelector('.navbar__links');

    openBtn.classList.add('show');

    function openNavbarLinks(){
        openBtn.classList.toggle('show');
        closeBtn.classList.toggle('show');
        navbarLinks.classList.toggle('open');
    }

    openBtn.addEventListener('click', () => {
        openNavbarLinks();
    });

    closeBtn.addEventListener('click', () => {
        openNavbarLinks();
    });

    const progress = document.querySelectorAll('.progressbar-line');

    progress.forEach((item)=>{
        item.style.width = item.dataset.progress + '%';
    })

})