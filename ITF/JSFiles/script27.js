
// 1 ile x arasındaki sayılardan y ile tam bölünebilen
// kaç adet sayı olduğunu bulan program


function bolunenBul(x, y){
    let sayac = 0;
    for(let i=1; i<=x; i++){
        if(i % y === 0){
            console.log(i);
            sayac++;
        }
    }
    return sayac;
}


const x = bolunenBul(5000,21);
alert(x);