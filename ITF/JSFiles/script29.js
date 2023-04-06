const notlar = { 
    vize: "", 
    final: "", 
    ort: "" 
};

notlar.vize = Number(prompt("Vize notunuzu giriniz"));
notlar.final = Number(prompt("Final notunuzu giriniz."));
notlar.ort = (notlar.vize + notlar.final) / 2;

console.log(notlar);
console.log(typeof notlar);
