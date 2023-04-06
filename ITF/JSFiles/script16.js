
let star = "";
let row = 18;
let column = 25;

for(let i=1; i<=row; i++){ //satır
    
    for(let k=1; k<=column; k++){

        star = star + "*";
        
    }    
    star = star + "\n";
}

console.log(star);