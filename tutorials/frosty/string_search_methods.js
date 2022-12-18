let text = "lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.";

console.log(text.lastIndexOf("ipsum")); // son
console.log(text.indexOf("ipsum")); // ilk

console.log(text.search(/ipsum/)); // ilk

let res = text.match(/or/i); // with g makes array
console.log(typeof res); // wtf? obj!?!?!
console.log(res);

console.log(text.matchAll("or"));

console.log(text.includes("dolor"));

//startsWith, endsWith

const prompt = require("prompt-sync")({sigint: true});
console.log(prompt("?: ").toString());