/* 
"7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

"Interesting" Numbers
Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

So, you should expect these inputs and outputs:

// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
Error Checking
A number is only interesting if it is greater than 99!
Input will always be an integer greater than 0, and less than 1,000,000,000.
The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
You should only ever output 0, 1, or 2.
*/

function isInteresting(number, awesomePhrases) {
  console.log(number);

  /* 
"Interesting" Numbers
Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

*/
  let numString = number.toString(); ////
  let flag = {};

  if (numString.length > 3) {
    // Test for Any digit followed by all zeros: 100, 90000
    function testForTrailingZeroes() {
      let previous;
      for (let i = 2; i < numString.length; i++) {
        let comparativeValue = Number(numString[1]);
        if (comparativeValue === 0 || comparativeValue === 9) {
          let currentValue = Number(numString[i]);
          if (i != numString.length - 1) {
            // if (currentValue === ) {
            //   previous = 0;
            // }
            if (currentValue === comparativeValue) {
              previous = comparativeValue;
            } else {
              // console.log("here");
              break;
            }
            // if (currentValue === comparativeValue && previous === comparativeValue) {
            //   previous = comparativeValue;
            // }
            // else if (currentValue === 9) {
            //   flag.testForAllFollowingZeroes = false;

            //   break;
            // }
          } else if (currentValue + 2 === 10 || currentValue + 1 === 10) {
            flag.upcomingTrailingZeroes = 1;
          } else if (currentValue === 0 && previous === 0) {
            flag.trailingZeroes = 2;
          }
        }
      }
      if (flag.trailingZeroes === 2) {
        console.log("all trailing zeroes true");
      }
      if (flag.upcomingTrailingZeroes === 1) {
        console.log("upcoming all trailing zeroes true");
      }
    }

    //Test for the incrementing: 1234
    function testForIncrementing() {
      for (let i = 0; i < numString.length - 1; i++) {
        let previous;
        let currentValue = Number(numString[i]);
        let nextValue = Number(numString[i + 1]);
        let penultimateNumber = Number(numString[numString.length - 2]);
        let ultimateNumber = Number(numString[numString.length - 1]);

        if (i < numString.length - 1) {
          // check that all previous values are incrementing
          if (currentValue === nextValue - 1 && i < numString.length - 2) {
            previous = currentValue;

            console.log(
              "prev",
              previous,
              "penul",
              penultimateNumber,
              "ult",
              ultimateNumber
            );
            if (
              (penultimateNumber === previous + 1 && ultimateNumber === 8) ||
              (penultimateNumber === previous + 1 && ultimateNumber === 9)
            ) {
              flag.ascending = 1;
              console.log(flag.ascending);
            }
          } else if (i >= numString.length - 2) {
            // look for upcoming ascending number
            if (penultimateNumber === 9 && ultimateNumber === 0) {
              flag.ascending = 2;
              console.log("flag.ascending:", flag.ascending);
            }

            if (penultimateNumber === ultimateNumber - 1) {
              flag.ascending = 2;
              console.log("flag.ascending:", flag.ascending);
            } else if (
              penultimateNumber === ultimateNumber ||
              penultimateNumber === ultimateNumber + 1
            ) {
              flag.upcomingAscending = 1;
              console.log("flag.upcomingAscending:", flag.upcomingAscending);
            }
          } else {
            break;
          }
        }
      }
    }

    // function testForDecrementing() {
    //   let previous;
    //   for (let i = 0; i < numString.length - 1; i++) {
    //     //Test for the digits are sequential, decrementing‡: 4321
    //     let currentValue = Number(numString[i]);
    //     let nextValue = Number(numString[i + 1]);

    //     if (i < numString.length - 1) {
    //       if (currentValue === nextValue + 1 && i < numString.length - 2) {
    //         previous = currentValue;

    //       } else if (i >= numString.length - 2) {
    //         previous = numString[numString.length - 3];
    //         let idealEnding = Number(
    //           (previous - 1).toString() + (previous - 2).toString()
    //         );
    //         let penultimateNumber = Number(numString[numString.length - 2]);
    //         let ultimateNumber = Number(numString[numString.length - 1]);
    //         let finalTwo = Number(
    //           numString[numString.length - 2] + numString[numString.length - 1]
    //         );

    //         let finalNumPosOne = Number(finalTwo.toString()[0]);
    //         let finalNumPosTwo = Number(finalTwo.toString()[1]);

    //         if (previous - 1 === finalNumPosOne) {
    //           previous = finalNumPosOne;
    //         }
    //         if (previous - 1 === finalNumPosTwo) {
    //           console.log("descending sequence");
    //         }
    //         if (penultimateNumber === ultimateNumber + 1) {
    //           flag.descending = true;
    //           console.log("descending is true");
    //         } else if (
    //           // true === true
    //           idealEnding - 1 === finalTwo ||
    //           idealEnding - 2 === finalTwo
    //         ) {
    //           flag.upcomingDescending = true;
    //           console.log("flag.upcomingDescending:", flag.upcomingDescending);
    //         } else {
    //           break;
    //         }
    //       }
    //     }
    //   }
    // }

    function testForDecrementing() {
      for (let i = 0; i < numString.length - 1; i++) {
        let check;
        let currentValue = Number(numString[i]);
        let nextValue = Number(numString[i + 1]);
        if (i < numString.length - 2) {
          if (currentValue === nextValue + 1) {
            check = true;
          } else if (currentValue !== nextValue + 1) {
            check = false;
          } else {
            break;
          }
        }
        if (i >= numString.length - 2) {
          let finalCheck = Number(
            (Number(numString[0]) - i).toString() +
              (Number(numString[1]) - i).toString()
          );
          let finalNumber = Number(
            numString[numString.length - 2] + numString[numString.length - 1]
          );
          if (finalCheck === finalNumber) {
            flag.descending = 2;
            console.log("flag.descending:", flag.descending);
          } else if (
            finalCheck === finalNumber + 1 ||
            finalCheck === finalNumber + 2
          ) {
            flag.upcomingDescending = 1;
            console.log("flag.upcomingDescending:", flag.upcomingDescending);
          }
        }
      }
    }
    function searchForPalindromes() {
      //Test for the digits are a palindrome: 1221 or 73837
      let forward = "";
      let backward = "";
      for (
        let i = 0, j = numString.length;
        i < numString.length, j > 0;
        i++, j--
      ) {
        forward += numString[i];
        backward += numString[j - 1];
      }
      if (forward === backward) {
        flag.palindrome = 2;
        console.log("Palindrome Found");
      }

      // Check for upcoming palindromes
      let ultimateNumber = forward[forward.length - 1];
      let penultimateNumber = forward[forward.length - 2];

      let firstNumber = forward[0];
      let secondNumber = forward[1];

      let firstTwoReversed = secondNumber.toString() + firstNumber.toString();
      let lastTwo = Number(penultimateNumber * 10) + Number(ultimateNumber);
      if (
        Number(firstTwoReversed) === lastTwo + 1 ||
        Number(firstTwoReversed) === lastTwo + 2
      ) {
        flag.upcomingPalindrome = 1;
        console.log("Upcoming Palindrome Found");
      }
    }

    // Test for the digits match one of the values in the awesomePhrases array
    function checkAwesomePhrases() {
      for (let i = 0; i < awesomePhrases?.length; i++) {
        if (awesomePhrases[i].toString() === numString) {
          console.log("matched", awesomePhrases[i], "&", numString);
          flag.awesomePhrases = 2;
        } else if (
          awesomePhrases[i] === number + 2 ||
          awesomePhrases[i] === number + 1
        ) {
          console.log("2 mile warning", awesomePhrases[i], "&", numString);
          flag.upcomingAwesomePhrases = 1;
        }
      }
    }

    //Test for Every digit is the same number: 1111
    //   function testForAllSame() {
    //     let comparativeValue = Number(numString[0]);
    //     let check;
    //     for (let i = 1; i < numString.length - 1; i++) {
    //       if (Number(numString[i]) === comparativeValue && (i != numString.length-1 || i != numString.length-2)) {
    //       if (Number(numString[i]) === comparativeValue && i < numString.length - 2) {
    //         // check = Number(numString[i]);
    //         if (i === numString.length - 2) {
    //           let penultimateNumber = numString[numString.length - 2];
    //           let ultimateNumber = numString[numString.length - 1];
    //           let finalTwo = +penultimateNumber * 10 + +ultimateNumber;
    //           let upcomingOne = (finalTwo + 1).toString();
    //           let upcomingTwo = (finalTwo + 2).toString();
    //           if (
    //             upcomingOne[0] === upcomingOne[1] ||
    //             upcomingTwo[0] === upcomingTwo[1]
    //           ) {
    //             console.log("two mile warning same");
    //             flag.upcomingAllTheSame = true;
    //           }
    //         }
    //       }

    //     let ultimateNumber = Number(numString[numString.length - 1])
    //     let penultimateNumber = Number(numString[numString.length - 2])
    //     let finalTwo = penultimateNumber.toString() + ultimateNumber.toString()
    //     if (check != false && ultimateNumber === penultimateNumber && penultimateNumber === comparativeValue) {
    //       console.log("all the same number");
    //       flag.allTheSame = true;
    //     }
    //     if (check != false &&
    //       ((Number(finalTwo) + 1 === (Number(comparativeValue.toString()+comparativeValue.toString())) || Number(finalTwo) + 2 === (Number(comparativeValue.toString()+comparativeValue.toString()))))) {
    //       console.log('upcomingTrue')
    //       flag.upcomingAllTheSame = true
    //     }
    //   }
    //   else {
    //     check === false;
    //   }
    //   }
    // }

    function testForAllSame() {
      let firstNumber = numString[0];
      let lastTwo =
        numString[numString.length - 2] + numString[numString.length - 1];
      let finalComparison = numString[0] + numString[0];
      let check;
      for (let i = 1; i < numString.length - 1; i++) {
        if (numString[i] === firstNumber) {
          check = true;
        }
        if (i < numString.length - 3 && numString[i + 1] != firstNumber) {
          check = false;
          break;
        }
        if (i >= numString.length - 2 && check === true) {
          if (
            check === true &&
            (+lastTwo + 1 === +finalComparison ||
              +lastTwo + 2 === +finalComparison)
          ) {
            console.log("upcomingAllSame");
            flag.upcomingAllTheSame = 1;
          } else if (check === true && +lastTwo[0] === +lastTwo[1]) {
            console.log("all the same");
            flag.AllTheSame = 2;
          }
        }
      }
    }

    testForTrailingZeroes(); // Seems to be fully working

    testForIncrementing(); //  Seems to be fully working

    testForDecrementing();

    searchForPalindromes(); // Seems to be fully working

    checkAwesomePhrases(); // Seems to be fully working

    testForAllSame(); // Seems to be fully working
    processFlagObject();
  }

  // Edge case fixes

  //? Trailing Zeroes
  else if (numString === "99" || numString === "98") {
    flag.upcomingTrailingZeroes = 1;

  } else if (
    Number(numString[numString.length - 2] + numString[numString.length - 1]) +
      1 ===
      100 ||
    Number(numString[numString.length - 2] + numString[numString.length - 1]) +
      2 ===
      100
  ) {
    flag.upcomingTrailingZeroes = 1;
  } else if (
    numString[numString.length - 2] + numString[numString.length - 1] ===
    "00"
  ) {
    flag.trailingZeroes = 2;

    // //? Palindromes

    if (numString.length === 3) {
      let finalTwo = numString[1] + numString[2];
      // console.log("finalTwo", finalTwo);
      // console.log("Number(numString[0])",Number(numString[0]))
      // console.log("here",(+finalTwo+1))
      let firstNumber = numString[0];
      console.log("finalTwo", typeof finalTwo);
      console.log("here", finalTwo.toString()[finalTwo.toString().length - 1]);
      if (
        firstNumber ===
          Number(finalTwo + 1).toString()[finalTwo.toString().length - 1] ||
        firstNumber ===
          Number(finalTwo + 2).toString()[finalTwo.toString().length - 1]
      ) {
        flag.upcomingPalindrome = 1;
        console.log("flag.upcomingPalindrome", flag.upcomingPalindrome);
      } else if (numString[0] === finalTwo[finalTwo.toString().length - 1]) {
        flag.palindrome = 2;
        console.log("flag.palindrome", flag.palindrome);
      }
    }

    //? Ascending
    if (numString.length === 3) {
      let finalTwo = Number(numString[1] + numString[2]);
      let finalCheck = Number(
        (+numString[0] + 1).toString() + (+numString[0] + 2).toString()
      );
      // console.log("finalTwo", finalTwo);
      // console.log("finalCheck:", finalCheck);
      if (numString === "890") {
        flag.ascending = 2;
        console.log(flag.ascending);
      } else if (numString === "889" || numString === "887") {
        flag.upcomingAscending = 1;
        console.log("flag.upcomingAscending", flag.upcomingAscending);
      } else if (Number(+numString[0] + 1) === Number(numString[1])) {
        if (finalTwo === finalCheck) {
          flag.ascending = 2;
          console.log("flag.ascending:", flag.ascending);
        } else if (finalCheck === finalTwo + 1 || finalCheck === finalTwo + 2) {
          flag.upcomingAscending = 1;
          console.log("flag.upcomingAscending:", flag.upcomingAscending);
        }
      }
    }

    //? Descending
    if (numString.length === 3) {
      let finalTwo =
        numString[numString.length - 2].toString() +
        numString[numString.length - 1].toString();
      let check = numString[0] + (Number(numString[0]) - 1).toString();
      console.log("check:", check);
      if (
        +finalTwo[0] === +numString[0] - 1 &&
        +finalTwo[1] === +numString[1] - 1
      ) {
        console.log("flag.descending = 2");
        flag.descending = 2;
      } else if (
        +finalTwo + 1 === Number(check[1] + Number(check[1] - 1).toString()) ||
        +finalTwo + 2 === Number(check[1] + Number(check[1] - 1).toString())
      ) {
        flag.upcomingDescending = 1;
        console.log("flag.upcomingDescending = 1");
      }
    }

    //? AwesomePhrases
    if (numString.length === 3) {
      if (awesomePhrases) {
        for (let i = 0; i < awesomePhrases.length; i++) {
          if (numString === awesomePhrases[i].toString()) {
            console.log("flag.awesomePhrases = 2");
            flag.awesomePhrases = 2;
          } else if (
            numString === (awesomePhrases[i] - 1).toString() ||
            numString === (awesomePhrases[i] - 2).toString()
          ) {
            flag.awesomePhrases = 1;
            console.log("flag.awesomePhrases = 1");
          }
        }
      }
    }

    processFlagObject();
  } else {
    console.log("returning 0");
    return 0;
  }
  function processFlagObject() {
    console.log(flag);
    let flagArray = Object.values(flag);
    console.log("flagArray: ", flagArray);

    if (flagArray.includes(2)) {
      console.log("2");
      return 2;
    } else if (flagArray.includes(1)) {
      console.log("1");
      return 1;
    } else {
      console.log("end", 0);
      console.log("0");
      return 0;
    }
  }
}

// isInteresting(3, [1337, 256]), 2; //should hand le awesome phrases
// isInteresting(1337, [1337, 256]), 2; //should handle awesome phrases
// isInteresting(100, [1337, 256]), 2; //should handle palindromic numbers numbers
isInteresting(653, [1337, 256]), 2; //should handle decrementing sequences
// isInteresting(255, [1337, 256]), 1; //should handle upcoming awesome phrases
// isInteresting(890, [1337, 256]), 1; //should handle upcoming incrementing sequences
