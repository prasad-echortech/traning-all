// 9. Write a program to Print a solid Diamond Star Pattern.
const n = 5;

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (let k = 1; k <= i; k++) {
        str += " *";
    }
    console.log(str);
}
for(let i = 2; i <= n; i++){
    let str = "";
    for(let j = 2; j <= i; j++){
        str += " ";
    }
    for(let k = n; k >= i; k--){
        str += " *";
    }
    console.log(str)
}