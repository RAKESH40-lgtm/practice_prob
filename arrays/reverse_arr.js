let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
 /* Write a program to print array in reverse order.
 * test case:
 * TC0:          TC1:      TC2:
 * 5              3          4
 * 1 2 3 4 5    3 5 6     1 3 5 6
 * 5 4 3 2 1    6 5 3     6 5 3 1
 * Algorithm:
 * step1:Take n size of array.
 * step2:create an array by using split()
 * step3:Input those array using loop.
 * step4:To print array in reverse order loop the array through right side i.e (n-1) to 0 by decr each index.
 */
let size=parseInt(readLine());
var arr=readLine().split(" ");
for(let i=0;i<size;i++){
    arr[i]=parseInt(arr[i]);
}
// console.log(arr.reverse());

for(let i=size-1;i>=0;i--){
    console.log(arr[i])
}