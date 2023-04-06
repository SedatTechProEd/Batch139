const isim = prompt("Adınızı giriniz");
console.log(isim.length);

if(isim.length>2 && isim.length<50){
    alert("Hello");
}
else{
    alert("Invalid name");
}