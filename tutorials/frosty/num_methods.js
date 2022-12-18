let x = 123;

x.toString();
console.log(typeof x, typeof x.toString());


let y = 3.14125;
console.log(y.toExponential(1)); // e ....
console.log(y.toFixed(1)); // round alternative
// 2 perfect for money, they said...

// usualy usage of valueof for convertin objects to primitives

let oint = Number(15);
console.log(typeof oint.valueOf());

console.log(parseFloat("15.1")); // parseint, ord number() ...

console.log(Number(Date("1970-01-01")));

// number donusumleri icin Number

console.log(Number.parseFloat("11.1")); // parseInt

console.log(Number.MAX_SAFE_INTEGER, Number.MAX_VALUE);

let nan = Number.NaN;

console.log(nan);