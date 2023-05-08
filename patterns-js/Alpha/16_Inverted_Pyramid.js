// 16. Write a Program to print the Full Inverted Pyramid Alphabet Pattern.  
let n = 5;
for (let i = n; i >= 1; i--) {
    let str = "";
    for (let space = 1; space <= n-i; space++) {
        str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += `${String.fromCharCode(64 + i)}`;
    }
    console.log(str)
}