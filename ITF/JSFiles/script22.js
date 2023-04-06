/*1-100 arasında rastgele tutulan sayıyı tahmin etme oyunu yazınız.*/

// Math.random() 0-1 arasında rasgele sayı üretir

// Math.random() * (max-min) + min
// Math.random() * (100-1) + 1
const rasgeleSayi = Math.floor(Math.random() * 99 + 1);
let sayi;

do{
    sayi = Number(prompt("Tahminizi giriniz"));
    if(sayi>rasgeleSayi){
        alert("Daha küçük bir sayı giriniz")
    }
    else if(sayi<rasgeleSayi){
        alert("Daha büyük bir sayı giriniz");
    }
    else{
        alert("Bingoooooo!");
    }
}
while(rasgeleSayi !== sayi)

