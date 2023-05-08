
// 20. Write a Program to Print the Hollow Diamond Number Pattern.
let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1 || i === n - i) {
            str += i;
        } else {
            if (k === 0 || k === 2 * i - 2) {
                str += i;
            }
            else {
                str += " ";
            }
        }

    }
    str += "\n"

}

for (let i = n-1; i >= 1; i--) {

    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1 || i === n - i) {
            str += i;
        } else {
            if (k === 0 || k === 2 * i - 2) {
                str += i;
            } else {
                str += " ";
            }
        }
    }
    str += "\n";
}
console.log(str);