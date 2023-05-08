// 24. Write a Program to Print the Hollow Half Pyramid Star Pattern.

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = " ";
    for (let j = 1; j <= i; j++) {
        if ((i === 1 || i === n) || (j === i || j === 1))
            str += "*";
        else
            str += " ";
    }
    console.log(str)
}