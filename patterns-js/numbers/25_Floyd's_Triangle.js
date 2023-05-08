const n = 5;
let counter = 1;
for (let i = 1; i <= n; i++) {
    let str = " ";
    for (let j = 1; j <= i; j++) {
        str += ` ${counter}`;
        counter++;
    }
    console.log(str)
}
// console.log(counter)