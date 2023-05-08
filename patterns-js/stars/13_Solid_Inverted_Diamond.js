
// 13. Write a  Program to print the Solid Inverted Half Diamond Star Pattern.const n = 5;
let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (let k = 1; k <= i; k++) {
        str += "*";
    }
    console.log(str);
}

for (let i = n-1; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (let k = 1; k <= i; k++) {
        str += "*";
    }
    console.log(str);
}



