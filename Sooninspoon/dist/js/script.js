$(document).ready(function(){
    
    function windowSize(){
        if ($(window).width() <= '430'){
            $('.examples_cards').slick({
                slidesToShow: 1,  
                arrows: false
            });
            $('.reviews_carusel').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,   
                autoplay: false,
                autoplaySpeed: 4000,
                arrows: false
            });
            $('.nav_link').on('click', function() {
                $('.nav').removeClass('nav_active');
                $('.burger').removeClass('burger_active');
            });
            $('.burger').on('click', function() {
        
                $('.burger').toggleClass('burger_active');
                if($('.burger').hasClass('burger_active')){
                    $('nav').addClass('nav_active');
                }
                
                else{
                    $('nav').removeClass('nav_active');
                }
                
            });
        } 
        else if ($(window).width() <= '1200'){
            
            $('.reviews_carusel').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,   
                autoplay: false,
                autoplaySpeed: 4000,
                arrows: false
            });
            
            
        } 
        else if ($(window).width() <= '905'){
            
            $('.nav_link').on('click', function() {
                $('.nav').removeClass('nav_active');
                $('.burger').removeClass('burger_active');
            });
            $('.burger').on('click', function() {
        
                $('.burger').toggleClass('burger_active');
                if($('.burger').hasClass('burger_active')){
                    $('.nav').addClass('nav_active');
                }
                
                else{
                    $('.nav').removeClass('nav_active');
                }
                
            });
            
            
        } 
        else{
            $('.reviews_carusel').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,   
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: false
            });
        }
    }
    $(window).on('load resize',windowSize);
    
    
    $('.questtions_list_item .click').on('click', function() {
        
        
        if($(this).hasClass('active')){
             
            $(this).removeClass('active');
        }
        else{
            $('.questtions_list_item .click').removeClass('active');
            $(this).addClass('active');
            
        }
        
    });
    $('.aplication_button').on('click', function() {
        
        $('.application_true').addClass('active');
        if($('.application_true').hasClass('active')){
            $('.application_true_plus').on('click', function() {
                $('.application_true').removeClass('active');
            });
            
        }
        
        
    });
    
    
    new WOW().init();
});

