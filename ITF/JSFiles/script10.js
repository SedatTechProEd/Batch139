/*Kullanıcının girdiği email ve şifre bilgisinin doğru olup olmadığını kontrol edip mesaj veren programı yapını*/

// Bu bilgilerin backend tarafından geldiğini kabul ediyoruz
const eposta = "ali@gel.com";
const sifre = "12345";
//****

const kullaniciEposta = prompt("Epostanızı giriniz");
const kullaniciSifre = prompt("Şifrenizi giriniz");

if(kullaniciEposta === eposta && kullaniciSifre === sifre){
    alert("Giriş başarılı");
}
else{
    alert("Giriş bilgileri hatalı");
}






