// 17. Write a Program to print the Solid Half Diamond Alphabet Pattern.
let n = 6;
for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
        str += `${String.fromCharCode(71 - j)}`;
    }
    console.log(str)
}
for (let i = n - 2; i >= 1; i--) {
    let str = "";

    for (let j = 1; j <= i; j++) {
        str += `${String.fromCharCode(71 - j)}`;
    }
    console.log(str)
}