let rollArray = []; // current roll 
let diceSelected = []; // selected dice to not roll
let rollIndex = [0, 1, 2, 3, 4]; // keeps track of dice posiions
let rollNumber = 0; // keeps track of how many re-rolls left
let dieIndex; // keeps track of current die selection
var diceSelect = "false"; // keeps track of if die is selected

// DOM
const dice = document.getElementById("dice");
const selectedDice = document.getElementById("selectedDice");

dice.addEventListener('click', addDice, false);
selectedDice.addEventListener('click', removeDice, false);


function checkRollNumber() {
    switch (rollNumber) {
        case 0:
                rollNumber += 1;
        break;
        case 1:
                rollNumber += 1;
        break;
        case 2:
                rollNumber += 1;
        break;
        case 3:
                $("roll").addClass('disabled');  //Disables the roll button until user selects a score
                rollNumber -= 2;
                diceSelected = [];
                resetDice();
        break;
        default:
            alert("Error");
    }
}

function randomizeDie() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    }


function rollDice() {
    checkRollNumber();

    // Clear table
    document.getElementById('dice').innerHTML = '';
    rollArray = [];

    let amountToRoll = 5 - diceSelected.length;
    for (let i = 0; i <= amountToRoll - 1; i++) {
        let diceRoll = randomizeDie();
        rollArray.push(diceRoll)
    }
    for (let i = 0; i < rollArray.length; i++) {
        num = rollArray[i]
        var newDice = document.createElement("img");
        newDice.src = "Assets/Roll " + num + " Select.png";
        var newDiv = document.getElementById("dice");
        newDiv.appendChild(newDice).setAttribute("id", "new");
        newDice.setAttribute("die-value", num);
        newDice.setAttribute("die-index", i);
    }
}

function addDice(event) { // adds dice to the selected array
    var dieValue = parseInt(event.target.getAttribute("die-value"));
    var dieIndex = parseInt(event.target.getAttribute("die-index"));
    var originalAdd = event.target;

    if (event.target.getAttribute("id") == "new") { // allows user to select only the dice
    diceSelected.push(dieValue); // add value to selected array
    rollArray.splice(dieIndex, 1); // remove value from roll array

    selectedDice.appendChild(originalAdd); // add dice to dice selected div

    indexDice(); // re-indexes dice in both arrays
    }
}

function removeDice(event) { // removes dice from the selected array
    var dieValue = parseInt(event.target.getAttribute("die-value"));
    var dieIndex = parseInt(event.target.getAttribute("die-index"));
    var originalRemove = event.target;
    
    if (event.target.getAttribute("id") == "new") { // allows user to select only the dice
    rollArray.push(dieValue); // add value to roll array
    diceSelected.splice(dieIndex, 1); // remove value from selected array 

    dice.appendChild(originalRemove); // add dice to dice div

    indexDice(); // re-indexes dice in both arrays
    }
}


function resetDice() {
    selectedDice.innerHTML = '';
    diceSelected = [];
    rollNumber = 1;
}

function resetRollCounter() {
    document.getElementById("rollNumber").innerHTML = '';
    selectedDice.innerHTML = '';
    dice.innerHTML = '';
    diceSelected = [];
    rollNumber = 0;
}

function indexDice() {
    let rollDiv = document.getElementById("dice").getElementsByTagName("img");
    let selectDiv = document.getElementById("selectedDice").getElementsByTagName("img");
    for (i = 0; i < selectDiv.length; i++) {
        selectDiv[i].setAttribute("die-index", i);
    }
    for (i = 0; i < rollDiv.length; i++) {
        rollDiv[i].setAttribute("die-index", i);
    }
}

function displayValues() {
    document.getElementById("rollNumber").innerHTML = rollNumber;
    //document.getElementById("rollArray").innerHTML = rollArray;
}

//roll animation functions
function show() {
    document.getElementById("rollAnimation").src = "https://cdn.dribbble.com/users/6059148/screenshots/14425859/media/3f67e0e620f3818a68a03fdb874b7a56.gif";
}
function hide() {
    document.getElementById("rollAnimation").src = "";
}

