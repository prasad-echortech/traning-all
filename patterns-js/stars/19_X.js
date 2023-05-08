// 19. Write a Program to Print Cross Sign (╳ ) Star Pattern.
function stars(n) {

    let str = "";

    for (let i = n; i >= 1; i--) {

        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            if (i === 1 || i === n - i) {
                str += "*";
            } else {
                if (k === 0 || k === 2 * i - 2) {
                    str += "*";
                }
                else {
                    str += " ";
                }
            }

        }
        str += "\n"

    }


    //#2
    for (let i = 2; i <= n; i++) {

        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            if (i === 1 || i === n - i) {
                str += "*";
            } else {
                if (k === 0 || k === 2 * i - 2) {
                    str += "*";
                }
                else {
                    str += " ";
                }
            }

        }
        str += "\n"

    }
    console.log(str);

}
stars(3)

