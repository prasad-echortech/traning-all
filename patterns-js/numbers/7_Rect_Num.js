
// 4. Write a program to print the rectangle Number pattern.

const RectNum = (n) => {
    for (let i = 1; i <= n; i++) {
        let str = " ";
        for (let j = n; j >= i; j--) {
            str += i;
        }
        console.log(str)
    }
}
RectNum(5)