// 18. Write a Program to print the Solid Inverted Half Diamond Alphabet Pattern.

let n = 6;
for (let i = 1; i <= n; i++) {
    let str = "";

    for (let space = 1; space <= n - i; space++) {
        str += " ";
    }
    for (let j = i; j >= 1; j--) {
        str += `${String.fromCharCode(71 - j)}`;
    }
    console.log(str);
}

for (let i = n - 1; i >= 1; i--) {
    let str = "";
    for (let space = 1; space <= n - i; space++) {
        str += " ";
    }
    for (let j = i; j >= 1; j--) {
        str += `${String.fromCharCode(71 - j)}`;
    }
    console.log(str)
}