/* 
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246

*/

function ipsBetween(start, end){
    let startArray = start.split(".")
    let endArray = end.split(".")
    let result = []
    let output = 0
    let power = 0;

    for (let i = 0; i < endArray.length; i++) {
        result.push(endArray[i] - startArray[i])
    }

    for (let i = result.length-1; i >= 0; i--) {
        // by the way, exponents don't work like multplication. 256 ** power != power ** 256
        output+= result[i] * (256 ** power)
        power += 1;
    }
    return(output)
  }