// 22. Write a Program to print the Fibonacci Half Pyramid Pattern.

const n = 5;
let a = 0;
let b = 1;    
let c = a + b;

for (let i = 1; i <= n; i++) {
    let str = " ";
    for (let j = 1; j <= i; j++) {
        str += `${c} `;
        c = a + b;//2nd time 1+1 = 2
        a = b;//1
        b = c;//1
    }
    console.log(str);
}