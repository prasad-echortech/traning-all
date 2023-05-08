// 8. Write a Program to print the Inverted Half Pyramid Number Pattern.

function RectNum(n) {

    for (let i = n; i >= 1; i--) {
        let str = " ";
        for (let space = 1; space <= n-i; space++) {
            str += " ";
        }
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        console.log(str)
    }
}
RectNum(5)