$(document).ready(function(){
    $('.burger').on('click', function() {
        
        $('.burger').toggleClass('burger_active');
        if($('.burger').hasClass('burger_active')){
            $('.content').addClass('content_active');
            $('nav').addClass('nav_active');
        }
        
        else{
            $('.content').removeClass('content_active');
            $('nav').removeClass('nav_active');
        }
        
    });
    
    // function windowSize(){
    //     if ($(window).width() <= '430'){
    //         $('.examples_cards').slick({
    //             slidesToShow: 1,  
    //             arrows: false
    //         });
    //         $('.reviews_carusel').slick({
    //             infinite: true,
    //             slidesToShow: 1,
    //             slidesToScroll: 1,   
    //             autoplay: false,
    //             autoplaySpeed: 4000,
    //             arrows: false
    //         });
            
    //     } 
    //     else if ($(window).width() <= '1200'){
            
    //         $('.reviews_carusel').slick({
    //             infinite: true,
    //             slidesToShow: 3,
    //             slidesToScroll: 1,   
    //             autoplay: false,
    //             autoplaySpeed: 4000,
    //             arrows: false
    //         });
            
            
    //     } 
    //     else if ($(window).width() <= '905'){
            
            
            
            
    //     } 
    //     else{
    //         $('.reviews_carusel').slick({
    //             infinite: true,
    //             slidesToShow: 4,
    //             slidesToScroll: 1,   
    //             autoplay: true,
    //             autoplaySpeed: 4000,
    //             arrows: false
    //         });
    //     }
    // }
    // $(window).on('load resize',windowSize);
    
    
    // $('.questtions_list_item .click').on('click', function() {
        
        
    //     if($(this).hasClass('active')){
             
    //         $(this).removeClass('active');
    //     }
    //     else{
    //         $('.questtions_list_item .click').removeClass('active');
    //         $(this).addClass('active');
            
    //     }
        
    // });
    // $('.aplication_button').on('click', function() {
        
    //     $('.application_true').addClass('active');
    //     if($('.application_true').hasClass('active')){
    //         $('.application_true_plus').on('click', function() {
    //             $('.application_true').removeClass('active');
    //         });
            
    //     }
        
        
    // });
    
    
    // new WOW().init();
});

