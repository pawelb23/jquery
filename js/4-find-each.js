'use strict';

//funkcja document.ready() - wersja skrócona

$(function () {
    //    $('body').find('p.paragraf').css({'background-color': 'red'});

    var paragrafy = $('.paragraf');
    var pobranyPoEq = paragrafy.eq(1).css('color', 'red');
    paragrafy.eq(1).css('color', 'red');//pobieramyz tablicy jQuery
    
    paragrafy[0].style.backgroundColor = 'red' //--- to jest model DOM, nie jQuery 
    console.log(pobranyPoEq);

    console.log(paragrafy[0]);// odnosi się do modelu DOM
    console.log(paragrafy); //element jQuery
    console.log(paragrafy.eq(0));// pokazuje wyniki dla jQuery
    
    $('.paragraf').each(function(index, element) {
    if (index != 0) {
        $(this).css('background-color', 'green');
    }      
        console.log('Element: ' + element, index);
    });
});


