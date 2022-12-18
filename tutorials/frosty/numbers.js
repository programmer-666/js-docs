let r = 10;

console.log(parseFloat(r));

let f = isNaN(r);

console.log(f);

let x = 3.754352121;
console.log(x.toPrecision(3));
// 3.75

console.log(Math.round(x, 3));
// round en yakın
// ceil en yukarı
// floor en aşağı

console.log(
    Math.sqrt(
        Math.pow(2, 3.14)
    )
);

console.log(
    Math.min(1,3,5,7,9),
    Math.max(3,2,1),
    Math.abs(-12),
    Math.round(Math.random() * 100)
);

const date = new Date();

console.log(date);
console.log(date.getTime()); // timsetamps?

// var block scope disinda da kullanilabilir
{
    let x = 3;
}

const array = [1,2,3,2,1,"_"];

console.log(array);

array.push("-");

console.log(array);

const obj1 = {
    id: 0,
    name: undefined,
    price: undefined
};

console.log(obj1);
obj1.id = 3;
obj1.name = "apple";
obj1.price = 5.99;

console.log(obj1); // objects are very similar with dicts

console.log(2**2); // us alm, exponetiation

const nar = [1,1,"q","p"];

if (nar[0] === nar[1]){ // type and value
    console.log(true); 
}else{
    console.log(false);
}

let d = -100;
/*
64
32
4

01100100
*/
console.log(d<<5); //signed, <<< unsigned

/*
- string
- number
- bigint
- boolean
- undefined
- null
- symbol
- object

data types in js
*/

function toCelsius(fah){
    return (5/9)*(fah-32);
}

console.log(toCelsius(100));
console.log(toCelsius);

function createObj(id) {
    return {
        id: id // diffs!
    }
}

console.log(createObj(1));

const carx = {
    name: "ford",
    weight: 1.65,
    fuel: 0.22
}