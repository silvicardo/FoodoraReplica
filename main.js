/**********************************************/
/**********************************************/
/***** PROGETTO: FoodoraReplica - main.js **+**/
/**********************************************/
/**********************************************/
console.log('welcome to FoodoraReplica');

/*****************************/
/**********PROGRAMMA**********/
/*****************************/

$(document).ready(function () {

  //Gestione della navBar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('nav').addClass('scrolling').addClass('shadow');
    } else {
      $('nav').removeClass('scrolling').removeClass('shadow');
    }
  });

  //Gestione animazione placeholder
  $('.hero_section .searchBar input').focus(function () {
    $('.hero_section .searchBar .inputTitle').addClass('active');
  }).focusout(function () {
      $('.hero_section .searchBar .inputTitle').removeClass('active');
    });

});

/**********************************/
/*************FUNZIONI*************/
/**********************************/
