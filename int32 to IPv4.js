/* 
Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

Examples
2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"
*/

function int32ToIp(int32) {
  let base16 = int32.toString(16);
  let output = [];
  while (base16.length < 8) {
    base16 = "0" + base16;
  }
  for (let i = 0; i < base16.length; i += 2) {
    output.push(parseInt(base16[i] + base16[i + 1], 16));
  }
  if (output[0] == 0) {
    output = [0, 0, 0, 0];
  }
  console.log(output.join("."));
  return output.join(".");
}

doTest = int32ToIp;
doTest(2154959208, "128.114.17.104");
doTest(0, "0.0.0.0");
doTest(2149583361, "128.32.10.1");
doTest(2 ** 32 - 1, "255.255.255.255");
doTest(174926419);
//expected '166.210.165.3'
//to equal '10.109.42.83'
doTest(5628250);
/* 
5628250
: expected '85.225.90' to equal '0.85.225.90'
*/
