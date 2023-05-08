

function RectNum(n) {

    for (let i = n; i >= 1; i--) {
        let str = " ";
        for (let space = 1; space <= i; space++) {
            str += " ";
        }
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        console.log(str)
    }
}
RectNum(5)
