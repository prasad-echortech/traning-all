// 5. Write a program to print the Alphabet Half Pyramid Pattern.

let n = 5

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += ` ${String.fromCharCode(64 + i)}`;

    }
    console.log(str)
}