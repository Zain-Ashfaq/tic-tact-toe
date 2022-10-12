const button0 = document.querySelector("#button0");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const allButtons = document.querySelectorAll(".grid-item");
//////////////////////////////////////////////////
const resetAllButton = document.querySelector("#info__resetAllButton");
const resetBoardButton = document.querySelector("#info__resetBoardButton");
/////////////////////////////////////////////////

const playerOneText = document.getElementById("info__playerOneScore");
const playerTwoText = document.getElementById("info__playerTwoScore");
const currentPlayerTurn = document.getElementById("info__currentPlayerTurn");

let hasGameEnded = false;
let isPLayerOneTurn = true;

let playerOneScore = 0;
let playerTwoScore = 0;

let gameStateArray = [null, null, null, null, null, null, null, null, null];
let naughtsOrCrossesArray = [
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

console.log("game is still running");

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
  if (hasGameEnded === false) {
    if (isPLayerOneTurn === true) {
      naughtsOrCrossesArray.splice(squareNumber, 1, "X");
      buttonID.innerText = "X";
      // Insert function that checks if game has been won

      currentPlayerTurn.innerText = `Player 2 turn O`;
      gameWinChecker();

      isPLayerOneTurn = false;
    } else {
      naughtsOrCrossesArray.splice(squareNumber, 1, "O");
      buttonID.innerText = "O";
      currentPlayerTurn.innerText = `Player 1 turn X`;

      gameWinChecker();
      isPLayerOneTurn = true;
    }
  }

  console.log(`This is naughts or crosses array${naughtsOrCrossesArray}`);
};
const gameStatusSwitcher = () => {
  if (hasGameEnded === false) {
    if (isPLayerOneTurn === true) {
      playerOneScore += 1;
      playerOneText.innerText = `Player 1 score:${playerOneScore}`;
    } else {
      playerTwoScore += 1;
      playerTwoText.innerText = `Player 2 score:${playerTwoScore}`;
    }
    hasGameEnded = true;
    console.log(
      `player 1 score is ${playerOneScore} player 2 score is ${playerTwoScore}`
    );
  }

  //Checks which player is true to determine winner
  isPLayerOneTurn
    ? (currentPlayerTurn.innerText = `Player 1 has won`)
    : (currentPlayerTurn.innerText = `Player 2 has won`);
};

const gameWinChecker = () => {
  //Checks to see if either X or Y is at specified index. Looks ugly. Need to find a way to make it look neater.
  //////
  // top left to bottom left
  if (
    (naughtsOrCrossesArray[0] == "X" &&
      naughtsOrCrossesArray[3] == "X" &&
      naughtsOrCrossesArray[6] == "X") ||
    (naughtsOrCrossesArray[0] == "O" &&
      naughtsOrCrossesArray[3] == "O" &&
      naughtsOrCrossesArray[6] == "O")
  ) {
    addColorToWinnerButton(button0, button3, button6);
    console.log("You won");
    gameStatusSwitcher();
  }
  // top left to top right
  else if (
    (naughtsOrCrossesArray[0] == "X" &&
      naughtsOrCrossesArray[1] == "X" &&
      naughtsOrCrossesArray[2] == "X") ||
    (naughtsOrCrossesArray[0] == "O" &&
      naughtsOrCrossesArray[1] == "O" &&
      naughtsOrCrossesArray[2] == "O")
  ) {
    addColorToWinnerButton(button0, button1, button2);
    console.log("You won");
    gameStatusSwitcher();
  }
  // top right to bottom right
  else if (
    (naughtsOrCrossesArray[2] == "X" &&
      naughtsOrCrossesArray[5] == "X" &&
      naughtsOrCrossesArray[8] == "X") ||
    (naughtsOrCrossesArray[2] == "O" &&
      naughtsOrCrossesArray[5] == "O" &&
      naughtsOrCrossesArray[8] == "O")
  ) {
    addColorToWinnerButton(button2, button5, button8);
    console.log("You won");
    gameStatusSwitcher();
  }
  //bottom left to bottom right
  else if (
    (naughtsOrCrossesArray[6] == "X" &&
      naughtsOrCrossesArray[7] == "X" &&
      naughtsOrCrossesArray[8] == "X") ||
    (naughtsOrCrossesArray[6] == "O" &&
      naughtsOrCrossesArray[7] == "O" &&
      naughtsOrCrossesArray[8] == "O")
  ) {
    addColorToWinnerButton(button6, button7, button8);
    console.log("You won");
    gameStatusSwitcher();
  }
  //Bottom left to top right
  else if (
    (naughtsOrCrossesArray[6] == "X" &&
      naughtsOrCrossesArray[4] == "X" &&
      naughtsOrCrossesArray[2] == "X") ||
    (naughtsOrCrossesArray[6] == "O" &&
      naughtsOrCrossesArray[4] == "O" &&
      naughtsOrCrossesArray[2] == "O")
  ) {
    addColorToWinnerButton(button6, button4, button2);
    console.log("You won");
    gameStatusSwitcher();
  }
  //Top left to bottom right
  else if (
    (naughtsOrCrossesArray[0] == "X" &&
      naughtsOrCrossesArray[4] == "X" &&
      naughtsOrCrossesArray[8] == "X") ||
    (naughtsOrCrossesArray[0] == "O" &&
      naughtsOrCrossesArray[4] == "O" &&
      naughtsOrCrossesArray[8] == "O")
  ) {
    addColorToWinnerButton(button0, button4, button8);
    console.log("You won");
    gameStatusSwitcher();
  } else if (
    (naughtsOrCrossesArray[1] == "X" &&
      naughtsOrCrossesArray[4] == "X" &&
      naughtsOrCrossesArray[7] == "X") ||
    (naughtsOrCrossesArray[1] == "O" &&
      naughtsOrCrossesArray[4] == "O" &&
      naughtsOrCrossesArray[7] == "O")
  ) {
    addColorToWinnerButton(button1, button4, button7);
    console.log("You won");
    gameStatusSwitcher();
  }
  // draw
  else if (gameStateArray.every((element) => element === true)) {
    currentPlayerTurn.innerText = `Draw`;
  }

  // console.log(naughtsOrCrossesArray);
};

const addColorToWinnerButton = (num1, num2, num3) => {
  num1.classList.add("winnersButton");
  num2.classList.add("winnersButton");
  num3.classList.add("winnersButton");
};
// console.log(gameStateArray);
//////////////////////////////////////////

const clickResetBoardButton = () => {
  console.log(
    `array before button press ${gameStateArray} ${naughtsOrCrossesArray}`
  );
  currentPlayerTurn.innerText = `Player 1 turn X`;
  hasGameEnded = false;
  isPLayerOneTurn = true;

  gameStateArray = [null, null, null, null, null, null, null, null, null];
  naughtsOrCrossesArray = [
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

  console.log(
    `array after button press ${gameStateArray} ${naughtsOrCrossesArray}`
  );
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove("winnersButton");
    allButtons[i].innerText = i;

    console.log(`the button is ${i} ${allButtons[i]}`);
  }
};

const clickResetAllButton = () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneText.innerText = `Player 1 score:${playerOneScore}`;
  playerTwoText.innerText = `Player 2 score:${playerTwoScore}`;
  clickResetBoardButton();
};

button0.addEventListener("click", addButton0);
button1.addEventListener("click", addButton1);
button2.addEventListener("click", addButton2);
button3.addEventListener("click", addButton3);
button4.addEventListener("click", addButton4);
button5.addEventListener("click", addButton5);
button6.addEventListener("click", addButton6);
button7.addEventListener("click", addButton7);
button8.addEventListener("click", addButton8);

resetAllButton.addEventListener("click", clickResetAllButton);
resetBoardButton.addEventListener("click", clickResetBoardButton);
