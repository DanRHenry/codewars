/* 
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
function generateHashtag (str) {
    let output = "#";
    let workingArray = str.split(" ")

    workingArray.map((word) => {
        for (let i = 0; i < word.length; i++) {
            if (i === 0) {
                output += word[i].toUpperCase();
            } else {
                output += word[i];
            }
        }
    })
    if (output.length > 140) {
        return false
    }
    if (str < 1) {
        return false
    }
    return output
}

generateHashtag("bla bla bla here's another blaasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")