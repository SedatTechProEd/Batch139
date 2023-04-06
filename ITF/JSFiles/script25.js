
// 8! = 8*7*6*5*4*3*2*1

function faktoriyel(sayi){
    let carpim = 1;
    for(let i=sayi; i>0; i--){
        carpim = carpim * i;
    }
    return carpim;
}


alert(faktoriyel(10));
alert(faktoriyel(5));