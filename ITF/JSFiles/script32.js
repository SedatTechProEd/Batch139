const sayilar = [234,56,234,78,94,234,67,23,7];
let toplam = 0;

for(let i=0; i<sayilar.length; i++){
    toplam = toplam + sayilar[i];
}

const ortalama = toplam/sayilar.length;

console.log(toplam);
console.log(ortalama);
