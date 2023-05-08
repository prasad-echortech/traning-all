// Write a Java Program to print the Solid Half Diamond Star Pattern.

const n = 5;
for (let i = 1; i <= n; i++) {
let str = "";
 for(let j = 1; j <= i; j++){
    str += "*";
 }
console.log(str)
}

for (let i = 1; i <= n; i++) {
    let str = "";
     for(let j = n-1; j >= i ; j--){
        str += "*";
     }
    console.log(str)
    }
    
