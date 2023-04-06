let star = "";
let row = 10;

for (let i = 1; i <= row; i++) {
  //satır

  for (let k = 1; k < row + i; k++) {
    if(i+k>row){
        star = star + "* ";
    }
    else{
        star = star + "  ";
    }
  
  }
  star = star + "\n";
}

console.log(star);
