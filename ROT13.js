/* 
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
*/

let ROT13Lib = "nopqrstuvwxyzabcdefghijklm";
let alphabet = "abcdefghijklmnopqrstuvwxyz";

function rot13(str) {
let output = [];
  for (let i = 0; i < str.length; i++) {
    if (alphabet[alphabet.indexOf(str[i])] === str[i]) {
      // if the alphabet at the index of the letter at string [i] and string [i] match... 
      // then push the corresponding character from the ROT13Lib to the output
      output.push(ROT13Lib[alphabet.indexOf(str[i])]);
    } else if (
      alphabet[alphabet.indexOf(str[i].toLowerCase())] == str[i].toLowerCase()
      // if the string[i] needs to be lowercase to be found in the alphabet...
    ) {
      // then push the uppercase letter from the corresponding ROT13Lib position to output
      output.push(
        ROT13Lib[alphabet.indexOf(str[i].toLowerCase())].toUpperCase()
      );
    } else {
      output.push(str[i].toLowerCase());
    }
  }
  return(output.join(""))
}
