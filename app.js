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

const addButton0 = () => {
  if (gameStateArray[0] === null) {
    gameStateArray.splice(0, 1, true);
    addNaughtOrCross(0);
  }
};
const addNaughtOrCross = (squareNumber) => {
  if (isPLayerOneTurn === false) {
    naughtsOrCrossesArray.splice(squareNumber, 1, "X");
  } else {
    naughtsOrCrossesArray.splice(squareNumber, 1, "O");
  }
  console.log(naughtsOrCrossesArray);
};

console.log(gameStateArray);

button0.addEventListener("click", addButton0);
