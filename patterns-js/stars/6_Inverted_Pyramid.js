// 6. Write a Program to print an inverted pyramid star pattern.

const n = 5;
for(let i = 1; i <= n; i++){
    let str = "";
    for(let j = 1; j <= i; j++){
        str += " ";
    }
    for(let k = n; k >= i; k--){
        str += " *";
    }
    console.log(str)
}