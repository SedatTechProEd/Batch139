
function dizilerEsitmi(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;
}



const dizi1 = [23,12,4,87];
const dizi2 = [23,12,4,87];

if( dizilerEsitmi(dizi1, dizi2) ){
    alert("Diziler eşit")
}
else{
    alert("Diziler farklı");
}
