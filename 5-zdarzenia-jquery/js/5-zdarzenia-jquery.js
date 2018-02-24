'use strict';

$(function () {
    $('#first').mouseenter(function () {
        $('#second').toggle(function () {
            $(this).css({
                'background-color': 'yellow',
                'text-decoration': 'underline'}); //ukrywa jeden nagłówek i zaznacza jego kolor na żółto po odkryciu oraz podkreśla go
            });
        });
    
    $('#first').on({
        'mouseover' : function() {
            $(this).css('background-color', 'yellow');            
        },
        'mouseleave' : function() {
            $(this).css('background-color', 'green');
        },
        'dblclick' : function() {
            console.log('click click')
        }
    });
});