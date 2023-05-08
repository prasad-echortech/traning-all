// 11. Write a Program to print the Full Pyramid Star Pattern.
const n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        str += "*";
    }
    console.log(str);

}
console.log()