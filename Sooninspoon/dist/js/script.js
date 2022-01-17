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
    
});

