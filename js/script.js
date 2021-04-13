var tipiZucchine = ['bianca', 'gialla', 'rossa', 'striata', 'succulenta', 'essiccata'];

var zucchine = Array.from({length: 10}, i => i={
  'tipo': getRandomItem(tipiZucchine),
  'peso':  getRandomInt(1,15),
  'lunghezza': getRandomInt(1,30)
});

var sommaTotale = pesaZucche(zucchine);

var corte = [];
var lunghe= [];

zucchine.filter((zucchina) => zucchina.lunghezza>15 ? lunghe.push(zucchina) : corte.push(zucchina));

var sommaCorte = pesaZucche(corte);
var sommaLunghe = pesaZucche(lunghe);
console.log(sommaCorte === sommaTotale - sommaLunghe);


function pesaZucche(array) {
  return array.reduce((somma, zucchina) => somma + zucchina.peso, 0)
}

function getRandomItem(array) {
    // RETURN A RANDOM ITEM FROM array ( == ITERABLE)
  return array[(Math.floor(Math.random() * array.length))]
}

function getRandomInt(min, max) {
  // RETURN A RANDOM INTEGER BETWEEN min (INCLUDED) AND max (INCLUDED)
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min)) + min;
}