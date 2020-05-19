$(document).ready(function() {/*DNT*/

/** GENERATE GAMEFIELD **/
/*generate outer grid*/
for (var i = 0; i < 9; i++) {
  $('#game').prepend('<div class="box"><div class="overlay gray-overlay"></div></div>');
};

/*generate innner grids*/
for (var i = 0; i < 9; i++) {
 $('.box').prepend('<div class="cell"></div>');
};

/** SELECT PLAYER **/
/*clicking on player1 button gives class current to player 1*/
$('.player1').click(function() {
  $(this).addClass('current');
});

/*clicking on player2 button gives class current to player 2*/
$('.player2').click(function() {
  $(this).addClass('current');
});

/** SHOW/HIDE INFO **/
/*show info when clicking on instructions button*/
$('.btn-info').click(function() {
  $('#container').addClass('active');
  $('.info').addClass('active');
});

/*hide info when clicking on close button*/
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

/** GAME MECHANICS **/
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
      /*select the blue array which index matches the current box*/
      var currentArray = blueMoves[boxIndex];
      /*if not already present, add cell index to the array*/
      if (!currentArray.includes(cellIndex)) {
        blueMoves[boxIndex].push(cellIndex);
        console.log('current array = blue (index ' + boxIndex + ')');
        console.log(blueMoves[boxIndex]);
        /*check whether this move wins the box*/
        blueWins = isWinner(currentArray);
      }
      /*if blue wins*/
      if (blueWins == true) {
        console.log('BLUE WINS BOX');
        /*block box with blue overlay*/
        $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
        /*send box index to global array*/
        blueGlobal.push(boxIndex);
        /*check whether this box wins the game*/
        blueWins = isWinner(blueGlobal);
      }
      /* the following condition looks identical to the one before, but while the first time blueWins was the result of the isWinner function applied to the array of a box, now it contains the result of isWinner applied to the GLOBAL array*/
      /*if true, celebrate*/
      if (blueWins == true) {
        console.log('blue wins');
        youWin(blueWins);
      }

      /*switch player after move*/
      $('.player1').toggleClass('current');
      $('.player2').toggleClass('current');

    /*if player2 is active*/
    } else if ($('.player2').hasClass('current')) {
      /*the current cell becomes red*/
      $(this).addClass('red');
      /*select the red array which index matches the current box*/
      var currentArray = redMoves[boxIndex];
      /*if not already present, add cell index to the array*/
      if (!currentArray.includes(cellIndex)) {
        redMoves[boxIndex].push(cellIndex);
        console.log('current array = red (index ' + boxIndex + ')');
        console.log(redMoves[boxIndex]);
        /*check whether this move wins the box*/
        redWins = isWinner(currentArray);
      }
      /*if red wins*/
      if (redWins == true) {
        console.log('RED WINS BOX');
        /*block box with red overlay*/
        $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
        /*send box index to global array*/
        redGlobal.push(boxIndex);
        /*check whether this box wins the game*/
        redWins = isWinner(redGlobal);
      }
      /* the following condition looks identical to the one before, but while the first time blueWins was the result of the isWinner function applied to the array of a box, now it contains the result of isWinner applied to the GLOBAL array*/
      /*if true, celebrate*/
      if (redWins == true) {
        console.log('red wins')
        youWin(redWins);
      }

      /*switch player after move*/
      $('.player1').toggleClass('current');
      $('.player2').toggleClass('current');

    /*if no player is active, a starting player has not yet been picked => display alert*/
    } else {
      alert('Choose starting player.')
    }
  }

  /** DYNAMIC OVERLAYS **/
  /*if there's already an active player AND the cell you picked wasn't already claimed*/
  if (($('.player1').hasClass('current') || $('.player2').hasClass('current')) && (!$(this).hasClass('blue') || !$(this).hasClass('red'))) {
    var cellIndex = $(this).index();
    /*if the cell you play redirects to a box that was already won, all the boxes that are still up for grabs become playable*/
    if ($('.overlay').eq(cellIndex).hasClass('blue-overlay')||$('.overlay').eq(cellIndex).hasClass('red-overlay')) {
      $('.overlay.gray-overlay:not(.blue-overlay):not(.red-overlay)').hide();
    } else {
      /*make it so that when you pick a cell, the only playable box for the next move is the one matching the current cell's index*/
      $('.overlay').show();
      $('.overlay').eq(cellIndex).hide();
    }
  }
})

/* * FUNCTIONS * */

/*check whether the numbers in the array match winning conditions*/
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

/*if someone wins the game, block the gamefield and display winner banner*/
function youWin(colorWins) {
  if (colorWins == redWins) {
    console.log('RED WINS GAME');
    /*block the whole gamefield with red overlay*/
    $('.game-overlay').addClass('red-overlay').show();
    /*announce winner*/
    $('#winner h1').text('Red wins').show();
    $('#winner').show();
  } else if (colorWins == blueWins) {
    console.log('BLUE WINS GAME');
    /*block the whole gamefield with blue overlay*/
    $('.game-overlay').addClass('blue-overlay').show();
    /*announce winner*/
    $('#winner h1').text('Blue wins').show();
    $('#winner').show();
  }
}

});/*DNT*/
