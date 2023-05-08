
// 15. Write a Program to print the Solid Diamond Number Pattern.
function solidDiamond() {

    let n = 5;
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let k = 1; k <= i; k++) {
            str += ` ${i}`;
        }
        console.log(str);
    }

}
solidDiamond(5)

function InvertedPyr(n) {

    for (let i = n-1; i >= 1; i--) {
        let str = "";
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let k = 1; k <= i; k++) {
            str += ` ${i}`;
        }
        console.log(str);
    }
}
InvertedPyr(5);