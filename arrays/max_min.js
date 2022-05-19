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
 * Find the minimum and maximum element in an array.
 * Testcase:
 * TC0:                    TC1:                     TC2:
 * 5                         4                        2
 * 1 2 3 4 5               2 3 5                    1 2
 * max:5.                  max:5                    max:2
 * min:1.                  min:2                    min:1
 * Algorithm:
 * step1:Take n size of input.
 * step2:using for loop iterate over it and read the elements of array.
 * step3:create max function  and inside that assign arr[0]to max and compare arr[i]>max,traverse and find the max element and check max and assign it to max and return max.
 * step4:same as step3 for min.
 * step5:call both the function with parameter. and also can use inbuilt math.max and math.min to compare values.
 */
function maximum(arr){
    let max=arr[0];
    for(let i=1;i<size;i++){
        // max=Math.max(max,arr[i]);
        if(arr[i]>max){
            max=arr[i];
          
        } 
    }
    return max;
}
function minimum(arr){
    let min=arr[0];
    for(let i=1;i<size;i++){
        // min=Math.min(min,arr[i]);
        if(arr[i]<min){
             min=arr[i];
        }
      
    }
    return min;
}
let size=parseInt(readLine());
let arr=readLine().split(" ");
for(let i=0;i<size;i++){
    arr[i]=parseInt(arr[i]);
}
console.log(arr);
console.log(`max:${maximum(arr)}`);
console.log(`min:${minimum(arr)}`);