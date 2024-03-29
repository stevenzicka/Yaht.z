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
let grandSum1 = 0;
let grandCounter1 = 0;

// Player 2
let upperScore2 = 0;
let upperTotal2 = 0;
let lowerScore2 = 0;
let bonusActive2 = false;
let yahtzeeCounter2 = 0;
let grandSum2 = 0;
let grandCounter2 = 0;

let sumOfDice = 0;
let dupVal = 0;

let turn = 2;

window.addEventListener('load', () => {
    showTutorial();
    disablePlayer1();
    disablePlayer2();
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
    consolidateDice();
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
}

function checkTwos() {
    consolidateDice();
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
    }

function checkThrees() {
    consolidateDice();
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
    }

function checkFours() {
    consolidateDice();
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
    }

function checkFives() {
    consolidateDice();
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
    }

function checkSixes() {
    consolidateDice();
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
    }

function updateUpperScore() {
    if (turn == 2){
        numScore.player2.innerHTML = upperScore2;
        grandCounter2++;
    } else {
        numScore.player1.innerHTML = upperScore1;
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

function checkDuplicates(dupCount) {
    checkSumDice();
    consolidateDice();
    let outBool = 'false'
    let count = 0
    let tempDice = []
    for (let i = 0; i < diceSelected.length; i++) {
        for (let j = 0; j < diceSelected.length; j++) {
            if (diceSelected[i] == diceSelected[j]) {
                count += 1
            }
        }
        if (count >= dupCount) {
            dupVal = diceSelected[i]
            for (let k = 0; k < diceSelected.length; k++) {
                if (diceSelected[k] != dupVal) {
                    tempDice.push(diceSelected[k])
                }
            }
            outBool = 'true'
            break
        }
        count = 0
    } 
    return outBool
}


function threeOfScore() {
    let isThreeOf = checkDuplicates(3)
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
}

function checkFourOf() {
    checkSumDice();
    let isFourOf = checkDuplicates(4)
    let scoreBox = fourOf.player1;
    if (turn == 2){
        scoreBox = fourOf.player2;
    }

    if (isFourOf != 'true') { 
        scoreBox.innerHTML = "X"; 
        return
    }

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
        
    updateLowerScore();
    resetRollCounter();
}

function checkFullHouse() {
    let isThreeOf = checkDuplicates(3);
    let remainingDie = [];
    let remCheck = 'false'
    let scoreBox = fullHouse.player1;
    if (turn == 2){
        scoreBox = fullHouse.player2;
    }

    for (let i = 0; i < diceSelected.length; i++) {
        if (diceSelected[i] != dupVal) {
            remainingDie.push(diceSelected[i])
        }
    }

    if (remainingDie.length > 1 && remainingDie[0] == remainingDie[1]) {
        remCheck = 'true'
    }

    if (isThreeOf == 'true' && remCheck == 'true') { 
        scoreBox.innerHTML = 25;
        if (turn == 2) {
            lowerScore2 += 25;
        } else {
            lowerScore1 += 25;
        }
    } else {scoreBox.innerHTML = "X";}

    updateLowerScore();
    resetRollCounter();
}

function checkSmStraight() {
    consolidateDice();
    let sortArray = diceSelected.sort(function(a, b){return a - b}); // allows sort function to work on nums
    let straightNums = 1;
    let scoreBox = smStraight.player1;
    if (turn == 2){
        scoreBox = smStraight.player2;
    }
    
    for (i = 1; i < diceSelected.length; i++) {
        if (((sortArray[i-1] + 1) - sortArray[i]) == 0) {
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
}

function checkLgStraight() {
    consolidateDice();
    let sortArray = diceSelected.sort(function(a, b){return a - b}); // allows sort function to work on nums
    let straightNums = 1;
    let scoreBox = lgStraight.player1;
    if (turn == 2){
        scoreBox = lgStraight.player2;
    }
    for (i = 1; i < diceSelected.length; i++) {
        if ((sortArray[i-1] + 1) - sortArray[i] == 0) {
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
}

function checkYahtzee() {
    let isYahtzee = checkDuplicates(5)
    let scoreBox = yahtzee.player1;
    if (turn == 2){
        scoreBox = yahtzee.player2;
    }
    if (isYahtzee == 'true') {
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
    } else {scoreBox.innerHTML = "X";}
    updateLowerScore();
    resetRollCounter();
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

    let isYahtzee = checkDuplicates(5)
    if (isYahtzee == 'true') {
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
    resetRollCounter();
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
}

function updateLowerScore() {
    if (turn == 2){
        lowerSection.player2.innerHTML = lowerScore2;
        grandCounter2++;
    } else {
        lowerSection.player1.innerHTML = lowerScore1;
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
 let gameOver = document.getElementById("gameOver");
 let myTutorial = document.getElementById("myTutorial");

 function showTutorial() {
    myTutorial.style.display = "block"
}
   
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == gameOver) {
    gameOver.style.display = "none";
   }
   else if (event.target == myTutorial) {
    myTutorial.style.display = "none";
   }
 }

function playerWin() {
  gameOver.style.display = "block";
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

