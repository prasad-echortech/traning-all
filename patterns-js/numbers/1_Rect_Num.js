// 1. Write a program to print the rectangle Number pattern.
function RectNum(n) {

    for (let i = 1; i <= n; i++) {
        let str = " ";
        for (let j = 1; j <= n; j++) {
            str += i;
        }
        console.log(str)
    }
}
RectNum(5);