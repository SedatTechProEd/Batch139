const sayilar = [234,56,234,78,94,234,67,23,7];
let toplam = 0;

for(let i=0; i<sayilar.length; i++){
    console.log(i, ":", sayilar[i]);
    toplam = toplam + sayilar[i];
}

console.log(toplam);