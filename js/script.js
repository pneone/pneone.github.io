$(document).ready(function(){
    $('.reviews_carusel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,   
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1  
                }
            }
        ]
    });
    var z = 0;
    $('.questtions_list_item').on('click', function() {
        
        if($(this)){
            $(this).addClass('active')
            z++
        }        
        else if($(this,'active')){
            $(this).removeClass('active')
            z--
        }  

        
    });
    if(z == 2){
        $('.questtions').on('click', function(){
            $('.questtions_list_item').toggleClass('active');
        });
    }
    new WOW().init();
});

