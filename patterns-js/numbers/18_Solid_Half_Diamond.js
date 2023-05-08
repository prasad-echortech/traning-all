// 18. Write a Program to print the Solid Half Diamond Number Pattern.

let n = 6;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += `${n-j}`;
    }
    console.log(str);
}
const remover = 1;
for (let i = n-1; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += `${n-j}`;
    }
    console.log(str);
}