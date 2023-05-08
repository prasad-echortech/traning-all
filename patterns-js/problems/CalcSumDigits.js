// calculating sum of digits
let dig = 123;
let rem;
let sum = 0;

if (dig > 0) {
    rem = dig % 10;
    sum += rem;
  
    dig = dig / 10;
}console.log(sum);
