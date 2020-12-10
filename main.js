$(document).ready(function() {

  window.onbeforeunload = function () {
   window.scrollTo(0,0);
};

    $(window).scroll( function(){
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1', 'padding-top': '100px', 'font-size':'100px'},500);
            }
        });
    });
})
