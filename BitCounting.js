/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
    // Program Me
    let counter = 0
    let number = n.toString(2)
    for (num of number){
        if (num == 1) {
            counter ++
        }
        }
    return (counter)
  };

  countBits(1223445)