// 2. Write a Program to print an inverted right triangle star pattern.

const n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = n; j >= i; j--) {
        str += "*";
    }
    console.log(str)
}