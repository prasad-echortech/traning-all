
// 23. Write a Program to print a butterfly shape Number pattern. 
let n = 7;
let i, j; printControl = 1;
let str = " ";
for (i = 1; i <= n; i++) {

    for (j = 1; j <= n; j++) {
        if (j <= printControl || j >= n - printControl + 1) {
            str += j;
        } else {
            str += " ";
        }
    }
    if (i <= n / 2) {
        printControl++;
    } else {
        printControl--;
    }
    str += "\n"
}
console.log(str)
