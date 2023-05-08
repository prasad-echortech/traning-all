// 21. Write a Program to Print Cross Sign (╳ ) Number Pattern.

let n = 5;
let str = "";

for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
        str += " ";
    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        if (k === 0 || k === 2 * (n - i) - 2) {
            str += i + 1;
        } else {
            str += " ";
        }
    }

    str += "\n";
}


for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    } for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1 || i === n - i) {
            str += i;
        } else {
            if (k === 0 || k === 2 * i - 2) {
                str += n + i - 1;
            } else {
                str += " ";
            }
        }

    }
    str += "\n";
}
console.log(str);