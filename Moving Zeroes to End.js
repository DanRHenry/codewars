function moveZeros(arr) {
  const output = [];
  const temp = [];
  for (item of arr) {
    if (item === 0) {
      temp.push(item);
    } else {
      output.push(item);
    }
  }
  temp.map(() => {
    output.push(0);
  });
  return output;
}