
// 6. Write a Program to print the Half Pyramid Number Pattern.
function RectNum(n) {

    for (let i = 1; i <= n; i++) {
        let str = " ";
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        console.log(str)
    }
}
RectNum(5)