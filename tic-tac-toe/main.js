/*DNT*/$(document).ready(function() {/*DNT*/
/*generate outer grid*/
for (var i = 0; i < 9; i++) {
  $('#game').append('<div class="box"><div class="overlay gray-overlay"></div></div>');
};

/*clicking on player1 gives class current to player 1 and removes it from player 2*/
$('.player1').click(function() {
  $(this).addClass('current');
});

/*clicking on player2 gives class current to player 2 and removes it from player 1*/
$('.player2').click(function() {
  $(this).addClass('current');
});

/*GLOBAL VARIABLES for winning conditions*/
var blue0 = [];
var red0 = [];
var blueWins;
var redWins;

/*when clicking on whichever box*/
$('.box').click(function() {
  var boxIndex = $(this).index();
  /*if the box has already been claimed*/
  if($(this).hasClass('blue')||$(this).hasClass('red')) {
    /*display alert*/
    alert('Someone has already claimed this box!');
    /*otherwise*/
  } else {
    /*if player1 is active, the cell becomes blue*/
    if ($('.player1').hasClass('current')) {
      $(this).addClass('blue');
      /*switch player after move*/
      $('.player1').toggleClass('current');
      $('.player2').toggleClass('current');
      /*when not already present, add box number to blue box array*/
      if (!blue0.includes(boxIndex - 1)) {
        blue0.push(boxIndex - 1);
        /*check whether this move wins the game*/
        blueWins = isBlueWinner(blue0);
      }
      /*if player2 is active, the cell becomes red*/
    } else if ($('.player2').hasClass('current')) {
      $(this).addClass('red');
      /*switch player after move*/
      $('.player2').toggleClass('current');
      $('.player1').toggleClass('current');
      /*when not already present, add box number to red box array*/
      if (!red0.includes(boxIndex - 1)) {
        red0.push(boxIndex - 1);
        /*check whether this move wins the game*/
        redWins = isRedWinner(red0);
      }
      /*if no player is active, starting player has not been picked => display alert*/
    } else {
      alert('Choose starting player.')
    }

    /*if player 1 meets winning conditions*/
    if (blueWins == true) {
      /*block gamefield with blue overlay*/
      $('.game-overlay').addClass('blue-overlay').show();
      /*announce winner*/
      $('#winner h1').text('Player 1 wins').show();
      $('#winner').show();
      /*if player 2 meets winning conditions*/
    } else if (redWins == true) {
      /*block gamefield with red overlay*/
      $('.game-overlay').addClass('red-overlay').show();
      /*announce winner*/
      $('#winner h1').text('Player 2 wins').show();
      $('#winner').show();
    }
  }
})



/*FUNCTIONS*/

function isBlueWinner(array) {

  if((array.includes(1))&&(array.includes(2))&&(array.includes(3)) ||
  (array.includes(4))&&(array.includes(5))&&(array.includes(6)) ||
  (array.includes(7))&&(array.includes(8))&&(array.includes(9)) ||
  (array.includes(1))&&(array.includes(4))&&(array.includes(7)) ||
  (array.includes(2))&&(array.includes(5))&&(array.includes(8)) ||
  (array.includes(3))&&(array.includes(6))&&(array.includes(9)) ||
  (array.includes(1))&&(array.includes(5))&&(array.includes(9)) ||
  (array.includes(3))&&(array.includes(5))&&(array.includes(7))) {
    return true;
  } else {
    return false;
  }
}

function isRedWinner(array) {
  if((array.includes(1))&&(array.includes(2))&&(array.includes(3)) ||
  (array.includes(4))&&(array.includes(5))&&(array.includes(6)) ||
  (array.includes(7))&&(array.includes(8))&&(array.includes(9)) ||
  (array.includes(1))&&(array.includes(4))&&(array.includes(7)) ||
  (array.includes(2))&&(array.includes(5))&&(array.includes(8)) ||
  (array.includes(3))&&(array.includes(6))&&(array.includes(9)) ||
  (array.includes(1))&&(array.includes(5))&&(array.includes(9)) ||
  (array.includes(3))&&(array.includes(5))&&(array.includes(7))) {
    return true;
  } else {
    return false;
  }
}

});/*DNT*/
