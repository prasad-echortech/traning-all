// 18. Write a Program to Print the Double Pyramid Star Pattern.

let n = 5;
for (let i = n; i >= 1; i--) {
    let str1 = " ";
    for (let j = 1; j <= i; j++) {
        str1 += "*";
    }
    console.log(str1);
}
const n1 = 5;
for (let i = 2; i <= n; i++) {
    let str = " ";
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}
