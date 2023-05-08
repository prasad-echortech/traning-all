// 15. Write a Program to Print the Hollow Diamond Star Pattern.


function stars(n){
  
    let str = "";
    
    for (let i = 1; i <= n; i++) {
      
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            if (i === 1 || i === n-i) {
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
    
    //#2
    for (let i = n-1; i > 0; i--) {
      
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            if (i === 1 || i === n) {
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
    stars(5)
    
    
    
    
    
    
    
    