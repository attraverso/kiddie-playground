/*DNT*/$(document).ready(function() {/*DNT*/

/*generate outer grid*/
for (var i = 0; i < 9; i++) {
  $('#game').prepend('<div class="box"><div class="overlay gray-overlay"></div></div>');
};

/*generate innner grids*/
for (var i = 0; i < 9; i++) {
 $('.box').prepend('<div class="cell"></div>');
};

/*clicking on player1 button gives class current to player 1*/
$('.player1').click(function() {
  $(this).addClass('current');
});

/*clicking on player2 button gives class current to player 2*/
$('.player2').click(function() {
  $(this).addClass('current');
});

$('.btn-info').click(function() {
  $('#container').addClass('active');
  $('.info').addClass('active');
});

$('.info-close').click(function() {
  $('#container').removeClass('active');
  $('.info').removeClass('active');
});

/** GLOBAL VARIABLES for winning conditions **/
var blueMoves = [
  [],[],[],[],[],[],[],[],[]
];
var redMoves = [
  [],[],[],[],[],[],[],[],[]
];
var blueGlobal = [];
var redGlobal = [];
var blueWins;
var redWins;

/*alert when clicking on a previously won box*/
// if(($(this).siblings('.overlay').hasClass('blue-overlay'))||($(this).siblings('.overlay').hasClass('red-overlay'))) {
//      alert('This box was already won!')

/*when clicking on whichever cell*/
$('.cell').click(function() {

  /*if the cell has already been claimed*/
  if ($(this).hasClass('blue')||$(this).hasClass('red')){
    /*display alert*/
    alert('Someone has already claimed this cell!');
    /*otherwise*/
  } else {
    /*grab current cell index*/
    var cellIndex = $(this).index();
    console.log('cell index: ' + cellIndex);
    /*grab current box index*/
    var boxIndex = $(this).parent().index();
    console.log('box index: ' + boxIndex);
    /*if player1 is active, the current cell becomes blue*/
    if ($('.player1').hasClass('current')) {
      $(this).addClass('blue');
      var currentArray = blueMoves[boxIndex];
      console.log(currentArray);
      /*when not already present, add cell number to blue cells array*/
      if (!currentArray.includes(cellIndex)) {
        blueMoves[boxIndex].push(cellIndex);
        console.log(blueMoves[boxIndex]);
        /*check whether this move wins the box*/
        blueWins = isWinner(currentArray);
        if (blueWins == true) {
          /*block box with blue overlay*/
          $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
          blueGlobal.push(boxIndex);
          blueWins = isWinner(blueGlobal);
          if (blueWins == true) {
            youWinGame(blueWins);
          }
          /*announce winner*/
          console.log('blue wins');
        }
      }

      /*switch player after move*/
      $('.player1').toggleClass('current');
      $('.player2').toggleClass('current');

    /*if player2 is active, the current cell becomes red*/
    } else if ($('.player2').hasClass('current')) {
      $(this).addClass('red');
      var currentArray = redMoves[boxIndex];
      console.log(currentArray);
      /*when not already present, add cell number to red cells array*/
      if (!currentArray.includes(cellIndex)) {
        redMoves[boxIndex].push(cellIndex);
        console.log(redMoves[boxIndex]);
        /*check whether this move wins the box*/
        redWins = isWinner(currentArray);
        if (redWins == true) {
          /*block box with red overlay*/
          $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
          redGlobal.push(boxIndex);
          redWins = isWinner(redGlobal);
          if (redWins == true) {
            youWinGame(redWins);
          }
          /*announce winner*/
          console.log('red wins');
        }
      }

      /*switch player after move*/
      $('.player1').toggleClass('current');
      $('.player2').toggleClass('current');

    /*if no player is active, starting player has not been picked => display alert*/
    } else {
      alert('Choose starting player.')
    }
  }

  if (($('.player1').hasClass('current') || $('.player2').hasClass('current')) && (!$(this).hasClass('blue') || !$(this).hasClass('red'))) {
    var cellIndex = $(this).index();
    /*if the cell you play redirects to a box that was already won, all boxes still up for grabs become playable*/
    if ($('.overlay').eq(cellIndex).hasClass('blue-overlay')||$('.overlay').eq(cellIndex).hasClass('red-overlay')) {
      $('.overlay.gray-overlay:not(.blue-overlay):not(.red-overlay)').hide();
    } else {
      /*make it so that when you pick a box, the only playable gridbox for the next move is the one matching the box's index*/
      $('.overlay').show();
      $('.overlay').eq(cellIndex).hide();
    }
  }
})

/* * FUNCTIONS * */

function isWinner(array) {
  if((array.includes(0))&&(array.includes(1))&&(array.includes(2)) ||
  (array.includes(3))&&(array.includes(4))&&(array.includes(5)) ||
  (array.includes(6))&&(array.includes(7))&&(array.includes(8)) ||
  (array.includes(0))&&(array.includes(3))&&(array.includes(6)) ||
  (array.includes(1))&&(array.includes(4))&&(array.includes(7)) ||
  (array.includes(2))&&(array.includes(5))&&(array.includes(8)) ||
  (array.includes(0))&&(array.includes(4))&&(array.includes(8)) ||
  (array.includes(2))&&(array.includes(4))&&(array.includes(6))) {
    return true;
  } else {
    return false;
  }
}

function youWinGame(colorWins) {
  if (colorWins == redWins) {
    console.log('RED WINS GLOBAL');
    $('.game-overlay').addClass('red-overlay').show();
    /*announce winner*/
    $('#winner h1').text('Red wins').show();
    $('#winner').show();
  } else if (colorWins == blueWins) {
    console.log('RED WINS GLOBAL');
    $('.game-overlay').addClass('blue-overlay').show();
    /*announce winner*/
    $('#winner h1').text('Blue wins').show();
    $('#winner').show();
  }
}

});/*DNT*/
