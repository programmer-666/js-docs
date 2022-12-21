const array = "Hello world, lorem ipsum dolor sit amet.".split(" ");

console.log(array);

/*

concat(): İki veya daha fazla array'i birleştirir ve yeni bir array oluşturur.
join(): Array elemanlarını birleştirir ve bir dize oluşturur.
pop(): Array'in son elemanını çıkartır ve bu elemanı döndürür.
push(): Array'e yeni elemanlar ekler.
reverse(): Array elemanlarını ters çevirir.
shift(): Array'in ilk elemanını çıkartır ve bu elemanı döndürür.
slice(): Array'den belirli bir bölümü alır ve yeni bir array oluşturur.
sort(): Array elemanlarını sıralar.
splice(): Array'den belirli elemanları çıkartır veya yeni elemanlar ekler.
unshift(): Array'in başına yeni elemanlar ekler.

*/

array.pop();
console.log(array);
console.log(array.push("test"));
console.log(array.length, array);

array.shift();

console.log(array);
console.log(array.shift());

console.log(array);
array.unshift("lemon"); // adds a new element to arrays begining

console.log(array);

// dizilerden eleman cikarmak icin delete kullanilabilir
// silinen elemanin yerine undefined kalir

const x = [1,2,3];
const y = [4,5,6];
const z = x.concat(y);

console.log(z);

// concat ile tek eleman eklenebilir (sona)

console.log(z.toString());

const random_array = [];
const random_array2 = [];
for (let index = 0; index < 32; index++) {
    random_array[index] = (Math.random() * 100).toFixed(2);
    random_array2[index] = (Math.random() * 100).toFixed(2);
}

random_array.forEach(e => {
    console.log(e);
});

random_array2.sort(
    function(a, b){ // first and second index
        return a - b;
    }
);

console.log(random_array2);

console.log(Math.max.apply(null, random_array2));

random_array2.forEach(forFun);

function forFun(val, i, a){
    // for function
    console.log(i, val);
    if (i == a.length - 1){
        console.log(a);
    }
}

const ra2 = random_array.map(function(val){
    return val * 2;
});

console.log(ra2);

console.log(
    ra2.filter(
        function over180(val){
            return val > 180
        }
    )
);

// reduce 
/**
 * her eleman iterasyonunda verilen fonksiyonu calistirir.
 */

const ar = [...random_array]; // diziyi kopyalamak için
let sum_ar = ar.reduce(
    function myFunction(total, val, i, a){
        console.log(val, i);
    }
);

console.log("\n", random_array.every(value => {
    return value > 18;
}));

const nums = [1,3,5,7,9];

console.log(nums.push(nums.pop())); // returns popped out...

console.log(nums);
nums.shift(); // like pop method, difference is this method removes first index
console.log(nums);
//unshift adds new value to arrrays first index

console.log(random_array.toString());
console.log(random_array.join("9 "));
// converts "," to given parameter

console.log(random_array.pop());