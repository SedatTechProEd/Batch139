/*Bir dizi içindeki sayıları genel ortalamasından küçük olan kaç adet sayı olduğunu bulan programı yapınız.
*/


const sayilar = [234,56,2,78,94,526,67,23,7];
let toplam = 0;

for(let i=0; i<sayilar.length; i++){
    toplam = toplam + sayilar[i];
}
const ortalama = toplam / sayilar.length;

let sayac = 0;
for(let i=0; i<sayilar.length; i++){
    if(ortalama > sayilar[i]){
        sayac++;
    }
}

console.log(ortalama, sayac);