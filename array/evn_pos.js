/**
 * Problem:To print the even position array elements.
 * Test case:
 * [ 1, 2, 3, 4, 5 ]
 * 1,3,5
 * Algorithm:
 * step1:Declare an array
 * step2:we can find even position by two ways 
 *       1)if(i%2===0) print even position
 *       2)initial index at 0 and index+2
 * step3:print the even positions array
 */
//code
let arr=[1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    if(i%2===0){
    console.log(arr[i]);
    }
}
console.log("alternative solution");
for(let i=0;i<arr.length;i=i+2){
        console.log(arr[i]);
}

/**
 * Dry Run:line14:Declare and initialize arr
 * line15-18:inside loop 
 *    it checks from index 0 to arr.length
 *    line16:i%2===0 print the array
 *    line17:prints 1 3 5 
 * line20-21:Alternative of if by initial index at 0 and index+2
 */