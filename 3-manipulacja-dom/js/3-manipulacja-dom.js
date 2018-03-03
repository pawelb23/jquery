'use strict';

$(function () {
    var pobierzText = $('#second');
    console.log(pobierzText.text());

    pobierzText.text('Zmieniony tekst');
    console.log(pobierzText.text());

    //    var body = $('body');
    //    console.log(body.text('<p>Nowy paragraf</p>')); --- taki zapis wyświetli jako stringa

    $('#first').html('<p>Nowy paragraf<p/>'); //--- taki zapis wyświetli jako stringa

    var przykladAppend = $('.paragrafnext');
    przykladAppend.append('Append text');

    var przykladAfter = $('.paragrafnext');
    przykladAfter.after('<span id=\"spanText">Atter text</span>');

    var przykladPrepend = $('.paragrafnext');
    przykladPrepend.prepend('Prepend text | ');

    var przykladBefore = $('.paragrafnext');
    przykladBefore.before('Before text | ');

    var emptyPrzyklad = $('.paragrafnext');
    emptyPrzyklad.empty();

    var removePrzyklad = $('.paragrafnext');
    removePrzyklad.remove();

    var zmienKolor = $('#first');
    zmienKolor.css('color', 'blue');//w tej chwili nie działa, gdyż kolejna linijka nadpisuje ten kod
    zmienKolor.css({
        'color': 'green',
        'font-size': '4em'//to zapis gdy jest więcej niż jedma właściwość do dodania
    });


    var inputValue = $('#inputValue');
    inputValue.val('To jest tekst :)');
    console.log(inputValue.val());

    var drugiNaglowek = $('#second');
    drugiNaglowek.addClass('blue'); //--- dodaje klasę o nazwie blue
    drugiNaglowek.removeClass('blue'); // usunięcie klasy blue
    
    drugiNaglowek.addClass('backgroundColor');    
});