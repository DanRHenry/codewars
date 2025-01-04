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
  let outputArray = [];
  let startingPosition = 0;

  // iterate over the triplets sub-array.
  for (let i = 0; i < triplets.length; i++) {
    console.log("1 - iterate over the triplets sub-array ", i)
    for (let j = 0; j < 3; j++) {
      console.log("2 - iterate over each item of the triplet sub-array ", j)
      if (outputArray.length > 0) {
        console.log("The output array length is greater than zero")
        // For each item in the next triplets sub-array iterate over the output for a match

        for (let k = 0; k <= outputArray.length; k++) {
          console.log("iterate over the output array", k)
        // if there is no match, continue to splice into the output array
          if (triplets[i][j] != outputArray[k]) {
            console.log(triplets[i][j], "::", outputArray[k])
            console.log("3")
            outputArray.push(triplets[i][j])
            // console.log("outputArray", outputArray)
            // outputArray.splice(startingPosition, 0, triplets[i][j]);
          } if (triplets[i][j] == outputArray[k]) {
        // if there is a match, assign that location of the match as the spot to splice new items into the output array ; after the sub-array is concluded, reset the starting location to zero again
        //todo find bug in here
        console.log("4")
            // startingPosition = k;
            outputArray.push(triplets[i][j]);
            console.log(outputArray)
            j++
            // outputArray.splice(startingPosition, 0, triplets[i][j]);
          }
        }
        // triplets[i]
      } else {
        outputArray.push(triplets[i][j]);
        console.log("5")
        console.log(outputArray)
      }
      startingPosition = 0;
    }
  }
  console.log(outputArray)
};

pushOrSplice(triplets);
