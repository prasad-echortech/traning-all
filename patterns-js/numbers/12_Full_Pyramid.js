// 12. Write a Program to print the Full Pyramid Number Pattern.

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (let k =  2 * i - 1 ; k > 0; k--) {
        str += `${k}`;
    }
    console.log(str);
}