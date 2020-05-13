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
var red1 = [];
var red2 = [];
var red3 = [];
var red4 = [];
var red5 = [];
var red6 = [];
var red7 = [];
var red8 = [];
var red9 = [];
var blueWins;
var redWins;

/*when clicking on whichever cell*/
$('.cell').click(function() {
  /*if the cell has already been claimed*/ /***CONDIZIONE SE IL BOX E' GIA' VINTO?? aggiungo classe in caso di vincita? selettore overlay?***/
  if($(this).hasClass('blue')||$(this).hasClass('red')) {
    /*display alert*/
    alert('Someone has already claimed this cell!');
    /*otherwise*/
  } else {

    /*grab current cell index*/
    var cellIndex = $(this).index();
    console.log('cell index: ' + cellIndex);

    /*grab current box index*/
    var boxIndex = $(this).parent().index();
    console.log('box index: ' + (boxIndex));

    /*if player1 is active, the current cell becomes blue*/
    if ($('.player1').hasClass('current')) {
      $(this).addClass('blue');

      if (boxIndex == 2) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue1.includes(cellIndex)) {
          blue2.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isBlueWinner(blue2);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 3) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue3.includes(cellIndex)) {
          blue3.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isBlueWinner(blue3);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 4) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue4.includes(cellIndex)) {
          blue4.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isBlueWinner(blue4);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 5) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue5.includes(cellIndex)) {
          blue5.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isBlueWinner(blue5);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 6) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue6.includes(cellIndex)) {
          blue6.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isBlueWinner(blue6);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 7) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue7.includes(cellIndex)) {
          blue7.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isBlueWinner(blue7);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 8) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue8.includes(cellIndex)) {
          blue8.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isBlueWinner(blue8);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 9) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue9.includes(cellIndex)) {
          blue9.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isBlueWinner(blue9);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
            /*announce winner*/
            console.log('blue wins');
          }
        }
      } else if (boxIndex == 10) {
        /*when not already present, add cell number to blue cells array*/
        if (!blue10.includes(cellIndex)) {
          blue10.push(cellIndex);
          /*check whether this move wins the box*/
          blueWins = isBlueWinner(blue10);
          if (blueWins == true) {
            /*block box with blue overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
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
          red2.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isRedWinner(red2);

          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 3) {
        /*when not already present, add cell number to red cells array*/
        if (!red3.includes(cellIndex)) {
          red3.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isRedWinner(red3);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 4) {
        /*when not already present, add cell number to red cells array*/
        if (!red4.includes(cellIndex)) {
          red4.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isRedWinner(red4);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 5) {
        /*when not already present, add cell number to red cells array*/
        if (!red5.includes(cellIndex)) {
          red5.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isRedWinner(red5);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 6) {
        /*when not already present, add cell number to red cells array*/
        if (!red6.includes(cellIndex)) {
          red6.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isRedWinner(red6);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 7) {
        /*when not already present, add cell number to red cells array*/
        if (!red7.includes(cellIndex)) {
          red7.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isRedWinner(red7);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 8) {
        /*when not already present, add cell number to red cells array*/
        if (!red8.includes(cellIndex)) {
          red8.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isRedWinner(red8);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 9) {
        /*when not already present, add cell number to red cells array*/
        if (!red9.includes(cellIndex)) {
          red9.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isRedWinner(red9);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
            /*announce winner*/
            console.log('red wins');
          }
        }
      } else if (boxIndex == 10) {
        /*when not already present, add cell number to red cells array*/
        if (!red10.includes(cellIndex)) {
          red10.push(cellIndex);
          /*check whether this move wins the box*/
          redWins = isRedWinner(red10);
          if (redWins == true) {
            /*block box with red overlay*/
            $(this).siblings('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
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

    // /*if player 1 meets winning conditions*/
    // if (blueWins == true) {
    //   /*block gamefield with blue overlay*/
    //   $('.overlay').removeClass('grey-overlay').addClass('blue-overlay').show();
    //   /*announce winner*/
    //   console.log('blue wins');
    //   /*if player 2 meets winning conditions*/
    // } else if (redWins == true) {
    //   /*block gamefield with red overlay*/
    //   $('.overlay').removeClass('grey-overlay').addClass('red-overlay').show();
    //   /*announce winner*/
    //   console.log('red wins');
    // }
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
