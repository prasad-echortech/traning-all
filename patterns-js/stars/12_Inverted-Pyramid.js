
// 12. Write a Program to print the Inverted Pyramid Star Pattern.
let n = 5;
for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += " "
    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        str += "*"
    }
    console.log(str);

}
