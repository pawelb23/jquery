'use strict';


//console.log('czy działa');

//==============================

//Pierwszy sposób --- wymaga aby paragrafy były osadzone w div'ie
//
//$(function () {
//    $('button#gora').click(function () {
//    $('p:last-child').insertBefore('p:first-child');
//});
//    $('button#dol').click(function() {
//       $('p:first-child').insertAfter('p:last-child'); 
//    });
//});

//=============================

//Drugi sposób - paragrafy nie muszą (chociaż mogą bo też działa) być osadzone w div'ie

$(function manipulacjaParagrafami() {
    $('button#gora').click(function () {
    $('p:last').insertBefore('p:first');
});
    $('button#dol').click(function() {
       $('p:first').insertAfter('p:last'); 
    });
});

//w JQuery jest:
//insertAfter (wstaw po),
//insertBefore (wstaw przed)
//.clone() – która służy do kopiowania elementów strony
//.remove() – którą usuwamy elementy strony
//.replace() – którą zastępujemy elementy strony innymi, podanymi elementami
//replaceWith - sprawdzić to dokładnie (kiedy można tego używać)
//=============================

//$(document).ready(function(){
//    $("p:last-child").css("background-color", "yellow");w tej funkcji nie zadziała tylko przykład znaleziony w 3Wschools --- w taki sposób znajdujemy ostatnie dziecko danego div'a, podobnie jest z pierwszym dzieckiem (first-child).

//<BUTTON>
//Kiedy można, warto używać button'ów ponieważ środkowe napisy od razu się centrują w pionie i w poziomie.