// 19. Write a Program to print the Solid Diamond Alphabet Pattern.
let n = 6;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let space = 1; space <= n-i; space++) {
        str += " ";
    }
    for (let j = 1;j<= i; j++) {
        str += ` ${String.fromCharCode(64 + i)}`;
    }
    console.log(str)
}
for (let i = n-1; i >= 1; i--) {
    let str = "";
    for (let space = 1; space <= n-i; space++) {
        str += " ";
    }
    for (let j = 1;j<= i; j++) {
        str += ` ${String.fromCharCode(64 + i)}`;
    }
    console.log(str)
}