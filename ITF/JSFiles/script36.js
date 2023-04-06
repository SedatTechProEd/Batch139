/*Eleman sayıları eşit iki dizi içindeki karşılıklı elemanları toplayıp yeni bir diziye aktaran programı yazpınız.
*/

const sayilar1 = [234,56,2,78,94,526,67,23,7];
const sayilar2 = [23,45,7,89,97,12,123,45,567];
const sayilar3 = [];

for(let i=0; i<sayilar1.length; i++){
    sayilar3[i] = sayilar1[i] + sayilar2[i]
}

console.log(sayilar3);

