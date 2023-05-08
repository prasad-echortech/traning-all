
//Write a Program to print the right triangle star pattern.
const n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}