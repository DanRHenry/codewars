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
  console.log(awesomePhrases);
  awesomePhrases.splice(awesomePhrases.indexOf(","), 1);
  console.log(awesomePhrases);
  awesomePhrases = awesomePhrases.toString();
  console.log("Number (first)", number);
  /* 
"Interesting" Numbers
Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

*/
  let numString = number.toString();
  if (numString.length >= 3) {
    console.log(
      "number: ",
      numString,
      "length: ",
      numString.length,
      "should be >= 3"
    );

    // Test for the digits match one of the values in the awesomePhrases array
    //The digits match one of the values in the awesomePhrases array

    function checkAwesomePhrases() {
      let newStringArray = [];
    //   console.log("numString:", typeof numString);
      for (let i = 0; i < awesomePhrases.length; i++) {
        for (let j = 0; j < awesomePhrases[i]; j++) {
            newStringArray.push(awesomePhrases[i-1][j-1])
        }
        // newStringArray.push(awesomePhrases[i]);
        console.log(newStringArray);
      }
      // console.log(newStringArray)

      for (item of newStringArray) {
        // console.log(item);
        // if ((item[0] = item)) {
        //   for (let i = 0; i < awesomePhrases.length; i++) {
            // console.log(awesomePhrases[i])
            // console.log(typeof numString, numString);
            // let numStringIndex = newStringArray.indexOf(item);
            // if (numString[numStringIndex] == awesomePhrases[i]) {
            // }
        //   }
        // }
      }
    }

    // Test for Any digit followed by all zeros: 100, 90000
    function testForAllFollowingZeroes() {
      for (let i = 1; i < numString.length; i++) {
        let shouldBeZero = +numString[i];
        if (shouldBeZero != 0) {
          console.log(numString);
          console.log(shouldBeZero);
          console.log("not zero");
          return false;
        }
      }
      console.log("is zero");
      return true;
    }

    //Every digit is the same number: 1111

    function testForAllSame() {
      for (let i = 0; i < numString.length - 1; i++) {
        if (numString[i] != numString[i + 1]) {
          console.log("not the same");
          return false;
        }
      }
      console.log("all the same");
    }

    //The digits are sequential, incementing†: 1234
    //The digits are sequential, decrementing‡: 4321
    //The digits are a palindrome: 1221 or 73837

    function testForSequentialOrPalindrome() {
      let flag = {};
      for (
        let i = 0, negindex = numString.length - 1;
        i < numString.length - 1, negindex > 1;
        i++, negindex--
      ) {
        // function ascendingTest() {
        // Test for ascending sequence
        if (Number(numString[i]) === Number(numString[i + 1] - 1)) {
          flag.ascending = true;
        }
        if (
          Number(numString[negindex]) === Number(numString[negindex - 1] - 1)
        ) {
          flag.descending = true;
        }
        if (numString[negindex] === numString[i]) {
          flag.palindrome = true;
        } else if (numString[negindex] !== numString[i]) {
          flag.palindrome = false;
          break;
        }
      }
      if (flag.ascending === true || flag.descending === true) {
        console.log("sequential");
      }

      if (flag.palindrome === true) {
        console.log("palindrome");
      } else {
        console.log("not sequential");
      }
    }

    checkAwesomePhrases();
  }
}

// isInteresting(30000000, [1337, 256], 0);
// isInteresting(1000000000000);
// isInteresting(111111111, [1337, 256]);
// isInteresting(1234);
// isInteresting(4321);
// isInteresting(4321)
// isInteresting(3, [1337, 256], 0);
// isInteresting(1336, [1337, 256], 1);
// isInteresting(1337, [1337, 256], 2);
// isInteresting(11208, [1337, 256], 0);
isInteresting(11209, [1337, 256], 1);
// isInteresting(11211, [1337, 256], 2);
