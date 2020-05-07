/*DNT*/$(document).ready(function() {/*DNT*/

/*STEP generate game field via jQuery*/
/*generate outer grid*/
for (var i = 0; i < 9; i++) {
  $('#game').append('<div class="gridbox"></div>');
};
 /*generate innner grids*/
for (var i = 0; i < 9; i++) {
  $('.gridbox').append('<div class="box"></div>');
};

/*STEP apply color by player*/
/*player 1 = click - player 2 = double click*/
/*BB HAS ISSUES */

$('.box').click(function() {
  $(this).addClass('blue');
})

$('.box').dblclick(function() {
  $(this).addClass('red');
  $(this).removeClass('blue');
})



})/*DO NOT DELETE closing doc.ready*/
