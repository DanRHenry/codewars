//! This is not complete
//! With large numbers, the exponential number is returned.

/* 
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
*/
 
function sumStrings(a,b) { 
    const nu = (+a + +b).toString(16)
    console.log((parseInt(nu,16)-1234256))
    return parseInt(nu, 16).toString()
}

sumStrings("1234", "1234")
sumStrings('712569312664357328695151392', '8100824045303269669937')