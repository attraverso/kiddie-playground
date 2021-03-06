/*OLD VERSION WITHOUT NESTED ARRAYS AND OTHER LATER OPTIMIZATIONS AND CHECKS. Keep for the lulz of 500 lines of code.*/

/*DNT*/$(document).ready(function() {/*DNT*/

/*generate outer grid*/
for (var i = 0; i < 9; i++) {
  $('#game').append('<div class="box"><div class="overlay gray-overlay"></div></div>');
};

/*generate innner grids*/
for (var i = 0; i < 9; i++) {
 $('.box').append('<div class="cell"></div>');
};

/*clicking on player1 button gives class current to player 1*/
$('.player1').click(function() {
  $(this).addClass('current');
});

/*clicking on player2 button gives class current to player 2*/
$('.player2').click(function() {
  $(this).addClass('current');
});

/*GLOBAL VARIABLES for winning conditions*/
var blue1 = [];
var blue2 = [];
var blue3 = [];
var blue4 = [];
var blue5 = [];
var blue6 = [];
var blue7 = [];
var blue8 = [];
var blue9 = [];
var blueGlobal = [];
var red1 = [];
var red2 = [];
var red3 = [];
var red4 = [];
var red5 = [];
var red6 = [];
var red7 = [];
var red8 = [];
var red9 = [];
var redGlobal = [];
var blueWins;
var redWins;

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
    // console.log('cell index: ' + cellIndex);

    /*grab current box index*/
    var boxIndex = $(this).parent().index();
    // console.log('box index: ' + (boxIndex));

    /*if player1 is active, the current cell becomes blue*/
    if ($('.player1').hasClass('current')) {
      $(this).addClass('blue');

      if (boxIndex == 2) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue1.includes(cellIndex)) {
          blue1.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isWinner(blue1);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            blueGlobal.push(boxIndex - 1);
            blueWins = isWinner(blueGlobal);
            if (blueWins == true) {
              youWinGame(blueWins);
            }
            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 3) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue2.includes(cellIndex)) {
          blue2.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isWinner(blue2);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            blueGlobal.push(boxIndex - 1);
            blueWins = isWinner(blueGlobal);
            if (blueWins == true) {
              youWinGame(blueWins);
            }

            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 4) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue3.includes(cellIndex)) {
          blue3.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isWinner(blue3);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            blueGlobal.push(boxIndex - 1);
            blueWins = isWinner(blueGlobal);
            if (blueWins == true) {
              youWinGame(blueWins);
            }

            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 5) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue4.includes(cellIndex)) {
          blue4.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isWinner(blue4);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            blueGlobal.push(boxIndex - 1);
            blueWins = isWinner(blueGlobal);
            if (blueWins == true) {
              youWinGame(blueWins);
            }

            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 6) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue5.includes(cellIndex)) {
          blue5.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isWinner(blue5);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            blueGlobal.push(boxIndex - 1);
            blueWins = isWinner(blueGlobal);
            if (blueWins == true) {
              youWinGame(blueWins);
            }

            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 7) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue6.includes(cellIndex)) {
          blue6.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isWinner(blue6);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            blueGlobal.push(boxIndex - 1);
            blueWins = isWinner(blueGlobal);
            if (blueWins == true) {
              youWinGame(blueWins);
            }

            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 8) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue7.includes(cellIndex)) {
          blue7.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isWinner(blue7);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            blueGlobal.push(boxIndex - 1);
            blueWins = isWinner(blueGlobal);
            if (blueWins == true) {
              youWinGame(blueWins);
            }

            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 9) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue8.includes(cellIndex)) {
          blue8.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isWinner(blue8);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            blueGlobal.push(boxIndex - 1);
            blueWins = isWinner(blueGlobal);
            if (blueWins == true) {
              youWinGame(blueWins);
            }

            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 10) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue9.includes(cellIndex)) {
          blue9.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isWinner(blue9);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            blueGlobal.push(boxIndex - 1);
            blueWins = isWinner(blueGlobal);
            if (blueWins == true) {
              youWinGame(blueWins);
            }

            /*announce winner*/
            console.log('blue wins');
          }
        }
      }

      /*switch player after move*/
      $('.player1').toggleClass('current');
      $('.player2').toggleClass('current');

    /*if player2 is active, the current cell becomes red*/
    } else if ($('.player2').hasClass('current')) {
      $(this).addClass('red');

      /*when not already present, add cell number to red cells array*/
      if (boxIndex == 2) {
        /*when not already present, add cell number to red cells array*/
        if (!red1.includes(cellIndex)) {
          red1.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isWinner(red1);

          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            redGlobal.push(boxIndex - 1);
            console.log(redGlobal);
            redWins = isWinner(redGlobal);
            if (redWins == true) {
              youWinGame(redWins);
            }

            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 3) {
        /*when not already present, add cell number to red cells array*/
        if (!red2.includes(cellIndex)) {
          red2.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isWinner(red2);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            redGlobal.push(boxIndex - 1);
            console.log(redGlobal);
            redWins = isWinner(redGlobal);
            if (redWins == true) {
              youWinGame(redWins);
            }

            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 4) {
        /*when not already present, add cell number to red cells array*/
        if (!red3.includes(cellIndex)) {
          red3.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isWinner(red3);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            redGlobal.push(boxIndex - 1);
            console.log(redGlobal);
            redWins = isWinner(redGlobal);
            if (redWins == true) {
              youWinGame(redWins);
            }

            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 5) {
        /*when not already present, add cell number to red cells array*/
        if (!red4.includes(cellIndex)) {
          red4.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isWinner(red4);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            redGlobal.push(boxIndex - 1);
            console.log(redGlobal);
            redWins = isWinner(redGlobal);
            if (redWins == true) {
              youWinGame(redWins);
            }

            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 6) {
        /*when not already present, add cell number to red cells array*/
        if (!red5.includes(cellIndex)) {
          red5.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isWinner(red5);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            redGlobal.push(boxIndex - 1);
            console.log(redGlobal);
            redWins = isWinner(redGlobal);
            if (redWins == true) {
              youWinGame(redWins);
            }

            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 7) {
        /*when not already present, add cell number to red cells array*/
        if (!red6.includes(cellIndex)) {
          red6.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isWinner(red6);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            redGlobal.push(boxIndex - 1);
            console.log(redGlobal);
            redWins = isWinner(redGlobal);
            if (redWins == true) {
              youWinGame(redWins);
            }

            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 8) {
        /*when not already present, add cell number to red cells array*/
        if (!red7.includes(cellIndex)) {
          red7.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isWinner(red7);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            redGlobal.push(boxIndex -1);
            console.log(redGlobal);
            redWins = isWinner(redGlobal);
            if (redWins == true) {
              youWinGame(redWins);
            }

            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 9) {
        /*when not already present, add cell number to red cells array*/
        if (!red8.includes(cellIndex)) {
          red8.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isWinner(red8);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            redGlobal.push(boxIndex -1);
            console.log(redGlobal);
            redWins = isWinner(redGlobal);
            if (redWins == true) {
              youWinGame(redWins);
            }

            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 10) {
        /*when not already present, add cell number to red cells array*/
        if (!red9.includes(cellIndex)) {
          red9.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isWinner(red9);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            redGlobal.push(boxIndex -1);
            console.log(redGlobal);
            redWins = isWinner(redGlobal);
            if (redWins == true) {
              youWinGame(redWins);
            }

            /*announce winner*/
            console.log('red wins');

          }
        }
      }

      /*switch player after move*/
      $('.player2').toggleClass('current');
      $('.player1').toggleClass('current');

    /*if no player is active, starting player has not been picked => display alert*/
    } else {
      alert('Choose starting player.')
    }
  }

  var cellIndex = $(this).index();
  /*if the cell you play redirects to a box that was already won, all boxes still up for grabs become playable*/
  if ($('.overlay').eq(cellIndex -1).hasClass('blue-overlay')||$('.overlay').eq(cellIndex -1).hasClass('red-overlay')) {
    $('.overlay.gray-overlay:not(.blue-overlay):not(.red-overlay)').hide();
  } else {
    /*make it so that when you pick a box, the only playable gridbox for the next move is the one matching the box's index*/
    $('.overlay').show();
    $('.overlay').eq(cellIndex - 1).hide();
  }
})



/*FUNCTIONS*/


function isWinner(array) {

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


function youWinGame(colorWins) {
  if (colorWins == redWins) {
    console.log('RED WINS GLOBAL');
    $('.game-overlay').addClass('red-overlay').show();
    /*announce winner*/
    $('#winner h1').text('Player 2 wins').show();
    $('#winner').show();
  } else if (colorWins == blueWins) {
    console.log('RED WINS GLOBAL');
    $('.game-overlay').addClass('blue-overlay').show();
    /*announce winner*/
    $('#winner h1').text('Player 1 wins').show();
    $('#winner').show();
  }
}

});/*DNT*/
