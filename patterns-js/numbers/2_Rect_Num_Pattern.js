// 2. Write a program to print the rectangle Number pattern.

let RectNumPattern = function (n) {

    for (let i = 1; i <= n; i++) {
        let str = " ";
        for (let j = 1; j <= n; j++) {
            str += j;
        }
        console.log(str)
    }
}
RectNumPattern(5)