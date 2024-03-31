/* 
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

*/

// return masked string
function maskify(cc) {
  let output = [];
// Iterate over the cc, converting to string
  for (let i = cc.toString().length - 1; i >= 0; i--) {

// Unshift the last four numbers to the output array
    if (i >= cc.toString().length - 4) {
      output.unshift(cc.toString()[i]);

// Unshift the remaining numbers to the output array
    } else {
      output.unshift("#");
    }
  }

// Return the output as a string
  return output.join("");
};