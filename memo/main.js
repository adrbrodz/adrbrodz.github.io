// Add your javascript here

const plates = ["11", "12", "13", "14", "15", "16",
        "21"
        ,"22"
        ,"23"
        ,"24"
        ,"25"
        ,"26"
        ,"31"
        ,"32"
        ,"33"
        ,"34"
        ,"35"
        ,"36"
        ,"41"
        ,"42"
        ,"43"
        ,"44"
        ,"45"
        ,"46"
        ,"51"
        ,"52"
        ,"53"
        ,"54"
        ,"55"
        ,"56"
        ,"61"
        ,"62"
        ,"63"
        ,"64"
        ,"65"
        ,"66"]

function generatePlates(func) {
    document.getElementById("grid").innerHTML = ``;
    for (plate in plates) {
        document.getElementById("grid").innerHTML += 
        `<div class="plate" onclick="${func}('${plates[plate]}')" id="${plates[plate]}">.</div>
        `
    }
}
var shipStartId = '';
var shipStopId = '';
var middle = '';
function shipStart(id) {
    shipStartId = id;
    generatePlates("shipStop");
    document.getElementById(id).innerHTML = "start";
    document.getElementById("message-box").innerHTML = 
    `Player 1, please enter the end square for your ship.`
}
var middleColumn = '';
var middleRow = '';
function shipStop(id) {
    shipStopId = id;
    document.getElementById(id).innerHTML = "end";
    findMiddle();
    middle = String(middleColumn)+String(middleRow)
    console.log(middle)
    document.getElementById("message-box").innerHTML = 
    `Player 2, you have 10 guesses left. Please enter your guess by clicking a square above.`
    document.getElementById(id).innerHTML = "end";
    generatePlates("guessShip");
}

function findMiddle() {

    const startColumn = shipStopId[0,1];
    const startRow = shipStartId[1];
    const endColumn = shipStopId[0,1];
    const endRow = shipStartId[1];
    if ( startColumn != endColumn ) {
        middleRow=startRow;
        if (startColumn - endColumn > 0 ) {
            middleColumn = startColumn-1;
        }
        else {
                middleColumn = Number(startColumn)+1
            }
    } else {
        middleColumn=startColumn;
        if (startRow - endRow > 0 ) {
            middleRow = startRow-1;
        }
        else {
                middleRow = Number(startRow)+1
            }
    }
}
function guessShip(id) {
    if (id ==shipStartId || id == shipStopId || id == middle) {
        document.getElementById(id).innerHTML = "X";
    }
}
window.onload = function() {
    generatePlates("shipStart");
    document.getElementById("message-box").innerHTML += 
    `Player 1, please enter the start square for your ship.`
}