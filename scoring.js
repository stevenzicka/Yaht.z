// DOM
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

const aces = document.getElementsByClassName('aces');
const twos = document.getElementsByClassName('twos');
const threes = document.getElementsByClassName('threes');
const fours = document.getElementsByClassName('fours');
const fives = document.getElementsByClassName('fives');
const sixes = document.getElementsByClassName('sixes');
const numScore = document.getElementsByClassName('numScore');
const numTotal = document.getElementsByClassName('upperTotal');
const upperSection = document.getElementsByClassName('upperSection');
const lowerSection = document.getElementsByClassName('lowerSection');
const grandTotal = document.getElementsByClassName('grandTotal');
const bonus = document.getElementsByClassName('bonus');
const threeOf = document.getElementsByClassName('threeOf');
const fourOf = document.getElementsByClassName('fourOf');
const fullHouse = document.getElementsByClassName('fullHouse');
const smStraight = document.getElementsByClassName('smStraight');
const lgStraight = document.getElementsByClassName('lgStraight');
const yahtzee = document.getElementsByClassName('yahtzee');
const chance = document.getElementsByClassName('chance');

let upperScore = 0;
let upperTotal = 0;
let lowerScore = 0;
let bonusActive = false;
let sumOfDice = 0;
let checkDuplicates = [];
let isThreeOf = 'false';
let isFourOf = 'false';
let yahtzeeCounter = 0;
let grandSum = 0;
let grandCounter = 0;
let turn = 1;

const playerTurn = player1;

/** function switchTurn() {
    if (playerTurn == player1) {
        player1 = player2;
    } else {
        player2 = player1;
    }
} */

function nextTurn() {
    $("roll").remove('disabled');  //Enables the roll button 
    if (turn == 1) {
        turn = 2
    }
    else {
        turn = 1
    }
}

function clearSumDice() {
    sumOfDice = 0;
}

function checkSumDice() {
    for (let i = 0; i < rollArray.length; i++) {
        var value = parseInt(rollArray[i]);
        sumOfDice += value;
    }
    for (let i = 0; i < diceSelected.length; i++) {
        var value = parseInt(diceSelected[i]);
        sumOfDice += value;
    }
}

function checkAces() {
    var sum = 0;
    if (turn == 1){
        const scoreBox = aces.player1;
    }
    else {
        const scoreBox = aces.player2;
    }
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 1) {
                sum++;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            upperScore += parseInt(scoreBox.innerHTML);
        } else {
            scoreBox.innerHTML = "X";
        }
    updateUpperScore();
    resetRollCounter();
    nextTurn();
}

function checkTwos() {
    var sum = 0;
    const scoreBox = twos.player1;
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 2) {
                sum += 2;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            upperScore += parseInt(scoreBox.innerHTML);
        } else {
            scoreBox.innerHTML = "X";
        }
        updateUpperScore();
        resetRollCounter();
        nextTurn();
    }

function checkThrees() {
    var sum = 0;
    const scoreBox = threes.player1;
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 3) {
                sum += 3;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            upperScore += parseInt(scoreBox.innerHTML);
        } else {
            scoreBox.innerHTML = "X";
        }
        updateUpperScore();
        resetRollCounter();
        nextTurn();
    }

function checkFours() {
    var sum = 0;
    const scoreBox = fours.player1;
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 4) {
                sum += 4;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            upperScore += parseInt(scoreBox.innerHTML);
        } else {
            scoreBox.innerHTML = "X";
        }
        updateUpperScore();
        resetRollCounter();
        nextTurn();
    }

function checkFives() {
    var sum = 0;
    const scoreBox = fives.player1;
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 5) {
                sum += 5;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            upperScore += parseInt(scoreBox.innerHTML);
        } else {
            scoreBox.innerHTML = "X";
        }
        updateUpperScore();
        resetRollCounter();
        nextTurn();
    }

function checkSixes() {
    var sum = 0;
    const scoreBox = sixes.player1;
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 6) {
                sum += 6;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            upperScore += parseInt(scoreBox.innerHTML);
        } else {
            scoreBox.innerHTML = "X";
        }
        updateUpperScore();
        resetRollCounter();
        nextTurn();
    }

function updateUpperScore() {
    numScore.player1.innerHTML = upperScore;
    grandCounter++;
    checkBonus();
}

function checkBonus() {
    if (upperScore >= 63) {
        bonus.player1.innerHTML = 35;
        upperScore += 35;
        numTotal.player1.innerHTML = upperScore
        upperSection.player1.innerHTML = upperScore;
    } else {
    numTotal.player1.innerHTML = upperScore;
    upperSection.player1.innerHTML = upperScore;
    }
}

function checkThreeOf() {
    clearSumDice();
    checkSumDice();
    checkDuplicates = [];
    var scoreBox = threeOf.player1;
    if (diceSelected.length > 2) { 
        for (let i = 0; i < diceSelected.length; i++) {
            checkDuplicates.push(diceSelected[i]);
                for (let j = 0; j < (diceSelected.length - 1); j++) {
                    if (diceSelected[j] == checkDuplicates[i]) {
                        checkDuplicates.push(diceSelected[j]);
                            for (let k = 0; k < (diceSelected.length - 2); k++) {
                                if (diceSelected[k] == checkDuplicates[i]) {
                                    checkDuplicates.push(diceSelected[k])
                                    isThreeOf = 'true';
                                }  
                            } 
                    }   
                }
        }
    } else {scoreBox.innerHTML = "X";}
}

function threeOfScore() {
    var scoreBox = threeOf.player1;
    if (isThreeOf == 'true') {
    scoreBox.innerHTML = sumOfDice; // updates scorebox
    isThreeOf = 'false';
    lowerScore += sumOfDice;
    }
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function checkFourOf() {
    clearSumDice();
    checkSumDice();
    checkThreeOf();
    var scoreBox = fourOf.player1
    if (diceSelected.length > 3 && isThreeOf == 'true') { 
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == checkDuplicates[0]) {
                isFourOf = 'true'
            }   
        }
    } else {scoreBox.innerHTML = "X";}
    if (isFourOf == 'true') {
        scoreBox.innerHTML = sumOfDice;
        lowerScore += sumOfDice;
    }
    checkDuplicates = [];
    isThreeOf = 'false';
    isFourOf = 'false';
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function checkFullHouse() {
    checkThreeOf();
    let remainingDie = [];
    var scoreBox = fullHouse.player1
    if (diceSelected.length == 5 && isThreeOf == 'true') { 
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] != checkDuplicates[0]) {
                remainingDie.push(diceSelected[i]);
            }
        }
        if (remainingDie[0] == remainingDie[1]) {
            scoreBox.innerHTML = 25;
            lowerScore += 25;
        }
    } else {scoreBox.innerHTML = "X";}
    checkDuplicates = [];
    isThreeOf = 'false';
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function checkSmStraight() {
    let sortArray = diceSelected.sort(function(a, b){return a - b}); // allows sort function to work on nums
    let straightNums = 0;
    var scoreBox = smStraight.player1;
    for (i = 0; i < diceSelected.length; i++) {
        if ((sortArray[i] + 1) - sortArray[i] == 1) {
            straightNums++
        }
    }
    if (straightNums >= 4) {
        scoreBox.innerHTML = 30;
        lowerScore += 30;
    } else {scoreBox.innerHTML = "X";}
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function checkLgStraight() {
    let sortArray = diceSelected.sort(function(a, b){return a - b}); // allows sort function to work on nums
    let straightNums = 0;
    var scoreBox = lgStraight.player1;
    for (i = 0; i < diceSelected.length; i++) {
        if ((sortArray[i] + 1) - sortArray[i] == 1) {
            straightNums++
        }
    }
    if (straightNums = 5) {
        scoreBox.innerHTML = 40;
        lowerScore += 40;
    } else {scoreBox.innerHTML = "X";}
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function checkYahtzee() {
    checkThreeOf();
    let remainingDie = [];
    var scoreBox = yahtzee.player1;
    if (diceSelected.length == 5 && isThreeOf == 'true') { 
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] != checkDuplicates[0]) {
                remainingDie.push(diceSelected[i]);
            }
        }
        if (checkDuplicates.length = 5 && yahtzeeCounter == 0) {
            scoreBox.innerHTML = 50;
            lowerScore += 50;
            yahtzeeCounter++;
        } 
    } else {scoreBox.innerHTML = "X";}
    checkDuplicates = [];
    isThreeOf = 'false';
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function checkChance() {
    clearSumDice();
    checkSumDice();
    var scoreBox = chance.player1
    scoreBox.innerHTML = sumOfDice;
    lowerScore += sumOfDice
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function updateLowerScore() {
    lowerSection.player1.innerHTML = lowerScore;
    grandCounter++;
}

function checkGrandTotal() {
    var scoreBox = grandTotal.player1
    if (grandCounter > 12) {
        grandSum = lowerScore + upperScore;
        scoreBox.innerHTML = grandSum;
    } else {alert(`Please 'SCORE!' all boxes first :)`)}
}