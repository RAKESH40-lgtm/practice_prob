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
 * Program to print the elements in an array of odd position .
 * TC:
 * 5
 * 1 2 3 4 5 
 * 1 3 5
 * Algorithm:
 * step1:take size of an array.
 * step2:Read the input of an array through looping.
 * step3:check incr i by i+2 from 0 index.
 */
let n=parseInt(readLine());
let arr=readLine().split(" ").map(Number);
console.log( arr)
for(let i=0;i<n;i=i+2){
    console.log(`odd index ${i}:${arr[i]}`);
}

