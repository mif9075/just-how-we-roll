/*
# ========================================================
# = Initialization
# ========================================================
*/

let sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

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
function rollD6(event){
///Random Integers
let randomInt = Math.ceil(Math.random() * 6);
sixes.push(randomInt);
console.log(sixes);

//Mean

let sumOfMean = 0;
let totalMean = 0;

for (let i = 0; i < sixes.length; i++){
sumOfMean += sixes[i];
}

totalMean = sumOfMean / (sixes.length);
// console.log(totalMean);

document.querySelector('#d6-rolls-mean').innerText = totalMean;

//Sort and Median
let sorted = [];
let medianResult = 0;

sorted = sixes.sort();

let mid = Math.floor (sorted.length / 2);

if (sorted.length % 2) {medianResult = sorted[mid];} else {
    medianResult = sorted[mid - 1] + sorted[mid] / 2.0;
}

document.querySelector('#d6-rolls-median').innerText = medianResult;
}


function rollDoubleD6(event){
    

}
function rollD12(event){
    

}
function rollD20(event){
    

}
function resetAllRolls(event){
    

}

/*
# ========================================================
# = Math Functions
# ========================================================
*/


/*
# ========================================================
# = Helper Functions - Stretch Goals!
# ========================================================
*/

