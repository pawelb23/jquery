'use strict';

$(function () {
    //    $('#first').hide(5000).show(5000);
    //    $('#first').fadeOut(2000).fadeIn(2000);
    //    $('#first').slideUp(2000).slideDown(2000);

    function callbackZwrotny() {
        $('#first').animate({
            'font-size': '24px',
            'margin-left': '500px',
        }, 500);

        console.log('Animacja jest super !:)');
    };
    callbackZwrotny();

    $('#first').animate({
        'font-size': '54px',
        'margin-left': '0px'
    }, 3000, callbackZwrotny);
});
