//! This passes checks here, but fails on codewars
/* 
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/
function isSolved(board) {
  let fullArray = [];
  let winner = "";
  // Create one large array out of the sub-arrays
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      fullArray.push(board[i][j]);
    }
  }

  // solve across
  for (let i = 0; i < 9; i += 3) {
    if (
      fullArray[i] > 0 &&
      fullArray[i] == fullArray[i + 1] &&
      fullArray[i + 1] == fullArray[i + 2]
    ) {
      winner = fullArray[i];
      console.log("solving across");
    }
  }
  // solve right to left diagonal
  if (
    fullArray[0] > 0 &&
    fullArray[0] === fullArray[4] &&
    fullArray[4] === fullArray[8]
  ) {
    winner = fullArray[0];
    console.log("solving right to left diagonal");
  }
  // solve left to right diagonal
  if (
    fullArray[2] > 0 &&
    fullArray[2] === fullArray[4] &&
    fullArray[4] === fullArray[6]
  ) {
    winner = fullArray[2];
    console.log("solving left to right diagonal");
  }
  // solve vertical
  for (let i = 0; i < 3; i++) {
    if (
      fullArray[i] > 0 &&
      fullArray[i] === fullArray[i + 3] &&
      fullArray[i + 3] === fullArray[i + 6]
    ) {
      winner = fullArray[i];
      console.log("solving vertical");
    }
  }
  //   console.log(fullArray);
  // check for unplayed spaces and return -1
  for (let i = 0; i < fullArray.length; i++) {
    if (fullArray[i] == "0" && winner == "") {
      winner = "-1";
    }
  }
  // check for a draw
  if (winner === "") {
    winner = "0";
  }
  console.log(Number(winner));
  return Number(winner);
}

isSolved([[2,2,2],[0,1,1],[1,0,0]]);
