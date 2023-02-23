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


    //dropdowns

    const dropdownBtn = document.querySelectorAll('.dropdown-btn');

    dropdownBtn.forEach(item => {
        item.addEventListener('click', ()=>{
            item.parentNode.parentNode.classList.toggle('open');
        })
    })


    const contactBtn = document.querySelectorAll('.btn-submit');
    

    const content = document.createElement('div');
    content.className = 'contact-modal section';
    content.innerHTML = '<div class="content"><h2><span>Get</span> Your Quote</h2><form action="" class="form"><div class="form__inputs"><input type="name" placeholder="Your Name*" required><input type="tel" placeholder="Phone Number*" required><input type="mail" placeholder="Email*" required><input type="text" placeholder="Your specialty" ></div><input type="submit" class="btn input-submit" value="Submit"></form><button class="close-modal"><img src="img/close-modal.svg" alt=""></button></div>';
    document.body.prepend(content);

    const modal = document.querySelector('.contact-modal');
    contactBtn.forEach(item => {


        item.addEventListener('click', ()=>{

            modal.classList.add('open-modal');

            const closeBtn = document.querySelector('.close-modal');

            closeBtn.addEventListener('click', ()=>{
                modal.classList.remove('open-modal');

            })
            
        })

    });

    const navBtns = document.querySelector('.navbar-btns');
    navBtns.querySelectorAll('.btn').forEach(item =>{
        item.addEventListener('click', ()=>{
            modal.classList.add('open-modal');
    
            const closeBtn = document.querySelector('.close-modal');
    
            closeBtn.addEventListener('click', ()=>{
                modal.classList.remove('open-modal');
    
            })
    })
    })

    document.querySelector('.footer').querySelector('.btn').addEventListener('click', ()=>{
        modal.classList.add('open-modal');

        const closeBtn = document.querySelector('.close-modal');

        closeBtn.addEventListener('click', ()=>{
            modal.classList.remove('open-modal');

        })
    })






})