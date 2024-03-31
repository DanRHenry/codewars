/* 
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
  // crete the output array
  let output = [];

  for (let i = 0; i < nFloors; i++) {
    // create space holders for left and right
    let leftSpaces = [""];
    let rightSpaces = [""]

    // create the result holder
    let result = "";
  
    // for each iteration of the nFloors, add spaces on each side
    for (let i = 1; i < nFloors; i++) {
      leftSpaces.unshift(" ");
      rightSpaces.push(" ")
    }

    // add asterisks to left and right, and remove spaces from left and right
    for (let j = 0; j < i; j++) {
      leftSpaces.shift(" ");
      leftSpaces.push("*");
      rightSpaces.pop(" ")
      rightSpaces.unshift("*")
    }

    // put it all together
    result += leftSpaces.join("");
    result += "*";
    result += rightSpaces.join("");
    output.push(result);
  }
  console.log(output)
  return output;
}

towerBuilder(10)