/* 
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

function rgb(r, g, b) {
  let output = []
  let input = [r, g, b];
  for (let i = 0; i < input.length; i++) {
    let item = input[i]
    if (item < 0) {
      item = 0;
    }
    if (item > 255) {
        item = 255
    }
    if (item.toString(16).length === 2) {
      output.push(item.toString(16).toUpperCase())
    }
    else {
      output.push("0"+item.toString(16).toUpperCase())
    }
  }
  return(output.join(""));
}