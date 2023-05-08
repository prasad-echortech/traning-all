// 19. Write a Program to print the Solid Inverted Half Diamond Number Pattern.
function InvertedHalfDiamond(n) {

    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let sp = 1; sp <= n - i; sp++) {
            str += " ";
        }
        for (let j = i; j >= 1; j--) {
            str += `${n - j}`;
        }
        console.log(str);
    }

    for (let i = n - 1; i >= 1; i--) {
        let str = "";
        for (let sp = 1; sp <= n - i; sp++) {
            str += " ";
        }
        for (let j = i; j >= 1; j--) {
            str += `${n - j}`;
        }
        console.log(str);
    }
}
InvertedHalfDiamond(6);