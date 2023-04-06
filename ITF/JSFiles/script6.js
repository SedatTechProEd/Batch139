const sayi1 = Number(prompt("1.sayıyı giriniz"));
const sayi2 = Number(prompt("2.sayıyı giriniz"));
const sayi3 = Number(prompt("3.sayıyı giriniz"));

const ort = (sayi1+sayi2+sayi3)/3;

if(ort>sayi1){
    alert("Kâr "+ort);
    
}
else{
    alert("Zarar "+ort);
}