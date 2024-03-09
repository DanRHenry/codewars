function findOutlier(integers) {
  console.log("hello?");
  //your code here
  // Check that the integers are even or odd
  let odd = [];
  let even = [];
  //   for (let i = 0; i < integers.length; i++) {
  integers.map((integer) => {
    console.log(integer % 2);
    // Push even integers to even array
    if (integer % 2 === 0) {
      even.push(integer);
    }
    // Push odd integers to odd array
    if (integer % 2 === 1 || integer % 2 === -1) {
      odd.push(integer);
    }
  });
  //   }
  // Whichever array goes beyond two first is the nature of the integers
  if (even.length > odd.length) {
    for (integer of integers) {
      // console.log(integer)
      // Search the array for the opposite and return the "outlier"

      if (integer % 2 === 1 || integer % 2 == -1) {
        console.log("integer:", integer);
        return integer;
      }
    }
  }
  if (odd.length > even.length) {
    // Search the array for the opposite and return the "outlier"
    for (integer of integers) {
      if (integer % 2 === 0) {
        console.log("integer:", integer);
        return integer;
      }
    }
  }
}

findOutlier([
  -180202213, -68152130, 190220768, -149090074, -157927430, -4447686, 164660482,
  191925976, 57933412, 129641130, -198330428, -199103984, -123140422,
  -196940414, 60780888, -137746264, -46831232, -75671624, -136368084, -44614600,
  10683718, -110900124, -53945022, 174633626, 105249998, -154506008, -8970946,
  132357394, -77963882, 144491924, 174167800, -102209614, -106352144,
  -157843394, -106389804, -69065646, 126504980, 150599690, 145433804,
  -105526352,
]);
