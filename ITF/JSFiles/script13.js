/*Sistem saatine göre «günaydın», «iyi günler», «iyi akşamlar» ve «iyi geceler» mesajı veren uygulamayı yapınız.

6 - 11: Günaydın
11 -17: İyi günler
17 -21: İyi akşamlar
21 - 6: İyi geceler

*/

const tarihSaat = new Date();
const saat = tarihSaat.getHours();

if(saat>=6 && saat<11){
    console.log("Günaydın");
}
else if(saat>=11 && saat<17){
    console.log("İyi günler");
}
else if(saat>=17 && saat<21){
    console.log("İyi akşamlar");
}
else{
    console.log("İyi geceler");
}




