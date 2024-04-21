/* 
There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
*/

let triplets = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];

let pushOrSplice = () => {
  let workingArray = [];

  for (let row = 0; row < triplets.length; row++) {
    let index = 0;
    let leftSide = [];
    let rightSide = [];

    let currentRow = triplets[row];
    // console.log("row: ", row);

    function testArray(currentArray) {
      for (let column = 0; column < 3; column++) {
        // console.log("column: ", column);
        let currentLetter = triplets[row][column];
        // console.log("currentLetter: ",currentLetter)

        if (currentArray.includes(currentLetter)) {
          index = currentRow.indexOf(currentLetter);
        }
      }
    }

    testArray(workingArray);

    // create left and right sides where the duplicate letter exists
    if (index > 0) {
      console.log("WA: ", workingArray);
      rightSide = currentRow.slice(index);
      console.log("CR", currentRow);
      leftSide.splice(leftSide.indexOf(currentRow[index])+1, 1);

      currentRow.length = 3 - rightSide.length;
      leftSide = currentRow;
      console.log("LS: ", leftSide);
      for (let i = leftSide.length - 1; i > 0; i--) {
        workingArray.splice(index, 0, leftSide[i]);
      }
      console.log("RS:", rightSide);
      // workingArray.splice(index, 0, leftSide)

      console.log("rerunning test for the right side");
      testArray(rightSide);
    } else {
      for (item of currentRow) {
        if (workingArray.length < 3) {
          workingArray.push(item);
        } else {
          workingArray.unshift(item);
        }
      }
    }
  }
};

pushOrSplice(triplets);
