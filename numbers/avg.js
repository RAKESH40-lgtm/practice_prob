/**
 * Problem:To get avg of given number
 * TestCase:
 * 5
 * 3
 * Algorithm:
 * step1:Take number.
 * step2:take sum=0.
 * step3:use for loop by i=0 and<number
 *       add the sum with i
 * step4:div that sum with n
 * step5:print avg.
 */
let number=5;
let sum=0;
for(let i=1;i<=number;i++){
    sum=sum+i;
}
console.log(sum);
let avg=sum/number;
console.log(avg);
/**
 * Dry Run:
 * line14:number=5
 *       RHS 5 assign to number
 * line15:sum=0
 *       RHS 0 assign to sum
 * line16-18:inside loop 
 *       i=1 ,sum=sum+i 0+1 sum=1
 *       i=2,sum=sum+i 1+2  sum=3
 *       i=3 ,sum=sum+i 3+3 sum=6
 *       i=4,sum=sum+i   6+4 sum=10
 *       i=5,sum=sum+i  10+5 sum=15
 * line19: prints sum as 15
 * line20:compute sum/number i.e 15/5=3
 * line21:prints avg=3
 */