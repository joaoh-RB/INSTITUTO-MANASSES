/* ---------------------------------------------------------------------------------------
*    Loading inicial
* --------------------------------------------------------------------------------------*/
$(window).on('load', function() {
    setTimeout(function(){
        $('.loading, .logo-loading, .loader').fadeOut();
        // $('.logo-loading, .icone-loading').animate({
        //     top: -200
        // }, 800);
        // $('.loading').animate({
        //     height: 0,
        //     bottom: 'auto',
        // }, 800);
        setTimeout(function(){
            $('body').removeClass('loadingaberto');
        }, 500);
    }, 500); // altere esse valor para 500 para remover o delay desnecessário
});
