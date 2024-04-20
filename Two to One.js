/* 
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    let combinedArray = (s1+s2).split("").sort();
    let fullArray = []
    combinedArray.map ((item) => {
        fullArray.push(item)    })
    for (let i = 0; i < fullArray.length; i++) {
        if (fullArray[i] === fullArray[i + 1]) {
            fullArray.splice(i+1, 1)
            i -= 1
        }
    }
    console.log(fullArray)
  }
  longest("zxcvbcadefg", "asdfasdf")