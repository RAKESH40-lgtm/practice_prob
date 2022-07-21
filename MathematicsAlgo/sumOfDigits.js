let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n=parseInt(readLine());
let sum=0,rem;

while(n>0){ //in the loop runs till the n >0
    rem=n%10;   //here getting a last digit i.e 125%10=5
    sum=sum+rem;//add that rem to sum 
    n=n/10;//gettting the other two digits 
}
console.log(sum);