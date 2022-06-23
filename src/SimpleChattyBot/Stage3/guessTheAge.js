const input = require('prompt-sync')();

console.log("Hello! My name is ZubBot.");
console.log("I was created in 2022.");
console.log("Please, remind me your name.");

let name = input();

console.log(`What a great name you have, ${name}!`);
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

let remainder3 = Number(input());
let remainder5 = Number(input());
let remainder7 = Number(input());

let yourAge = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105

console.log(`Your age is ${yourAge}; that's a good time to start programming!`);
