// 22. Write a Program to print a butterfly shape star pattern.

let n = 5;

for (let i = 1; i <= n; i++) {
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

for (let i = n - 1; i >= 1; i--) {
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



