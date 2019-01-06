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
      $('nav').addClass('scrolling');
    } else {
      $('nav').removeClass('scrolling');
    }
  });

});

/**********************************/
/*************FUNZIONI*************/
/**********************************/
