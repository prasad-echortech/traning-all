// 2. Write a program to print the rectangle alphabet pattern.

let n = 5

    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= n; j++) {
            str += ` ${String.fromCharCode(64+j)}`;
        }
        console.log(str)
    }
   