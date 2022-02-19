let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
            select.classList.add('active_choice')
        currentText.innerText = text;
        select.classList.remove('is-active');

    }
    

};

//brief_submit

// function submit(){
//     document.querySelector('.brief_submit').addEventListener('click', submit);

// };

// function submit(){
//     console.log("submit");
// };

document.querySelector('.brief_submit').addEventListener("click",
function(e){
    document.querySelector(".submit").classList.add('active');
    document.querySelector(".brief_slider").classList.add('none');
    document.querySelector(".brief_pagination").style.display = "none";
}
);

select();

