/*
Bir fonksiyona bir dizi  (arr) ve bir integer (target) parametre olarak gelmektedir. Dizi içindeki iki sayının toplamı target değerine eşit olmaktadır. Bu eşitliği sağlayan iki değerin indis numarasını veren uygulamayı yapınız.
*/

function twoSum(arr, target){
    for(let i=0; i<arr.length-1; i++ ){
        for(let k=i+1; k<arr.length; k++){
            //console.log(i,k, arr[i] + arr[k]);

            if(arr[i] + arr[k] === target){
                return [i,k];
            }
        }
    }
}

console.log(twoSum([3,5,2,8,4,9],17));
console.log(twoSum([78,21,6,54,9,8,45,78,32,15,11,68],32));

/*
    (i,k)
3+5 (0,1)
3+2 (0,2)
3+8 (0,3)
3+4 (0,4)
3+9 (0,5)

5+2 (1,2)
5+8 (1,3)
5+4 (1,4)
5+9 (1,5)

2+8 (2,3)
2+4 (2,4)
2+9 (2,5)

8+4 (3,4)
8+9 (3,5)

4+9 (4,5)


*/
