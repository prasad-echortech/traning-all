
// 14. Write a program to print the Alphabet Inverted Half Pyramid Pattern.
let n = 5

for (let i = n; i >= 1; i--) {
    let str = "";
    for (let space = 1; space <= n - i; space++) {
        str += " ";
    }
    for (let j = 1; j <= i; j++) {
        str += `${String.fromCharCode(64 + j)}`;
    }
    console.log(str)
}