/*DNT*/$(document).ready(function() {/*DNT*/

//genero 10 numeri unici random (le 'mine')

var mines = [];
do {
  var getMine = getRandomNr(0,99);
  if (!mines.includes(getMine)) {
    mines.push(getMine);
  }
} while (mines.length < 10)
console.log(mines);

//intercetto il click dell'uente e rilevo l'indice

$('.mine-box').click(function() {
  var itemNr = $(this).index();
  console.log('mine index = ' + itemNr);

  //se l'indice è presente nelle mine => aggiungo classe mina all'elemento corrente => alert perso

  if (mines.includes(itemNr)) {
    $('.mine-box').eq(itemNr).addClass('active-mine');
    setTimeout(function() {
      $('.overlay').show();
      $('.result-box #lose').show();
    }, 0050);
  } else {
    $('.mine-box').eq(itemNr).addClass('safe');
  }

  //se l'indice non è presente, aggiungo classe 'salvo' all'elemento corrente => può continuare
})



































function getRandomNr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


})/*DO NOT DELETE closing doc.ready*/
