// 3. Write a program to print the rectangle Number pattern.

const RectNum = (n)=>{
    for (let i = n; i >= 1; i--) {
        let str = " ";
        for (let j = 1; j <= n; j++) {
            str += i;
        }
        console.log(str)
    }
}
RectNum(5)
