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
const yahtzeeBonus = document.getElementsByClassName('yahtzeeBonusScore');
const chance = document.getElementsByClassName('chance');

// Player 1
let upperScore1 = 0;
let upperTotal1 = 0;
let lowerScore1 = 0;
let bonusActive1 = false;
let yahtzeeCounter1 = 0;
let grandSum1 = 60;
let grandCounter1 = 0;

// Player 2
let upperScore2 = 0;
let upperTotal2 = 0;
let lowerScore2 = 0;
let bonusActive2 = false;
let yahtzeeCounter2 = 0;
let grandSum2 = 100;
let grandCounter2 = 0;

let sumOfDice = 0;
let checkDuplicates = [];
let isThreeOf = 'false';
let isFourOf = 'false';

let turn = 1;

window.addEventListener('load', () => {
    disablePlayer2();
    stopFireworks();
  });

function nextTurn() {
    if (turn == 1) {
        turn = 2
        disablePlayer1();
        enablePlayer2();
        document.getElementById("player2Name").style.border = '3px solid #7ec581'
        document.getElementById("player1Name").style.border = '1px solid black'
    }
    else {
        turn = 1
        disablePlayer2();
        enablePlayer1();
        document.getElementById("player1Name").style.border = '3px solid #7ec581'
        document.getElementById("player2Name").style.border = '1px solid black'
    }
}

function checkSumDice() {
    sumOfDice = 0;
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
    let scoreBox = aces.player1;
    if (turn == 2){
        scoreBox = aces.player2;
    }

    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 1) {
                sum++;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            if (turn == 2){
                upperScore2 += parseInt(scoreBox.innerHTML);
            } else {
                upperScore1 += parseInt(scoreBox.innerHTML);
            }
        } else {
            scoreBox.innerHTML = "X";
        }
    updateUpperScore();
    resetRollCounter();
    nextTurn();
}

function checkTwos() {
    var sum = 0;
    let scoreBox = twos.player1;
    if (turn == 2){
        scoreBox = twos.player2;
    }
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 2) {
                sum += 2;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            if (turn == 2){
                upperScore2 += parseInt(scoreBox.innerHTML);
            } else {
                upperScore1 += parseInt(scoreBox.innerHTML);
            }
        } else {
            scoreBox.innerHTML = "X";
        }
        updateUpperScore();
        resetRollCounter();
        nextTurn();
    }

function checkThrees() {
    var sum = 0;
    let scoreBox = threes.player1;
    if (turn == 2){
        scoreBox = threes.player2;
    }
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 3) {
                sum += 3;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            if (turn == 2){
                upperScore2 += parseInt(scoreBox.innerHTML);
            } else {
                upperScore1 += parseInt(scoreBox.innerHTML);
            }
        } else {
            scoreBox.innerHTML = "X";
        }
        updateUpperScore();
        resetRollCounter();
        nextTurn();
    }

function checkFours() {
    var sum = 0;
    let scoreBox = fours.player1;
    if (turn == 2){
        scoreBox = fours.player2;
    }
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 4) {
                sum += 4;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            if (turn == 2){
                upperScore2 += parseInt(scoreBox.innerHTML);
            } else {
                upperScore1 += parseInt(scoreBox.innerHTML);
            }
        } else {
            scoreBox.innerHTML = "X";
        }
        updateUpperScore();
        resetRollCounter();
        nextTurn();
    }

function checkFives() {
    var sum = 0;
    let scoreBox = fives.player1;
    if (turn == 2){
        scoreBox = fives.player2;
    }
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 5) {
                sum += 5;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            if (turn == 2){
                upperScore2 += parseInt(scoreBox.innerHTML);
            } else {
                upperScore1 += parseInt(scoreBox.innerHTML);
            }
        } else {
            scoreBox.innerHTML = "X";
        }
        updateUpperScore();
        resetRollCounter();
        nextTurn();
    }

function checkSixes() {
    var sum = 0;
    let scoreBox = sixes.player1;
    if (turn == 2){
        scoreBox = sixes.player2;
    }
    scoreBox.innerHTML = '';
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == 6) {
                sum += 6;
            }
        } if (sum > 0) {
            scoreBox.innerHTML = sum;
            if (turn == 2){
                upperScore2 += parseInt(scoreBox.innerHTML);
            } else {
                upperScore1 += parseInt(scoreBox.innerHTML);
            }
        } else {
            scoreBox.innerHTML = "X";
        }
        updateUpperScore();
        resetRollCounter();
        nextTurn();
    }

function updateUpperScore() {
    let scoreBox = numScore.player1.innerHTML;
    if (turn == 2){
        scoreBox = numScore.player2.innerHTML;
        scoreBox = upperScore2
        grandCounter2++;
    } else {
        scoreBox = upperScore1;
        grandCounter1++;
    }
    checkBonus();
}

function checkBonus() {
    if (turn == 2){
        if (upperScore2 >= 63) {
            bonus.player2.innerHTML = 35;
            upperScore2 += 35;
            numTotal.player2.innerHTML = upperScore2
            upperSection.player2.innerHTML = upperScore2;
        } else {
        numTotal.player2.innerHTML = upperScore2;
        upperSection.player2.innerHTML = upperScore2;
        }
    } else {
        if (upperScore1 >= 63) {
            bonus.player1.innerHTML = 35;
            upperScore1 += 35;
            numTotal.player1.innerHTML = upperScore1
            upperSection.player1.innerHTML = upperScore1;
        } else {
        numTotal.player1.innerHTML = upperScore1;
        upperSection.player1.innerHTML = upperScore1;
        }
    }
}

function checkThreeOf() {
    checkSumDice();
    checkDuplicates = [];
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
    } 
}


function threeOfScore() {
    let scoreBox = threeOf.player1;
    if (turn == 2){
        scoreBox = threeOf.player2;
        if (isThreeOf == 'true') {
            scoreBox.innerHTML = sumOfDice; // updates scorebox
            lowerScore2 += sumOfDice;
        } else {
            scoreBox.innerHTML = "X";
        } 
    } else {
        if (isThreeOf == 'true') {
            scoreBox.innerHTML = sumOfDice; // updates scorebox
            lowerScore1 += sumOfDice;
        } else {
            scoreBox.innerHTML = "X";
        }
    }
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function checkFourOf() {
    checkSumDice();
    checkThreeOf();
    let scoreBox = fourOf.player1;
    if (turn == 2){
        scoreBox = fourOf.player2;
    }
    if (diceSelected.length > 3 && isThreeOf == 'true') { 
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] == checkDuplicates[0]) {
                isFourOf = 'true'
            }   
        }
    } else {scoreBox.innerHTML = "X";}

    if (turn == 2) {
        if (isFourOf == 'true') {
            scoreBox.innerHTML = sumOfDice;
            lowerScore2 += sumOfDice;
        }
    } else {
        if (isFourOf == 'true') {
            scoreBox.innerHTML = sumOfDice;
            lowerScore1 += sumOfDice;
        }
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
    let scoreBox = fullHouse.player1;
    if (turn == 2){
        scoreBox = fullHouse.player2;
    }
    if (diceSelected.length == 5 && isThreeOf == 'true') { 
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] != checkDuplicates[0]) {
                remainingDie.push(diceSelected[i]);
            }
        }
        if (remainingDie[0] == remainingDie[1]) {
            scoreBox.innerHTML = 25;
            if (turn == 2) {
                lowerScore2 += 25;
            } else {
                lowerScore1 += 25;
            }
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
    let scoreBox = smStraight.player1;
    if (turn == 2){
        scoreBox = smStraight.player2;
    }
    for (i = 0; i < diceSelected.length; i++) {
        if ((sortArray[i] + 1) - sortArray[i] == 1) {
            straightNums++
        }
    }
    if (straightNums >= 4) {
        scoreBox.innerHTML = 30;
        if (turn == 2) {
            lowerScore2 += 30;
        } else {
            lowerScore1 += 30;
        }
    } else {scoreBox.innerHTML = "X";}
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function checkLgStraight() {
    let sortArray = diceSelected.sort(function(a, b){return a - b}); // allows sort function to work on nums
    let straightNums = 0;
    let scoreBox = lgStraight.player1;
    if (turn == 2){
        scoreBox = lgStraight.player2;
    }
    for (i = 0; i < diceSelected.length; i++) {
        if ((sortArray[i] + 1) - sortArray[i] == 1) {
            straightNums++
        }
    }
    if (straightNums == 5) {
        scoreBox.innerHTML = 40;
        if (turn == 2) {
            lowerScore2 += 40;
        } else {
            lowerScore1 += 40;
        }
    } else {scoreBox.innerHTML = "X";}
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function checkYahtzee() {
    checkThreeOf();
    let remainingDie = [];
    let scoreBox = yahtzee.player1;
    if (turn == 2){
        scoreBox = yahtzee.player2;
    }
    if (diceSelected.length == 5 && isThreeOf == 'true') { 
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] != checkDuplicates[0]) {
                remainingDie.push(diceSelected[i]);
            }
        }
        if (checkDuplicates.length = 5) {
            scoreBox.innerHTML = 50;
            if (turn == 2) {
                lowerScore2 += 50;
                startConfetti();
                setTimeout(stopConfetti, 2000);
                yahtzeeCounter2++;
            } else {
                lowerScore1 += 50;
                startConfetti();
                setTimeout(stopConfetti, 2000);
                yahtzeeCounter1++;
            }
        } 
    } else {scoreBox.innerHTML = "X";}
    checkDuplicates = [];
    isThreeOf = 'false';
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function checkYahtzeeBonus() {
    let scoreBox = yahtzeeBonus.player1;
    if (turn == 2){
        scoreBox = yahtzeeBonus.player2;
        if (yahtzeeCounter2 < 1) {
            return
        }
    }

    if (yahtzeeCounter1 < 1) {
        return
    }
    checkThreeOf();
    let remainingDie = [];
    if (diceSelected.length == 5 && isThreeOf == 'true') { 
        for (let i = 0; i < diceSelected.length; i++) {
            if (diceSelected[i] != checkDuplicates[0]) {
                remainingDie.push(diceSelected[i]);
            }
        }
        if (checkDuplicates.length = 5) {
            if (scoreBox.innerHTML == '') {
                scoreBox.innerHTML = 100;
            }
            else {
                let newScore = parseInt(scoreBox.innerHTML) + 100
                scoreBox.innerHTML = newScore;
            }
            
            if (turn == 2) {
                lowerScore2 += 100;
                startConfetti();
                startFireworks();
                setTimeout(stopConfetti, 3000);
                setTimeout(stopFireworks, 7000);
                yahtzeeCounter2++;
            } else {
                lowerScore1 += 100;
                startConfetti();
                startFireworks();
                setTimeout(stopConfetti, 3000);
                setTimeout(stopFireworks, 7000);
                yahtzeeCounter1++;
            }
        } 
    }
    checkDuplicates = [];
    isThreeOf = 'false';
    resetRollCounter();
    nextTurn();
}

function checkChance() {
    checkSumDice();
    let scoreBox = chance.player1;
    if (turn == 2){
        scoreBox = chance.player2;
    }
    scoreBox.innerHTML = sumOfDice;
    if (turn == 2) {
        lowerScore2 += sumOfDice;
    } else {
        lowerScore1 += sumOfDice;
    }
    updateLowerScore();
    resetRollCounter();
    nextTurn();
}

function updateLowerScore() {
    let score = lowerSection.player1.innerHTML;
    if (turn == 2){
        score = lowerSection.player2.innerHTML;
        score = lowerScore2;
        grandCounter2++;
    } else {
        score = lowerScore1;
        grandCounter1++;
    }
}

function checkGrandTotal() {
    let scoreBox1 = grandTotal.player1;
    let scoreBox2 = grandTotal.player2;

    if (grandCounter2 > 12) {
        grandSum1 = lowerScore1 + upperScore1;
        scoreBox1.innerHTML = grandSum1;
        grandSum2 = lowerScore2 + upperScore2;
        scoreBox2.innerHTML = grandSum2;
        playerWin();

    } else {alert(`Please 'SCORE!' all boxes first :)`)}
}

function disablePlayer1() {
    let button1 = document.getElementsByClassName("buttonScore1");
    for (let i = 0; i < button1.length; i++) {
        button1[i].disabled = true;
    }
}

function enablePlayer1() {
    let button1 = document.getElementsByClassName("buttonScore1");
    for (let i = 0; i < button1.length; i++) {
        button1[i].disabled = false;
    }
}

function disablePlayer2() {
    let button2 = document.getElementsByClassName("buttonScore2");
    for (let i = 0; i < button2.length; i++) {
        button2[i].disabled = true;
    }
}

function enablePlayer2() {
    let button2 = document.getElementsByClassName("buttonScore2");
    for (let i = 0; i < button2.length; i++) {
        button2[i].disabled = false;
    }
}

/**
 * Modal elements
 */ 
 let modal = document.getElementById("myModal");
 let span = document.getElementsByClassName("close")[0];
   
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

function playerWin() {
  modal.style.display = "block";
  document.getElementById("score1").innerHTML = grandSum1
  document.getElementById("score2").innerHTML = grandSum2
  startConfetti();
  if (grandSum1 > grandSum2) {
    document.getElementById("playerWin").innerHTML = 'Player 1 Wins!';
    document.getElementById("score1").style.color = '#7ec581';
  } else if (grandSum1 < grandSum2) {
    document.getElementById("playerWin").innerHTML = 'Player 2 Wins!';
    document.getElementById("score2").style.color = '#7ec581';
  } else {
    document.getElementById("playerWin").innerHTML = "It's a tie!";
  }
  document.getElementById("roll").innerHTML = 'Play Again!'
  document.getElementById("roll").setAttribute('onclick', 'playAgain()')
}

function playAgain() {
    location.reload();
}

function startFireworks() {
    let fireworks = document.getElementsByClassName("firework")
    for (let i = 0; i < fireworks.length; i++) {
        fireworks[i].style.display = 'block';
    }
}

function stopFireworks() {
    let fireworks = document.getElementsByClassName("firework")
    for (let i = 0; i < fireworks.length; i++) {
        fireworks[i].style.display = 'none';
    }
}

