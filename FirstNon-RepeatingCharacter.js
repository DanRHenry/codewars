/* 
Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
*/

function firstNonRepeatingLetter(s) {
  const letterArray = [];
  for (let i = 0; i < s.length; i++) {
    let letterToCheck = s[i].toLowerCase();
    let letterCounter = 0;
    for (letter of s) {
      if (letter.toLowerCase() == letterToCheck) {
        letterCounter++;
      }
    }
    if (letterCounter === 1) {
      letterArray.push(s[i]);
    }
  }
  if (letterArray.length > 0) {
    console.log(letterArray[0]);
    return letterArray[0];  
  }
  else {
    return "";
  }
}

firstNonRepeatingLetter('a');
firstNonRepeatingLetter('stress');
firstNonRepeatingLetter('moonmen');
