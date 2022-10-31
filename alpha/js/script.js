document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header'),
          burgerBtn = header.querySelector('.burger-btn'),
          headerNavbar = header.querySelector('.container');

    burgerBtn.addEventListener('click', () => {
        headerNavbar.classList.toggle('open');
    })

})