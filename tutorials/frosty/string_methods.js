var lorem = "lorem ipsum dolor sit amet.";

console.log(lorem.length);

console.log(lorem.slice(4, 10));
console.log(lorem);
console.log(lorem.substring(4, 10));
console.log(lorem);
console.log(lorem.substr(4, 10));
console.log(lorem.replace(/lorem/i, lorem.slice(5, 10)));
// /lorem/i -> insensitive
console.log(lorem.replaceAll("lorem", "x"));
console.log(lorem.toUpperCase());
console.log(lorem.concat(" _ ", "test"));

// trimStrat, trimeEnd

console.log(lorem.charAt(0));

for (var index = 0; index < lorem.length; index++) {
    console.log(lorem.charAt(index)+" "+lorem.charCodeAt(index));
}

/*
text[0] = "A"; çalışır, hata vermez ama görevini yerine getirmez.
*/

console.log(lorem.split(" "));

