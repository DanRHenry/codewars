/* 
Your task is to construct a building which will be a pile of N cubes. The cube at the bottom will have a volume of N cubed, the cube above will have volume of (N − 1) cubed and so on until the top which will have a volume of 1 cubed.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as N cubed + (N - 1) cubed + (N - 2) cubed + ... + 1 cubed =m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1

tutorial - https://www.youtube.com/watch?v=NVA_YuRqscE
*/


function findNb(m) {
    let counter = 0;
    let n = 0;
    for (let i = 0; counter < m; i++) {
        n += 1;
        //! this was my missing piece; I didn't fully understand that cubing wasn't already taken care of, so I left that out of the answer
        counter += n**3;
        }
    if (counter === m) {
        console.log(n)
        return n;
    } else {
        console.log(-1)
        return -1
    }
}

findNb(1071225)