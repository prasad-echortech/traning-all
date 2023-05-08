// 7. Write a Program to print a square star pattern.

const n = 5;

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
        str += "*";
    }
    console.log(str);
}