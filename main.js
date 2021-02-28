$(document).ready(function(){
    var vice = $('.delsi')
    vice.hide();

   
    $('.klikni a' ).click(function(){
        var klikni = $('.klikni a' )

        if(vice.is(':hidden')){
       klikni.text('Pro méně informací klikněte zde')
        vice.show()
    }
    else{
        klikni.text('Pro méně klikni zde')
        vice.hide();
    }
    });



    $('body section a').click(function(){
        $('html,body').animate({scrollTop: $('#omne').offset().top}, 500);
        return false;
    });

    $('.omne').click(function(){
        $('html,body').animate({scrollTop: $('#omne').offset().top}, 500);

    });

 $('.programy').click(function(){
        $('html,body').animate({scrollTop: $('#Programs').offset().top}, 500);

});
 $('.cotvorim').click(function(){
        $('html,body').animate({scrollTop: $('#Work').offset().top}, 500);


});
     $('.kontakt').click(function(){
        $('html,body').animate({scrollTop: $('#Contact').offset().top}, 500);
});
});

    
    