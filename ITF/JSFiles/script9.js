/*Yaşı girilen kişinin ehliyet alıp alamayacağını, alamayacak ise kaç yıl sonra alabileceğini gösteren programı yapınız
 */

const yas = prompt("Yaşınızı giriniz");

if(yas>=18){
    alert("Ehliyet alabilirsiniz");
}
else{
    const kalanYil = 18 - yas;
    alert("Ehliyetinizi " + kalanYil + " yıl sonra alaiblirsiniz");
}
