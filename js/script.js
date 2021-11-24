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
              breakpoint: 426,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
        ]
    });
    function windowSize(){
        if ($(window).width() <= '430'){
            $('.examples_cards').slick({
                slidesToShow: 1,  
                arrows: false
            });
        } 
    }
    $(window).on('load resize',windowSize);
    
    
    $('.questtions_list_item').on('click', function() {
        
        
        if($(this).hasClass('active')){
             
            $(this).removeClass('active');
        }
        else{
            $('.questtions_list_item').removeClass('active');
            $(this).addClass('active');
            
        }
        
    });
    
    new WOW().init();
});

