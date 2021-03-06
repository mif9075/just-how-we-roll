/*
# ========================================================
# = Initialization
# ========================================================
*/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

window.onload = init;


function init() {
    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.addEventListener('click', rollD6);

    const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
    doubleD6Roll1.addEventListener('click', rollDoubleD6);
    const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD6Roll2.addEventListener('click', rollDoubleD6);

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.addEventListener('click', rollD12);
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.addEventListener('click', rollD20);

    const resetButton = document.querySelector('#reset-button')
    resetButton.addEventListener('click', resetAllRolls);

    const multipleRolls = document.querySelector('#multiple-button')
    multipleRolls.addEventListener('click', multipleRoll);

    setStartingImages();
}


function setStartingImages() {
    const START_DIRECTORY = './images/start'
    const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/d6.png`;

    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.src = SIX_SIDED_START_IMAGE;

    const doubleD12Roll1 = document.querySelector('#double-d6-roll-1')
    const doubleD12Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD12Roll1.src = SIX_SIDED_START_IMAGE;
    doubleD12Roll2.src = SIX_SIDED_START_IMAGE;

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.src = `${START_DIRECTORY}/d12.jpeg`;
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.src = `${START_DIRECTORY}/d20.jpg`;
}

/*
# ========================================================
# = Roll Functions
# ========================================================
*/

//    Long Version           //
function rollD6(event){

///Random Integers
let randomIntIn = Math.ceil(Math.random() * 6);
sixes.push(randomIntIn);

//Change Image
const START_DIRECTORY = './images/d6/'
const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/${randomIntIn}.png`;

const d6Roll = document.querySelector('#d6-roll');
d6Roll.src = SIX_SIDED_START_IMAGE;

//Mean

let sumOfMean = 0;
let totalMean = 0;

for (let i = 0; i < sixes.length; i++){
sumOfMean += sixes[i];
}

// Mean Calculated to 1 decimal place
totalMean = parseFloat(sumOfMean / (sixes.length)).toFixed(1);

document.querySelector('#d6-rolls-mean').innerText = totalMean;

//Sort and Median
let sorted = [];
let medianResult = 0;

sorted = sixes.sort();

let mid = Math.floor (sorted.length/2);

if (sorted.length % 2) {medianResult = sorted[mid];} else {
    medianResult = (sorted[mid - 1] + sorted[mid]) / 2.0;
}

//Median to 1 decimal place as the mean;
document.querySelector('#d6-rolls-median').innerText = medianResult.toFixed(1);
}
// Long Version          //



function rollDoubleD6(event){

randomInt = getRandomInt(6);
randomInt2 = getRandomInt(6);
doubleSixes.push(randomInt + randomInt2);

//Change Image
const START_DIRECTORY = './images/d6/'
const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/${randomInt}.png`;
const SIX_SIDED_START_IMAGE2 = `${START_DIRECTORY}/${randomInt2}.png`;


const d6Roll = document.querySelector('#double-d6-roll-1');
const d6Roll2 = document.querySelector('#double-d6-roll-2');
d6Roll.src = SIX_SIDED_START_IMAGE;
d6Roll2.src = SIX_SIDED_START_IMAGE2;

//Mean
getMean(doubleSixes);
document.querySelector('#double-d6-rolls-mean').innerText = totalMean;
//Median
getMedian(doubleSixes);
document.querySelector('#double-d6-rolls-median').innerText = medianResult.toFixed(1);
//Mode
}

function rollD12(event){

randomInt = getRandomInt(12);
twelves.push(randomInt);

//Change Image   
const START_DIRECTORY = './images/numbers/'
const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/${randomInt}.png`;
const d12Roll = document.querySelector('#d12-roll');
d12Roll.src = SIX_SIDED_START_IMAGE;

//Mean
getMean(twelves);
document.querySelector('#d12-rolls-mean').innerText = totalMean;
//Median
getMedian(twelves);
document.querySelector('#d12-rolls-median').innerText = medianResult.toFixed(1);
//Mode
}


function rollD20(event){

randomInt = getRandomInt(20);
twenties.push(randomInt);

//Change Image   
const START_DIRECTORY = './images/numbers/'
const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/${randomInt}.png`;
const d20Roll = document.querySelector('#d20-roll');
d20Roll.src = SIX_SIDED_START_IMAGE;

//Mean
getMean(twenties);
document.querySelector('#d20-rolls-mean').innerText = totalMean;
//Median
getMedian(twenties);
document.querySelector('#d20-rolls-median').innerText = medianResult.toFixed(1);
//Mode
}


function resetAllRolls(event){
    setStartingImages();
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    
    document.querySelector('#d6-rolls-mean').innerText = '';
    document.querySelector('#d6-rolls-median').innerText = '';

    document.querySelector('#double-d6-rolls-mean').innerText = '';
    document.querySelector('#double-d6-rolls-median').innerText = '';

    document.querySelector('#d12-rolls-mean').innerText = '';
    document.querySelector('#d12-rolls-median').innerText = '';

    document.querySelector('#d20-rolls-mean').innerText = '';
    document.querySelector('#d20-rolls-median').innerText = '';
}

/*
# ========================================================
# = Math Functions
# ========================================================
*/


function getMean(arrayDice) {
    let sumOfMean = 0;
    
    for (let i = 0; i < arrayDice.length; i++){
    sumOfMean += arrayDice[i];
    }
    
    // Mean Calculated to 1 decimal place
    return totalMean = parseFloat(sumOfMean / (arrayDice.length)).toFixed(1);
    
}


function getMedian(arrayDice) {
    let sorted = [];
    // let medianResult = 0;

sorted = arrayDice.sort();

let mid = Math.floor (sorted.length/2);

if (sorted.length % 2) {return medianResult = sorted[mid];} else {
    return medianResult = (sorted[mid - 1] + sorted[mid]) / 2.0;
}
}


// function getMode(arrayDice){

// }

/*
# ========================================================
# = Helper Functions - Stretch Goals!
# ========================================================
*/

function multipleRoll() {
    rollD6();
    rollDoubleD6();
    rollD12();
    rollD20();
}

function getRandomInt(factor) {
let randomInt = Math.ceil(Math.random() * factor);
return randomInt;
}

