/* 
DESCRIPTION:
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. //*Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

function spinWords(string) {
  let outputString = "";
  // parse the string of words splitting at the spaces
  let stringArray = string.split(" ");

  // check if there is more than one word in the stringArray
  if (stringArray.length > 1) {
    // if there is more than one word, add a space between the words
    for (let i = stringArray.length - 1; i > 0; i--) {
      stringArray.splice(i, 0, " ");
    }
  }
  // check the length of each word in the string
  stringArray.map((word) => {
    if (word.length >= 5) {
      for (let i = word.length - 1; i >= 0; i--) {
        outputString += word[i];
      }
    } else {
      outputString += word;
    }
  });
  return outputString;
}
