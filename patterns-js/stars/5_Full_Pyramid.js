// 5. Write a Program to print the Full Pyramid Star pattern.

// 3. Write a Program to print mirrored right triangle star pattern.

const n = 5;

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (let k = 1; k <= i; k++) {
        str += " *";
    }
    console.log(str);
}
