var x = 3;
var y = x+2*x;
var z;
var f = true;

console.log(parseInt(Number(y).toString()));
// parseFloat

if (z == undefined){
    console.log(typeof z);
}

if (f){
    console.log(f);
}

var s = `${f}`;
console.log(s);

var c = (true) ? false:true;

console.log(c);

// $() bu blok icerisine js kodlari yazilabilir.
// NaN, not a number

console.log(isNaN(1/"1a"));

// Infinity de varmis ilginc

console.log((32).toString(2)); // binary...
let hxi = 0xfa;
console.log(hxi.toString(10)); // default 10

let bint = 195120123412n; // bigint

console.log(Number.isInteger(0xfaf3a1));