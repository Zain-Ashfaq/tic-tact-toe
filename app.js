/*

plan out tic tac toe game

Have a game board. 3x3 css grid.

Encase everything in a while loop. Will return true once player 1 or player 2 has won.

have a bool checker to see whos turn it is. Player 1 starts out false. Has to be a global var.

Player 1 will be X - Player 2 will be O

Original grid will be blank squares. Once a player clicks on a square, either an X or O class will be added over the blank square. This needs a bool checker. Starts out false. Once a player clicks on blank square, it turns true and exits out the curly brackets.

Have object with buttons 0-8. All set to false. When adding new piece, checks against object for each button e.g button0:false. Have if statement to see if it is false, add X or O depending on player turn. then set object0 to true.

Each blank square has to have individual button 

////
Need to find out how to manipulate specific area of css grid

Just add class over specific button to show X or O
////

needs winning set arrays to check against game board. Board will be 9 squares e.g need 1,4,7 = win 7,5,3. These values ARENT 0 index. For psuedo use 1-9 

could use empty array that stores X and O values. Loop through array. indexes could be hardcoded as game only has a potential number of ways to win e.g 1,4,7 works but 4,2,3 doesnt.


have button that fully resets everything. Just set all global var to 0. 

have semi reset button. Clears board but keeps score. would be global var to keep score.

have game state array. Once a button has been pressed, add the button number to gameStateArray at each specific index e.g const gameStateArray =['','','',] button1 has been pressed. Insert value to gameStateArray[1] to true 







*/
const button0 = document.querySelector("#button0");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");

let hasGameEnded = false;
let isPLayerOneTurn = true;

let hasButton0BeenClicked = false;

const gameStateArray = [null, null, null, null, null, null, null, null, null];
const naughtsOrCrossesArray = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
// figures out which button has been pressed
const addButton0 = () => {
  buttonToAdd(0, button0);
};
//Insert variable into parameter
const addButton1 = () => {
  buttonToAdd(1, button1);
};
const addButton2 = () => {
  buttonToAdd(2, button2);
};
const addButton3 = () => {
  buttonToAdd(3, button3);
};
const addButton4 = () => {
  buttonToAdd(4, button4);
};
const addButton5 = () => {
  buttonToAdd(5, button5);
};
const addButton6 = () => {
  buttonToAdd(6, button6);
};
const addButton7 = () => {
  buttonToAdd(7, button7);
};
const addButton8 = () => {
  buttonToAdd(8, button8);
};

const buttonToAdd = (arrIndex, button) => {
  // assign parameter value to variables: Easier to read
  const tempArrIndex = arrIndex;
  const whichButtonPressed = button;
  //If statement checks if button has been pressed
  if (gameStateArray[tempArrIndex] === null) {
    // Changes null to true at specific index. Depends on which button number has been pressed.
    gameStateArray.splice(tempArrIndex, 1, true);

    addNaughtOrCross(tempArrIndex, whichButtonPressed);
  }
};
const addNaughtOrCross = (squareNumber, buttonID) => {
  if (isPLayerOneTurn === true) {
    naughtsOrCrossesArray.splice(squareNumber, 1, "X");
    buttonID.innerText = "X";
    // Insert function that checks if game has been won
    isPLayerOneTurn = false;
  } else {
    naughtsOrCrossesArray.splice(squareNumber, 1, "O");
    buttonID.innerText = "O";
    isPLayerOneTurn = true;
  }
  console.log(naughtsOrCrossesArray);
};

console.log(gameStateArray);

button0.addEventListener("click", addButton0);
button1.addEventListener("click", addButton1);
button2.addEventListener("click", addButton2);
button3.addEventListener("click", addButton3);
button4.addEventListener("click", addButton4);
button5.addEventListener("click", addButton5);
button6.addEventListener("click", addButton6);
button7.addEventListener("click", addButton7);
button8.addEventListener("click", addButton8);
