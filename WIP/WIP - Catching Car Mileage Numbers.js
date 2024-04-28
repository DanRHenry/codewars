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

*/  let numString = number.toString();

  if (numString.length >= 3 || numString === "99" || numString === "98") {
        // function testForSequentialOrPalindrome() {
          let flag = {};

          for (
            let i = 0;
            i < numString.length - 1;
            i++
          ) {
            //Test for the incrementing: 1234
            console.log(Number(numString))
            console.log(Number(numString[i]))
            let upcoming1 = (number+1);
            let upcoming2 = (number+2);
            console.log(numString.length -2)
            console.log(numString[numString.length-1])
            if (Number(numString[i]) === Number(numString[i + 1] - 1)) {
              console.log('ascending = true')
              flag.ascending = true;
            } 
            else if (numString.length-2 === i) {
              let penultimateNumber = Number(numString[numString.length-2])
              let ultimateNumber = Number(numString[numString.length-1]);

              console.log("penultimateNumber",penultimateNumber)
              console.log("ultimateNumber",ultimateNumber)
              console.log("subtracted:",ultimateNumber - penultimateNumber)
              // look for upcoming ascending number
              if (ultimateNumber - penultimateNumber === 0 || ultimateNumber - penultimateNumber === -1) {
                console.log("here")

                console.log("flag.upcomingAscending = true")
                flag.upcomingAscending = true;
              } 
            // else if (numString.length-2 === i && numString[i] === numString[i+1]) {

            // }else if (numString.length-2 === i && numString[i] === numString[i+1]-1) {
              // console.log("upcomingAscending = true");
              // flag.upcomingAscending = true;

            } else  {
              flag.ascending = false;
              break;
            }

            // Test if the incrementing number is one or two away
{
              if (Number(numString[i]) === Number(numString[i + 1] - 1)) {
                console.log('ascending = true')
                flag.ascending = true;

              } 
              else  {
                flag.ascending = false;
                break;
              }
            }




            // for (let negindex = numString.length - 1; negindex > 1; negindex--) {}
            // if (Number(numString[i]) === Number(numString[i + 1] -2) || numString[i] === Number(numString[i+1] -1)) 
            // {
            //   console.log("upcomingAscending = true")

            //   flag.upcomingAscending = true;
            //   // flag.ascending = false;
            // }
            //Test for the digits are sequential, decrementing‡: 4321
      
            // if (Number(numString[negindex]) === Number(numString[negindex - 1] - 1)) {
            //   flag.descending = true;
            // } else if (
            //   //!check on the 2 mile warning here
            //   Number(numString[negindex]) - 2 ===
            //     Number(numString[negindex - 1] - 1) ||
            //   //!check on the 2 mile warning here
            //   Number(numString[negindex]) - 1 === Number(numString[negindex - 1] - 1)
            // ) {
            //   flag.upcomingDescending = true;
            // }
            //Test for the digits are a palindrome: 1221 or 73837
            let forward = [];
            let backward = [];
            // console.log("numstr.length",numString.length)
            // for (
            //   let i = 0, j = numString.length;
            //   i < numString.length, j > 0;
            //   i++, j--
            // ) {

            //   forward.push(numString[i]);
            //   // backward.push(numString[j-1]);
            // }
            let adjusted = forward;
            if (adjusted);
            // console.log("forward:",forward)
            // console.log("backward:",backward)
            let backwardOneMile = backward[backward.length - 1] + 1;
            let backwardTwoMiles = backward[backward.length - 1] + 2;
            // console.log(backwardOneMile);
            // console.log(backwardTwoMiles);
            // if (numString[negindex] === numString[i]) {
            //   if (forward.join("") === backward.join("")) flag.palindrome = true;
            //   //!check on the 2 mile warning here
            // } else if (
            //   forward[0] == backwardOneMile ||
            //   forward[0] == backwardTwoMiles
            // ) {
            //   flag.upcomingPalindrome = true;
            // } else if (numString[negindex] !== numString[i]) {
            //   flag.palindrome = false;
            //   break;
            // }
          }
      
          if (flag.ascending === true || flag.descending === true) {
            // console.log("sequential");
            // console.log("flagup2: ", flag);
            return 2;
          }
          if (flag.upcomingAscending === true || flag.upcomingDescending === true) {
            // console.log("warning sequential");
            // console.log("flagup1: ", flag);
            return 1;
          // }
      
          // if (flag.palindrome === true) {
          //   console.log("palindrome");
          //   console.log("flag: ", flag);
          //   return 2;
          // } else if (flag.upcomingPalindrome === true) {
          //   return 1;
          } else {
            console.log("not sequential");
            // return 0;
          }
          // }
          // testForSequentialOrPalindrome();
    // Test for the digits match one of the values in the awesomePhrases array
    // function checkAwesomePhrases() {
    for (let i = 0; i < awesomePhrases?.length; i++) {
      if (awesomePhrases[i].toString() === numString) {
        console.log("matched", awesomePhrases[i], "&", numString);
        return 2;
      } else if (
        awesomePhrases[i] === number + 2 ||
        awesomePhrases[i] === number + 1
      ) {
        console.log("2 mile warning", awesomePhrases[i], "&", numString);
        return 1;
      }
    }
    // }

    // checkAwesomePhrases();
    let shouldBeZero;
    // Test for Any digit followed by all zeros: 100, 90000
    // function testForAllFollowingZeroes() {
    for (let i = 1; i < numString.length; i++) {
      shouldBeZero = +numString[i];
      // return true;
    }
    if (shouldBeZero === 0) {
      return 2;
    } else if (shouldBeZero + 2 === 0 || shouldBeZero + 1 === 0) {
      return 1;
    }
    // }

    // testForAllFollowingZeroes();
    //Test for Every digit is the same number: 1111

    let same;
    // function testForAllSame() {
    for (let i = 0; i < numString.length - 1; i++) {
      if (numString[i] === numString[i + 1]) {
        same = true;
      } else if (
        (number[i] + 2).toString() === numString[i + 1] ||
        (number[i] + 1).toString() === numString[i + 1]
      ) {
        console.log("two mile warning same");
        return 1;
      }
      else {
        same = false;
      }
    }
    if (same === true) {
      console.log("the same");
      return 2;
    }

    // }

    // testForAllSame();
    // return 0;
  } else {
    return 0;
  }
}
// isInteresting(30000000, [1337, 256], 2);
// isInteresting(1000000000000);
// isInteresting(111111111, [1337, 256]);
isInteresting(1933);
// isInteresting(4321);
// isInteresting(4321);
// isInteresting(3, [1337, 256], 0);
// isInteresting(1336, [1337, 256], 1);
// isInteresting(256, [1337, 256], 2);
// isInteresting(11208, [1337, 256], 0);
// isInteresting(11209, [1337, 256], 1);
// isInteresting(11211, [1337, 256], 2);
