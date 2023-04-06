/*Girilen maaş ın miktarına göre farklı oranlarda zam yapan programı yazınız.
1000-2000: %30
2000-4000: %15
4000+ : %5
*/

const maas = prompt("Maaşınızı giriniz");

let yeniMaas;

if(maas>=1000 && maas<2000){
    yeniMaas = maas * 1.30;
    //yeniMaas = maas + maas * 30 / 100;
}
else if(maas>=2000 && maas<4000){
    yeniMaas = maas * 1.15;
}
else if(maas>=4000){
    yeniMaas = maas * 1.05;
}
else{
    yeniMaas = maas;
    console.log("Maaş yanlış girildi");
}

console.log(yeniMaas);   