/*
Boy ve kilo değerlerini alıp vücut kitle  endeksini bulup, ideal aralık dışındaki değerler için «ideal kilo değil», ideal aralıkta ise «ideal kilo» mesajı veren programı yazınız 
*/

const boy = prompt("Boyunuzu giriniz (cm)");
const kilo = prompt("Kilonuzu giriniz (kg)");

const vki = (kilo / (boy / 100)**2).toFixed(2);

if(vki>=18.5 && vki<=25){
    alert("Kilonuz ideal VKİ:" + vki)
}
else{
    alert("Kilonuz ideal değil VKİ:" + vki)
}


/* if(vki<18.5 || vki > 25){
    alert("Kilonuz ideal değil")
}
else{
    alert("Kilonuz ideal")
} */
