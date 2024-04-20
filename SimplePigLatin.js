function pigIt(str){
    //Code here
  // create exclamation variable
    let excl = "";
  // check if the last character of the string is an exclamation point
    if (str[str.length -1] == "!") {
      // if so, remove the exclamation point, and redefine the excl variable as "!"
    str = str.slice(1, -1)      
    excl = "!"
}
  // Create an array out of the string words
  console.log("str without excl: ",str)
    let words = str.split(" ");

    // create a temporary array to hold the output sentence as each word is processed
    let temp = []
    for (let i = 0; i < words.length; i++) {
    // remove the first letter of each word, add the first letter to the end, and add "ay"
    console.log("words[i]: ",words[i])
    // if (words[i] != undefined || words[i]!= " ") {
        if (words[i].length > 1) {
       temp.push(words[i].slice(1) + (words[i][0]) + "ay")
       console.log("temp: ", temp)
    } else {
        temp.push(words[i].slice(1) + (words[i][0]) + "ay")
        console.log("temp: ", temp)
    }
    // }
    } 
    // after the temp array is full, check if the excl variable has been populated and push it to the array if it has been.
    if (excl.length > 0) {
        temp.push(excl)
    }
    console.log(temp)
    for (item of temp) {
        if item === defined {
            
        }
    }
    // console.log(temp.join(" "))
    return(temp.join(" "))
}

pigIt(" tempora o mores ")