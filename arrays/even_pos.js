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
 * Problem: To print the elements in even position.
 * TestCase:
 * 1 2 3 4 5
 * 2 4
 * Algorithm:
 * step1:Take n size of array.
 * step2:create an array by using split()
 * step3:Input those array using loop.
 * step4:inside loop place i=1 and i=i+2 and print the even position.
 */
let size=parseInt(readLine());
let arr=readLine().split(" ");
for(let i=0;i<size;i++){
    arr[i]=parseInt(arr[i]);
}
console.log(arr);
for(let i=1;i<size;i=i+2){
    console.log(arr[i]);
}