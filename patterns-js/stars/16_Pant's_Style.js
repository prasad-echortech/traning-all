// 16. Write a Program to Print the Pant's style Star Pattern.

let n = 10;

for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        if (j == n) {
            break;
        } else {
            str += "*";
        }

    }
    for (let k = 1; k < 2 * (n - i); k++) {
        str += " ";
    }

    for (let k = 1; k <= i; k++) {
        str += "*";
    }
    console.log(str)
}

