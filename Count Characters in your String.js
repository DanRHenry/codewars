/* 
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  let stringLetters = [];
  let output = {}

  for (let i = 0; i < string.length; i++) {
    stringLetters.push(string[i]);
  }
  let sorted = stringLetters.sort()
  for (let i = 0; i < sorted.length; i++) {
    if (output[sorted[i]] === undefined) {
        output[sorted[i]] = 1
    }
    else {
        output[sorted[i]] ++
    }
  }
  // console.log(output)
  return output;
}

count("sasdfa")