
function plusOne(arr){
    let i = arr.length - 1; 
    let elde = 1;
    while(elde>0 && i>=0){

        if(arr[i]===9){
            arr[i] = 0;
            if(i===0){
               arr.unshift(1); 
               elde=0;
            }
        }
        else{
            arr[i] = arr[i]+elde;
            elde = 0;
        }
        i=i-1;
    }
    return arr;
}
const arr = [9,9,9,9,9,9,9];
console.log(arr);
console.log(plusOne(arr));

// [1,6,4,8] -> [1,6,4,9]
// [6,3,0,9] -> [6,3,1,0]
// [2,1,9,9] -> [2,2,0,0]