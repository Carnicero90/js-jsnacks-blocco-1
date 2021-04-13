var tipiZucchine = ['bianca', 'gialla', 'rossa', 'striata', 'succulenta', 'essiccata'];

// GENERATE ARRAY OF OBJECTS WITH RANDOM VALUES
var zucchine = Array.from({length: 20}, i => i={
  'tipo': getRandomItem(tipiZucchine),
  'peso':  getRandomInt(1,15),
  'lunghezza': getRandomInt(1,30),
  // TEST
  'style': `transform: rotate(${getRandomInt(1,360)}deg); 
            left: ${getRandomInt(10,70)}%; top: ${getRandomInt(10,70)}%`
  // END TEST
});

var sommaTotale = sumObjectsValues(zucchine, 'peso');

// SPLIT zucchine ITEMS INTO corte AND lunghe (ACCORDING TO lunghezza)
var corte = [];
var lunghe= [];
zucchine.forEach((zucchina) => zucchina.lunghezza > 15 ? lunghe.push(zucchina) : corte.push(zucchina));

var sommaCorte = sumObjectsValues(corte, 'peso');
var sommaLunghe = sumObjectsValues(lunghe, 'peso');
// SAFETY CHECK
console.log(sommaCorte === sommaTotale - sommaLunghe);

// TEST
// ho testato abbastanza di getto, scusate il "disordine"
for (item of corte) {
  document.getElementById('left').innerHTML += `<div class="zucchina" style="${item.style}"></div>`
}

for (item of lunghe) {
  document.getElementById('right').innerHTML += `<div class="zucchina" style="${item.style}"></div>`
}
$('#left').css('bottom', `${(sommaCorte-sommaLunghe)/2}%`);
$('#right').css('bottom', `${(sommaLunghe-sommaCorte)/2}%`);

// END TEST



function sumObjectsValues(array, prop) {
  // RETURN THE SUM OF array[i].prop FOR i IN array
  return array.reduce((sum, item) => sum + item[prop], 0)
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