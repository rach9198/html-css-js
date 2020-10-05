console.log('Lets play ludo');

let diceRed = document.querySelector('.dice-red');
let diceYellow = document.querySelector('.dice-yellow');
let diceBlue = document.querySelector('.dice-blue');
let diceGreen = document.querySelector('.dice-green');

const redDiceFun = () => {}
const blueDiceFun = () => {}
const yellowDiceFun = () => {}
const greenDiceFun = () => {}

diceBlue.addEventListener('click', blueDiceFun);
diceYellow.addEventListener('click', yellowDiceFun);
diceRed.addEventListener('click', redDiceFun);
diceGreen.addEventListener('click', greenDiceFun);