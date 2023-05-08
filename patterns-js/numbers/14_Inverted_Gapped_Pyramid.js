

// 14. Write a Program to print the Full Inverted Pyramid Number Pattern.
function InvertedPyr(n) {

    for (let i = n; i >= 1; i--) {
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