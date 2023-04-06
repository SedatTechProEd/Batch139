/*100 den başlayarak sayılar sırayla toplandığında, genel toplamı 2000 i ulaştıran kaç adet sayı olduğunu bulan programı yapınız.

100+101+102+103+.... >= 2000
*/



let sayac = 100;
let toplam = 0;

while(toplam<=5000){
    toplam = toplam + sayac;
    sayac = sayac + 1;
    //console.log(sayac, toplam);
}

console.log(sayac - 100);
console.log(toplam);

