const sayilar = [234,56,2,78,94,526,67,23,7];

let enBuyukSayi = sayilar[0];
let enKucukSayi = sayilar[0];

for(let i=0; i<sayilar.length; i++){
    if(sayilar[i] > enBuyukSayi){
        enBuyukSayi = sayilar[i];
    }

    if(sayilar[i] < enKucukSayi){
        enKucukSayi = sayilar[i];
    }
}

console.log(enBuyukSayi);
console.log(enKucukSayi);
console.log(enBuyukSayi-enKucukSayi);