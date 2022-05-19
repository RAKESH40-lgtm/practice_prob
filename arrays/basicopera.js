let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
/**
 * Program to print an array elements 
 * TestCase:
 * TC0:
 * 5
 * 1 2 3 4 5
 * 1 2 3 4 5
 * Algorithm:
 * step1:Take n size of array.
 * step2:take array as empty or using split take the array.
 * step3:using for loop read and print the output of an array.
 */
let size=parseInt(readLine());
// let arr=[];
// //without-using split().
// for(let index=0;index<size;index++){
//    arr[index]= arr.push(parseInt(readLine));
// }
// console.log(arr);
let arr=readLine().split(" ");
for(let i=0;i<size;i++){
    arr[i]=parseInt(arr[i]);
}
console.log(arr);