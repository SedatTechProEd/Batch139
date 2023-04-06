/*Girilen 10 sayının ortalamasını bulan programı yapınız.
*/

let toplam = 0;
let i;

for(i=1; i<=4; i++){
    const sayi = Number(prompt(i + ".sayıyı giriniz"));
    toplam = toplam + sayi;
}

const ort = toplam / (i-1);

console.log(ort);


