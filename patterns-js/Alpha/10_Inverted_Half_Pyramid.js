// 10. Write a program to print the Alphabet Inverted Half Pyramid Pattern.

let n = 6

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
        str += ` ${String.fromCharCode(70 - j)}`;
    }
    console.log(str)
}
