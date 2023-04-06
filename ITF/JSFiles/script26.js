
// 7-> 1+2+3+4+5+6+7 
//     sonuc = sonuc + i

// 7-> 1/1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 + 1/7
//     sonuc = sonuc + 1/i;

// 5-> 1/1! + 1/2! + 1/3! + 1/4! + 1/5!




function toplam(sayi){
    let sonuc = 0;
    for(let i=1; i<=sayi; i++){
        sonuc = sonuc + 1/faktoriyel(i);
    }
    return sonuc;
}

function faktoriyel(sayi){
    let carpim = 1;

    /* for(let i=1; i<=sayi; i++){
        carpim = carpim * i;
    } */

    for(let i=sayi; i>0; i--){
        carpim = carpim * i;
    }
    return carpim;
}


alert(toplam(5));