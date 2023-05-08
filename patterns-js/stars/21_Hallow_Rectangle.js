// 21. Write a Program to Print the Hollow Rectangle Star Pattern.
let n = 5;
for (let i = 1; i <= n; i++) {
    let str = " ";
    for (let j = 1; j <= n; j++) {
        if ((i === 1 || i === n) || (j === 1 || j === n)) {
            str += "*";
        }else{
            str += " ";
        }
       
    }
   console.log(str);
}