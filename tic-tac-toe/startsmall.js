/*DNT*/$(document).ready(function() {/*DNT*/
/*generate outer grid*/
for (var i = 0; i < 9; i++) {
  $('#game').append('<div class="box"><div class="overlay gray-overlay"></div></div>');
};

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

var blue0 = [];
var red0 = [];

/*when clicking on whichever box*/
$('.box').click(function() {
  var boxIndex = $(this).index();

  if ($('.player1').hasClass('current')) {
    if (!blue0.includes(boxIndex - 1)) {
      blue0.push(boxIndex - 1);
      console.log('array blu: ' + blue0);
    }
  } else if ($('.player2').hasClass('current')) {
    if (!red0.includes(boxIndex - 1)) {
      red0.push(boxIndex - 1);
      console.log('array rosso: ' + red0);
    }
  } else {
    alert('Choose starting player.')
  }

  console.log('box index = ' + boxIndex);
  /*if the box has already been claimed*/
  if($(this).hasClass('blue')||$(this).hasClass('red')) {
    /*display alert*/
    alert('box already played!');
    /*otherwise*/
  } else {
    /*if player1 is active, the cell becomes blue*/
    if ($('.player1').hasClass('current')) {
      $(this).addClass('blue');
      /*switch player after move*/
      $('.player1').toggleClass('current');
      $('.player2').toggleClass('current');
      /*if player1 is active, the cell becomes red*/
    } else if ($('.player2').hasClass('current')) {
      $(this).addClass('red');
      /*switch player after move*/
      $('.player2').toggleClass('current');
      $('.player1').toggleClass('current');
    }

    if((blue0.includes(1))&&(blue0.includes(2))&&(blue0.includes(3)) ||
    (blue0.includes(4))&&(blue0.includes(5))&&(blue0.includes(6)) ||
    (blue0.includes(7))&&(blue0.includes(8))&&(blue0.includes(9)) ||
    (blue0.includes(1))&&(blue0.includes(4))&&(blue0.includes(7)) ||
    (blue0.includes(2))&&(blue0.includes(5))&&(blue0.includes(8)) ||
    (blue0.includes(3))&&(blue0.includes(6))&&(blue0.includes(9)) ||
    (blue0.includes(1))&&(blue0.includes(5))&&(blue0.includes(9)) ||
    (blue0.includes(3))&&(blue0.includes(5))&&(blue0.includes(7))) {

      $('.game-overlay').addClass('blue-overlay').show();
      $('#winner h1').text('Player 1 wins').show();
      $('#winner').show();

    } else if((red0.includes(1))&&(red0.includes(2))&&(red0.includes(3)) ||
    (red0.includes(4))&&(red0.includes(5))&&(red0.includes(6)) ||
    (red0.includes(7))&&(red0.includes(8))&&(red0.includes(9)) ||
    (red0.includes(1))&&(red0.includes(4))&&(red0.includes(7)) ||
    (red0.includes(2))&&(red0.includes(5))&&(red0.includes(8)) ||
    (red0.includes(3))&&(red0.includes(6))&&(red0.includes(9)) ||
    (red0.includes(1))&&(red0.includes(5))&&(red0.includes(9)) ||
    (red0.includes(3))&&(red0.includes(5))&&(red0.includes(7))) {

      $('.game-overlay').addClass('red-overlay').show();
      $('#winner h1').text('Player 2 wins');
      $('#winner').show();
    }
  }
})

});/*DNT*/

/*FUNCTIONS*/
