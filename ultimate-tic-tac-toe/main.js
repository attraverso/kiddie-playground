/*DNT*/$(document).ready(function() {/*DNT*/

/*STEP generate game field via jQuery*/
/*generate outer grid*/
for (var i = 0; i < 9; i++) {
  $('#game').append('<div class="gridbox"><div class="overlay gray-overlay"></div></div>');
};
 /*generate innner grids*/
for (var i = 0; i < 9; i++) {
  $('.gridbox').append('<div class="box"></div>');
};

/*STEP apply color by player*/

/*clicking on player1 gives class current to player 1 and removes it from player 2*/
$('.player1').click(function() {
  $('button').removeClass('current');
  $(this).addClass('current');
});

/*clicking on player2 gives class current to player 2 and removes it from player 1*/
$('.player2').click(function() {
  $('button').removeClass('current');
  $(this).addClass('current');
});

/*when clicking on whichever cell*/
$('.box').click(function() {
  /*if player1 is active, the cell becomes blue*/
  if ($('.player1').hasClass('current')) {
    $(this).addClass('blue');
    /*if player1 is active, the cell becomes red*/
  } else if ($('.player2').hasClass('current')) {
    $(this).addClass('red');
  }
  /*gather the cell's index inside the inner grid*/
  var boxIndex = $(this).index();
  console.log(boxIndex);
  $('.overlay').show();
  $('.overlay').eq(boxIndex - 1).hide();
});

//make it so that one can't overwrite the other

//make it so that when you pick a box, the only playable gridbox is the one corresponding








})/*DO NOT DELETE closing doc.ready*/



/*SCRAPPED CODE FOR REFERENCE*/

/*V1 : player 1 = click - player 2 = double click*/
/*BB HAS ISSUES
-double clicked boxes have both color classes
-player1 boxes can be overridden by a double click */
//
// $('.box').click(function() {
//   $(this).addClass('blue');
// })
//
// $('.box').dblclick(function() {
//   $(this).addClass('red');
//   $(this).removeClass('blue');
// })

/*V2 : almost there, but had to reverse the condition and function*/

// if ($('.player1').hasClass('current')) {
//   $('.player1').click(function() {
//     $(this).addClass('red');
//   })
// } else if ($('.player2').hasClass('current')) {
//   $('.box').click(function() {
//     $(this).addClass('red');
//   })
// };

/*V3 : USE OF 'DATA'- failed, shall investigate in the future*/

// $('.player2').click(function() {
//   $(this).data('clicked', true);
//   $(this).prev().data('clicked', false);
// })
//
// if ($('.player2').data('clicked')) {
//   $('.player2').addclass('blue');
// }

/*V4 : IDEK. Lessons learned: functions just do NOT work that way (and they can't easily return multiple values)*/

// var player1 = true;
// var player2 = false;
//
// $('.player1').click(function() {
//   player1 = true;
//   player2 = false;
//   console.log('player 1 status = ' + player1);
//   console.log('player 2 status = ' + player2);
//   return player1;
//   return player2;
// });
//
// $('.player2').click(function() {
//   player1 = false;
//   player2 = true;
//   console.log('player 1 status = ' + player1);
//   console.log('player 2 status = ' + player2);
//   return player1;
//   return player2;
// });

// if (player1 == true) {
//   $('.box').click(function() {
//     $(this).addClass('blue');
//   })
// } else {
//   $('.box').click(function() {
//     $(this).addClass('red');
//   })
// }
