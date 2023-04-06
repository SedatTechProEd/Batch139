
function topla(a, b){
    const sonuc = a + b;
    return sonuc;
}

function ortalama(a,b,c){
    const sonuc = (a+b+c)/3;
    return sonuc;
}

let toplam =  topla(45, 67);
toplam = topla(123, toplam);
alert(toplam);

let ort = ortalama(134,56,2);
console.log(ort);