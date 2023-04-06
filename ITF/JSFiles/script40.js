/*
Ortalama yaşı bulan programı yazınız.
*/

var personel = [
  { adi: "Ali", dogum: 1990, maas: 4000 },
  { adi: "Veli", dogum: 1977, maas: 5000 },
  { adi: "Ayşe", dogum: 1975, maas: 5300 },
  { adi: "Hasan", dogum: 1985, maas: 4500 },
];

console.log(personel.length);
console.log(personel[2]);

const mevcutYil = new Date().getFullYear();
console.log(mevcutYil);
let toplamYas = 0;

for (let i = 0; i < personel.length; i++) {
  const yas = mevcutYil - personel[i].dogum;
  toplamYas = toplamYas + yas;
}

const ortalamaYas = toplamYas/personel.length;

console.log(ortalamaYas);
